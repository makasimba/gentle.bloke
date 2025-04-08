import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { getCategories } from "@/lib/data";

const Navbar = () => {
  const categories = getCategories();
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("United Kingdom");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log("Searching for:", searchQuery, "in location:", location);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu size={20} />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">
                <nav className="flex flex-col gap-6 mt-10">
                  <SheetClose asChild>
                    <Link
                      to="/"
                      className="text-lg font-medium transition-colors hover:text-foreground/80"
                    >
                      Home
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="/products"
                      className="text-lg font-medium transition-colors hover:text-foreground/80"
                    >
                      All Products
                    </Link>
                  </SheetClose>
                  {categories.map((category) => (
                    <SheetClose key={category} asChild>
                      <Link
                        to={`/products?category=${category}`}
                        className="text-lg font-medium transition-colors hover:text-foreground/80"
                      >
                        {category}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/l1.jpeg"
                alt="ToolMinda Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-semi-bold tracking-tight hidden sm:inline">ToolMinda</span>
            </Link>
          </div>

          {/* Search Bar - Centered */}
          <div className="hidden md:flex flex-1 justify-center px-4">
            <div className="flex items-center w-full max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <Input
                  placeholder="Search ToolMinda"
                  className="pl-10 bg-green-100 border-0 h-10 focus-visible:ring-1 focus-visible:ring-green-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
              
              <div className="w-40 ml-2">
                <Button 
                  variant="outline" 
                  className="h-10 w-full bg-white border border-gray-200 flex justify-between items-center px-4 font-normal hover:bg-gray-50"
                >
                  <span>{location}</span>
                  <span className="material-icons text-xs">▼</span>
                </Button>
              </div>
              
              <Button 
                onClick={handleSearch}
                className="bg-green-500 hover:bg-green-600 text-white h-10 ml-2"
              >
                <Search size={18} />
              </Button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 ml-auto">
            <Link
              to="/"
              className="text-sm font-medium transition-colors hover:text-foreground/80"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-sm font-medium transition-colors hover:text-foreground/80"
            >
              All Products
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                to={`/products?category=${category}`}
                className="text-sm font-medium transition-colors hover:text-foreground/80"
              >
                {category}
              </Link>
            ))}
          </nav>

          {/* Mobile Search Toggle */}
          <div className="ml-auto md:hidden">
            <Button variant="ghost" size="icon">
              <Search size={20} />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;