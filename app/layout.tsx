import type { Metadata } from "next";
import Script from "next/script";

// Fontsource bundles font files locally via npm, no Google Fonts
// network fetch required at build time or runtime.
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";

import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ARYX TOOLS - Free Online Tools",
  description:
    "100+ free online tools for text, conversion, calculation, and more. Fast, simple, no sign-up required.",
};

// AdSense Auto Ads: once your AdSense account is approved, replace
// ca-pub-XXXXXXXXXXXXXXXX below with your real publisher ID. Auto ads
// then place themselves automatically across the site, no manual ad
// slots needed anywhere else in the codebase.
const ADSENSE_PUBLISHER_ID = "ca-pub-XXXXXXXXXXXXXXXX";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 min-w-0">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
