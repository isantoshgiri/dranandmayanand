"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { navLinks, site } from "@/lib/site-data";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div
        className={cn(
          "container-px mx-auto flex max-w-7xl items-center justify-between rounded-full px-6 transition-all duration-500",
          scrolled ? "glass py-2.5 shadow-card" : "bg-transparent py-1"
        )}
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/40 bg-gradient-to-b from-gold-300/20 to-transparent">
            <span className="font-display text-lg text-gold-400 dark:text-gold-300">卐</span>
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm tracking-wide text-ink-900 dark:text-cream-50">
              Dr. Anandmayanand
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-saffron-500 dark:text-gold-300">
              Aatma Milan
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(0, 8).map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => setOpenMenu(link.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-body text-ink-900/80 transition-colors hover:text-saffron-500 dark:text-cream-50/80 dark:hover:text-gold-300"
              >
                {link.label}
                {link.megaMenu && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              </Link>

              <AnimatePresence>
                {link.megaMenu && openMenu === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="glass absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-3xl p-3 shadow-card"
                  >
                    {link.megaMenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-4 py-2.5 text-sm text-ink-900/80 hover:bg-gold-500/10 hover:text-saffron-500 dark:text-cream-50/80 dark:hover:text-gold-300"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 text-ink-900/70 transition-colors hover:border-gold-500 hover:text-saffron-500 dark:border-gold-300/20 dark:text-cream-50/70 dark:hover:text-gold-300 sm:flex"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <Button href="/donate" className="hidden md:inline-flex" showArrow>
            Donate
          </Button>

          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 dark:border-gold-300/20 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-950/90 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <span className="font-display text-cream-50">{site.name}</span>
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-300/20 text-cream-50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-gold-300/10 py-4 font-display text-xl text-cream-50/90"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="px-6 pt-8">
              <Button href="/donate" className="w-full justify-center" showArrow>
                Donate
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
