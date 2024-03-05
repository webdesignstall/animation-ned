/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.NEXT_PUBLIC_DOMAIN,
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  }
};

export default nextConfig;
