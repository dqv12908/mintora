import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Mintoria — The Native Minting Protocol",
  description:
    "Protocol-driven issuance. 100% community minted. Math-driven scarcity with on-chain settlement.",
  keywords: ["Mintoria", "DeFi", "minting", "protocol", "crypto", "blockchain"],
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} antialiased overflow-x-clip`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>

        {/* Hidden mount point for Google Translate widget */}
        <div id="google_translate_element" style={{ display: "none" }} />

        {/* Google Translate init — must run before the translate script */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            window.googleTranslateElementInit = function () {
              new window.google.translate.TranslateElement(
                { pageLanguage: 'en', autoDisplay: false },
                'google_translate_element'
              );
            };
          `}
        </Script>

        {/* Google Translate library */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
