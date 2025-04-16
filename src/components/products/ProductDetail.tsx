import React, { useState, useEffect } from "react";
import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { 
  Minus, 
  Plus, 
  ShoppingCart,
  Truck,
  RotateCcw,
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useCart } from "@/context/CartContext";

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
    addToCart(product, quantity);
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
            >
              <Minus size={16} />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <span className="w-12 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={handleIncreaseQuantity}
              disabled={quantity >= product.inventory}
            >
              <Plus size={16} />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full"
            disabled={product.inventory === 0}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
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
