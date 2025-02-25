/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // This line is important if you're deploying to GitHub Pages
  basePath: process.env.NODE_ENV === "production" ? "/gh-pages" : "",
  // Replace 'repo-name' with your repository name if your site is at username.github.io/repo-name
  // If your site is at username.github.io (without a repo name), remove the basePath line
};

module.exports = nextConfig;
