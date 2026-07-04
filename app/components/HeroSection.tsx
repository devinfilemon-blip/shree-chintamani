"use client";

import { useState, useEffect } from "react";
import { heroSlides } from "../data/homeContent";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
      setKey((k) => k + 1);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[current];

  return (
    <section id="home" className="relative pt-[80px] lg:pt-[96px] bg-section-bg overflow-hidden">
      <div className="relative h-[calc(100dvh-80px)] lg:h-[calc(100dvh-96px)] overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={s.image}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ${i === current ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center ${i === current ? "hero-ken-burns" : ""}`}
              style={{ backgroundImage: `url(${s.image})` }}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}

        <div className="absolute right-4 md:right-14 lg:right-20 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col gap-4">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setCurrent(i);
                setKey((k) => k + 1);
              }}
              className={`rounded-full border-2 border-white transition-all ${
                i === current ? "w-3.5 h-3.5 bg-white" : "w-3 h-3 bg-transparent hover:bg-white/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="relative z-10 h-full max-w-[1320px] mx-auto px-4 lg:px-8 flex items-center">
          <div className="max-w-2xl sm:pr-20 lg:pr-28" key={key}>
            <h1 className="text-[1.65rem] sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-white leading-[1.15] hero-line-in hero-line-in-1">
              {slide.title}
            </h1>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed max-w-xl hero-line-in hero-line-in-2">
              {slide.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
