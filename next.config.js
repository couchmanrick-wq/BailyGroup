/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static generation for better performance
  swcMinify: true,
  // Optimize for Cloudflare deployment
  experimental: {
    esmExternals: true,
  },
}

module.exports = nextConfig
