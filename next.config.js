/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
	SITE_URI: process.env.SITE_URI,
  }
}

module.exports = nextConfig
