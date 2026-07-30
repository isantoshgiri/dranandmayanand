import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

const programs = [
  { title: "Bindu Dhyaan", mode: "Online & Offline", text: "Single-point focus meditation to steady and concentrate the mind." },
  { title: "Kundalini Jagran", mode: "Offline Retreat", text: "Guided awakening of dormant energy under direct supervision." },
  { title: "Shaktipaat Kriya", mode: "Offline", text: "Transmission of spiritual energy from Guru to disciple." },
  { title: "Sudarshan Kriya", mode: "Online & Offline", text: "Rhythmic breathing practice for clarity and emotional release." },
  { title: "Shiv Yog & Hatha Yog", mode: "Online & Offline", text: "Classical yogic disciplines building strength and stillness together." },
  { title: "Raj Yog", mode: "Online", text: "The royal path of meditation for mastery over the mind." },
];

export function MeditationPrograms() {
  return (
    <section className="section bg-cream-50 dark:bg-navy-950">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Meditation"
          title="A complete system of practice"
          description="Yog, Dhyaan, Bindu Dhyaan, Kundalini Jagran, Shaktipaat Kriya, Sudarshan Kriya, Shiv Yog, Hatha Yog, Raj Yog — offered both online and offline."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <ScrollReveal key={program.title} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-ink-900/10 bg-white/70 p-7 transition-all duration-300 hover:border-gold-500/40 hover:shadow-card dark:border-gold-300/10 dark:bg-navy-800/50">
                <span className="eyebrow !text-[10px]">{program.mode}</span>
                <h3 className="mt-3 font-display text-xl text-ink-900 dark:text-cream-50">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700 dark:text-cream-100/70">
                  {program.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button href="/meditation" variant="outline" showArrow>
            Explore All Programs
          </Button>
        </div>
      </div>
    </section>
  );
}
