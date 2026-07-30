"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stats = [
  { end: 50000, suffix: "+", label: "Devotees Guided" },
  { end: 25, suffix: "+", label: "Countries Reached" },
  { end: 300, suffix: "+", label: "Katha & Satsang Events" },
  { end: 11, suffix: "", label: "Aatma Milan Benefits Documented" },
];

function StatCounter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, value } = useCountUp(end);
  return (
    <div ref={ref} className="text-center">
      <div className="font-data text-4xl font-semibold text-gold-300 md:text-5xl">
        {value.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-cream-50/60">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="container-px relative mx-auto grid max-w-6xl grid-cols-2 gap-10 md:grid-cols-4">
        {stats.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 0.08}>
            <StatCounter {...s} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
