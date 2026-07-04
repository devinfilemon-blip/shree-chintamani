import { siteImages } from "./images";

export const heroSlides = [
  {
    title: "Your Gateway to Global Trade.",
    subtitle:
      "Business First • Relationship Forever — your partner in logistics, exports, and bulk commodities.",
    image: siteImages.hero.warehouse,
  },
  {
    title: "Ethanol, Molasses, ENA, Ginger & Garlic.",
    subtitle:
      "Bulk supply of premium ethanol, molasses, extra neutral alcohol, ginger, and garlic — with reliable logistics.",
    image: siteImages.saleProducts.ethanolHero,
  },
  {
    title: "Transforming.",
    subtitle: "global trade through reliable freight and export solutions.",
    image: siteImages.hero.freight,
  },
  {
    title: "We aspire.",
    subtitle: "to deliver excellence for the benefit of all our stakeholders.",
    image: siteImages.hero.global,
  },
];

export const products = [
  {
    id: "freight",
    title: "Freight Forwarding",
    description:
      "Comprehensive freight forwarding for domestic and international shipments. We coordinate every step — from pickup to final delivery — ensuring your cargo reaches safely and on schedule.",
    image: siteImages.products.freight,
    icon: "truck",
  },
  {
    id: "export",
    title: "Export Services",
    description:
      "End-to-end export solutions including documentation, packaging guidance, and coordination with overseas buyers. We simplify global trade for Indian businesses.",
    image: siteImages.products.export,
    icon: "globe",
  },
  {
    id: "import",
    title: "Import Services",
    description:
      "Streamlined import clearance and delivery. We manage customs procedures, duty calculations, and regulatory compliance so you can focus on operations.",
    image: siteImages.products.import,
    icon: "import",
  },
  {
    id: "customs",
    title: "Customs Clearance",
    description:
      "Expert customs brokerage ensuring smooth clearance at ports and airports. Full documentation, duty assessments, and regulatory handling.",
    image: siteImages.products.customs,
    icon: "document",
  },
  {
    id: "warehousing",
    title: "Warehousing & Distribution",
    description:
      "Secure storage and efficient distribution to optimize your supply chain. Inventory management to last-mile delivery — we keep your goods moving.",
    image: siteImages.products.warehousing,
    icon: "warehouse",
  },
  {
    id: "cargo",
    title: "Sea & Air Cargo",
    description:
      "Flexible sea and air cargo for all shipment sizes. Urgent air freight or cost-effective sea freight — the right solution for your timeline and budget.",
    image: siteImages.products.cargo,
    icon: "plane",
  },
  {
    id: "documentation",
    title: "Documentation & Compliance",
    subtitle: "Trade compliance services",
    description:
      "Complete trade documentation — bills of lading, certificates of origin, insurance, and export-import compliance. Every document accurate and timely.",
    image: siteImages.products.documentation,
    icon: "compliance",
    featured: true,
  },
];

export const sustainabilityPillars = [
  {
    title: "Environment",
    description:
      "We invest in efficient logistics routes and optimized cargo handling to reduce transit times and environmental impact. Our integrated model ensures resources are used wisely across every shipment.",
    icon: "environment",
    image: siteImages.sustainability.environment,
  },
  {
    title: "Social",
    description:
      "We enrich communities where we operate by supporting local businesses, enabling export opportunities for small enterprises, and creating employment through logistics operations.",
    icon: "social",
    image: siteImages.sustainability.social,
  },
  {
    title: "Governance",
    description:
      "Good governance is our guiding force. We operate with transparency, ethical trade practices, and full regulatory compliance — building long-term trust with every client.",
    icon: "governance",
    image: siteImages.sustainability.governance,
  },
];

export const caseStudies = [
  {
    number: "01",
    title: "Seamless export shipment to Europe",
    short: "Export shipment to Europe",
    description:
      "Coordinated a full-container export from Pune to European markets — documentation, customs clearance, and port delivery completed ahead of schedule.",
    image: siteImages.caseStudies.europe,
  },
  {
    number: "02",
    title: "Multi-modal freight for manufacturing client",
    short: "Multi-modal freight solutions",
    description:
      "Designed a cost-effective sea-air combination route reducing transit time by 40% while cutting freight costs for a Maharashtra-based manufacturer.",
    image: siteImages.caseStudies.multimodal,
  },
  {
    number: "03",
    title: "Import clearance for industrial equipment",
    short: "Industrial import clearance",
    description:
      "Handled complex import documentation and customs clearance for heavy industrial machinery, ensuring zero delays at Mumbai port.",
    image: siteImages.caseStudies.import,
  },
];

