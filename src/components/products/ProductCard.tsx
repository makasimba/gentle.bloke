import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";

/**
 * Props interface for the ProductCard component
 * @property {Product} product - The product data to display in the card
 */
interface ProductCardProps {
  product: Product;
}

/**
 * ProductCard Component
 * 
 * Displays a product in a card format with image, name, description, price,
 * and an add to cart button. Features hover effects, discount badge for items
 * with previous prices, and a tooltip for the add to cart button.
 * 
 * @param {ProductCardProps} props - Component props
 * @returns {JSX.Element} A product card component
 */
const ProductCard = ({ product }: ProductCardProps) => {
  // Access the addToCart function from the cart context
  const { addToCart } = useCart();
  // State for controlling tooltip visibility
  const [showTooltip, setShowTooltip] = useState(false);
  // State for tracking button hover state for styling changes
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div className="group relative rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 flex flex-col min-h-[420px] bg-white">
      {/* Discount badge - only shown if product has a previous price */}
      <div className="absolute top-3 right-3 z-10">
        {product.previousPrice && (
          <span className="bg-green-300 text-white text-xs font-medium px-2 py-1">
            {Math.round((1 - product.price / product.previousPrice) * 100)}% OFF
          </span>
        )}
      </div>
      
      {/* Product image with link to product detail page */}
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
      
      {/* Product information section */}
      <div className="flex flex-col p-4 sm:p-6 flex-grow">
        <div className="flex-grow">
          {/* Product name with link to detail page */}
          <Link 
            to={`/product/${product.id}`}
            className="block mb-2"
          >
            <h3 className="font-medium text-gray-800 group-hover:text-store-primary transition-colors duration-300 line-clamp-1">{product.name}</h3>
          </Link>
          {/* Product description with line clamping for consistent card height */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 group-hover:line-clamp-3 transition-all duration-300">
            {product.description}
          </p>
        </div>
        
        {/* Price and add to cart section */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          {/* Price display with optional previous price for discount indication */}
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900 group-hover:text-store-primary transition-colors duration-300">${product.price.toFixed(2)}</span>
            {product.previousPrice && (
              <span className="text-sm text-gray-500 line-through group-hover:text-gray-400 transition-colors duration-300">
                ${product.previousPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to cart button with tooltip - hidden by default, shown on hover */}
          <div className="relative">
            <Button 
              onClick={() => addToCart(product)} 
              size="sm" 
              className={`bg-white border border-green-200 shadow-sm rounded-full w-9 h-9 p-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 hover:scale-110 hover:bg-green-50 hover:border-green-300 hover:shadow-md ${isButtonHovered ? 'text-green-800' : 'text-green-600'}`}
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
              <ShoppingBag size={18} strokeWidth={2} className="transition-transform duration-300 group-hover:rotate-12" />
            </Button>
            
            {/* Tooltip that appears when hovering over the add to cart button */}
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