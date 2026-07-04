import { siteImages } from "./images";

export type SaleProductPage = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  cardImage: string;
  icon: "ethanol" | "molasses" | "ena" | "ginger" | "garlic";
  tagline: string;
  description: string;
  highlights: string[];
  applications: string[];
  specs: { label: string; value: string }[];
  whyUs: string[];
};

export const saleProducts: SaleProductPage[] = [
  {
    slug: "ethanol",
    title: "Ethanol",
    subtitle: "Green fuel & industrial ethanol for sale",
    heroImage: siteImages.saleProducts.ethanolHero,
    cardImage: siteImages.saleProducts.ethanol,
    icon: "ethanol",
    tagline: "Clean-burning biofuel for blending and industrial applications",
    description:
      "We supply high-quality ethanol — a green fuel produced for blending with petrol in vehicles and for diverse industrial uses. Our ethanol meets stringent quality standards and is available for bulk supply to distributors, fuel blenders, and industrial buyers across India.",
    highlights: [
      "Suitable for petrol blending under national biofuel policy",
      "Consistent purity and quality-tested batches",
      "Bulk supply with reliable logistics from Pune",
      "Export documentation and compliance support available",
    ],
    applications: [
      "Petrol blending for automotive fuel",
      "Pharmaceutical and chemical industries",
      "Solvent and disinfectant manufacturing",
      "Industrial fuel and energy applications",
    ],
    specs: [
      { label: "Product", value: "Rectified / Industrial Ethanol" },
      { label: "Supply", value: "Bulk tankers & export shipments" },
      { label: "Origin", value: "India (Maharashtra)" },
      { label: "Documentation", value: "Full export-import compliance" },
    ],
    whyUs: [
      "Integrated logistics — we move your product, not just sell it",
      "Transparent pricing and dedicated sales support",
      "Coordination with ports for timely dispatch",
      "Trusted partner for Indian ethanol trade",
    ],
  },
  {
    slug: "molasses",
    title: "Molasses",
    subtitle: "Nutrient-rich feed & industrial molasses for sale",
    heroImage: siteImages.saleProducts.molassesHero,
    cardImage: siteImages.saleProducts.molasses,
    icon: "molasses",
    tagline: "Valuable by-product — ideal for feed and fermentation industries",
    description:
      "We offer molasses for sale — a nutrient-rich by-product widely used in livestock feed and as a raw material for ethanol and alcohol production. Rich in protein, fiber, and essential nutrients, our molasses is suitable for cattle, poultry, fish, and swine feed applications.",
    highlights: [
      "High nutritional value for animal feed",
      "Stable quality suitable for long storage",
      "Bulk quantities for feed manufacturers",
      "Sourced through established supply networks",
    ],
    applications: [
      "Cattle, poultry, and swine feed formulations",
      "Fish and aqua feed industries",
      "Ethanol and alcohol production",
      "Fermentation and industrial processing",
    ],
    specs: [
      { label: "Product", value: "Industrial / Feed-grade Molasses" },
      { label: "Supply", value: "Bulk tankers & containerized loads" },
      { label: "Origin", value: "India" },
      { label: "Use", value: "Feed, fermentation & industrial" },
    ],
    whyUs: [
      "Competitive bulk pricing for manufacturers",
      "End-to-end export handling when required",
      "Reliable scheduling and dispatch from Pune hub",
      "Single contact for molasses supply and logistics",
    ],
  },
  {
    slug: "ena",
    title: "ENA",
    subtitle: "Extra Neutral Alcohol for industrial & beverage applications",
    heroImage: siteImages.saleProducts.enaHero,
    cardImage: siteImages.saleProducts.ena,
    icon: "ena",
    tagline: "Premium extra neutral alcohol — purity for industry and spirits",
    description:
      "We supply Extra Neutral Alcohol (ENA) — a highly purified form of ethanol used in beverage production, pharmaceuticals, cosmetics, and industrial applications. Our ENA is processed to meet strict quality standards for bulk buyers and exporters.",
    highlights: [
      "High purity suitable for potable and industrial grades",
      "Bulk tanker supply with quality documentation",
      "Consistent batches for manufacturing continuity",
      "Export-ready with full compliance support",
    ],
    applications: [
      "Potable alcohol and beverage industry",
      "Pharmaceutical and medical applications",
      "Cosmetics and personal care products",
      "Industrial solvents and chemical manufacturing",
    ],
    specs: [
      { label: "Product", value: "Extra Neutral Alcohol (ENA)" },
      { label: "Supply", value: "Bulk liquid tankers" },
      { label: "Origin", value: "India" },
      { label: "Grades", value: "Industrial & beverage-grade options" },
    ],
    whyUs: [
      "Reliable bulk supply from established networks",
      "Integrated logistics for safe liquid transport",
      "Dedicated sales team for pricing and scheduling",
      "Long-term partnership approach",
    ],
  },
  {
    slug: "ginger",
    title: "Ginger",
    subtitle: "Premium fresh & dried ginger for domestic and export markets",
    heroImage: siteImages.saleProducts.gingerHero,
    cardImage: siteImages.saleProducts.ginger,
    icon: "ginger",
    tagline: "High-quality ginger — sourced, packed, and shipped with care",
    description:
      "We supply premium ginger for wholesalers, food processors, and export buyers. From fresh rhizomes to dried and processed grades, our ginger is sourced through trusted networks and delivered with full export documentation and reliable logistics from Pune.",
    highlights: [
      "Fresh and dried ginger grades available",
      "Export-quality sorting and packaging support",
      "Bulk supply for domestic and international buyers",
      "Full customs and phytosanitary documentation",
    ],
    applications: [
      "Food processing and spice manufacturing",
      "Retail and wholesale distribution",
      "Pharmaceutical and ayurvedic industries",
      "Export to Middle East, Europe, and Asian markets",
    ],
    specs: [
      { label: "Product", value: "Fresh & dried ginger" },
      { label: "Supply", value: "Bulk bags & containerized loads" },
      { label: "Origin", value: "India" },
      { label: "Documentation", value: "Export-import compliance support" },
    ],
    whyUs: [
      "Integrated export logistics from Pune hub",
      "Quality-checked batches with consistent supply",
      "Competitive pricing for bulk orders",
      "Single contact for sourcing and shipment",
    ],
  },
  {
    slug: "garlic",
    title: "Garlic",
    subtitle: "Fresh & bulk garlic for trade and export",
    heroImage: siteImages.saleProducts.garlicHero,
    cardImage: siteImages.saleProducts.garlic,
    icon: "garlic",
    tagline: "Quality garlic supply — from farm gate to global markets",
    description:
      "We offer garlic for bulk buyers, traders, and exporters. Our supply covers fresh garlic suitable for food industry, retail chains, and international markets — backed by dependable logistics, packaging coordination, and export clearance support.",
    highlights: [
      "Fresh bulk garlic for domestic and export trade",
      "Consistent grading and quality selection",
      "Container and bulk shipment coordination",
      "Export documentation and port handling",
    ],
    applications: [
      "Food manufacturing and spice blending",
      "Wholesale and retail supply chains",
      "Export to Gulf, Southeast Asia, and Europe",
      "Dehydrated and processed garlic industries",
    ],
    specs: [
      { label: "Product", value: "Fresh bulk garlic" },
      { label: "Supply", value: "Bulk bags & export containers" },
      { label: "Origin", value: "India" },
      { label: "Documentation", value: "Full trade compliance support" },
    ],
    whyUs: [
      "End-to-end export handling from Maharashtra",
      "Reliable scheduling and dispatch",
      "Transparent pricing with dedicated sales support",
      "Trusted partner for agri-commodity trade",
    ],
  },
];

export function getSaleProduct(slug: string): SaleProductPage | undefined {
  return saleProducts.find((p) => p.slug === slug);
}
