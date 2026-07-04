import { siteImages } from "./images";

export type EthanolProcessStep = {
  title: string;
  detail?: string;
};

export type EthanolType = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  diagramImage: string;
  accent: "orange" | "green" | "blue";
  steps: EthanolProcessStep[];
  products: string[];
};

export const ethanolTypes: EthanolType[] = [
  {
    id: "grain",
    number: "01",
    title: "Grain-Based Ethanol",
    subtitle: "Corn, wheat, sorghum & other grains",
    description:
      "Produced from grains like corn, wheat, barley and other cereals through milling, fermentation and distillation.",
    image: siteImages.saleProducts.ethanolGrain,
    diagramImage: siteImages.saleProducts.ethanolGrainSteps,
    accent: "orange",
    steps: [
      { title: "Grain", detail: "Corn, wheat, sorghum, etc." },
      { title: "Milling", detail: "Grind grain into flour" },
      { title: "Fermentation", detail: "Yeast converts sugar to ethanol + CO₂" },
      { title: "Distillation", detail: "Separate ethanol from the mixture" },
      { title: "Dehydration", detail: "Remove water for 99.5%+ pure ethanol" },
      { title: "Ethanol Storage", detail: "Ready for fuel & industrial use" },
    ],
    products: ["Ethanol", "CO₂", "Distillers Grains with Solubles"],
  },
  {
    id: "sugarcane",
    number: "02",
    title: "Sugarcane Ethanol",
    subtitle: "Integrated sugar & ethanol from cane juice",
    description:
      "Derived from sugarcane juice or molasses using extraction, fermentation and distillation — often integrated with sugar production.",
    image: siteImages.saleProducts.ethanolSugarcane,
    diagramImage: siteImages.saleProducts.ethanolDiagramSugarcane,
    accent: "green",
    steps: [
      { title: "Sugarcane", detail: "Fresh cane harvested & processed" },
      { title: "Extractor", detail: "Juice extraction from cane" },
      { title: "Juice Treatment", detail: "Prepared for sugar or ethanol path" },
      { title: "Fermenter", detail: "Juice, syrup & molasses fermented" },
      { title: "Distillation", detail: "Wine converted to ethanol" },
      { title: "Ethanol", detail: "Fuel-grade & industrial ethanol" },
    ],
    products: ["Ethanol", "Sugar", "Bagasse", "Molasses"],
  },
  {
    id: "maize",
    number: "03",
    title: "Maize-Based Ethanol",
    subtitle: "Dry-mill process from corn (maize)",
    description:
      "Produced from maize (corn) starch through enzymatic conversion, fermentation and distillation in a dry-mill facility.",
    image: siteImages.saleProducts.ethanolMaize,
    diagramImage: siteImages.saleProducts.ethanolDiagramGrain,
    accent: "blue",
    steps: [
      { title: "Corn (Maize)", detail: "Primary starch feedstock" },
      { title: "Grind", detail: "Corn ground into fine meal" },
      { title: "Cook & Liquefy", detail: "Enzymes added for conversion" },
      { title: "Saccharify", detail: "Yeast added — sugar to ethanol" },
      { title: "Fermentation", detail: "Ethanol & CO₂ produced" },
      { title: "Distillation", detail: "Pure ethanol separated & stored" },
    ],
    products: ["Ethanol", "CO₂", "Distillers Grains with Solubles"],
  },
];
