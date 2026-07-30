import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "center", className }: Props) {
  return (
    <ScrollReveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <span className="eyebrow">
        <span className="rule-gold" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-balance text-3xl md:text-5xl font-display font-medium leading-[1.1] text-ink-900 dark:text-cream-50">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-ink-700 dark:text-cream-100/70 leading-relaxed">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
