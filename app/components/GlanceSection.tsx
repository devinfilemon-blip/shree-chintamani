"use client";

import { glanceStats, glanceDetails } from "../data/homeContent";
import { companyInfo } from "../data/companyInfo";
import { siteImages } from "../data/images";
import { useInView } from "../hooks/useInView";
import AnimateOnScroll from "./AnimateOnScroll";

export default function GlanceSection() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll animation="fade-left">
            <div className="relative overflow-hidden max-w-[480px]">
              <div
                className="aspect-square bg-cover bg-center"
                style={{ backgroundImage: `url(${siteImages.glance})` }}
              />
              <div
                ref={ref}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] px-8 py-6 text-center min-w-[130px] border border-border"
              >
                <p className={`text-4xl font-bold text-orange ${inView ? "stat-pop" : ""}`}>7+</p>
                <p className="text-sm text-muted mt-1 font-medium">Services</p>
              </div>
            </div>
            <p className="text-xs text-muted italic mt-4">( These highlights reflect SCLE India capabilities. )</p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-right" delay={100}>
            <h2 className="section-heading mb-5">{companyInfo.shortName} At A Glance</h2>
            <h3 className="text-[15px] font-bold text-navy mb-5 leading-snug">
              Logistics &amp; export capabilities from Pune, India
            </h3>
            <ul className="space-y-3">
              {glanceDetails.map((d) => (
                <li key={d} className="flex items-start gap-3 text-[13px] text-muted leading-[1.7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-4 gap-3 mt-8">
              {glanceStats.slice(0, 4).map((s, i) => (
                <div
                  key={s.label}
                  className={`text-center py-3 bg-section-bg ${inView ? "stat-pop" : ""}`}
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <p className="text-lg font-bold text-orange">{s.value}</p>
                  <p className="text-[9px] uppercase tracking-wider text-muted mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
