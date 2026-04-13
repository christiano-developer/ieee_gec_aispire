import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/ieee_gec_aispire",
  assetPrefix: "/ieee_gec_aispire/",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;
