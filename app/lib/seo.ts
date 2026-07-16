import type { Metadata } from "next";
import { companyInfo } from "../data/companyInfo";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scleindia.com";

export const defaultDescription =
  "Shree Chintamani Logistics & Exports India Pvt. Ltd. — Pune-based freight forwarding, export-import, customs clearance, ethanol, molasses, ENA, ginger & garlic supply.";

export const defaultKeywords = [
  "SCLE India",
  "Shree Chintamani Logistics",
  "logistics Pune",
  "freight forwarding India",
  "export import services",
  "ethanol supplier India",
  "molasses export",
  "ENA supplier",
  "ginger garlic export",
  "customs clearance Pune",
];

export function absoluteUrl(path: string = "/"): string {
  return new URL(path, siteUrl).toString();
}

type PageMetadataOptions = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description = defaultDescription,
  path = "/",
  image = "/images/logo.png",
  keywords,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title,
    description,
    keywords: keywords ?? defaultKeywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: companyInfo.shortName,
      locale: "en_IN",
      type: "website",
      images: [{ url: imageUrl, alt: `${companyInfo.shortName} — ${companyInfo.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
