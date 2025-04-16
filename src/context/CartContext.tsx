import React, { createContext, useContext, useState, ReactNode } from "react";
import { CartItem, Product } from "@/lib/data";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface CartContextProps {
  cart: CartItem[];
  isCartOpen: boolean;
  cartTotal: number;
  itemCount: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Calculate cart total
  const cartTotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  // Calculate total items in cart
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Add product to cart
  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id
      );

      // Check if adding more would exceed inventory
      const currentQuantity = existingItem ? existingItem.quantity : 0;
      if (currentQuantity + quantity > product.inventory) {
        toast({
          title: "Inventory limit",
          description: `Sorry, only ${product.inventory} items available.`,
          variant: "destructive",
        });
        
        // If item exists, set to max inventory, otherwise add with max available
        if (existingItem) {
          return prevCart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: product.inventory }
              : item
          );
        } else {
          return [...prevCart, { product, quantity: product.inventory }];
        }
      }

      // Normal add to cart logic
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { product, quantity }];
      }
    });
    
    toast({
      title: "Added to cart",
      description: `${quantity} ${product.name} added to your cart.`,
      variant: "success",
      action: (
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-white/20 text-white hover:bg-white/30 border-white/30 h-8 px-3"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart className="mr-1.5 h-3.5 w-3.5" />
          View Cart
        </Button>
      ),
    });
    
    setIsCartOpen(true);
  };

  // Remove product from cart
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => 
      prevCart.filter((item) => item.product.id !== productId)
    );
    
    toast({
      title: "Removed from cart",
      description: "Item removed from your cart.",
    });
  };

  // Update quantity of a product
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) => {
      const item = prevCart.find((item) => item.product.id === productId);
      
      // Check inventory limits
      if (item && quantity > item.product.inventory) {
        toast({
          title: "Inventory limit",
          description: `Sorry, only ${item.product.inventory} items available.`,
          variant: "destructive",
        });
        return prevCart.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.product.inventory }
            : item
        );
      }
      
      return prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      );
    });
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  // Toggle cart sidebar
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };
  
  // Close cart sidebar
  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        cartTotal,
        itemCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
