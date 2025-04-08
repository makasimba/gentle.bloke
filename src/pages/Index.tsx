
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/products/ProductGrid";
import { getFeaturedProducts, getCategories } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/cart/CartSidebar";

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const categories = getCategories();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CartSidebar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="h-[70vh] bg-store-secondary overflow-hidden">
            <img
              src="public/images/header3.jpeg"
              alt="Cartoon of three folks with a farm in the background"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="store-container">
              <div className="max-w-md p-6 bg-background/90 backdrop-blur-sm rounded-lg">
                <h1 className="text-4xl font-medium tracking-tight mb-3">
                  Empowering efficiency
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
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="store-container">
            <ProductGrid products={featuredProducts} title="Featured Products" />
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-muted/30">
          <div className="store-container">
            <h2 className="text-2xl font-medium mb-8 text-center">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/products?category=${category}`}
                  className="group relative overflow-hidden rounded-lg aspect-square border hover:shadow-md transition-shadow"
                >
                  <div className="absolute inset-0 bg-foreground/50 group-hover:bg-foreground/40 transition-colors flex items-center justify-center text-white text-xl font-medium">
                    {category}
                  </div>
                </Link>
              ))}
            </div>
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
