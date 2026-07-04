import { siteImages } from "./images";

export type ServicePage = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  cardImage: string;
  icon: "truck" | "globe" | "import" | "document" | "warehouse" | "plane" | "compliance";
  tagline: string;
  description: string;
  highlights: string[];
  capabilities: string[];
  specs: { label: string; value: string }[];
  whyUs: string[];
};

export const services: ServicePage[] = [
  {
    slug: "freight-forwarding",
    title: "Freight Forwarding",
    subtitle: "Domestic & international freight coordination",
    heroImage: siteImages.hero.freight,
    cardImage: siteImages.products.freight,
    icon: "truck",
    tagline: "End-to-end freight management from pickup to final delivery",
    description:
      "Our freight forwarding service coordinates every step of your shipment — domestic or international. From initial pickup through customs handoff to last-mile delivery, we manage carriers, schedules, and documentation so your cargo arrives safely and on time.",
    highlights: [
      "Door-to-door and port-to-port freight coordination",
      "Multi-carrier routing for cost and speed optimization",
      "Real-time shipment tracking and status updates",
      "Insurance and risk management guidance",
    ],
    capabilities: [
      "Full truckload and less-than-truckload domestic freight",
      "International freight booking with major carriers",
      "Consolidation and deconsolidation at hub points",
      "Temperature-controlled and special cargo handling",
    ],
    specs: [
      { label: "Coverage", value: "Domestic & international" },
      { label: "Modes", value: "Road, sea, air & rail" },
      { label: "Hub", value: "Pune, Maharashtra" },
      { label: "Support", value: "24/7 shipment assistance" },
    ],
    whyUs: [
      "Single point of contact for all freight legs",
      "Established carrier relationships for competitive rates",
      "Proactive delay management and rerouting",
      "Integrated with our customs and documentation teams",
    ],
  },
  {
    slug: "export-services",
    title: "Export Services",
    subtitle: "Complete export solutions for Indian businesses",
    heroImage: siteImages.hero.export,
    cardImage: siteImages.products.export,
    icon: "globe",
    tagline: "Simplify global trade with full export support",
    description:
      "We provide end-to-end export solutions for Indian manufacturers, traders, and distributors. From export documentation and packaging guidance to buyer coordination and port dispatch — we help you reach international markets with confidence.",
    highlights: [
      "Export licensing and regulatory compliance support",
      "Commercial invoice, packing list, and certificate preparation",
      "Coordination with overseas buyers and agents",
      "Port booking and container loading supervision",
    ],
    capabilities: [
      "Export documentation for all major destination countries",
      "Fumigation and phytosanitary certificate coordination",
      "Letter of credit and trade finance document handling",
      "Bulk commodity and industrial goods export",
    ],
    specs: [
      { label: "Markets", value: "Europe, Asia, Middle East & beyond" },
      { label: "Products", value: "Commodities, industrial & general cargo" },
      { label: "Ports", value: "Mumbai, Chennai, Kandla & more" },
      { label: "Documentation", value: "Full export compliance" },
    ],
    whyUs: [
      "Pune-based team with deep export experience",
      "Integrated logistics — we move what you export",
      "Transparent process with dedicated account manager",
      "Trusted partner for ethanol, molasses & ENA exports",
    ],
  },
  {
    slug: "import-services",
    title: "Import Services",
    subtitle: "Streamlined import clearance and delivery",
    heroImage: siteImages.hero.global,
    cardImage: siteImages.products.import,
    icon: "import",
    tagline: "Hassle-free import clearance so you can focus on operations",
    description:
      "Our import services handle the full clearance cycle — customs procedures, duty calculations, regulatory compliance, and final delivery. Whether you are importing industrial machinery, raw materials, or commercial goods, we ensure zero unnecessary delays.",
    highlights: [
      "Bill of entry filing and customs duty assessment",
      "Import license and regulatory compliance checks",
      "Port handling and cargo release coordination",
      "Last-mile delivery to your facility",
    ],
    capabilities: [
      "Complex machinery and heavy equipment imports",
      "Raw material and commodity import clearance",
      "Advance authorization and duty drawback support",
      "Bonded warehouse and deferred duty options",
    ],
    specs: [
      { label: "Clearance", value: "Sea, air & ICD ports" },
      { label: "Compliance", value: "DGFT, customs & port regulations" },
      { label: "Delivery", value: "Pan-India last-mile options" },
      { label: "Turnaround", value: "Priority clearance available" },
    ],
    whyUs: [
      "Experienced with complex industrial imports",
      "Accurate duty calculations to avoid penalties",
      "Direct liaison with customs and port authorities",
      "End-to-end visibility from arrival to delivery",
    ],
  },
  {
    slug: "customs-clearance",
    title: "Customs Clearance",
    subtitle: "Expert customs brokerage at ports and airports",
    heroImage: siteImages.products.customs,
    cardImage: siteImages.products.customs,
    icon: "document",
    tagline: "Smooth customs clearance with full regulatory handling",
    description:
      "Our customs clearance team ensures your shipments pass through ports and airports without delays. We handle all documentation, duty assessments, examinations, and regulatory requirements — keeping your supply chain moving.",
    highlights: [
      "Licensed customs brokerage services",
      "Pre-clearance documentation review",
      "Duty optimization and classification guidance",
      "Examination and sampling coordination",
    ],
    capabilities: [
      "Import and export customs clearance",
      "Airport and seaport customs handling",
      "FTA and preferential duty claim support",
      "Compliance audits and record maintenance",
    ],
    specs: [
      { label: "Service", value: "Import & export clearance" },
      { label: "Locations", value: "Major Indian ports & airports" },
      { label: "Expertise", value: "General & specialized cargo" },
      { label: "Response", value: "Same-day clearance where possible" },
    ],
    whyUs: [
      "Deep knowledge of Indian customs regulations",
      "Proactive document verification before filing",
      "Strong relationships with customs officials",
      "Integrated with our freight and logistics teams",
    ],
  },
  {
    slug: "warehousing",
    title: "Warehousing & Distribution",
    subtitle: "Secure storage and efficient distribution",
    heroImage: siteImages.hero.warehouse,
    cardImage: siteImages.products.warehousing,
    icon: "warehouse",
    tagline: "Optimize your supply chain with reliable storage and dispatch",
    description:
      "Our warehousing and distribution services provide secure storage, inventory management, and efficient last-mile delivery. From bulk commodity storage to finished goods distribution, we keep your supply chain optimized and your goods moving.",
    highlights: [
      "Secure, organized warehouse storage facilities",
      "Inventory tracking and stock management",
      "Pick, pack, and dispatch operations",
      "Distribution network across Maharashtra and beyond",
    ],
    capabilities: [
      "Bulk liquid and dry goods storage coordination",
      "Cross-docking and transshipment services",
      "Order fulfillment and dispatch management",
      "Temperature-controlled storage arrangements",
    ],
    specs: [
      { label: "Storage", value: "Bulk & palletized goods" },
      { label: "Management", value: "Inventory tracking & reporting" },
      { label: "Distribution", value: "Regional & pan-India dispatch" },
      { label: "Integration", value: "Linked to freight & export services" },
    ],
    whyUs: [
      "Strategic Pune location near industrial hubs",
      "Flexible storage terms for seasonal demand",
      "Seamless handoff to freight forwarding",
      "Cost-effective distribution planning",
    ],
  },
  {
    slug: "sea-air-cargo",
    title: "Sea & Air Cargo",
    subtitle: "Flexible cargo solutions for every timeline and budget",
    heroImage: siteImages.products.cargo,
    cardImage: siteImages.products.cargo,
    icon: "plane",
    tagline: "The right mode for your cargo — urgent air or cost-effective sea",
    description:
      "We offer flexible sea and air cargo solutions tailored to your shipment size, timeline, and budget. Whether you need urgent air freight for time-critical goods or economical sea freight for bulk shipments, we find the optimal route and carrier.",
    highlights: [
      "Air freight for urgent and high-value shipments",
      "Sea freight for bulk and cost-sensitive cargo",
      "Sea-air combination for balanced speed and cost",
      "Container booking — FCL and LCL options",
    ],
    capabilities: [
      "Full container load (FCL) and less than container (LCL)",
      "Air cargo booking with major airlines",
      "Dangerous goods and special cargo handling",
      "Project cargo and oversized shipment coordination",
    ],
    specs: [
      { label: "Air Cargo", value: "Express & standard freight" },
      { label: "Sea Cargo", value: "FCL, LCL & breakbulk" },
      { label: "Routes", value: "Global trade lanes" },
      { label: "Transit", value: "Sea-air multimodal options" },
    ],
    whyUs: [
      "Carrier-neutral — we choose the best option for you",
      "Competitive rates through established partnerships",
      "End-to-end tracking across all modes",
      "Experienced in commodity and industrial cargo",
    ],
  },
  {
    slug: "documentation-compliance",
    title: "Documentation & Compliance",
    subtitle: "Complete trade documentation and regulatory compliance",
    heroImage: siteImages.products.documentation,
    cardImage: siteImages.products.documentation,
    icon: "compliance",
    tagline: "Every trade document accurate, complete, and on time",
    description:
      "Trade documentation is the backbone of international commerce. Our team prepares and verifies all export-import documents — bills of lading, certificates of origin, insurance, compliance certificates — ensuring accuracy and timeliness for every shipment.",
    highlights: [
      "Bill of lading and airway bill preparation",
      "Certificate of origin and commercial invoices",
      "Insurance documentation and claims support",
      "Export-import regulatory compliance audits",
    ],
    capabilities: [
      "DGFT and customs documentation filing",
      "Phytosanitary and health certificate coordination",
      "Letter of credit document preparation",
      "Trade agreement and FTA documentation",
    ],
    specs: [
      { label: "Documents", value: "Full export-import suite" },
      { label: "Compliance", value: "Indian & destination country rules" },
      { label: "Accuracy", value: "Pre-shipment verification process" },
      { label: "Turnaround", value: "Rapid document preparation" },
    ],
    whyUs: [
      "Zero-tolerance approach to documentation errors",
      "Up-to-date knowledge of trade regulations",
      "Integrated with customs and freight teams",
      "Prevents costly shipment delays and penalties",
    ],
  },
];

export function getService(slug: string): ServicePage | undefined {
  return services.find((s) => s.slug === slug);
}
