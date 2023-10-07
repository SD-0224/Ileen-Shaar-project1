/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig, // Spread the Next.js configuration settings
  images: {
    domains: ["links.papareact.com", "flagcdn.com", "upload.wikimedia.org"],
  },
};
