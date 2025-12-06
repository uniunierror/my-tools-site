/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopackを完全に無効化
  experimental: {
    // turbo: false,
  },
  reactStrictMode: true,
  webpack: (config) => {
    // Webpackを明示的に使う（念のため）
    return config;
  },
};

module.exports = nextConfig;
