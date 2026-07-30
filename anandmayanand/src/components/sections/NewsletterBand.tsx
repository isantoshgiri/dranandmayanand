import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function NewsletterBand() {
  return (
    <section className="bg-cream-50 py-20 dark:bg-navy-950">
      <div className="container-px mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h3 className="font-display text-2xl text-ink-900 dark:text-cream-50 md:text-3xl">
            Receive Satsang dates, retreats & hospital updates
          </h3>
          <form className="mx-auto mt-7 flex max-w-md overflow-hidden rounded-full border border-ink-900/15 dark:border-gold-300/20">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent px-6 py-3.5 text-sm outline-none placeholder:text-ink-900/40 dark:placeholder:text-cream-50/40"
            />
            <button className="shrink-0 bg-gradient-to-b from-gold-300 to-gold-500 px-6 text-sm font-semibold text-navy-950">
              Subscribe
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
