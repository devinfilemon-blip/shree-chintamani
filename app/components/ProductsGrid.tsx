"use client";

import Link from "next/link";
import { products } from "../data/homeContent";
import { saleProducts } from "../data/productPages";
import { productIcons, IconLeaves } from "./ProductIcons";
import AnimateOnScroll from "./AnimateOnScroll";

const gridProducts = products.filter((p) => !p.featured);
const featured = products.find((p) => p.featured)!;

const serviceSlugMap: Record<string, string> = {
  freight: "freight-forwarding",
  export: "export-services",
  import: "import-services",
  customs: "customs-clearance",
  warehousing: "warehousing",
  cargo: "sea-air-cargo",
  documentation: "documentation-compliance",
};

function CommodityCard({
  product,
  delay,
}: {
  product: (typeof saleProducts)[number];
  delay: number;
}) {
  const Icon = productIcons[product.icon];
  return (
    <AnimateOnScroll animation="fade-up" delay={delay}>
      <Link
        href={`/products/${product.slug}`}
        className="group bg-white rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(0,51,102,0.08)] hover:shadow-[0_12px_40px_rgba(0,51,102,0.14)] transition-all duration-300 h-full flex flex-col border-2 border-orange/20 hover:border-orange"
      >
        <div className="relative h-44 lg:h-48 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${product.cardImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
          <div className="absolute top-3 left-3 bg-orange text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            Bulk Supply
          </div>
          {Icon && (
            <div className="absolute bottom-3 left-4 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center">
              <Icon className="w-6 h-6" />
            </div>
          )}
        </div>
        <div className="p-5 lg:p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-navy group-hover:text-orange transition-colors">{product.title}</h3>
          <p className="text-muted text-sm mt-2 leading-relaxed flex-1">{product.tagline}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-orange text-sm font-semibold">
            View product
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </Link>
    </AnimateOnScroll>
  );
}

export default function ProductsGrid() {
  return (
    <section id="products" className="relative z-10 bg-section-bg pt-14 lg:pt-20 pb-14 lg:pb-20">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-10 lg:mb-12">
            <p className="section-label text-orange mb-3">What We Offer</p>
            <h2 className="section-heading">Our Products &amp; Services</h2>
            <div className="w-12 h-1 bg-orange mx-auto mt-5 mb-5" />
            <p className="text-muted text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
              Bulk supply of <strong className="text-navy">Ethanol</strong>, <strong className="text-navy">Molasses</strong>,{" "}
              <strong className="text-navy">ENA</strong>, <strong className="text-navy">Ginger</strong> &amp;{" "}
              <strong className="text-navy">Garlic</strong> — plus end-to-end logistics and export solutions.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Commodity products — Ethanol, Molasses, ENA */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-center text-sm font-bold text-navy uppercase tracking-[0.15em] mb-6">
            Our Commodity Products
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
            {saleProducts.map((p, i) => (
              <CommodityCard key={p.slug} product={p} delay={i * 80} />
            ))}
          </div>
        </div>

        <h3 className="text-center text-sm font-bold text-navy uppercase tracking-[0.15em] mb-8">
          Logistics &amp; Export Services
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {gridProducts.map((p, i) => {
            const Icon = productIcons[p.icon];
            return (
              <AnimateOnScroll key={p.id} animation="fade-up" delay={i * 70}>
                <Link
                  href={`/services/${serviceSlugMap[p.id]}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(0,51,102,0.06)] hover:shadow-[0_12px_40px_rgba(0,51,102,0.12)] transition-all duration-400 h-full flex flex-col border border-white hover:border-orange/25"
                >
                  <div className="relative h-48 lg:h-52 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${p.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />

                    {Icon && (
                      <div className="absolute bottom-4 left-5 w-12 h-12 rounded-full bg-white/95 shadow-md flex items-center justify-center">
                        <Icon className="w-7 h-7" />
                      </div>
                    )}
                  </div>

                  <div className="p-6 lg:p-7 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-navy mb-2.5 leading-snug group-hover:text-orange transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed flex-1">{p.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-orange text-sm font-semibold">
                      View service
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll animation="fade-up" delay={150} className="mt-8 lg:mt-10">
          <div className="group relative overflow-hidden rounded-xl bg-navy shadow-[0_8px_32px_rgba(0,51,102,0.2)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-orange" />

            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-orange/15 border border-orange/30 flex items-center justify-center shrink-0">
                    <IconLeaves className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-orange text-xs font-bold uppercase tracking-[0.15em] mb-2">
                      Featured Service
                    </p>
                    <h3 className="text-xl lg:text-2xl font-bold text-white leading-snug">
                      {featured.title}
                      {featured.subtitle && (
                        <span className="block text-white/60 text-base font-normal mt-1">
                          {featured.subtitle}
                        </span>
                      )}
                    </h3>
                  </div>
                </div>
                <p className="text-white/70 text-sm lg:text-[15px] leading-relaxed mt-6 max-w-xl">
                  {featured.description}
                </p>
                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white text-sm font-semibold px-6 py-3 rounded transition-colors duration-300"
                >
                  Get in touch
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              <div className="relative h-56 lg:h-auto min-h-[220px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${featured.image})` }}
                />
                <div className="absolute inset-0 bg-navy/30 lg:bg-transparent lg:bg-gradient-to-l lg:from-navy lg:via-navy/40 lg:to-transparent" />
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