export const glanceStats = [
  { label: "Services", value: "7+" },
  { label: "Trade Routes", value: "Global" },
  { label: "Support", value: "24/7" },
  { label: "Modes", value: "Sea/Air" },
  { label: "Location", value: "Pune" },
  { label: "Compliance", value: "100%" },
  { label: "Focus", value: "Exports" },
];

export const glanceDetails = [
  "Headquartered in Pune, Maharashtra — strategic access to major ports and industrial hubs",
  "Full export-import documentation and customs clearance support",
  "Sea, air, and road freight forwarding for domestic and international trade",
  "Dedicated sales team for personalized logistics and export solutions",
];

export const annualReports = [
  {
    year: "2024",
    label: "Trade Services Overview 2024",
    image: siteImages.reports["2024"],
    tagline: "Connecting India to global markets through reliable logistics.",
  },
  {
    year: "2026",
    label: "Export Capabilities 2026",
    image: siteImages.reports["2026"],
    tagline: "End-to-end freight, export, and customs solutions from Pune.",
  },
];

export const videos = [
  {
    title: "How We Handle Export Shipments",
    thumbnail: siteImages.videos.export,
  },
  {
    title: "Customs Clearance Process Explained",
    thumbnail: siteImages.videos.customs,
  },
  {
    title: "Sea Freight vs Air Freight",
    thumbnail: siteImages.videos.freight,
  },
  {
    title: "Warehousing & Distribution Solutions",
    thumbnail: siteImages.videos.warehouse,
  },
  {
    title: "SCLE India — Your Trade Partner",
    thumbnail: siteImages.videos.company,
  },
];

export type NavChild = { label: string; href: string };

export type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  children?: NavChild[];
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  {
    label: "Products",
    href: "/#products",
    hasDropdown: true,
    children: [
      { label: "Ethanol", href: "/products/ethanol" },
      { label: "Molasses", href: "/products/molasses" },
      { label: "ENA", href: "/products/ena" },
      { label: "Ginger", href: "/products/ginger" },
      { label: "Garlic", href: "/products/garlic" },
    ],
  },
  {
    label: "Services",
    href: "/#services",
    hasDropdown: true,
    children: [
      { label: "Freight Forwarding", href: "/services/freight-forwarding" },
      { label: "Export Services", href: "/services/export-services" },
      { label: "Import Services", href: "/services/import-services" },
      { label: "Customs Clearance", href: "/services/customs-clearance" },
      { label: "Warehousing & Distribution", href: "/services/warehousing" },
      { label: "Sea & Air Cargo", href: "/services/sea-air-cargo" },
      { label: "Documentation & Compliance", href: "/services/documentation-compliance" },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Media", href: "/#videos" },
];

export const footerProductLinks: { label: string; href: string }[] = [
  { label: "Ethanol", href: "/products/ethanol" },
  { label: "Molasses", href: "/products/molasses" },
  { label: "ENA", href: "/products/ena" },
  { label: "Ginger", href: "/products/ginger" },
  { label: "Garlic", href: "/products/garlic" },
];

export const footerServiceLinks: { label: string; href: string }[] = [
  { label: "Freight Forwarding", href: "/services/freight-forwarding" },
  { label: "Export Services", href: "/services/export-services" },
  { label: "Import Services", href: "/services/import-services" },
  { label: "Customs Clearance", href: "/services/customs-clearance" },
  { label: "Warehousing", href: "/services/warehousing" },
  { label: "Sea & Air Cargo", href: "/services/sea-air-cargo" },
  { label: "Documentation & Compliance", href: "/services/documentation-compliance" },
];

export const footerCompanyLinks = [
  { label: "About", href: "/#about" },
  { label: "Contact Us", href: "/contact" },
];
