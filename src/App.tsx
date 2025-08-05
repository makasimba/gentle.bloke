
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";

import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Sustainability from "./pages/Sustainability";
import Press from "./pages/Press";
import HelpCenter from "./pages/HelpCenter";
import ShippingReturns from "./pages/ShippingReturns";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/press" element={<Press />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/shipping-returns" element={<ShippingReturns />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
