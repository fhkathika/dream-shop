/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = nextConfig,
module.exports = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  // experimental: {
  //   forceSwcTransforms: true,
  // },
}