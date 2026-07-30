import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeartHandshake, Sparkles, Globe2 } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Self-Awakening",
    text: "Aatma Milan guides every seeker toward Swaatm Jagran — knowing the self, recognising the self, attaining the self.",
  },
  {
    icon: HeartHandshake,
    title: "Human Welfare",
    text: "Gau Seva and Prabhu Seva stand above any single discourse — service to the cow and service to God expressed as service to humanity.",
  },
  {
    icon: Globe2,
    title: "A Global Community",
    text: "Bhagwat Katha and Ram Katha carried across India and around the world, uniting devotees across cultures in one Satsang.",
  },
];

export function Mission() {
  return (
    <section className="section bg-cream-50 dark:bg-navy-950">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Mission"
          title="Mind is the root of both bondage and liberation"
          description="Sadkarm brings joy; asadkarm brings sorrow — two sides of the same coin, seen through the mirror of the spirit as positive and negative energy. Aatma Milan exists to still the mind and reunite it with the self."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <div className="group h-full rounded-4xl border border-ink-900/10 bg-white/60 p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 dark:border-gold-300/10 dark:bg-navy-800/60">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-b from-gold-300/20 to-transparent text-saffron-500 dark:text-gold-300">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-xl text-ink-900 dark:text-cream-50">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700 dark:text-cream-100/70">
                  {p.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
