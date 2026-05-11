/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],   // All images are local — no external domains needed
    unoptimized: false,
  },
}

module.exports = nextConfig
