require("dotenv").config({ path: "../../.env" });

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
  },
  transpilePackages: [
    "@mgslab/ui",
  ],
}


module.exports = nextConfig