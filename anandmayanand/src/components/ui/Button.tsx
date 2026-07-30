import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit";
};

const variants = {
  primary:
    "bg-gradient-to-b from-gold-300 to-gold-500 text-navy-950 hover:shadow-glow hover:from-gold-200 hover:to-gold-400",
  outline:
    "border border-ink-900/20 dark:border-gold-300/30 text-ink-900 dark:text-cream-50 hover:border-gold-500 dark:hover:border-gold-300 hover:bg-gold-500/5",
  ghost: "text-ink-900 dark:text-cream-50 hover:text-saffron-500 dark:hover:text-gold-300",
};

export function Button({ href, onClick, children, variant = "primary", className, showArrow, type = "button" }: Props) {
  const classes = cn(
    "group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-body font-semibold tracking-wide transition-all duration-300",
    variants[variant],
    className
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
