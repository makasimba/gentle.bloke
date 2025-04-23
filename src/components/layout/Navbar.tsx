import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { getCategories } from "@/lib/data";
import SearchBar from "./SearchBar";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const categories = getCategories();
  const { toggleCart, itemCount } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="touch-target">
                  <Menu size={20} className="transition-transform duration-200" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="left" 
                className="w-[280px] sm:w-[320px] p-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <Link to="/" className="flex items-center gap-2">
                      <img
                        src="/images/toolmindavector6.svg"
                        alt="ToolMinda Logo"
                        className="h-8 w-auto"
                      />
                      <span className="text-lg font-semibold">ToolMinda</span>
                    </Link>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="touch-target">
                        <X size={20} />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex-1 overflow-y-auto p-4">
                    <div className="flex flex-col gap-4">
                      <SheetClose asChild>
                        <Link
                          to="/"
                          className="text-lg font-medium transition-colors hover:text-foreground/80 active:scale-95 touch-target"
                        >
                          Home
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          to="/products"
                          className="text-lg font-medium transition-colors hover:text-foreground/80 active:scale-95 touch-target"
                        >
                          All Products
                        </Link>
                      </SheetClose>
                      {categories.map((category) => (
                        <SheetClose key={category} asChild>
                          <Link
                            to={`/products?category=${category}`}
                            className="text-lg font-medium transition-colors hover:text-foreground/80 active:scale-95 touch-target"
                          >
                            {category}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <div className="flex-1 flex items-center justify-center md:flex-none md:justify-start">
            <Link to="/" className="flex items-center gap-1 touch-target">
              <img
                src="/images/toolmindavector6.svg"
                alt="ToolMinda Logo"
                className="h-10 w-auto md:h-12"
              />
              <span className="text-lg md:text-xl font-semibold tracking-tight hidden sm:inline">ToolMinda</span>
            </Link>
          </div>

          {/* Search Bar - Centered */}
          <div className="hidden md:flex flex-1 justify-center px-4">
            <div className="w-full max-w-xl">
              <SearchBar />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 ml-auto">
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
            <Button 
              variant="ghost" 
              size="icon" 
              className="touch-target"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={20} className="transition-transform duration-200" />
              <span className="sr-only">Search</span>
            </Button>
          </div>

          {/* Shopping Cart */}
          <div className="ml-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleCart} 
              className="relative group touch-target transition-all duration-300 hover:bg-emerald-50/80 hover:text-emerald-600 hover:scale-105 active:scale-95"
            >
              <ShoppingBag size={20} className="transition-transform duration-300 group-hover:rotate-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-md bg-emerald-500/90 text-[10px] font-medium text-white/90 flex items-center justify-center transform transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-600/90 animate-badge-appear">
                  <span className="animate-count-update">
                    {itemCount}
                  </span>
                </span>
              )}
              <span className="sr-only">Shopping cart</span>
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden py-2 px-4 border-t animate-in slide-in-from-top duration-200">
            <SearchBar />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;