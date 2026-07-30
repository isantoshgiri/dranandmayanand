import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { aatmaMilanPillars } from "@/lib/site-data";

export function AatmaMilanPreview() {
  return (
    <section className="section relative overflow-hidden bg-navy-900">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="container-px relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Aatma Milan — Sankalp Siddhi"
          title="Know yourself. Awaken yourself. Attain yourself."
          description="A divine method created from Shree Gurudev's own sadhana, tapasya and research — open to anyone seeking material, mental and spiritual well-being through collective meditation."
          className="[&_h2]:text-cream-50 [&_p]:text-cream-100/70"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {aatmaMilanPillars.map((pillar, i) => (
            <ScrollReveal key={pillar.key} delay={i * 0.1}>
              <div className="glass-card relative h-full p-8">
                <span className="font-display text-4xl text-gold-300/80">{pillar.hindi}</span>
                <h3 className="mt-4 font-display text-2xl text-cream-50">{pillar.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-wide text-saffron-500">
                  {pillar.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-cream-100/70">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button href="/aatma-milan#join" showArrow>
            Join the Program
          </Button>
        </div>
      </div>
    </section>
  );
}
