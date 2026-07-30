"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
};

const offsets = {
  up: { y: 32, x: 0 },
  left: { y: 0, x: -32 },
  right: { y: 0, x: 32 },
  none: { y: 0, x: 0 },
};

/**
 * Fades + slides content into place as it scrolls into view.
 * Wrap any block of content: <ScrollReveal><h2>...</h2></ScrollReveal>
 */
export function ScrollReveal({ children, delay = 0, className, direction = "up" }: Props) {
  const offset = offsets[direction];
  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
