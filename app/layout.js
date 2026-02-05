import { Geist, Geist_Mono } from "next/font/google";
import { assetPath } from "../lib/assetPath";
import "./globals.css";
import Navbar from "../components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://e-mosjid-blog-page.vercel.app"),
  title: {
    default: "Portal eMasjid | Sistem Pengurusan Masjid Selangor",
    template: "%s | Portal eMasjid"
  },
  description: "Portal eMasjid ialah sistem pengurusan pintar masjid untuk permohonan, kemaskini dan pengurusan masjid di Selangor.",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "VwRSVoSz5uqnXdFxtAIT6c7OGyMBP6dZ0JZ7_jXRaD8",
  },
  icons: {
    icon: assetPath("/icons/url_icon.svg"),
  },
};

export default function RootLayout({ children }) {
  // This JSON-LD helps Google generate the "Layered" Sitelinks
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Portal eMasjid Selangor",
    "url": "https://e-mosjid-blog-page.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://e-mosjid-blog-page.vercel.app/carian-masjid?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "hasPart": [
      { "@type": "WebPage", "name": "Info eMasjid", "url": "https://e-mosjid-blog-page.vercel.app/info-emasjid" },
      { "@type": "WebPage", "name": "Carian Masjid", "url": "https://e-mosjid-blog-page.vercel.app/carian-masjid" },
      { "@type": "WebPage", "name": "Semakan Permohonan", "url": "https://e-mosjid-blog-page.vercel.app/semakan-permohonan" },
      { "@type": "WebPage", "name": "Soalan Lazim", "url": "https://e-mosjid-blog-page.vercel.app/soalan-lazim" }
    ]
  };

  return (
    <html lang="ms"> {/* 'ms' for Malay language SEO */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}


