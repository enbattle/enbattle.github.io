/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Remove basePath if you're deploying to username.github.io
  // basePath: '/repo-name', // Only needed for project sites
  assetPrefix: process.env.NODE_ENV === "production" ? "/" : "",
};

module.exports = nextConfig;
