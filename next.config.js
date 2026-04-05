/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost" },
      { protocol: "https", hostname: "privehillsresidence.id" },
      { protocol: "https", hostname: "privehills-web.vercel.app" },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 day in seconds
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.privehillsresidence.id",
          },
        ],
        destination: "https://privehillsresidence.id/:path*",
        permanent: true, // 301 redirect
      },
    ];
  },

  // async headers() {
  //   return [
  //     {
  //       source: "/_next/image",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value:
  //             "public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
