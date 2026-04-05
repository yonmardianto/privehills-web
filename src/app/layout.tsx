import type { Metadata, Viewport } from "next";

import { Cormorant_Garamond, Jost } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://privehillsresidence.id";

export const metadata: Metadata = {
  title: "Prive Hills Residence | Hunian Premium Pondok Cabe",
  description:
    "Hunian minimalis modern di Pondok Cabe. Harga mulai Rp 1,3M, DP 0%, Free PPN & BPHTB. Nikmati privasi dan keamanan eksklusif untuk keluarga Anda.",
  alternates: {
    canonical: "https://privehillsresidence.id",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MHFZFVM6');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M63024MPB0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M63024MPB0');
          `}
        </Script>
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
      <body className="grain antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MHFZFVM6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
