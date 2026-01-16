import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'digital.ihg.com',
        pathname: '/is/image/**',
      },
    ],
  },
};

export default nextConfig;
