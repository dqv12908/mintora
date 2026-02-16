import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
