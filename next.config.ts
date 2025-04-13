import NextPWA from "next-pwa";

const withPWA = NextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // PWA is disabled in development mode
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPWA(nextConfig);
