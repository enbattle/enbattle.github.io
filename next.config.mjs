/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  output: isProd ? "export" : undefined,
  basePath: isProd ? "/<repository-name>" : "",
  assetPrefix: isProd ? "/<repository-name>/" : "",
  trailingSlash: true,
};

export default nextConfig;
