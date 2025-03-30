
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/cart/CartSidebar";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  
  // Redirect if cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/products");
    }
  }, [cart, navigate]);
  
  if (cart.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md p-6">
            <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h1 className="text-2xl font-medium mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-6">
              Add some products to your cart before proceeding to checkout.
            </p>
            <Button onClick={() => navigate("/products")}>
              Continue Shopping
            </Button>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CartSidebar />
      
      <main className="flex-1 py-8">
        <div className="store-container">
          <h1 className="text-2xl font-medium mb-8">Checkout</h1>
          <CheckoutForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
