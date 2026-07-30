"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mandala } from "@/components/ui/Mandala";
import { PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 pt-32">
      {/* Motion background: layered gradients standing in for the video-bg slot.
          Swap the div below for a <video> tag pointing at /public/hero.mp4 in production. */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(232,199,102,0.12),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(232,96,14,0.10),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/40 to-navy-950" />
      </div>

      {/* Signature mandala — soul-union motif */}
      <Mandala className="pointer-events-none absolute right-[-120px] top-1/2 h-[640px] w-[640px] -translate-y-1/2 opacity-70 md:right-[-60px] lg:right-[40px]" />

      <div className="container-px relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <span className="rule-gold" />
            Dharma · Dhyaan · Divya Gyan
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-balance text-5xl font-display font-medium leading-[1.05] text-cream-50 md:text-6xl lg:text-7xl"
          >
            Awaken the self.
            <br />
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-saffron-500 bg-clip-text text-transparent">
              Unite with the soul.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-cream-50/70"
          >
            Aatma Milan — Sankalp Siddhi is a path of self-awakening created by
            H.H. Shree Guru Dr. Anandmayanand: a union of religion, meditation
            and divine knowledge, open to seekers around the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/aatma-milan#join" showArrow>
              Join Aatma Milan
            </Button>
            <Button href="#" variant="outline" className="!text-cream-50 !border-cream-50/20">
              <PlayCircle className="h-4 w-4" />
              Watch the Story
            </Button>
          </motion.div>
        </div>

        {/* Guru portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm animate-float"
        >
          <div className="glass-card relative overflow-hidden p-3">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.6rem] bg-gradient-to-b from-gold-300/10 to-transparent">
              {/* Replace with next/image of the guru portrait, e.g. /images/guru-portrait.jpg */}
              <div className="flex h-full w-full items-center justify-center text-cream-50/30">
                <span className="font-display text-sm tracking-widest">GURU PORTRAIT</span>
              </div>
            </div>
          </div>
          <div className="glass absolute -bottom-6 -left-6 rounded-2xl px-5 py-3 text-sm text-cream-50 shadow-card">
            H.H. Shree Guru Dr. Anandmayanand
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 h-10 w-6 -translate-x-1/2 rounded-full border border-gold-300/30"
      >
        <span className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold-300" />
      </motion.div>
    </section>
  );
}
