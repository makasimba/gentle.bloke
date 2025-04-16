import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/cart/CartSidebar";
import ProductGrid from "@/components/products/ProductGrid";
import {
  products,
  getCategories,
  getProductsByCategory,
  Product,
} from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { X } from "lucide-react";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const maxPrice = useMemo(() => Math.max(...products.map((product) => product.price)), [products]);
  const [activeFilters, setActiveFilters] = useState<{
    category: string | null;
    priceRange: [number, number];
  }>({
    category: categoryParam,
    priceRange: [0, maxPrice],
  });
  const [sortOption, setSortOption] = useState("default");

  const categories = getCategories();

  useEffect(() => {
    // Update active filters when URL parameters change
    setActiveFilters((prev) => ({
      ...prev,
      category: categoryParam,
    }));
  }, [categoryParam]);

  useEffect(() => {
    // Filter products based on active filters
    let result = [...products];

    // Filter by category
    if (activeFilters.category) {
      result = getProductsByCategory(activeFilters.category);
    } else {
      // If no category is selected, show all products
      result = products;
    }

    // Filter by price range
    result = result.filter(
      (product) =>
        product.price >= activeFilters.priceRange[0] &&
        product.price <= activeFilters.priceRange[1]
    );

    // Sort products
    switch (sortOption) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Leave in default order
        break;
    }

    setFilteredProducts(result);
  }, [activeFilters, sortOption]);

  // Clear all filters
  const clearFilters = () => {
    setSearchParams({});
    setActiveFilters({
      category: null,
      priceRange: [0, maxPrice],
    });
  };

  // Handle category filter change
  const handleCategoryChange = (category: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (category === activeFilters.category) {
      newParams.delete("category");
      setActiveFilters((prev) => ({ ...prev, category: null }));
    } else {
      newParams.set("category", category);
      setActiveFilters((prev) => ({ ...prev, category }));
    }
    setSearchParams(newParams);
  };

  // Handle price range change
  const handlePriceChange = (value: number[]) => {
    setActiveFilters((prev) => ({
      ...prev,
      priceRange: [value[0], value[1]],
    }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CartSidebar />

      <main className="flex-1 py-8">
        <div className="store-container">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="w-full md:w-64">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium">Filters</h2>
                  {(activeFilters.category || 
                    activeFilters.priceRange[0] > 0 || 
                    activeFilters.priceRange[1] < maxPrice) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="h-8 text-xs"
                    >
                      <X size={12} className="mr-1" />
                      Clear all
                    </Button>
                  )}
                </div>

                <Accordion type="single" collapsible defaultValue="category">
                  <AccordionItem value="category">
                    <AccordionTrigger>Categories</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div
                            key={category}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={`category-${category}`}
                              checked={activeFilters.category === category}
                              onCheckedChange={() =>
                                handleCategoryChange(category)
                              }
                            />
                            <label
                              htmlFor={`category-${category}`}
                              className="text-sm cursor-pointer"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="price">
                    <AccordionTrigger>Price Range</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <Slider
                          defaultValue={[0, maxPrice]}
                          value={[
                            activeFilters.priceRange[0],
                            activeFilters.priceRange[1],
                          ]}
                          max={maxPrice}
                          step={5}
                          onValueChange={handlePriceChange}
                        />
                        <div className="flex items-center justify-between">
                          <span className="text-sm">
                            ${activeFilters.priceRange[0]}
                          </span>
                          <span className="text-sm">
                            ${activeFilters.priceRange[1]}
                          </span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <h1 className="text-2xl font-medium">
                  {activeFilters.category || "All Products"}
                </h1>

                <div className="flex items-center">
                  <span className="text-sm text-muted-foreground mr-2">Sort by:</span>
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Default" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                      <SelectItem value="name-asc">Name: A to Z</SelectItem>
                      <SelectItem value="name-desc">Name: Z to A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
