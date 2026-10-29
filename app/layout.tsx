import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://observatoire-du-stockage.fr"),
  title: {
    default: "Observatoire du Stockage — Analyser, investir et rentabiliser les espaces de stockage",
    template: "%s | Observatoire du Stockage",
  },
  description:
    "Le média francophone de référence dédié au marché du stockage, à l'investissement dans les boxs, garages et entrepôts, et à l'optimisation de la rentabilité des espaces de stockage.",
  keywords: ["stockage", "investissement", "garage", "box", "entrepôt", "rentabilité", "immobilier"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Observatoire du Stockage",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-[#f8f9fa]">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
