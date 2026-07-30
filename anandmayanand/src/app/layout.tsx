import type { Metadata } from "next";
import { Playfair_Display, Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/hooks/useTheme";
import { site } from "@/lib/site-data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} — Aatma Milan | Sankalp Siddhi`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Dr Anandmayanand",
    "Aatma Milan",
    "Sankalp Siddhi",
    "meditation",
    "spiritual guru India",
    "Bhagwat Katha",
    "Ram Katha",
    "SBK Cancer Charitable Hospital",
  ],
  openGraph: {
    title: `${site.name} — Aatma Milan`,
    description: site.description,
    url: `https://${site.domain}`,
    siteName: site.name,
    type: "website",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Aatma Milan`,
    description: site.description,
    images: ["/images/og-cover.jpg"],
  },
  alternates: { canonical: `https://${site.domain}` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: `https://${site.domain}`,
    description: site.description,
    sameAs: [],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
