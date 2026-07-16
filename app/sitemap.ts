import type { MetadataRoute } from "next";
import { saleProducts } from "./data/productPages";
import { services } from "./data/servicePages";
import { siteUrl } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/cookie-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const productRoutes: MetadataRoute.Sitemap = saleProducts.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes, ...serviceRoutes];
}
