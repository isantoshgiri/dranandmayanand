"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Devotee, Udaipur",
    text: "Aatma Milan gave my mind a stillness I had been searching for years. The Sankalp Siddhi process changed how I carry stress.",
  },
  {
    name: "Devotee, Mumbai",
    text: "Attending Shree Gurudev's Bhagwat Katha felt like coming home to something I always knew but had forgotten.",
  },
  {
    name: "Devotee, USA",
    text: "The online Raj Yog sessions let me practice from another continent and still feel part of one Satsang.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section bg-cream-50 dark:bg-navy-950">
      <div className="container-px mx-auto max-w-4xl text-center">
        <SectionHeading eyebrow="Voices" title="Words from the community" />

        <div className="relative mt-14">
          <Quote className="mx-auto h-8 w-8 text-gold-500/40" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="mt-6"
            >
              <p className="text-balance font-display text-2xl leading-snug text-ink-900 dark:text-cream-50 md:text-3xl">
                “{testimonials[index].text}”
              </p>
              <p className="mt-6 text-sm uppercase tracking-wide text-saffron-500 dark:text-gold-300">
                {testimonials[index].name}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 hover:border-gold-500 dark:border-gold-300/20"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${
                    i === index ? "w-5 bg-gold-500" : "bg-ink-900/20 dark:bg-cream-50/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 hover:border-gold-500 dark:border-gold-300/20"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
