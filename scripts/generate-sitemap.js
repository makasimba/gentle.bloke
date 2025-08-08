import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL for the website
const BASE_URL = 'https://toolminda.com';

// Static pages configuration
const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/products', priority: '0.9', changefreq: 'weekly' },
  { path: '/about-us', priority: '0.7', changefreq: 'monthly' },
  { path: '/sustainability', priority: '0.6', changefreq: 'monthly' },
  { path: '/press', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/help-center', priority: '0.6', changefreq: 'monthly' },
  { path: '/shipping-returns', priority: '0.5', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
];

// Product IDs (from your data.ts file)
const productIds = ['1', '2', '3', '4', '5'];

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

// Generate sitemap XML
const generateSitemap = () => {
  const currentDate = getCurrentDate();
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add static pages
  staticPages.forEach(page => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${BASE_URL}${page.path}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += `  </url>\n`;
  });
  
  // Add product pages
  productIds.forEach(productId => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${BASE_URL}/product/${productId}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>weekly</changefreq>\n`;
    sitemap += `    <priority>0.8</priority>\n`;
    sitemap += `  </url>\n`;
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

// Write sitemap to file
const writeSitemap = () => {
  try {
    const sitemapContent = generateSitemap();
    const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
    
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log('✅ Sitemap generated successfully at:', sitemapPath);
    console.log(`📊 Total URLs: ${staticPages.length + productIds.length}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
  }
};

// Run the script
writeSitemap();
