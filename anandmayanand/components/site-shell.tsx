
"use client";

import Link from "next/link";
import { useEffect, useState, createContext, useContext } from "react";
import { Menu, X, Globe2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";

type Language = "en" | "hi";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

export function useSiteLanguage() {
  return useContext(LanguageContext);
}

export function SiteLanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("site-language");
    if (saved === "hi" || saved === "en") {
      setLanguage(saved);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem("site-language", language);
    document.documentElement.lang = language;
  }, [language, ready]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

const navLinks = {
  en: [
    ["Home", "/"],
    ["About", "/about"],
    ["Aatma Milan", "/aatma-milan"],
    ["Meditation", "/meditation"],
    ["Seva", "/charity"],
    ["Events", "/events"],
    ["Media", "/media"],
    ["Journal", "/blog"],
    ["Gallery", "/gallery"],
    ["Contact", "/contact"],
  ],
  hi: [
    ["होम", "/"],
    ["गुरुजी परिचय", "/about"],
    ["आत्म मिलन", "/aatma-milan"],
    ["ध्यान", "/meditation"],
    ["सेवा", "/charity"],
    ["कार्यक्रम", "/events"],
    ["मीडिया", "/media"],
    ["लेख", "/blog"],
    ["चित्र संग्रह", "/gallery"],
    ["संपर्क", "/contact"],
  ],
};

export function SiteHeader() {
  const { language, setLanguage } = useSiteLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = navLinks[language];

  return (
    <>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Home">
          <img
            src="/images/drswamianandmayanand.png"
            alt="Dr. Swami Anandmayanand"
            className="brand-logo"
          />
        </Link>

        <nav className="desktop-nav">
          {t.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/donation" className="header-donate">
            {language === "en" ? "Donate Now" : "दान करें"}
          </Link>

          <button
            className="language-switch"
            onClick={() =>
              setLanguage(language === "en" ? "hi" : "en")
            }
            aria-label="Change website language"
          >
            <Globe2 size={15} />
            {language === "en" ? "हिंदी" : "English"}
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          {t.map(([label, href]) => (
            <Link
              href={href}
              key={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <button
            onClick={() => {
              setLanguage(language === "en" ? "hi" : "en");
              setMenuOpen(false);
            }}
          >
            {language === "en" ? "हिंदी में देखें" : "View in English"}
          </button>

          <Link
            href="/donation"
            onClick={() => setMenuOpen(false)}
          >
            {language === "en" ? "Donate Now" : "दान करें"}
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </>
  );
}

export function SiteFooter() {
  const { language } = useSiteLanguage();

  const footerLinks = navLinks[language].filter(
    ([, href]) => href !== "/"
  );

  return (
    <footer className="site-footer">
      <Container maxWidth="full">
        <div className="footer-top">
          <Link href="/" className="footer-brand">
            <img
              src="/images/drswamianandmayanand.png"
              alt="Dr. Swami Anandmayanand"
              className="site-brand-logo"
            />
          </Link>

          <div className="footer-navigation">
            {footerLinks.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </div>

          <Link className="footer-offering" href="/donation">
            {language === "en"
              ? "Support the Mission ↗"
              : "मिशन का सहयोग करें ↗"}
          </Link>
        </div>

        <p>
          © {new Date().getFullYear()} Dr. Swami Anandmayanand.
          {language === "en"
            ? " A small light in the world."
            : " विश्व में एक छोटी सी दिव्य ज्योति।"}
        </p>
      </Container>
    </footer>
  );
}

export function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
