import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    optimizeCss: false, // Disabled to prevent Vercel timeouts/crashes
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
