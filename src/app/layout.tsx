import type { Metadata } from "next";
import "./globals.css";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://privehillsresidence.id";

export const metadata: Metadata = {
  title: "Privé Hills Residence | Hunian Premium Pamulang",
  description:
    "Privé Hills Residence – hunian minimalis modern di perbukitan Pamulang, Tangerang Selatan. Harga mulai Rp1,41 Miliar.",
  keywords:
    "rumah pamulang, privé hills residence, perumahan tangerang selatan, hunian modern",
  openGraph: {
    title: "Privé Hills Residence",
    description: "Hunian premium di perbukitan Pamulang, Tangerang Selatan",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/assets/img/banner.webp`,
        width: 1200,
        height: 630,
        alt: "Privé Hills Residence - Hunian Premium di Pamulang Tangerang Selatan",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
