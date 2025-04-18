import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingBag } from "lucide-react";
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
            <Link to="/" className="flex items-center gap-1">
              <img
                src="/images/toolmindavector6.svg"
                alt="ToolMinda Logo"
                className="h-12 w-full"
              />
              <span className="text-xl font-semi-bold tracking-tight hidden sm:inline">ToolMinda</span>
            </Link>
          </div>

          {/* Search Bar - Centered */}
          <div className="hidden md:flex flex-1 justify-center px-4">
            <div className="w-full max-w-xl">
              <SearchBar />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 ml-auto">
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

          {/* Shopping Cart */}
          <div className="ml-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleCart} 
              className="relative group transition-all duration-300 hover:bg-emerald-50/80 hover:text-emerald-600 hover:scale-105"
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
      </div>
    </header>
  );
};

export default Navbar;