/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async rewrites() {
  //   const BASE_API_URL =
  //     process.env.BASE_API_URL ?? "http://localhost:4000/api/v1/";
  //   console.log("Testee :BASE_API_URL :  ", BASE_API_URL);
  //   return {
  //     beforeFiles: [
  //       {
  //         source: `/api/:endpoint*`,
  //         destination: `${BASE_API_URL}/:endpoint*`,
  //       },
  //     ],
  //   };
  // },
  // experimental: {
  //   serverActions: true,
  // },
};

module.exports = nextConfig;
