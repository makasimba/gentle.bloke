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

  const handleMouseLeave = useCallback(() => {
    if (!api) return;
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
            <CarouselContent onMouseLeave={handleMouseLeave}>
              {/* First Slide */}
              <CarouselItem>
                <div className="relative h-[70vh] bg-store-secondary">
                  <div className="absolute inset-0">
                    <img
                      src="/images/carousel__header__III.jpeg"
                      alt="Cartoon of three folks with a farm in the background"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative h-full">
                    <div className="pl-10 h-full flex items-center">
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
                </div>
              </CarouselItem>
              
              {/* Second Slide */}
              <CarouselItem>
                <div className="relative h-[70vh] bg-store-secondary">
                  <div className="absolute inset-0">
                    <img
                      src="/images/carousel__header__II.jpeg"
                      alt="Farm equipment in a field"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative h-full">
                    <div className="pr-10 h-full flex items-center">
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
                </div>
              </CarouselItem>
              
              {/* Third Slide */}
              <CarouselItem>
                <div className="relative h-[70vh] bg-store-secondary">
                  <div className="absolute inset-0">
                    <img
                      src="/images/carousel__header__I.jpeg"
                      alt="Sustainable farming practices"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative h-full">
                    <div className="pl-10 h-full flex items-center">
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
                  src="public/images/philosophy__image.jpeg"
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
