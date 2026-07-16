import { companyInfo } from "../data/companyInfo";
import { absoluteUrl, siteUrl } from "../lib/seo";

export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    alternateName: companyInfo.shortName,
    url: siteUrl,
    logo: absoluteUrl("/images/logo.png"),
    description:
      "Pune-based logistics and exports company supplying ethanol, molasses, ENA, ginger, garlic, and international freight services.",
    email: companyInfo.email,
    telephone: companyInfo.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${companyInfo.address.line1}, ${companyInfo.address.line2}`,
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: companyInfo.address.pincode,
      addressCountry: "IN",
    },
    sameAs: [companyInfo.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
