import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { PlayCircle, ArrowRight } from "lucide-react";

const videos = [
  { title: "Bhagwat Katha — Highlights", duration: "12:40" },
  { title: "Aatma Milan: Inside the Practice", duration: "08:15" },
  { title: "Hospital of Hope — Groundbreaking", duration: "05:32" },
];

const blogs = [
  { title: "What Sankalp Siddhi Really Means", category: "Meditation" },
  { title: "The Mind: Root of Bondage and Liberation", category: "Teachings" },
  { title: "Inside the SBK Cancer Charitable Hospital Plan", category: "Charity" },
];

export function LatestMedia() {
  return (
    <section className="section bg-cream-50 dark:bg-navy-950">
      <div className="container-px mx-auto max-w-7xl grid gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Latest Videos" title="Watch the mission" align="left" className="!mx-0 !text-left" />
          <div className="mt-10 space-y-4">
            {videos.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.06}>
                <div className="group flex items-center gap-4 rounded-2xl border border-ink-900/10 p-4 transition-colors hover:border-gold-500/40 dark:border-gold-300/10">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-saffron-500 dark:text-gold-300">
                    <PlayCircle className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="font-display text-base text-ink-900 dark:text-cream-50">{v.title}</p>
                    <p className="text-xs text-ink-700/60 dark:text-cream-100/50">{v.duration}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/media" variant="ghost" showArrow>Visit Media Center</Button>
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Latest Blogs" title="Read the teachings" align="left" className="!mx-0 !text-left" />
          <div className="mt-10 space-y-4">
            {blogs.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.06}>
                <a href="/blog" className="group flex items-center justify-between rounded-2xl border border-ink-900/10 p-5 transition-colors hover:border-gold-500/40 dark:border-gold-300/10">
                  <div>
                    <span className="eyebrow !text-[10px]">{b.category}</span>
                    <p className="mt-1 font-display text-base text-ink-900 dark:text-cream-50">{b.title}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-saffron-500 transition-transform group-hover:translate-x-1 dark:text-gold-300" />
                </a>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/blog" variant="ghost" showArrow>Read All Articles</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
