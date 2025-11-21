import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import api from '@/lib/axios';
import Navbar from '@/components/Navbar';
import { Heart, Star, MessageCircle, ShoppingCart, Loader2 } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  rating: number;
  isLiked: boolean;
  sellerId: string;
  sellerName: string;
}

interface Comment {
  id: string;
  text: string;
  userName: string;
  createdAt: string;
}

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [product, setProduct] = useState<Product | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [userRating, setUserRating] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isCommenting, setIsCommenting] = useState(false);

  useEffect(() => {
    fetchProduct();
    fetchComments();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
      toast({
        title: 'Error',
        description: 'Could not load product',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await api.get(`/products/${id}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleLike = async () => {
    try {
      await api.post(`/products/${id}/like`);
      setProduct((prev) => prev ? { ...prev, isLiked: !prev.isLiked } : null);
    } catch (error) {
      console.error('Error liking product:', error);
    }
  };

  const handleRate = async (rating: number) => {
    try {
      await api.post(`/products/${id}/rate`, { rating });
      setUserRating(rating);
      toast({
        title: 'Rating submitted',
        description: 'Thank you for your feedback!',
      });
      fetchProduct();
    } catch (error) {
      console.error('Error rating product:', error);
    }
  };

  const handleComment = async () => {
    if (!newComment.trim()) return;
    
    setIsCommenting(true);
    try {
      const response = await api.post(`/products/${id}/comments`, { text: newComment });
      setComments([response.data, ...comments]);
      setNewComment('');
      toast({
        title: 'Comment added',
        description: 'Your comment has been posted.',
      });
    } catch (error) {
      console.error('Error posting comment:', error);
      toast({
        title: 'Error',
        description: 'Could not post comment',
        variant: 'destructive',
      });
    } finally {
      setIsCommenting(false);
    }
  };

  const handleBuyNow = async () => {
    try {
      await api.post('/orders', { productId: id, quantity: 1 });
      toast({
        title: 'Order placed!',
        description: 'Your order has been successfully created.',
      });
    } catch (error) {
      console.error('Error placing order:', error);
      toast({
        title: 'Order failed',
        description: 'Could not place order. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleMessageSeller = () => {
    navigate(`/chat/${product?.sellerId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-8 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="aspect-square rounded-lg overflow-hidden bg-muted">
            <img
              src={product.imageUrl || '/placeholder.svg'}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground text-lg">{product.description}</p>
            </div>

            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 cursor-pointer transition-colors ${
                    i < Math.floor(product.rating)
                      ? 'fill-secondary text-secondary'
                      : 'text-muted'
                  }`}
                  onClick={() => handleRate(i + 1)}
                />
              ))}
              <span className="text-lg ml-2">({product.rating.toFixed(1)})</span>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</p>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLike}
                className="hover:bg-transparent"
              >
                <Heart
                  className={`h-6 w-6 ${
                    product.isLiked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'
                  }`}
                />
              </Button>
            </div>

            <p className="text-muted-foreground">
              {product.stock > 0 ? `${product.stock} items available` : 'Out of stock'}
            </p>

            <div className="flex gap-4">
              <Button
                className="flex-1 gradient-hero"
                onClick={handleBuyNow}
                disabled={product.stock === 0}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Buy Now
              </Button>
              {user?.role === 'buyer' && (
                <Button variant="outline" onClick={handleMessageSeller}>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Message Seller
                </Button>
              )}
            </div>

            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">Sold by</p>
                <p className="font-semibold">{product.sellerName}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Comments Section */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Comments</h2>
          
          <Card className="mb-6">
            <CardContent className="p-4">
              <Textarea
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows={3}
                className="mb-4"
              />
              <Button onClick={handleComment} disabled={isCommenting || !newComment.trim()}>
                {isCommenting ? 'Posting...' : 'Post Comment'}
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {comments.map((comment) => (
              <Card key={comment.id}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {comment.userName.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold">{comment.userName}</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </p>
                      <p>{comment.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
