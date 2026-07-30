import { cn } from "@/lib/utils";

/**
 * Slow-rotating linework mandala used behind the hero. Two arcs converge
 * at the centre — a literal rendering of "Aatma Milan" (soul union) rather
 * than a decorative flourish. Kept to gold-on-transparent linework so it
 * reads as atmosphere, not noise.
 */
export function Mandala({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={cn("animate-spin-slow", className)}
      aria-hidden="true"
    >
      <circle cx="300" cy="300" r="280" stroke="url(#g1)" strokeWidth="0.75" fill="none" />
      <circle cx="300" cy="300" r="220" stroke="url(#g1)" strokeWidth="0.5" fill="none" />
      <circle cx="300" cy="300" r="160" stroke="url(#g1)" strokeWidth="0.5" fill="none" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        return (
          <line
            key={i}
            x1="300"
            y1="20"
            x2="300"
            y2="60"
            stroke="url(#g1)"
            strokeWidth="1"
            transform={`rotate(${angle} 300 300)`}
          />
        );
      })}
      {/* Two converging arcs — the union motif */}
      <path
        d="M 100 300 A 200 200 0 0 1 300 100"
        stroke="url(#g2)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 500 300 A 200 200 0 0 1 300 500"
        stroke="url(#g2)"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="300" cy="300" r="4" fill="#E8C766" />
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C9A227" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#E8C766" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8600E" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#E8C766" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}
