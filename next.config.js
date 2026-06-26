/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Static export for Cloudflare Pages — emits a self-contained `out/` directory
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
