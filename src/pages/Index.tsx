import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import ProductGrid from "@/components/products/ProductGrid";
import { getFeaturedProducts, getCategories } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Autoplay from 'embla-carousel-autoplay';
import type { EmblaCarouselType } from 'embla-carousel';

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

  useEffect(() => {
    if (!api) return;
    
    // Ensure autoplay starts
    api.reInit();
  }, [api]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <Carousel 
            className="h-[70vh]"
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
              skipSnaps: false,
              dragFree: false,
            }}
            plugins={[autoplayPlugin]}
          >
            <CarouselContent>
              {/* First Slide */}
              <CarouselItem>
                <div className="relative h-full bg-store-secondary overflow-hidden">
                  <img
                    src="/images/header3.jpeg"
                    alt="Cartoon of three folks with a farm in the background"
                    className="w-full h-full object-cover"
                  />
                  <div className="pl-10 absolute inset-0 flex items-center">
                    <div className="store-container">
                      <div className="max-w-md p-6 bg-background/90 backdrop-blur-sm rounded-lg">
                        <h1 className="text-4xl font-medium tracking-tight mb-3">
                          Peak Productivity
                        </h1>
                        <p className="text-lg mb-6">
                          Curated products for a more productive farm.
                        </p>
                        <Button asChild size="lg">
                          <Link to="/products">Shop Now</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              {/* Second Slide */}
              <CarouselItem>
                <div className="relative h-full bg-store-secondary overflow-hidden">
                  <img
                    src="/images/header2.jpeg"
                    alt="Farm equipment in a field"
                    className="w-full h-full object-cover"
                  />
                  <div className="pr-10 absolute inset-0 flex items-center">
                    <div className="store-container">
                      <div className="max-w-md p-6 bg-background/90 backdrop-blur-sm rounded-lg ml-auto">
                        <h1 className="text-4xl font-medium tracking-tight mb-3">
                          Quality equipment
                        </h1>
                        <p className="text-lg mb-6">
                          Durable tools built to last for generations.
                        </p>
                        <Button asChild size="lg">
                          <Link to="/products/tools">View Tools</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              {/* Third Slide */}
              <CarouselItem>
                <div className="relative h-full bg-store-secondary overflow-hidden">
                  <img
                    src="/images/header1.jpeg"
                    alt="Sustainable farming practices"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute pl-10 inset-0 flex items-center">
                    <div className="store-container">
                      <div className="max-w-md p-6 bg-background/90 backdrop-blur-sm rounded-lg">
                        <h1 className="text-4xl font-medium tracking-tight mb-3">
                          Sustainable solutions
                        </h1>
                        <p className="text-lg mb-6">
                          Eco-friendly products for the modern farmer.
                        </p>
                        <Button asChild size="lg">
                          <Link to="/products/eco">Explore</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            
            <div className="absolute z-10 bottom-4 left-0 right-0 flex justify-center gap-2">
              <CarouselPrevious className="relative -left-0 translate-y-0 mx-1" />
              <CarouselNext className="relative -right-0 translate-y-0 mx-1" />
            </div>
          </Carousel>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="store-container">
            <ProductGrid products={featuredProducts} title="Featured Products" />
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="store-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-medium mb-4">Our Philosophy</h2>
                <p className="text-muted-foreground mb-6">
                  We believe in quality over quantity. Each product in our store is thoughtfully designed and crafted to bring lasting value to your everyday life. We prioritize sustainable materials and ethical manufacturing processes to minimize our environmental impact.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our curation focuses on timeless aesthetics that won't go out of style, functionality that enhances your daily routines, and durability that ensures these items will serve you for years to come.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/products">Explore Our Collection</Link>
                </Button>
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Minimalist workspace"
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
