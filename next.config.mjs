/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  output: "export",
  basePath: "/enbattle.github.io",
  assetPrefix: "/enbattle.github.io/",
  trailingSlash: true,
};

export default nextConfig;
