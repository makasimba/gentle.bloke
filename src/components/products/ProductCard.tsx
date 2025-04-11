import React, { useState } from "react";
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
  const [showTooltip, setShowTooltip] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div className="group relative rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 flex flex-col min-h-[420px] bg-white">
      <div className="absolute top-3 right-3 z-10">
        {product.previousPrice && (
          <span className="bg-green-300 text-white text-xs font-medium px-2 py-1">
            {Math.round((1 - product.price / product.previousPrice) * 100)}% OFF
          </span>
        )}
      </div>
      
      <Link 
        to={`/product/${product.id}`}
        className="aspect-square overflow-hidden bg-gray-50"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      
      <div className="flex flex-col p-4 sm:p-6 flex-grow">
        <div className="flex-grow">
          <Link 
            to={`/product/${product.id}`}
            className="block mb-2"
          >
            <h3 className="font-medium text-gray-800 hover:text-green-700 transition-colors line-clamp-1">{product.name}</h3>
          </Link>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 group-hover:line-clamp-3 transition-all duration-300">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900">${product.price.toFixed(2)}</span>
            {product.previousPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.previousPrice.toFixed(2)}
              </span>
            )}
          </div>

          <div className="relative hidden">
            <Button 
              onClick={() => addToCart(product)} 
              size="sm" 
              className={`bg-white border border-green-200 shadow-sm rounded-full w-9 h-9 p-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 ${isButtonHovered ? 'text-green-800 hover:bg-green-50' : 'text-green-600 hover:bg-green-50 hover:text-green-700'}`}
              variant="ghost"
              aria-label="Add to Cart"
              onMouseEnter={() => {
                setShowTooltip(true);
                setIsButtonHovered(true);
              }}
              onMouseLeave={() => {
                setShowTooltip(false);
                setIsButtonHovered(false);
              }}
            >
              <ShoppingCart size={18} strokeWidth={2} />
            </Button>
            
            {/* Tooltip */}
            {showTooltip && (
              <div className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded shadow-lg whitespace-nowrap pointer-events-none z-20 transform translate-y-0 opacity-100 transition-all duration-200">
                Add to cart
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;