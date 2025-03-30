
import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CartItem from "./CartItem";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const CartSidebar = () => {
  const { cart, isCartOpen, closeCart, cartTotal, clearCart } = useCart();

  if (!isCartOpen) {
    return null;
  }

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={closeCart}
      />
      <div className={`fixed top-0 right-0 z-50 h-full w-full sm:w-96 bg-background shadow-xl flex flex-col animate-slide-in-right`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-medium text-lg">Shopping Cart</h2>
          <Button variant="ghost" size="icon" onClick={closeCart}>
            <X size={18} />
            <span className="sr-only">Close cart</span>
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cart.length > 0 ? (
            <div className="space-y-2">
              {cart.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-4">
              <p className="mb-4 text-lg font-medium">Your cart is empty</p>
              <p className="text-muted-foreground mb-6">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Button onClick={closeCart} as="span">
                Continue Shopping
              </Button>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t p-4 space-y-4">
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
