
import { useState, useEffect } from "react";
import ProductCard, { Product } from "./ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, ShoppingCart } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import { useToast } from "sonner";

// Sample mock data
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Earbuds",
    price: 129.99,
    image: "https://placehold.co/600x400/f0f9ff/0284c7?text=Earbuds",
    category: "Electronics",
    description: "High-quality wireless earbuds with noise cancellation and long battery life.",
    stock: 15
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 249.99,
    image: "https://placehold.co/600x400/f0f4ff/1e40af?text=Watch",
    category: "Electronics",
    description: "Feature-rich smartwatch with health tracking, notifications, and a sleek design.",
    stock: 8
  },
  {
    id: "3",
    name: "Premium Coffee Mug",
    price: 24.99,
    image: "https://placehold.co/600x400/fffbeb/b45309?text=Coffee+Mug",
    category: "Kitchen",
    description: "Insulated stainless steel coffee mug that keeps your beverages hot or cold for hours.",
    stock: 22
  },
  {
    id: "4",
    name: "Wireless Keyboard",
    price: 89.99,
    image: "https://placehold.co/600x400/f0fdf4/16a34a?text=Keyboard",
    category: "Electronics",
    description: "Ergonomic wireless keyboard with customizable keys and long battery life.",
    stock: 12
  },
  {
    id: "5",
    name: "Scented Candle Set",
    price: 34.99,
    image: "https://placehold.co/600x400/fdf2f8/be185d?text=Candles",
    category: "Home",
    description: "Set of three scented candles in lavender, vanilla, and sandalwood fragrances.",
    stock: 18
  },
  {
    id: "6",
    name: "Leather Wallet",
    price: 59.99,
    image: "https://placehold.co/600x400/f8fafc/475569?text=Wallet",
    category: "Accessories",
    description: "Genuine leather wallet with multiple card slots and RFID protection.",
    stock: 7
  },
  {
    id: "7",
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "https://placehold.co/600x400/ecfdf5/0f766e?text=Speaker",
    category: "Electronics",
    description: "Portable Bluetooth speaker with 360° sound and 20 hours of battery life.",
    stock: 9
  },
  {
    id: "8",
    name: "Plant Pot Set",
    price: 42.99,
    image: "https://placehold.co/600x400/f0fdfa/0d9488?text=Plant+Pots",
    category: "Home",
    description: "Set of three ceramic plant pots in different sizes with drainage holes.",
    stock: 0
  }
];

interface CartItem {
  product: Product;
  quantity: number;
}

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toast = useToast();
  
  // Extract unique categories from products
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  
  // Filter products based on search term and selected category
  useEffect(() => {
    let filtered = products;
    
    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory && selectedCategory !== "All") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products]);
  
  const handleAddToCart = (product: Product, quantity: number) => {
    const existingItem = cart.find(item => item.product.id === product.id);
    
    if (existingItem) {
      // Update existing item quantity
      setCart(cart.map(item => 
        item.product.id === product.id 
          ? { ...item, quantity: item.quantity + quantity } 
          : item
      ));
    } else {
      // Add new item to cart
      setCart([...cart, { product, quantity }]);
    }
  };
  
  const handleRemoveFromCart = (productId: string) => {
    setCart(cart.filter(item => item.product.id !== productId));
  };
  
  const updateCartItemQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    
    const product = products.find(p => p.id === productId);
    if (product && newQuantity > product.stock) {
      toast.warning("Cannot exceed available stock");
      return;
    }
    
    setCart(cart.map(item => 
      item.product.id === productId 
        ? { ...item, quantity: newQuantity } 
        : item
    ));
  };
  
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };
  
  const handleCheckout = () => {
    toast.success("Checkout successful! Thank you for your purchase.");
    setCart([]);
    setIsCartOpen(false);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <div className="w-full md:w-2/3">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative flex items-center w-full sm:w-auto">
              <Filter className="absolute left-3 text-muted-foreground h-4 w-4" />
              <select
                className="py-2 pl-10 pr-4 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary w-full"
                value={selectedCategory || "All"}
                onChange={(e) => setSelectedCategory(e.target.value === "All" ? null : e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No products found. Try a different search term or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <FadeIn key={product.id} delay={index * 50}>
                  <ProductCard product={product} onAddToCart={handleAddToCart} />
                </FadeIn>
              ))}
            </div>
          )}
        </div>
        
        <div className={`glass-card p-4 w-full md:w-1/3 sticky top-24 transition-all duration-300 ${isCartOpen ? 'max-h-[80vh] overflow-auto' : 'max-h-16 overflow-hidden'}`}>
          <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => setIsCartOpen(!isCartOpen)}>
            <div className="flex items-center">
              <ShoppingCart className="mr-2 h-5 w-5" />
              <h2 className="text-xl font-semibold">Your Cart ({cart.length})</h2>
            </div>
            <Button variant="ghost" size="sm" onClick={(e) => {
              e.stopPropagation();
              setIsCartOpen(!isCartOpen);
            }}>
              {isCartOpen ? 'Hide' : 'Show'}
            </Button>
          </div>
          
          {cart.length === 0 ? (
            <p className="text-muted-foreground text-center py-4">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-4 mb-4">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex items-start justify-between border-b border-border pb-4">
                    <div className="flex items-start space-x-3">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-medium">{item.product.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {formatPrice(item.product.price)} × {item.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <div className="font-semibold">
                        {formatPrice(item.product.price * item.quantity)}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateCartItemQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-6 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateCartItemQuantity(item.product.id, item.quantity + 1)}
                          disabled={item.quantity >= item.product.stock}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border pt-4 space-y-4">
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>{formatPrice(calculateTotal())}</span>
                </div>
                <Button className="w-full" onClick={handleCheckout}>
                  Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
