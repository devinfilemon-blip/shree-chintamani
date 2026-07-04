"use client";

import { useState, useEffect } from "react";
import { sustainabilityPillars } from "../data/homeContent";

export default function SustainabilitySection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % sustainabilityPillars.length), 5000);
    return () => clearInterval(t);
  }, []);

  const pillar = sustainabilityPillars[active];

  return (
    <section id="sustainability" className="py-14 lg:py-20 bg-sustain-green overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-white uppercase tracking-wide mb-8">
              Sustainability
            </h2>
            <p className="text-white/95 text-[14px] leading-[1.8] mb-4">
              Sustainability is an integral part of our business and our Governance framework
              reflects our commitment towards responsible trade and logistics.
            </p>
            <p className="text-white/95 text-[14px] leading-[1.8] mb-4">
              We understand the significance of being socially responsible. We engage in
              sustainable practices with a strong motive of enriching the lives of communities
              where we operate.
            </p>
            <p className="text-white/95 text-[14px] leading-[1.8] mb-8">
              Our framework is aligned with ethical trade, environmental responsibility, and
              United Nations Sustainable Development Goals (SDGs).
            </p>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-orange text-navy text-sm font-bold">
              <span>🌍</span> ESG WORLD
            </div>
          </div>

          {/* chini circular graphic — image ring + green inner circle on right */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[340px] h-[340px] lg:w-[420px] lg:h-[420px]">
              <div
                key={pillar.image}
                className="absolute inset-0 rounded-full bg-cover bg-center product-img-enter"
                style={{ backgroundImage: `url(${pillar.image})` }}
              />
              <div
                className="absolute right-0 top-[8%] w-[72%] h-[84%] rounded-full bg-sustain-green flex flex-col items-center justify-center text-center px-6 lg:px-10 product-img-enter"
              >
                <div className="w-14 h-14 mb-3 rounded-full bg-white/15 flex items-center justify-center text-3xl">
                  {pillar.icon === "environment" ? "🌿" : pillar.icon === "social" ? "👥" : "⚖️"}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-white/90 text-[13px] leading-[1.7] line-clamp-6">{pillar.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {sustainabilityPillars.map((p, i) => (
            <button
              key={p.title}
              type="button"
              onClick={() => setActive(i)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wide transition-all ${
                i === active ? "bg-orange text-white" : "bg-white/20 text-white hover:bg-white/30"
              } rounded-full`}
            >
              {p.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
