/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/cv/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
