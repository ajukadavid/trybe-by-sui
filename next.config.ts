import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image2url.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
