
import { useState, useEffect } from "react";
import ProductCard, { Product } from "./ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, ShoppingCart, Minus, Plus, Star, CreditCard, Smartphone } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import { toast } from "sonner";
import PaymentMethodSelector from "./PaymentMethodSelector";

// Sample mock data with real images
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Earbuds",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=600",
    category: "Electronics",
    description: "High-quality wireless earbuds with noise cancellation and long battery life.",
    stock: 15,
    isBestSeller: true
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=600",
    category: "Electronics",
    description: "Feature-rich smartwatch with health tracking, notifications, and a sleek design.",
    stock: 8,
    isBestSeller: true
  },
  {
    id: "3",
    name: "Premium Coffee Mug",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1572119865084-43c285814d63?auto=format&fit=crop&q=80&w=600",
    category: "Kitchen",
    description: "Insulated stainless steel coffee mug that keeps your beverages hot or cold for hours.",
    stock: 22,
    isBestSeller: false
  },
  {
    id: "4",
    name: "Wireless Keyboard",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=600",
    category: "Electronics",
    description: "Ergonomic wireless keyboard with customizable keys and long battery life.",
    stock: 12,
    isBestSeller: false
  },
  {
    id: "5",
    name: "Scented Candle Set",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600",
    category: "Home",
    description: "Set of three scented candles in lavender, vanilla, and sandalwood fragrances.",
    stock: 18,
    isBestSeller: false
  },
  {
    id: "6",
    name: "Leather Wallet",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600",
    category: "Accessories",
    description: "Genuine leather wallet with multiple card slots and RFID protection.",
    stock: 7,
    isBestSeller: false
  },
  {
    id: "7",
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=600",
    category: "Electronics",
    description: "Portable Bluetooth speaker with 360° sound and 20 hours of battery life.",
    stock: 9,
    isBestSeller: true
  },
  {
    id: "8",
    name: "Plant Pot Set",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=600",
    category: "Home",
    description: "Set of three ceramic plant pots in different sizes with drainage holes.",
    stock: 0,
    isBestSeller: false
  },
  // New Best Products
  {
    id: "9",
    name: "Premium Smartphone",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=600",
    category: "Electronics",
    description: "Latest model smartphone with advanced camera system and powerful processor.",
    stock: 10,
    isBestSeller: true
  },
  {
    id: "10",
    name: "Noise-Cancelling Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    category: "Electronics",
    description: "Premium over-ear headphones with active noise cancellation and 30-hour battery life.",
    stock: 6,
    isBestSeller: true
  },
  {
    id: "11",
    name: "Gaming Console",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=600",
    category: "Electronics",
    description: "Next-gen gaming console with 4K graphics, fast loading, and expanded storage.",
    stock: 3,
    isBestSeller: true
  },
  {
    id: "12",
    name: "Fitness Tracker",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=600",
    category: "Electronics",
    description: "Advanced fitness tracker with heart rate monitoring, GPS, and sleep analysis.",
    stock: 15,
    isBestSeller: true
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
  const [showingBestSellers, setShowingBestSellers] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  
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
    
    if (showingBestSellers) {
      filtered = filtered.filter(p => p.isBestSeller);
    }
    
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products, showingBestSellers]);
  
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
    if (!selectedPaymentMethod) {
      toast.warning("Please select a payment method");
      return;
    }
    
    toast.success(`Checkout successful! Paid with ${selectedPaymentMethod}. Thank you for your purchase.`);
    setCart([]);
    setIsCartOpen(false);
    setSelectedPaymentMethod(null);
  };
  
  const toggleBestSellers = () => {
    setShowingBestSellers(!showingBestSellers);
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
            <Button 
              variant={showingBestSellers ? "default" : "outline"} 
              onClick={toggleBestSellers}
              className="flex items-center gap-1"
            >
              <Star className={`h-4 w-4 ${showingBestSellers ? "text-yellow-300 fill-yellow-300" : ""}`} />
              Best Sellers
            </Button>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No products found. Try a different search term or category.</p>
            </div>
          ) : (
            <>
              {showingBestSellers && (
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-400 fill-yellow-400" />
                    Best Selling Products
                  </h2>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <FadeIn key={product.id} delay={index * 50}>
                    <ProductCard product={product} onAddToCart={handleAddToCart} />
                  </FadeIn>
                ))}
              </div>
            </>
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
                
                <div className="space-y-3">
                  <h3 className="font-medium">Select Payment Method</h3>
                  <PaymentMethodSelector 
                    selectedMethod={selectedPaymentMethod}
                    onSelectMethod={setSelectedPaymentMethod}
                  />
                </div>
                
                <Button 
                  className="w-full" 
                  onClick={handleCheckout}
                  disabled={cart.length === 0}
                >
                  {selectedPaymentMethod ? (
                    <>
                      Pay with {selectedPaymentMethod}
                      {selectedPaymentMethod === "Credit Card" && <CreditCard className="ml-2 h-4 w-4" />}
                      {["GPay", "PhonePe", "Paytm"].includes(selectedPaymentMethod || "") && <Smartphone className="ml-2 h-4 w-4" />}
                    </>
                  ) : (
                    "Checkout"
                  )}
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
