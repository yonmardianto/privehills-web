const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://privehillsresidence.id";

export default function sitemap() {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
    },
  ];
}
