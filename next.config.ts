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
  },
};

export default nextConfig;
