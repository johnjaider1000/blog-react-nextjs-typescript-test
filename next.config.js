/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  env: {
    API_URL: process.env.API_URL,
    APP_API: process.env.APP_API,
    VERSION: process.env.VERSION,
  },
};

module.exports = nextConfig;
