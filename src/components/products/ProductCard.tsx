import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative rounded-md overflow-hidden border product-card-hover flex flex-col min-h-[420px]">
      <Link 
        to={`/product/${product.id}`}
        className="aspect-square overflow-hidden"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      
      <div className="flex flex-col p-6 flex-grow">
        <div className="flex-grow">
          <Link 
            to={`/product/${product.id}`}
            className="block mb-2"
          >
            <h3 className="font-medium text-foreground line-clamp-1">{product.name}</h3>
          </Link>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="font-medium">${product.price.toFixed(2)}</span>
          <Button 
            onClick={() => addToCart(product)} 
            size="sm" 
            className="rounded-full flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            variant="outline"
          >
            <ShoppingCart size={14} />
            <span className="sr-only md:not-sr-only md:inline-block">Add to Cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
