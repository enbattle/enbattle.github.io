/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  output: "export",
  images: {
    loader: "default",
    path: "",
  },
  trailingSlash: true,
};

export default nextConfig;
