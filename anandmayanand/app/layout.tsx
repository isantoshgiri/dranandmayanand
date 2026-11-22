
import type { Metadata } from "next";
import { SiteLanguageProvider } from "@/components/site-shell";
import {
  Manrope,
  Cormorant_Garamond,
  Hind,
  Noto_Serif_Devanagari,
} from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const hind = Hind({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind",
  display: "swap",
});

const notoSerif = Noto_Serif_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Swami Anandmayanand | Official Website",
  description:
    "Explore the spiritual teachings, wisdom, and work of Dr. Swami Anandmayanand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} ${hind.variable} ${notoSerif.variable}`}
    >
      <body>
        <SiteLanguageProvider>
          {children}
        </SiteLanguageProvider>
      </body>
    </html>
  );
}
