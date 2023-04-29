/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "pbs.twimg.com"],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
