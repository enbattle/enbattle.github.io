/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  output: isProd ? "export" : undefined,
  basePath: isProd ? "/enbattle.github.io" : "",
  assetPrefix: isProd ? "/enbattle.github.io/" : "",
  trailingSlash: true,
};

export default nextConfig;
