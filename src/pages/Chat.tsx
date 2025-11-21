import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import { Send } from 'lucide-react';
import { io, Socket } from 'socket.io-client';

interface Message {
  id: string;
  text: string;
  senderId: string;
  receiverId: string;
  createdAt: string;
}

const Chat = () => {
  const { sellerId } = useParams();
  const { user } = useAuth();
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [otherUserName, setOtherUserName] = useState('');
  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token || !user) return;

    // Connect to Socket.IO server
    const socket = io('http://localhost:3000/chat', {
      auth: { token },
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      setIsConnected(true);
      console.log('Connected to chat server');
      
      // Join chat room
      socket.emit('joinRoom', { otherUserId: sellerId });
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
      console.log('Disconnected from chat server');
    });

    socket.on('previousMessages', (msgs: Message[]) => {
      setMessages(msgs);
    });

    socket.on('newMessage', (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });

    socket.on('error', (error: any) => {
      toast({
        title: 'Chat error',
        description: error.message,
        variant: 'destructive',
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [sellerId, user]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !socketRef.current) return;

    socketRef.current.emit('sendMessage', {
      receiverId: sellerId,
      text: newMessage,
    });

    setNewMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 max-w-4xl">
        <Card className="h-[calc(100vh-12rem)] flex flex-col">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    S
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg">Seller Chat</p>
                  <p className="text-sm font-normal text-muted-foreground">
                    {isConnected ? (
                      <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-success animate-pulse"></span>
                        Online
                      </span>
                    ) : (
                      'Connecting...'
                    )}
                  </p>
                </div>
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => {
              const isSent = message.senderId === user?.id;
              return (
                <div
                  key={message.id}
                  className={`flex ${isSent ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      isSent
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <p className="break-words">{message.text}</p>
                    <p className={`text-xs mt-1 ${isSent ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                      {new Date(message.createdAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </CardContent>

          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={!isConnected}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!newMessage.trim() || !isConnected}
                className="gradient-hero"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chat;
