/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  images: {
    domains: ["cdn.sanity.io"],
  }
};

export default nextConfig;
