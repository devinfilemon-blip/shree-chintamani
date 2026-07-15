import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AnalyticsScripts from "./components/AnalyticsScripts";
import CookieConsent from "./components/CookieConsent";
import { companyInfo } from "./data/companyInfo";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${companyInfo.shortName} | Logistics & Exports`,
  description:
    "Shree Chintamani Logistics & Exports India Pvt. Ltd. — Pune-based freight forwarding, export-import, and customs clearance.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
