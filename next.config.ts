import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tejasnatekar",
  assetPrefix: "/tejasnatekar",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
