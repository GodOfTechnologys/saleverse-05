
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  stock: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(prev => prev + 1);
    } else {
      toast.warning("Maximum stock reached");
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
    toast.success(`${product.name} added to cart`);
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };
  
  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute top-2 right-2 bg-secondary/80 backdrop-blur-sm text-foreground text-xs font-medium py-1 px-2 rounded">
          {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
        </div>
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
      </div>
      
      <CardHeader className="p-4 pb-0">
        <div className="text-sm text-muted-foreground">{product.category}</div>
        <h3 className="font-semibold text-lg truncate">{product.name}</h3>
        <div className="font-bold text-lg">{formatPrice(product.price)}</div>
      </CardHeader>
      
      <CardContent className="p-4 pt-2">
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex flex-col space-y-2">
        {product.stock > 0 ? (
          <>
            <div className="flex items-center justify-between w-full">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8" 
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="mx-2 font-medium">{quantity}</span>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8" 
                onClick={increaseQuantity}
                disabled={quantity >= product.stock}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button className="w-full" onClick={handleAddToCart}>
              <PlusCircle className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
          </>
        ) : (
          <Button className="w-full" disabled>
            Out of Stock
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
