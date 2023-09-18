/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["github.com", "s3.us-west-2.amazonaws.com", "prod-files-secure.s3.us-west-2.amazonaws.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
