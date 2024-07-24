/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  output: isProd ? "export" : undefined,
  basePath: isProd ? "/my-website" : "",
  assetPrefix: isProd ? "/my-website/" : "",
  trailingSlash: true,
};

export default nextConfig;
