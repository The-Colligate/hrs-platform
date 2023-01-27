/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
