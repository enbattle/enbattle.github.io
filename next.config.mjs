/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/" : "",
  basePath: process.env.NODE_ENV === "production" ? "" : "",
  images: {
    loader: "default",
    path: "",
  },
  trailingSlash: true,
};

export default nextConfig;
