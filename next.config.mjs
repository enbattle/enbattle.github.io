/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  output: "export",
  assetPrefix: "",
  images: {
    loader: "default",
    path: "",
  },
  trailingSlash: true,
};

export default nextConfig;
