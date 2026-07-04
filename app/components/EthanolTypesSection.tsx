import Image from "next/image";
import { ethanolTypes } from "../data/ethanolTypes";
import AnimateOnScroll from "./AnimateOnScroll";

const accentStyles = {
  orange: {
    badge: "bg-orange text-white",
    stepFirst: "border-green-600/40 bg-green-50 text-green-800",
    stepRest: "border-orange/30 bg-orange/5 text-navy",
    product: "bg-orange/10 text-orange border-orange/20",
  },
  green: {
    badge: "bg-emerald-600 text-white",
    stepFirst: "border-green-600/40 bg-green-50 text-green-800",
    stepRest: "border-emerald-500/30 bg-emerald-50/80 text-navy",
    product: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  blue: {
    badge: "bg-sky-600 text-white",
    stepFirst: "border-green-600/40 bg-green-50 text-green-800",
    stepRest: "border-sky-500/30 bg-sky-50/80 text-navy",
    product: "bg-sky-50 text-sky-700 border-sky-200",
  },
};

function ProcessFlow({ steps, accent }: { steps: typeof ethanolTypes[0]["steps"]; accent: keyof typeof accentStyles }) {
  const styles = accentStyles[accent];

  return (
    <div className="rounded-xl border border-border p-4 bg-white">
      <div className="space-y-0">
        {steps.map((step, i) => (
          <div key={step.title}>
            <div
              className={`rounded-lg border px-4 py-3 text-center ${
                i === 0 ? styles.stepFirst : styles.stepRest
              }`}
            >
              <p className="font-bold text-sm">{step.title}</p>
              {step.detail && <p className="text-xs text-muted mt-0.5 leading-snug">{step.detail}</p>}
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-1">
                <svg className="w-4 h-4 text-orange" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 12L3 6h10L8 12z" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function EthanolTypeCard({ type, index }: { type: (typeof ethanolTypes)[0]; index: number }) {
  const styles = accentStyles[type.accent];

  return (
    <AnimateOnScroll animation="fade-up" delay={index * 80}>
      <article className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={type.image}
            alt={`${type.title} — ${type.id === "grain" ? "wheat and grain" : type.id === "sugarcane" ? "sugarcane stalks" : "maize corn powder"}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="p-6 lg:p-7 flex flex-col flex-1">
          <div className="flex items-start gap-3 mb-4">
            <span className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${styles.badge}`}>
              {type.number}
            </span>
            <div>
              <h3 className="font-bold text-navy text-lg leading-snug">{type.title}</h3>
              <p className="text-muted text-sm mt-1">{type.subtitle}</p>
            </div>
          </div>

          <p className="text-muted text-sm leading-relaxed mb-5">{type.description}</p>

          <ProcessFlow steps={type.steps} accent={type.accent} />

          <div className="mt-5 flex flex-wrap gap-2">
            {type.products.map((product) => (
              <span
                key={product}
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${styles.product}`}
              >
                {product}
              </span>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-border bg-white p-3 overflow-hidden">
            <p className="text-[11px] font-bold uppercase tracking-wider text-muted mb-2 text-center">
              {type.id === "grain" ? "6 Simple Steps" : "Process Diagram"}
            </p>
            <Image
              src={type.diagramImage}
              alt={`${type.title} production process diagram`}
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </article>
    </AnimateOnScroll>
  );
}

export default function EthanolTypesSection() {
  return (
    <section className="py-14 lg:py-20 bg-section-bg">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-10">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-10 lg:mb-14">
            <p className="text-orange font-bold text-sm uppercase tracking-[0.2em] mb-3">
              Renewable Fuel Sources
            </p>
            <h2 className="section-heading">Types of Ethanol</h2>
            <div className="w-12 h-1 bg-orange mx-auto mt-5 mb-5" />
            <p className="text-muted text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
              Renewable fuel from different biomass sources — grain, sugarcane and maize-based ethanol
              production for fuel blending and industrial applications.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {ethanolTypes.map((type, i) => (
            <EthanolTypeCard key={type.id} type={type} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
