"use client";

import { companyInfo } from "../data/companyInfo";
import { siteImages } from "../data/images";
import AnimateOnScroll from "./AnimateOnScroll";

export default function AboutSection() {
  return (
    <section id="about" className="py-14 lg:py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <AnimateOnScroll animation="fade-left">
            <p className="section-label mb-5">About Us</p>
            <h2 className="text-2xl lg:text-3xl xl:text-[2rem] font-bold text-navy leading-tight uppercase tracking-wide">
              We Lead. We Deliver.
              <br />
              We Accomplish
            </h2>
            <p className="mt-6 text-[14px] text-muted leading-[1.8]">
              {companyInfo.name} is a Pune-based logistics and exports company dedicated to
              simplifying global trade for Indian businesses. We provide end-to-end freight
              forwarding, export-import services, and customs clearance with transparency and
              reliability.
            </p>
            <p className="mt-4 text-[14px] text-muted leading-[1.8]">
              We also supply bulk commodities — <strong className="text-navy">Ethanol, Molasses, ENA, Ginger &amp; Garlic</strong> — with integrated logistics for domestic and international buyers.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-right" delay={120}>
            <div className="relative group overflow-hidden rounded-xl">
              <div
                className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ backgroundImage: `url(${siteImages.about})` }}
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
