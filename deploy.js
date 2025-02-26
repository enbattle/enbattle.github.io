// deploy.js
const ghpages = require("gh-pages");
const fs = require("fs");
const path = require("path");

// Ensure the .nojekyll file exists
const outDir = path.join(process.cwd(), "out");
fs.writeFileSync(path.join(outDir, ".nojekyll"), "");

console.log("Deploying to GitHub Pages...");

ghpages.publish(
  outDir,
  {
    dotfiles: true, // Include .nojekyll and other dotfiles
    branch: "gh-pages", // The branch to deploy to
    repo: "https://github.com/enbattle/enbattle.github.io.git", // Update this to your repo URL
    add: false, // Replace all content on the branch (empty it first)
    message: "Deploy to GitHub Pages [skip ci]",
  },
  (err) => {
    if (err) {
      console.error("Deployment error:", err);
      process.exit(1);
    }
    console.log("Deployment complete!");
  }
);
