import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { timeline } from "@/lib/site-data";
import { Button } from "@/components/ui/Button";

export function Journey() {
  return (
    <section className="section bg-white dark:bg-navy-900">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="The Journey"
          title="A life shaped from Nathdwara to the world"
          align="left"
          className="!mx-0 !text-left"
        />

        <div className="relative mt-16 pl-8">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-gold-500 via-gold-300/40 to-transparent" />
          <ol className="space-y-12">
            {timeline.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.08} direction="left">
                <li className="relative">
                  <span className="absolute -left-8 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-gold-500 bg-cream-50 font-data text-[10px] font-semibold text-saffron-500 dark:bg-navy-900 dark:text-gold-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-data text-xs uppercase tracking-[0.2em] text-saffron-500 dark:text-gold-300">
                    {step.year}
                  </span>
                  <h3 className="mt-2 font-display text-2xl text-ink-900 dark:text-cream-50">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-700 dark:text-cream-100/70">
                    {step.text}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>

        <div className="mt-14">
          <Button href="/about-guru" variant="outline" showArrow>
            Read the Full Biography
          </Button>
        </div>
      </div>
    </section>
  );
}
