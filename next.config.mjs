/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  output: "export",
  assetPrefix: isProd ? "/enbattle.github.io/" : "",
  basePath: isProd ? "/enbattle.github.io" : "",
  trailingSlash: true,
  images: {
    unoptimized: true, // To ensure images are not optimized, as it's a static export
  },
};

export default nextConfig;
