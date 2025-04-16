import React, { useState, useEffect } from "react";
import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { 
  Minus, 
  Plus, 
  ShoppingBag,
  Truck,
  RotateCcw,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Check
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

// Props interface for the ProductDetail component
interface ProductDetailProps {
  product: Product;
}

// ProductDetail component displays detailed information about a single product
const ProductDetail = ({ product }: ProductDetailProps) => {
  // State for quantity selection, image carousel, and loading state
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  // Scroll to top of page when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Quantity adjustment handlers
  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => (prev < product.inventory ? prev + 1 : prev));
  };

  // Cart interaction handler
  const handleAddToCart = () => {
    setIsAddingToCart(true);
    
    // Simulate a brief loading state for better UX
    setTimeout(() => {
      addToCart(product, quantity);
      setIsAddingToCart(false);
      setAddedToCart(true);
      
      // Reset the added state after 2 seconds
      setTimeout(() => {
        setAddedToCart(false);
      }, 2000);
    }, 500);
  };

  // Image carousel navigation handlers
  const handlePreviousImage = () => {
    setCurrentImage((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
    setIsImageLoading(true);
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
    setIsImageLoading(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
      {/* Product image gallery section */}
      <div className="space-y-4">
        {/* Main product image with navigation controls */}
        <div className="relative aspect-square overflow-hidden rounded-lg border bg-gray-100">
          <img
            src={product.images[currentImage]}
            alt={`${product.name} - Image ${currentImage + 1}`}
            className={`h-full w-full object-cover transition-opacity duration-300 ${
              isImageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setIsImageLoading(false)}
          />
          
          {/* Image navigation buttons (only shown when multiple images exist) */}
          {product.images.length > 1 && (
            <>
              <button
                onClick={handlePreviousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-store-accent"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-store-accent"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
        
        {/* Thumbnail gallery for multiple product images */}
        {product.images.length > 1 && (
          <div className="flex gap-2 overflow-auto p-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`relative flex-shrink-0 aspect-square w-20 overflow-hidden rounded-md border transition-all duration-200 ${
                  index === currentImage 
                    ? "ring-2 ring-store-accent" 
                    : "hover:ring-2 hover:ring-store-accent/50"
                }`}
                onClick={() => {
                  setCurrentImage(index);
                  setIsImageLoading(true);
                }}
              >
                <img
                  src={image}
                  alt={`${product.name} - Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product information section */}
      <div className="space-y-6">
        {/* Product name and price */}
        <div>
          <h1 className="text-2xl font-medium md:text-3xl">{product.name}</h1>
          <p className="mt-1 text-xl font-medium">${product.price.toFixed(2)}</p>
        </div>

        {/* Product inventory status and description */}
        <div className="space-y-1">
          <p className="hidden text-sm text-muted-foreground">
            {product.inventory > 0 
              ? `In stock (${product.inventory} available)` 
              : "Out of stock"}
          </p>
          <p className="text-base">{product.description}</p>
        </div>

        {/* Quantity selector and add to cart button */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={handleDecreaseQuantity}
              disabled={quantity === 1}
              className="h-10 w-10"
            >
              <Minus size={16} />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={handleIncreaseQuantity}
              disabled={quantity >= product.inventory}
              className="h-10 w-10"
            >
              <Plus size={16} />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>

          <Button
            onClick={handleAddToCart}
            className={cn(
              "w-full h-12 text-base font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2",
              addedToCart
                ? "bg-green-600 hover:bg-green-700 focus:ring-green-500"
                : "bg-store-accent hover:bg-store-accent/90 focus:ring-store-accent"
            )}
            disabled={product.inventory === 0 || isAddingToCart}
          >
            {isAddingToCart ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Adding...
              </span>
            ) : addedToCart ? (
              <span className="flex items-center justify-center">
                <Check className="mr-2 h-5 w-5" />
                Added to Cart
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </span>
            )}
          </Button>
        </div>

        {/* Product policies and features */}
        <div className="rounded-md bg-muted p-4 space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Truck size={16} className="text-muted-foreground" />
            <span>Free delivery on qualifying large orders</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <RotateCcw size={16} className="text-muted-foreground" />
            <span>Hassle free returns within 30 days</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle size={16} className="text-muted-foreground" />
            <span>Engineered with rugged materials for everyday farm use</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
