import type { Metadata, Viewport } from "next";

import { Cormorant_Garamond, Jost } from "next/font/google";

import "./globals.css";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://privehillsresidence.id";

export const metadata: Metadata = {
  title:
    "Prive Hills Residence | Perumahan Minimalis Modern di Pamulang, Tangerang Selatan",
  description:
    "Prive Hills Residence – hunian eksklusif di perbukitan Pamulang, Tangerang Selatan. Harga mulai Rp 1,3 Miliar. KPR DP 0%, Free PPN, BPHTB & Biaya KPR hingga 40 Juta. Cek promo 2026!",
  keywords: [
    // Primary Keywords
    "rumah dijual Pamulang",
    "perumahan Pamulang Tangerang Selatan",
    "rumah minimalis Pamulang",
    "perumahan eksklusif Pamulang",
    "Privé Hills Residence",
    "Hunian modern Pamulang",

    // Long-Tail / High Conversion
    "perumahan KPR Pamulang",
    "rumah 3 kamar tidur Pamulang",
    "perumahan cluster Pamulang one gate system",
    "rumah baru Tangerang Selatan dekat tol",
    "perumahan dekat Stasiun Jurangmangu",
    "beli rumah Pamulang DP rendah",
    "perumahan minimalis modern Tangerang Selatan",

    // Location-Based
    "perumahan dekat BSD Tangerang",
    "rumah dijual Ciputat Tangerang Selatan",
    "hunian dekat Jakarta Selatan",
    "perumahan Banten strategis",

    // Commercial / Shophouse
    "ruko dijual Pamulang",
    "shophouse Pamulang Tangerang Selatan",
    "investasi properti Pamulang",

    // Feature-Based
    "perumahan dengan kolam renang Pamulang",
    "perumahan gated community Tangerang Selatan",
    "rumah dengan clubhouse Pamulang",
    "perumahan dekat sekolah rumah sakit Pamulang",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  // keywords:
  //   "rumah pamulang, privé hills residence, perumahan tangerang selatan, hunian modern",
  openGraph: {
    title: "Prive Hills Residence",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: true,
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-jost",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`scroll-smooth ${cormorant.variable} ${jost.variable}`}
    >
      <head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        /> */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        /> */}
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
