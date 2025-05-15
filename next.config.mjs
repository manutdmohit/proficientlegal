/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static generation for the not-found page
  output: 'standalone',
  
  // Disable TypeScript and ESLint during build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Configure images
  images: {
    unoptimized: true,
  },
  
  // Experimental features
  experimental: {}
}

export default nextConfig
