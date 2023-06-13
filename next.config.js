/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["react-hotjar"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
