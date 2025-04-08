
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/40">
      <div className="store-container py-10 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">ToolMinda</h3>
            <p className="text-sm text-muted-foreground">
              Quality products for your everyday life.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/products" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/products?category=Lighting" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Lighting
                </Link>
              </li>
              <li>
                <Link 
                  to="/products?category=Kitchen" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kitchen
                </Link>
              </li>
              <li>
                <Link 
                  to="/products?category=Home Decor" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home Decor
                </Link>
              </li>
              <li>
                <Link 
                  to="/products?category=Bedding" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Bedding
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link 
                  to="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  to="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  to="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link 
                  to="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ToolMinda. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link 
              to="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              
            </Link>
            <Link 
              to="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              
            </Link>
            <Link 
              to="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pinterest
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
