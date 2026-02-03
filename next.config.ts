import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "data.pacogames.com",
      },
      {
        protocol: "https",
        hostname: "cdn.htmlgames.com",
      },
      {
        protocol: "https",
        hostname: "www.htmlgames.com",
      },
      {
        protocol: "https",
        hostname: "www.onlinegames.io",
      },
    ],
    // Add this line to allow quality 100 and 75
    qualities: [75, 100],
  },
};

export default nextConfig;
