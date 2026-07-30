import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Calendar, MapPin } from "lucide-react";

const events = [
  { date: "12 Sept", title: "Aatma Milan Satsang", place: "Shree Guru Dham, Nathdwara" },
  { date: "28 Sept", title: "Shrimad Bhagwat Katha", place: "Udaipur, Rajasthan" },
  { date: "14 Oct", title: "Kundalini Jagran Retreat", place: "Shree Guru Dham, Nathdwara" },
];

export function UpcomingEvents() {
  return (
    <section className="section bg-white dark:bg-navy-900">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Upcoming Events"
          title="Join us for Satsang, Katha & Retreats"
          align="left"
          className="!mx-0 !text-left"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {events.map((event, i) => (
            <ScrollReveal key={event.title} delay={i * 0.08}>
              <div className="group h-full rounded-3xl border border-ink-900/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card dark:border-gold-300/10">
                <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/10 px-3 py-1 text-xs font-semibold text-saffron-500 dark:text-gold-300">
                  <Calendar className="h-3.5 w-3.5" />
                  {event.date}
                </span>
                <h3 className="mt-4 font-display text-xl text-ink-900 dark:text-cream-50">
                  {event.title}
                </h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-ink-700 dark:text-cream-100/70">
                  <MapPin className="h-4 w-4 text-saffron-500" />
                  {event.place}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12">
          <Button href="/events" variant="outline" showArrow>
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}
