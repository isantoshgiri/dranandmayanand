import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

const tiles = Array.from({ length: 6 }).map((_, i) => i);

export function GalleryPreview() {
  return (
    <section className="section bg-white dark:bg-navy-900">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="Gallery" title="Moments from the mission" />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {tiles.map((i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gold-300/10 to-transparent ${
                  i === 0 ? "aspect-square md:col-span-2 md:aspect-[2/1]" : "aspect-square"
                }`}
              >
                <div className="flex h-full w-full items-center justify-center text-ink-900/20 transition-transform duration-500 group-hover:scale-105 dark:text-cream-50/20">
                  <span className="font-display text-xs tracking-widest">GALLERY IMAGE {i + 1}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/gallery" variant="outline" showArrow>
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
