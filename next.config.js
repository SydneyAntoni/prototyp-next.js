const { images } = require("next/dist/build/webpack/config/blocks/images");
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  // basePath: "/prototyp-next.js",
};

module.exports = nextConfig;
