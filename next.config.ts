import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    optimizeCss: false, // Disabled to prevent Vercel timeouts/crashes
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: false,
    qualities: [60, 75, 85, 90],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)'
          }
        ],
      },
    ]
  },
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      // ========================================
      // MENU PAGE REDIRECTS (With Anchor Links)
      // ========================================
      // WordPress had 4 separate menu pages → Next.js has 1 /menu page with sections
      // Using anchor links to land users on the correct section

      // TEASE → APPETIZERS section
      {
        source: '/tease',
        destination: '/menu#appetizers',
        permanent: true,
      },
      // Safeties for direct access
      {
        source: '/appetizers',
        destination: '/menu#appetizers',
        permanent: true,
      },

      // ENTREES → ENTREES section
      {
        source: '/entrees',
        destination: '/menu#entrees',
        permanent: true,
      },

      // HOOKAH → HOOKAH section
      {
        source: '/hookah',
        destination: '/menu#hookah',
        permanent: true,
      },

      // DRINKS/COCKTAILS → COCKTAILS section
      {
        source: '/drinks',
        destination: '/menu#cocktails',
        permanent: true,
      },
      {
        source: '/cocktails',
        destination: '/menu#cocktails',
        permanent: true,
      },

      // DESSERTS → DESSERTS section
      {
        source: '/desserts',
        destination: '/menu#desserts',
        permanent: true,
      },

      // ========================================
      // OLD PAGE REDIRECTS
      // ========================================

      // Venue / Private Dining → Private Events
      {
        source: '/venue',
        destination: '/private-events',
        permanent: true,
      },
      {
        source: '/private-dining',
        destination: '/private-events',
        permanent: true,
      },

      // Legacy About/Contact → Next.js Clean Routes
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },

      // Gallery → Blog (User Request)
      {
        source: '/gallery',
        destination: '/blog',
        permanent: true,
      },

      // Reservations → Home (or Sticky CTA will handle it)
      {
        source: '/reservations',
        destination: '/',
        permanent: true,
      },

      // ========================================
      // WORDPRESS / SYSTEM CLEANUP
      // ========================================

      // Block/Redirect WP-Admin attempts to avoid 404 logs
      {
        source: '/wp-admin/:path*',
        destination: '/404', // Explicitly dead-end them
        permanent: true,
      },
      {
        source: '/wp-login.php',
        destination: '/404',
        permanent: true,
      },

      // Redirect Category/Author archives to Main Blog
      {
        source: '/category/:path*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/author/:path*',
        destination: '/blog',
        permanent: true,
      },

      // ========================================
      // 1. CRITICAL MISSING MENU PAGES
      // ========================================
      {
        source: '/tease/',
        destination: '/menu#appetizers',
        permanent: true,
      },
      {
        source: '/bigbites',
        destination: '/menu#entrees',
        permanent: true,
      },
      {
        source: '/bigbites/',
        destination: '/menu#entrees',
        permanent: true,
      },
      {
        source: '/cloudreverie',
        destination: '/menu#hookah',
        permanent: true,
      },
      {
        source: '/cloudreverie/',
        destination: '/menu#hookah',
        permanent: true,
      },
      {
        source: '/bottlevibes',
        destination: '/menu#cocktails',
        permanent: true,
      },
      {
        source: '/bottlevibes/',
        destination: '/menu#cocktails',
        permanent: true,
      },

      // ========================================
      // 2. OLD WORDPRESS PAGES
      // ========================================
      {
        source: '/hookah-lounge',
        destination: '/menu#hookah',
        permanent: true,
      },
      {
        source: '/hookah-lounge/',
        destination: '/menu#hookah',
        permanent: true,
      },
      {
        source: '/our-weekend-belly-dancing-shows-hit-different',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/our-weekend-belly-dancing-shows-hit-different/',
        destination: '/events',
        permanent: true,
      },

      // ========================================
      // 3. BLOG POSTS (Legacy -> /blog)
      // ========================================
      {
        source: '/best-hookah-lounge-restaurant-charcoal-n-chill',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/best-hookah-lounge-restaurant-charcoal-n-chill/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/top-hookah-mixes',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/top-hookah-mixes/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/working-in-a-hookah-shop',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/working-in-a-hookah-shop/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/the-most-exclusive-tobacco-on-the-market',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/the-most-exclusive-tobacco-on-the-market/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/interesting-ways-to-make-hookah',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/interesting-ways-to-make-hookah/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/what-hookah-tobacco-is-made-of',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/what-hookah-tobacco-is-made-of/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/hookah-vs-traditional-cigarettes',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/hookah-vs-traditional-cigarettes/',
        destination: '/blog',
        permanent: true,
      },
      // Duplicates/Versions
      {
        source: '/top-hookah-mixes-2',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/top-hookah-mixes-2/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/working-in-a-hookah-shop-2',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/working-in-a-hookah-shop-2/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/interesting-ways-to-make-hookah-2',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/interesting-ways-to-make-hookah-2/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/what-hookah-tobacco-is-made-of-2',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/what-hookah-tobacco-is-made-of-2/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/hookah-vs-traditional-cigarettes-2',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/hookah-vs-traditional-cigarettes-2/',
        destination: '/blog',
        permanent: true,
      },
      // Duplicate Permalinks
      {
        source: '/how-to-increase-the-profitability-of-your-restaurants-through-data-duplicate-18504',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/how-to-increase-the-profitability-of-your-restaurants-through-data-duplicate-18504/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/make-sure-that-your-customers-dont-forget-anything-when-they-place-their-order-2',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/make-sure-that-your-customers-dont-forget-anything-when-they-place-their-order-2/',
        destination: '/blog',
        permanent: true,
      },

      // ========================================
      // 4. IMAGE REDIRECTS (WP-Content -> Images)
      // ========================================
      {
        source: '/wp-content/uploads/:year/:month/:filename',
        destination: '/images/:filename',
        permanent: true,
      },
      {
        source: '/wp-content/uploads/:filename',
        destination: '/images/:filename',
        permanent: true,
      },

      // ========================================
      // 5. TAXONOMY PAGES
      // ========================================
      {
        source: '/category/:slug',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/tag/:slug',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/author/:slug',
        destination: '/blog',
        permanent: true,
      },

      // ========================================
      // 6. WORDPRESS FEED
      // ========================================
      {
        source: '/feed',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/feed/',
        destination: '/blog',
        permanent: true,
      },

      // ========================================
      // 7. WORDPRESS SYSTEM
      // ========================================
      {
        source: '/wp-includes/:path*',
        destination: '/404',
        permanent: true,
      },

      // Catch-all for old .php files if any
      {
        source: '/:path*.php',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

import { withSentryConfig } from "@sentry/nextjs";

export default withSentryConfig(withBundleAnalyzer(nextConfig), {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  // Suppresses source map uploading logs during build
  silent: true,
  org: "charcoal-n-chill",
  project: "charcoal-n-chill-web",

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
  tunnelRoute: "/monitoring",

  // Hides source maps from generated client bundles
  hideSourceMaps: true,
});
