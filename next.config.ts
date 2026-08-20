import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /** Default is 60s; large marketing/industrial pages were exceeding it during `next build`. */
  staticPageGenerationTimeout: 300,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // basePath: '/brandbanalo',
  // assetPrefix: '/brandbanalo',
};

export default nextConfig;
