// next.config.ts
import type { NextConfig } from 'next';

const PROD = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Keep gzip/brotli on
  compress: true,

  // Strip console.* in production (keeps warn/error)
  compiler: {
    removeConsole: PROD ? { exclude: ['error', 'warn'] } : false,
  },

  // Don’t ship large source maps to browsers in prod
  productionBrowserSourceMaps: false,

  // Optimize package imports (helps with react-icons, date-fns, etc.)
  experimental: {
    optimizePackageImports: ['react-icons', 'date-fns', 'lodash-es'],
  },

  // Image pipeline: serve modern formats; right-size responsive images
  images: {
    formats: ['image/avif', 'image/webp'],
    // Tune to your real breakpoints (kept reasonable defaults)
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1y on the CDN
    // If you host any images on a CDN/domain, declare it here:
    // remotePatterns: [{ protocol: 'https', hostname: 'your-cdn.example', pathname: '/**' }],
  },

  // Long cache lifetimes for static assets in /public
  async headers() {
    return [
      // Fonts: immutable forever (bump filename to bust)
      {
        source: '/:all*(woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          // ensure CORP for cross-origin font usage if needed:
          { key: 'Cross-Origin-Resource-Policy', value: 'cross-origin' },
        ],
      },
      // Images & videos you serve from /public (Next already sets strong
      // caching for /_next/static; this complements user assets)
      {
        source: '/:all*(png|jpg|jpeg|gif|webp|avif|svg|mp4)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      // JSON/CSV or other downloadable data (optional)
      {
        source: '/:all*(json|txt|csv)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, must-revalidate' }], // 7d
      },
    ];
  },

  // Keep your safety net if needed; this doesn’t affect runtime perf
  typescript: {
    ignoreBuildErrors: true,
  },

  // If you use a CDN in front of Vercel for /public, uncomment:
  // assetPrefix: 'https://cdn.yourdomain.com',
};

export default nextConfig;
