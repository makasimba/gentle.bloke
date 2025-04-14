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
    price: 750,
    previousPrice: 850,
    images: [
      "/images/s1.webp",
      "/images/s1_detail.webp",
      "/images/s1_alt.webp"
    ],
    category: "",
    featured: true,
    inventory: 25
  },
  {
    id: "2",
    name: "Milking Can",
    description: "A durable, food-grade stainless steel milking can designed for safe and efficient milk collection, storage, and transport. Rust-resistant and easy to clean, it's an essential tool for dairy farmers who value hygiene, longevity, and reliability in their daily operations.",    
    price: 90,
    previousPrice: 120,
    images: [
      "/images/MC__III.webp",
      "/images/MC__IV.webp",
      "/images/MC__V.webp",
      "/images/MC__XIII.webp"
    ],
    category: "",
    inventory: 50,
    featured: true,
  },
  {
    id: "3",
    name: "Double Barrel Milking Machine",
    description: "Engineered for efficiency, this double barrel milking machine is ideal for dairy farms with higher output needs. It allows simultaneous milking of two cows, cutting down milking time while maintaining animal comfort and hygiene. Built with robust components for long-term use, it's a smart investment for scaling up your dairy operations.",    
    price: 1289,
    previousPrice: 999,
    images: [
      "/images/s2.webp",
      "/images/s2_detail.webp",
      "/images/s2_alt.webp"
    ],
    category: "",
    featured: true,
    inventory: 30
  },
  {
    id: "4",
    name: "Cream Separator",
    description: "A high-performance cream separator designed to quickly and efficiently separate cream from milk with precision. Ideal for small to medium dairy operations, it ensures maximum yield and quality while maintaining hygiene and ease of cleaning. Durable, easy to operate, and built for daily use on the farm.",    
    price: 150,
    previousPrice: 180,
    images: [
      "/images/cs1.webp",
      "/images/cs2.webp",
      "/images/cs3.webp",
      "/images/cs4.webp",
      "/images/cs5.webp",
      "/images/cs6.webp",
      "/images/cs7.webp",
      "/images/cs8.webp",
      "/images/cs9.webp",
    ],
    category: "",
    featured: true,
    inventory: 20
  },
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
