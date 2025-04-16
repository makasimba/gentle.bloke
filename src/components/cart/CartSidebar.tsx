import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CartItem from "./CartItem";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

// CartSidebar component - Displays a sliding cart panel with items and checkout options
const CartSidebar = () => {
  // Get cart state and functions from context
  const { cart, isCartOpen, closeCart, cartTotal, clearCart } = useCart();

  // Don't render anything if cart is closed
  if (!isCartOpen) {
    return null;
  }

  return (
    <>
      {/* Overlay background that closes cart when clicked */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={closeCart}
      />
      {/* Main cart sidebar container */}
      <div className={`fixed top-0 right-0 z-50 h-full w-full sm:w-96 bg-background shadow-xl flex flex-col animate-slide-in-right`}>
        {/* Cart header with title and close button */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-medium text-lg">Shopping Cart</h2>
          <Button variant="ghost" size="icon" onClick={closeCart}>
            <X size={18} />
            <span className="sr-only">Close cart</span>
          </Button>
        </div>

        {/* Cart items section with scrollable container */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length > 0 ? (
            // Display list of cart items if cart is not empty
            <div className="space-y-2">
              {cart.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
          ) : (
            // Display empty cart message if cart is empty
            <div className="h-full flex flex-col items-center justify-center text-center p-4">
              <p className="mb-4 text-lg font-medium">Your cart is empty</p>
              <p className="text-muted-foreground mb-6">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Button onClick={closeCart}>
                Continue Shopping
              </Button>
            </div>
          )}
        </div>

        {/* Cart summary and checkout section - only shown when cart has items */}
        {cart.length > 0 && (
          <div className="border-t p-4 space-y-4">
            {/* Price breakdown */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-medium">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link to="/checkout" onClick={closeCart}>
                  Checkout
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
