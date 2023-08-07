/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "miumiu.caiodetz.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "flutter.caiodetz.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
