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
          <div className="flex flex-col">
            <span className="font-medium">${product.price.toFixed(2)}</span>
            {product.previousPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.previousPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button 
            onClick={() => addToCart(product)} 
            size="sm" 
            className="absolute bottom-3 right-3 bg-white text-green-600 hover:bg-green-50 hover:text-green-700 border border-green-200 shadow-sm w-8 h-8 p-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-200"
            variant="ghost"
            aria-label="Add to Cart"
          >
            <ShoppingCart size={18} strokeWidth={2} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
