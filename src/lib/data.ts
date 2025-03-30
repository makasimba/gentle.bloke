
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
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
    name: "Minimalist Desk Lamp",
    description: "A sleek, adjustable desk lamp with warm LED lighting and touch controls. Perfect for your workspace or bedside table.",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Lighting",
    featured: true,
    inventory: 25
  },
  {
    id: "2",
    name: "Ceramic Coffee Mug",
    description: "Handcrafted ceramic mug with minimalist design. Holds 12 oz and is dishwasher and microwave safe.",
    price: 24.99,
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1578426720323-6d3b67133446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Kitchen",
    inventory: 50
  },
  {
    id: "3",
    name: "Linen Throw Pillow",
    description: "Soft, durable linen throw pillow with invisible zipper. Available in various natural colors.",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Home Decor",
    featured: true,
    inventory: 30
  },
  {
    id: "4",
    name: "Wooden Cutting Board",
    description: "Sustainably sourced maple wood cutting board. Durable, knife-friendly, and naturally antibacterial.",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582789991349-8f8e6e091c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Kitchen",
    inventory: 20
  },
  {
    id: "5",
    name: "Cotton Bed Sheets",
    description: "100% organic cotton bed sheets with a 400 thread count. Soft, breathable, and gets softer with each wash.",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1584100936779-75ee22422f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Bedding",
    inventory: 15
  },
  {
    id: "6",
    name: "Glass Water Bottle",
    description: "Reusable glass water bottle with silicone sleeve for protection. Leak-proof lid and wide mouth for easy cleaning.",
    price: 34.99,
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Kitchen",
    featured: true,
    inventory: 40
  },
  {
    id: "7",
    name: "Wool Throw Blanket",
    description: "Luxurious wool throw blanket. Perfect for staying cozy during cool evenings or adding texture to your living space.",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1600369672770-985fd30e288c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617688893819-8737f615c3a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Home Decor",
    inventory: 10
  },
  {
    id: "8",
    name: "Stainless Steel Utensils Set",
    description: "Modern, minimalist stainless steel utensil set. Includes knife, fork, and spoon with matte finish.",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Kitchen",
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
