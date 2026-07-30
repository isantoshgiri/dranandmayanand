import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { hospital } from "@/lib/site-data";

export function HospitalProjectPreview() {
  return (
    <section className="section relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-900/60 to-navy-950" />
      <div className="container-px relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <ScrollReveal direction="left">
          <span className="eyebrow">
            <span className="rule-gold" />
            {hospital.campaign}
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-cream-50 md:text-5xl">
            {hospital.name}
          </h2>
          <p className="mt-5 max-w-lg text-cream-100/70 leading-relaxed">{hospital.intro}</p>

          <div className="mt-8 space-y-4">
            {hospital.facilities.map((f) => (
              <div key={f.title} className="border-l-2 border-gold-500/40 pl-4">
                <p className="font-display text-sm text-gold-300">{f.title}</p>
                <p className="text-xs text-cream-100/60">{f.items}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/hospital-project" showArrow>
              See the Master Plan
            </Button>
            <Button href="/donate" variant="outline" className="!text-cream-50 !border-cream-50/20">
              Sponsor a Patient
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="glass-card p-3">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-gold-300/10 to-transparent">
              <div className="flex h-full w-full items-center justify-center text-cream-50/30">
                <span className="font-display text-sm tracking-widest">HOSPITAL RENDER</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
