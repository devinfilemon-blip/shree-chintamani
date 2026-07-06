"use client";

import { useState, useEffect } from "react";
import { caseStudies } from "../data/homeContent";

export default function CaseStudiesSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % caseStudies.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section>
      <div className="relative h-[400px] lg:h-[480px]">
        {caseStudies.map((s, i) => (
          <div
            key={s.number}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center ${i === active ? "hero-ken-burns" : ""}`}
              style={{ backgroundImage: `url(${s.image})` }}
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}

        <div className="absolute bottom-0 left-0 right-0 bg-navy/90">
          <div className="max-w-[1320px] mx-auto px-4 lg:px-8 py-4 lg:py-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 lg:gap-2">
            {caseStudies.map((s, i) => (
              <button
                key={s.number}
                type="button"
                onClick={() => setActive(i)}
                className="text-left px-3 py-2 hover:bg-white/5 transition-colors rounded"
              >
                <span className="text-orange font-bold text-lg mr-2">{s.number}</span>
                <span className={`text-sm ${i === active ? "text-white font-semibold" : "text-white/70"}`}>
                  {s.short}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
