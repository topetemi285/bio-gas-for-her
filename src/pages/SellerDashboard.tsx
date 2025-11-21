import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import api from '@/lib/axios';
import Navbar from '@/components/Navbar';
import { Plus, Edit, Trash2, Upload } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
}

const SellerDashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    fetchMyProducts();
  }, []);

  const fetchMyProducts = async () => {
    try {
      const response = await api.get('/products/my-products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      data.append('price', formData.price);
      data.append('stock', formData.stock);
      if (imageFile) {
        data.append('image', imageFile);
      }

      if (editingProduct) {
        await api.patch(`/products/${editingProduct.id}`, data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast({ title: 'Product updated', description: 'Your product has been updated successfully.' });
      } else {
        await api.post('/products', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast({ title: 'Product created', description: 'Your product has been created successfully.' });
      }

      setIsDialogOpen(false);
      resetForm();
      fetchMyProducts();
    } catch (error) {
      console.error('Error saving product:', error);
      toast({
        title: 'Error',
        description: 'Could not save product',
        variant: 'destructive',
      });
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      stock: product.stock.toString(),
    });
    setImagePreview(product.imageUrl);
    setIsDialogOpen(true);
  };

  const handleDelete = async (productId: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      await api.delete(`/products/${productId}`);
      toast({ title: 'Product deleted', description: 'Product has been removed.' });
      fetchMyProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      toast({
        title: 'Error',
        description: 'Could not delete product',
        variant: 'destructive',
      });
    }
  };

  const resetForm = () => {
    setFormData({ name: '', description: '', price: '', stock: '' });
    setImageFile(null);
    setImagePreview('');
    setEditingProduct(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Seller Dashboard</h1>
            <p className="text-muted-foreground">Manage your products</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={(open) => {
            setIsDialogOpen(open);
            if (!open) resetForm();
          }}>
            <DialogTrigger asChild>
              <Button className="gradient-hero">
                <Plus className="h-5 w-5 mr-2" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingProduct ? 'Edit Product' : 'Create New Product'}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="image">Product Image</Label>
                  <div className="flex items-center gap-4">
                    {imagePreview && (
                      <img src={imagePreview} alt="Preview" className="h-24 w-24 object-cover rounded" />
                    )}
                    <Label htmlFor="image" className="cursor-pointer">
                      <div className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-accent">
                        <Upload className="h-4 w-4" />
                        <span>Upload Image</span>
                      </div>
                    </Label>
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    rows={4}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price ($)</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stock">Stock</Label>
                    <Input
                      id="stock"
                      type="number"
                      value={formData.stock}
                      onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full gradient-hero">
                  {editingProduct ? 'Update Product' : 'Create Product'}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="aspect-square bg-muted">
                <img
                  src={product.imageUrl || '/placeholder.svg'}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-1">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground">{product.stock} in stock</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => handleEdit(product)}>
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(product.id)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {products.length === 0 && !isLoading && (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-muted-foreground mb-4">You haven't created any products yet</p>
              <Button onClick={() => setIsDialogOpen(true)} className="gradient-hero">
                <Plus className="h-5 w-5 mr-2" />
                Create Your First Product
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SellerDashboard;
