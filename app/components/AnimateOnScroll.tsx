"use client";

import { useInView } from "../hooks/useInView";

type AnimateOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-in";
  delay?: number;
};

export default function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: AnimateOnScrollProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  const animClass = {
    "fade-up": "reveal-fade-up",
    "fade-in": "reveal-fade-in",
    "fade-left": "reveal-fade-left",
    "fade-right": "reveal-fade-right",
    "scale-in": "reveal-scale-in",
  }[animation];

  return (
    <div
      ref={ref}
      className={`reveal ${animClass} ${inView ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
