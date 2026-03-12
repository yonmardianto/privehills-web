/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 day in seconds
  },
  async headers() {
    return [
      {
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
