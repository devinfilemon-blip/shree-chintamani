import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AnalyticsScripts from "./components/AnalyticsScripts";
import CookieConsent from "./components/CookieConsent";
import OrganizationJsonLd from "./components/OrganizationJsonLd";
import { companyInfo } from "./data/companyInfo";
import { createPageMetadata, defaultDescription, defaultKeywords, siteUrl } from "./lib/seo";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const homeMetadata = createPageMetadata({
  title: `${companyInfo.shortName} | Logistics & Exports`,
  description: defaultDescription,
  path: "/",
  image: "/images/hero-export.jpg",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${companyInfo.shortName} | Logistics & Exports`,
    template: `%s | ${companyInfo.shortName}`,
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  authors: [{ name: companyInfo.shortName, url: siteUrl }],
  creator: companyInfo.shortName,
  publisher: companyInfo.shortName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: homeMetadata.alternates,
  openGraph: homeMetadata.openGraph,
  twitter: homeMetadata.twitter,
  robots: homeMetadata.robots,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <OrganizationJsonLd />
        {children}
        <CookieConsent />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
