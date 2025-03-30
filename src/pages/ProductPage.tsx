
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/cart/CartSidebar";
import ProductDetail from "@/components/products/ProductDetail";
import ProductGrid from "@/components/products/ProductGrid";
import { getProductById, getProductsByCategory, Product } from "@/lib/data";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = id ? getProductById(id) : undefined;
  
  useEffect(() => {
    if (!product && id) {
      // Product not found, redirect to products page
      navigate("/products");
    }
  }, [product, id, navigate]);
  
  if (!product) {
    return null; // Will redirect in useEffect
  }
  
  // Get related products from the same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CartSidebar />
      
      <main className="flex-1 py-8">
        <div className="store-container">
          <ProductDetail product={product} />
          
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <ProductGrid
                products={relatedProducts}
                title="You May Also Like"
              />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
