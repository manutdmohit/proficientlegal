/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static generation for the not-found page
  output: 'standalone',

  // Disable TypeScript build errors during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Configure images
  images: {
    unoptimized: true,
    qualities: [100, 75],
  },

  // Experimental features
  experimental: {},
};

export default nextConfig;
