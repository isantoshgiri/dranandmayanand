import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { hospital } from "@/lib/site-data";
import { Copy } from "lucide-react";

const causes = [
  { title: "Sponsor a Cancer Patient", text: "Fund treatment for a child battling cancer at SBK Cancer Charitable Hospital." },
  { title: "Support the Hospital Build", text: "Contribute to the Hospital of Hope campus — labs, wards and research center." },
  { title: "General Mission Fund", text: "Support Aatma Milan, Katha events and human welfare programs." },
];

export function DonationCTA() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-navy-900 to-navy-950">
      <div className="container-px relative mx-auto max-w-6xl">
        <ScrollReveal className="text-center">
          <span className="eyebrow justify-center">
            <span className="rule-gold" />
            Donate
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-3xl font-medium text-cream-50 md:text-5xl">
            No mother should see her child suffer from cancer
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-cream-100/70">
            Any help, no matter how small, is deeply appreciated and much needed. Your donation is
            exempt under Section 80G of the Income Tax Act, 1961.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {causes.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.08}>
              <div className="glass-card flex h-full flex-col justify-between p-7">
                <div>
                  <h3 className="font-display text-lg text-cream-50">{c.title}</h3>
                  <p className="mt-2 text-sm text-cream-100/60">{c.text}</p>
                </div>
                <Button href="/donate" className="mt-6 w-full justify-center" showArrow>
                  Donate Now
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15}>
          <div className="mt-12 rounded-3xl border border-gold-300/20 bg-white/5 p-8 text-sm text-cream-100/70">
            <p className="font-data text-xs uppercase tracking-[0.2em] text-gold-300">
              Direct Bank Transfer — {hospital.donation.accountName}
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <p className="flex items-center gap-2">
                A/C No. <span className="font-data text-cream-50">{hospital.donation.accountNo}</span>
                <Copy className="h-3.5 w-3.5 text-gold-300" />
              </p>
              <p className="flex items-center gap-2">
                IFSC <span className="font-data text-cream-50">{hospital.donation.ifsc}</span>
                <Copy className="h-3.5 w-3.5 text-gold-300" />
              </p>
            </div>
            <p className="mt-4 text-xs text-cream-100/50">{hospital.donation.taxNote}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
