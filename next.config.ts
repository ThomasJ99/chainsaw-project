import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "boolintunes.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
