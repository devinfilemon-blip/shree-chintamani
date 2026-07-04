import Link from "next/link";
import { companyInfo } from "../data/companyInfo";
import type { ServicePage } from "../data/servicePages";
import { productIcons } from "./ProductIcons";

export default function ServiceDetail({ service }: { service: ServicePage }) {
  const Icon = productIcons[service.icon];

  return (
    <>
      <section className="relative pt-[80px] lg:pt-[96px] min-h-[420px] lg:min-h-[520px] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/75 to-navy/40" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-4 lg:px-10 py-14 lg:py-20 w-full">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-white/70 text-sm hover:text-orange transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to services
          </Link>
          <div className="flex items-start gap-5">
            {Icon && (
              <div className="w-16 h-16 rounded-full bg-orange/20 border border-orange/40 flex items-center justify-center shrink-0">
                <Icon className="w-9 h-9" />
              </div>
            )}
            <div>
              <p className="text-orange font-bold text-xs uppercase tracking-[0.2em] mb-3">Our Services</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">{service.title}</h1>
              <p className="text-white/80 text-lg mt-3 max-w-2xl">{service.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading mb-4">{service.tagline}</h2>
              <div className="w-12 h-1 bg-orange mb-6" />
              <p className="text-muted text-[15px] leading-relaxed">{service.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`tel:${companyInfo.representatives[0].tel}`}
                  className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3 rounded transition-colors"
                >
                  Call {companyInfo.representatives[0].display}
                </a>
              </div>
            </div>
            <div
              className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${service.cardImage})` }}
            />
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-section-bg">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10">
          <h2 className="section-heading text-center mb-10">Key Highlights</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.highlights.map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md hover:border-orange/30 transition-all"
              >
                <span className="w-8 h-8 rounded-full bg-orange/15 text-orange flex items-center justify-center text-sm font-bold mb-4">
                  ✓
                </span>
                <p className="text-sm text-navy font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-heading mb-6">What We Handle</h2>
            <ul className="space-y-4">
              {service.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-orange mt-2 shrink-0" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-navy rounded-xl p-8 lg:p-10">
            <h2 className="text-xl font-bold text-white mb-6">Service Overview</h2>
            <dl className="space-y-4">
              {service.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between gap-4 border-b border-white/10 pb-4 last:border-0">
                  <dt className="text-white/60 text-sm">{spec.label}</dt>
                  <dd className="text-white text-sm font-semibold text-right">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-orange-pale">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-heading mb-6">Why SCLE India?</h2>
              <ul className="space-y-3">
                {service.whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                    <span className="text-orange font-bold">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 lg:p-10 shadow-md border border-border">
              <h3 className="text-xl font-bold text-navy mb-2">Enquire about {service.title}</h3>
              <p className="text-muted text-sm mb-6">
                Speak with our team for pricing, scheduling, and tailored logistics solutions.
              </p>
              <div className="space-y-3 text-sm">
                {companyInfo.representatives.map((rep) => (
                  <a
                    key={rep.tel}
                    href={`tel:${rep.tel}`}
                    className="flex items-center gap-3 text-navy hover:text-orange transition-colors font-semibold"
                  >
                    <span className="w-9 h-9 rounded-full bg-orange/10 flex items-center justify-center text-orange">📞</span>
                    <span>
                      {rep.name}
                      <br />
                      <span className="text-orange">{rep.display}</span>
                    </span>
                  </a>
                ))}
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3 text-navy hover:text-orange transition-colors font-semibold"
                >
                  <span className="w-9 h-9 rounded-full bg-orange/10 flex items-center justify-center text-orange">✉</span>
                  {companyInfo.email}
                </a>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full justify-center bg-orange hover:bg-orange-dark text-white font-semibold py-3 rounded transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
