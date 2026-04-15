import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RENCEL | Intelligence Platforms & Global Procurement",
    template: "%s | RENCEL",
  },
  description:
    "Rencel is a technology and procurement consultancy. We build AI-powered intelligence platforms for automotive, healthcare, energy, and supply chain sectors. 20+ years of global experience across five continents.",
  keywords: [
    "intelligence platforms",
    "procurement consultancy",
    "automotive data intelligence",
    "healthcare platform development",
    "NHS digital platforms",
    "supply chain automation",
    "AI procurement",
    "global sourcing",
    "digital twin",
    "SaaS development UK",
  ],
  authors: [{ name: "Rencel Procurements Limited" }],
  creator: "Rencel Procurements Limited",
  metadataBase: new URL("https://www.rencelprocurements.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.rencelprocurements.co.uk",
    siteName: "RENCEL",
    title: "RENCEL | Intelligence Platforms & Global Procurement",
    description:
      "We build AI-powered intelligence platforms for automotive, healthcare, energy, and supply chain sectors. 20+ years of global procurement expertise.",
  },
  twitter: {
    card: "summary",
    title: "RENCEL | Intelligence Platforms & Global Procurement",
    description:
      "We build AI-powered intelligence platforms for automotive, healthcare, energy, and supply chain sectors.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body>
        <div className="noise-overlay" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
