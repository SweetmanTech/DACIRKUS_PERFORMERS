/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    loader: "custom",
    path: "/",
    loaderFile: "./lib/customLoader",
  },
}

module.exports = nextConfig
