import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import api from '@/lib/axios';
import Navbar from '@/components/Navbar';
import { Heart, Star } from 'lucide-react';

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
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: 'Error',
        description: 'Could not load products',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLike = async (productId: string) => {
    try {
      await api.post(`/products/${productId}/like`);
      setProducts((prev) =>
        prev.map((p) =>
          p.id === productId ? { ...p, isLiked: !p.isLiked } : p
        )
      );
    } catch (error) {
      console.error('Error liking product:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="aspect-square bg-muted"></div>
                <CardContent className="p-4">
                  <div className="h-4 bg-muted rounded mb-2"></div>
                  <div className="h-3 bg-muted rounded w-2/3"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Products</h1>
          <p className="text-muted-foreground">Discover amazing items from our sellers</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <Link to={`/products/${product.id}`}>
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.imageUrl || '/placeholder.svg'}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <CardContent className="p-4">
                <Link to={`/products/${product.id}`}>
                  <h3 className="font-semibold text-lg mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-2">
                  {product.description}
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-secondary text-secondary'
                          : 'text-muted'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">
                    ({product.rating.toFixed(1)})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </p>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleLike(product.id)}
                    className="hover:bg-transparent"
                  >
                    <Heart
                      className={`h-5 w-5 transition-colors ${
                        product.isLiked
                          ? 'fill-red-500 text-red-500'
                          : 'text-muted-foreground'
                      }`}
                    />
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">
                  {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
