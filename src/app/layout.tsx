import type { Metadata, Viewport } from "next";

import { Cormorant_Garamond, Jost } from "next/font/google";

import "./globals.css";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://privehillsresidence.id";

export const metadata: Metadata = {
  title: "Prive Hills Residence | Hunian Premium Pamulang",
  description:
    "Prive Hills Residence – Hunian minimalis modern di area Pondok Cabe. Eksklusif, menawarkan privasi, keamanan, dan ketenangan untuk keluarga Anda. Harga mulai Rp 1,3 Miliar. KPR DP 0%, Free PPN, BPHTB & Biaya KPR hingga 40 Juta.",
  keywords: [
    // Primary Keywords
    "Rumah dijual di Pondok Cabe",

    // Long-Tail / High Conversion
    "perumahan KPR Pondok Cabe",
    "rumah 3 kamar tidur pondok cabe",
    "perumahan cluster pondok cabe",
    "beli rumah di pondok cabe DP 0",
    "Rumah KPR di pondok cabe",
    "Rumah 10 juta all in di pondok cabe",
    "Rumah sertifikat aman di pondok cabe",
    "Rumah siap huni pondok cabe",
    "Rumah KPR siap huni pondok cabe",
    "Rumah di pondok cabe fasilitas kolam renang",

    // Location-Based
    "perumahan dekat tol",
    "perumahan dekat halte transjakarta",

    // Commercial / Shophouse
    "ruko dijual di Pondok Cabe",
    "shophouse Pondok Cabe Tangerang Selatan",
    "investasi properti pondok cabe",
    "Ruko siap huni pondok cabe",

    // Feature-Based
    "perumahan dengan kolam renang di pondok cabe",
    "rumah dengan clubhouse di pondok cabe",
    "perumahan dekat sekolah dan rumah sakit pondok cabe",
    "perumahan elit di tangerang selatan",
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
    description:
      "Hunian minimalis modern di area Pondok Cabe. Eksklusif, menawarkan privasi, keamanan, dan ketenangan untuk keluarga Anda",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/assets/img/banner.webp`,
        width: 1200,
        height: 630,
        alt: "Prive Hills Residence - Hunian minimalis modern di area Pondok Cabe. Eksklusif, menawarkan privasi, keamanan, dan ketenangan untuk keluarga Anda",
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
