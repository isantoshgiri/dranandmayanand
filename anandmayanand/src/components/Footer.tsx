import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { navLinks, contact, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold-300/10 bg-navy-950 text-cream-50">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="container-px relative mx-auto max-w-7xl py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <span className="font-display text-2xl">{site.name}</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-50/60">
              {site.description}
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-300/20 transition-colors hover:border-gold-300 hover:text-gold-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-data text-xs uppercase tracking-[0.2em] text-gold-300">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream-50/70">
              {navLinks.slice(0, 7).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-gold-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-data text-xs uppercase tracking-[0.2em] text-gold-300">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream-50/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron-500" />
                Shree Guru Dham, Nathdwara, Rajasamand, Rajasthan
              </li>
              {contact.registrationPhones.map((phone) => (
                <li key={phone} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-saffron-500" />
                  {phone}
                </li>
              ))}
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-saffron-500" />
                {contact.registrationEmail}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-data text-xs uppercase tracking-[0.2em] text-gold-300">
              Stay Connected
            </h4>
            <p className="mt-5 text-sm text-cream-50/70">
              Receive Satsang updates, retreat dates and hospital project news.
            </p>
            <form className="mt-4 flex overflow-hidden rounded-full border border-gold-300/20 bg-white/5">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-5 py-3 text-sm outline-none placeholder:text-cream-50/40"
              />
              <button className="shrink-0 bg-gradient-to-b from-gold-300 to-gold-500 px-5 text-sm font-semibold text-navy-950">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gold-300/10 pt-8 text-xs text-cream-50/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
