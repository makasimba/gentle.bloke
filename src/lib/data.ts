export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  previousPrice?: number;
  images: string[];
  category: string;
  featured?: boolean;
  inventory: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

// Mock product data
export const products: Product[] = [
  {
    id: "1",
    name: "Single Barrel Milking Machine",
    description: "A reliable and efficient milking solution designed for small to medium dairy farms. This single barrel milking machine streamlines the milking process, reducing labor while ensuring gentle and hygienic extraction. Built for durability and ease of use, it's ideal for farmers seeking consistency, speed, and animal comfort in daily operations.",    
    price: 89.99,
    previousPrice: 119.99,
    images: [
      "public/images/s1.webp",
    ],
    category: "",
    featured: true,
    inventory: 25
  },
  {
    id: "2",
    name: "Milking Can",
    description: "A durable, food-grade stainless steel milking can designed for safe and efficient milk collection, storage, and transport. Rust-resistant and easy to clean, it's an essential tool for dairy farmers who value hygiene, longevity, and reliability in their daily operations.",    
    price: 24.99,
    previousPrice: 29.99,
    images: [
      "public/images/MC__III.webp",
      "public/images/MC__IV.webp",
      "public/images/MC__V.webp",
      "public/images/MC__XIII.webp",
    ],
    category: "",
    inventory: 50,
    featured: true,
  },
  {
    id: "3",
    name: "Double Barrel Milking Machine",
    description: "Engineered for efficiency, this double barrel milking machine is ideal for dairy farms with higher output needs. It allows simultaneous milking of two cows, cutting down milking time while maintaining animal comfort and hygiene. Built with robust components for long-term use, it's a smart investment for scaling up your dairy operations.",    
    price: 39.99,
    previousPrice: 49.99,
    images: [
      "public/images/s2.webp"
    ],
    category: "",
    featured: true,
    inventory: 30
  },
  {
    id: "4",
    name: "Wooden Cutting Board",
    description: "Sustainably sourced maple wood cutting board. Durable, knife-friendly, and naturally antibacterial.",
    price: 49.99,
    previousPrice: 69.99,
    images: [
      "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582789991349-8f8e6e091c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "",
    inventory: 20
  },
  {
    id: "5",
    name: "Cotton Bed Sheets",
    description: "100% organic cotton bed sheets with a 400 thread count. Soft, breathable, and gets softer with each wash.",
    price: 79.99,
    previousPrice: 99.99,
    images: [
      "https://images.unsplash.com/photo-1584100936779-75ee22422f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "",
    inventory: 15
  },
  {
    id: "6",
    name: "Glass Water Bottle",
    description: "Reusable glass water bottle with silicone sleeve for protection. Leak-proof lid and wide mouth for easy cleaning.",
    price: 34.99,
    previousPrice: 44.99,
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "",
    featured: false,
    inventory: 40
  },
  {
    id: "7",
    name: "Wool Throw Blanket",
    description: "Luxurious wool throw blanket. Perfect for staying cozy during cool evenings or adding texture to your living space.",
    price: 129.99,
    previousPrice: 159.99,
    images: [
      "https://images.unsplash.com/photo-1600369672770-985fd30e288c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617688893819-8737f615c3a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "",
    inventory: 10
  },
  {
    id: "8",
    name: "Stainless Steel Utensils Set",
    description: "Modern, minimalist stainless steel utensil set. Includes knife, fork, and spoon with matte finish.",
    price: 59.99,
    previousPrice: 79.99,
    images: [
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "",
    inventory: 35
  }
];

// Helper function to get featured products
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Helper function to get product by id
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Get unique categories
export const getCategories = (): string[] => {
  return Array.from(new Set(products.map(product => product.category)));
};
