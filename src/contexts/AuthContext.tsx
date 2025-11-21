import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '@/lib/axios';
import { useToast } from '@/hooks/use-toast';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'buyer' | 'seller';
  avatar?: string;
  phone?: string;
  bio?: string;
  businessName?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    const storedUser = sessionStorage.getItem('user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const { access_token, user: userData } = response.data;
      
      sessionStorage.setItem('token', access_token);
      sessionStorage.setItem('user', JSON.stringify(userData));
      setToken(access_token);
      setUser(userData);
      
      toast({
        title: 'Welcome back!',
        description: 'You have successfully logged in.',
      });
    } catch (error: any) {
      toast({
        title: 'Login failed',
        description: error.response?.data?.message || 'Invalid credentials',
        variant: 'destructive',
      });
      throw error;
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      const response = await api.post('/auth/register', { email, password, name });
      const { access_token, user: userData } = response.data;
      
      sessionStorage.setItem('token', access_token);
      sessionStorage.setItem('user', JSON.stringify(userData));
      setToken(access_token);
      setUser(userData);
      
      toast({
        title: 'Account created!',
        description: 'Welcome to the marketplace.',
      });
    } catch (error: any) {
      toast({
        title: 'Registration failed',
        description: error.response?.data?.message || 'Could not create account',
        variant: 'destructive',
      });
      throw error;
    }
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    setToken(null);
    setUser(null);
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out.',
    });
  };

  const updateUser = (userData: Partial<User>) => {
    const updatedUser = { ...user, ...userData } as User;
    setUser(updatedUser);
    sessionStorage.setItem('user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, updateUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
