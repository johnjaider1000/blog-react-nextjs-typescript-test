/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  env: {
    API_URL: process.env.API_URL,
    APP_ID: process.env.APP_ID,
    VERSION: process.env.VERSION,
  },
};

module.exports = nextConfig;
