import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import ProductGrid from "@/components/products/ProductGrid";
import { getFeaturedProducts, getCategories } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/cart/CartSidebar";
import Autoplay from 'embla-carousel-autoplay';
import type { EmblaCarouselType } from 'embla-carousel';
import { useScrollRestoration } from "@/hooks/useScrollRestoration";

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const categories = getCategories();
  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  const [autoplayPlugin] = useState(() => 
    Autoplay({ 
      delay: 5000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
      playOnInit: true
    })
  );

  // Use scroll restoration for the main page
  useScrollRestoration(() => true);

  useEffect(() => {
    if (!api) return;
    
    // Ensure autoplay starts
    api.reInit();
  }, [api]);

  const handleMouseLeave = useCallback(() => {
    if (!api) return;
    api.reInit();
  }, [api]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CartSidebar />
      
      <main className="flex-1">
        {/* Featured Products */}
        <section className="py-16">
          <div className="store-container">
            <ProductGrid products={featuredProducts} title="Featured Products" />
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 hidden">
          <div className="store-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-medium mb-4">Our Philosophy</h2>
                <p className="text-muted-foreground mb-6">
                  At our core, we believe every farm deserves reliable, enduring equipment. 
                  Our machines, tools, and supplies are designed specifically for small to
                  medium scale farms, engineered for performance season after season. 
                  Partnering with sustainably minded suppliers, we deliver purpose-built 
                  solutions that enhance your productivity while caring for the land. With 
                  a focus on robust design and timeless functionality, our equipment 
                  empowers you to cultivate success today and for years to come.
                </p>
                <p className="text-muted-foreground mb-6">
                  We focus on equipment that works as hard as you do—built for everyday use,
                  designed to endure, and crafted with practical functionality that fits 
                  seamlessly into your farming routine. No frills, just tools you can count on, 
                  season after season.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/products">Explore Our Collection</Link>
                </Button>
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/philosophy__image.webp"
                  alt="Farm Machinery"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
