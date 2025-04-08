
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { getCategories } from "@/lib/data";

const Navbar = () => {
  const { toggleCart, itemCount } = useCart();
  const categories = getCategories();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="store-container flex h-16 items-center justify-between">
        <div className="flex items-center md:hidden">
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
        
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">ToolMinda</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
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
        
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Search size={20} />
                <span className="sr-only">Search</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="sm:max-w-xl mx-auto">
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Search for products..."
                    className="flex-1"
                  />
                  <Button>Search</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleCart}
            className="relative"
          >
            <ShoppingCart size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-store-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
            <span className="sr-only">Open cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
