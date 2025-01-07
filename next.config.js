/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['node_modules'],
  },
  // Carbon Design System optimization
  webpack: (config) => {
    config.resolve.preferRelative = true;
    return config;
  },
}

module.exports = nextConfig