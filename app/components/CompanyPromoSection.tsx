import Link from "next/link";
import { coreServices, companyInfo } from "../data/companyInfo";
import { saleProducts } from "../data/productPages";
import AnimateOnScroll from "./AnimateOnScroll";

function ServiceIcon({ type }: { type: string }) {
  const s = { stroke: "#f26522", strokeWidth: 2, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (type) {
    case "globe":
      return (
        <svg className="w-10 h-10" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="18" {...s} />
          <path d="M4 24h40M24 6c6 8 6 26 0 36M24 6c-6 8-6 26 0 36" {...s} />
        </svg>
      );
    case "tanker":
      return (
        <svg className="w-10 h-10" viewBox="0 0 48 48">
          <rect x="4" y="16" width="28" height="16" rx="2" {...s} />
          <path d="M32 20h10l4 8v4H32V20z" {...s} />
          <circle cx="14" cy="32" r="4" {...s} />
          <circle cx="36" cy="32" r="4" {...s} />
        </svg>
      );
    case "warehouse":
      return (
        <svg className="w-10 h-10" viewBox="0 0 48 48">
          <path d="M6 20L24 8l18 12v20H6V20z" {...s} />
          <path d="M18 32h12v12H18z" {...s} />
        </svg>
      );
    case "ship":
      return (
        <svg className="w-10 h-10" viewBox="0 0 48 48">
          <path d="M4 32h40M8 32l4-12h24l4 12M20 20V8h8v12" {...s} />
        </svg>
      );
    case "handshake":
      return (
        <svg className="w-10 h-10" viewBox="0 0 48 48">
          <path d="M8 28l6-6 8 8 10-10 8 8 6-6" {...s} />
          <path d="M4 36h40" {...s} />
        </svg>
      );
    default:
      return (
        <svg className="w-10 h-10" viewBox="0 0 48 48">
          <path d="M12 24l8 8 16-16" {...s} />
          <path d="M8 36c4-8 12-12 16-12s12 4 16 12" {...s} />
        </svg>
      );
  }
}

export default function CompanyPromoSection() {
  return (
    <section id="services" className="py-14 lg:py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-10 lg:mb-14">
            <p className="text-orange font-bold text-sm uppercase tracking-[0.2em] mb-3">
              {companyInfo.motto}
            </p>
            <h2 className="section-heading">Our Services</h2>
            <div className="w-12 h-1 bg-orange mx-auto mt-5" />
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6 mb-14 lg:mb-16">
          {coreServices.map((service, i) => (
            <AnimateOnScroll key={service.title} animation="fade-up" delay={i * 60}>
              <div className="text-center p-6 rounded-xl border border-border bg-section-bg/50 hover:border-orange/40 hover:shadow-md transition-all h-full">
                <div className="w-16 h-16 mx-auto rounded-full bg-orange/10 flex items-center justify-center text-orange mb-4">
                  <ServiceIcon type={service.icon} />
                </div>
                <h3 className="font-bold text-navy text-sm leading-snug mb-2">{service.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{service.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Featured products row — Ethanol, Molasses, ENA */}
        <AnimateOnScroll animation="fade-up">
          <h3 className="text-center text-lg font-bold text-navy uppercase tracking-wide mb-8">
            Our Products
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 mb-14 lg:mb-16">
            {saleProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex flex-col items-center text-center"
              >
                  <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 border-orange shadow-lg mb-4 group-hover:scale-105 transition-transform">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${p.cardImage})` }}
                    />
                  </div>
                  <h4 className="font-bold text-navy text-lg group-hover:text-orange transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-muted text-xs mt-1 max-w-[200px]">{p.subtitle}</p>
                </Link>
            ))}
          </div>
        </AnimateOnScroll>
      </div>

      <div className="mt-14 bg-[#2a2a2a] py-4">
        <p className="text-center text-white font-bold text-sm uppercase tracking-[0.25em]">
          {companyInfo.bannerSlogan}
        </p>
      </div>
    </section>
  );
}
