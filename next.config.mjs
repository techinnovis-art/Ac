/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Image optimization is enabled by default. If you later add remote images,
  // whitelist their domains here, e.g.:
  // images: { remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
