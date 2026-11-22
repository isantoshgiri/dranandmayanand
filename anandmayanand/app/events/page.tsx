
"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Flower2,
  Heart,
  Sparkles,
  Sun,
} from "lucide-react";
import { SiteShell, useSiteLanguage } from "@/components/site-shell";
import "./events.css";

export default function EventsPage() {
  const { language } = useSiteLanguage();
  const isHindi = language === "hi";

  const content = {
    en: {
      eyebrow: "GATHERINGS OF WISDOM",
      title: "Events & Gatherings",
      subtitle:
        "A space to come together, reflect and experience the timeless wisdom of Indian spiritual traditions.",
      introLabel: "A JOURNEY OF KNOWLEDGE",
      introTitle: "Where devotion meets wisdom.",
      introText:
        "Through spiritual discourses, devotional gatherings and meditation sessions, Dr. Swami Anandmayanand shares teachings that encourage awareness, devotion and a deeper understanding of life.",
      sectionLabel: "SPIRITUAL GATHERINGS",
      sectionTitle: "Experiences that inspire the soul.",
      sectionText:
        "Explore the different forms of spiritual programmes and gatherings.",
      events: [
        {
          title: "Shrimad Bhagwat Katha",
          category: "KATHA & DISCOURSE",
          text: "Spiritual reflections and teachings from Shrimad Bhagwat, sharing the message of devotion and divine wisdom.",
          icon: "book",
        },
        {
          title: "Shri Ram Katha",
          category: "KATHA & DISCOURSE",
          text: "Explore the ideals of Shri Ram, the values of Dharma and the timeless lessons of the Ramayana.",
          icon: "flower",
        },
        {
          title: "Shiv Mahapuran Katha",
          category: "KATHA & DISCOURSE",
          text: "Discover spiritual insights and devotional teachings through the stories and wisdom of Shiv Mahapuran.",
          icon: "sun",
        },
        {
          title: "Satsang",
          category: "DEVOTIONAL GATHERING",
          text: "A gathering for reflection, spiritual conversation, devotion and shared learning.",
          icon: "heart",
        },
        {
          title: "Yoga & Meditation",
          category: "INNER WELL-BEING",
          text: "Sessions that encourage mindful living, self-awareness and the practice of inner stillness.",
          icon: "sparkles",
        },
        {
          title: "Vedic Pooja & Spiritual Practices",
          category: "VEDIC TRADITIONS",
          text: "An opportunity to connect with traditional Vedic practices and spiritual observances.",
          icon: "calendar",
        },
      ],
      announcementLabel: "PROGRAMME UPDATES",
      announcementTitle: "Be a part of the next gathering.",
      announcementText:
        "Details of upcoming programmes, dates and venues will be shared here when officially announced.",
      contact: "Get in Touch",
      about: "About Guruji",
      home: "Back to Home",
    },
    hi: {
      eyebrow: "ज्ञान और भक्ति के आयोजन",
      title: "कार्यक्रम एवं आयोजन",
      subtitle:
        "भारतीय आध्यात्मिक परंपराओं के ज्ञान, भक्ति और अनुभव से जुड़ने का एक अवसर।",
      introLabel: "ज्ञान की एक यात्रा",
      introTitle: "जहाँ भक्ति और ज्ञान का संगम होता है।",
      introText:
        "आध्यात्मिक प्रवचनों, भक्ति आयोजनों और ध्यान सत्रों के माध्यम से डॉ. स्वामी आनंदमयानंद जी जागरूकता, भक्ति और जीवन की गहरी समझ विकसित करने वाली शिक्षाएँ साझा करते हैं।",
      sectionLabel: "आध्यात्मिक आयोजन",
      sectionTitle: "आत्मा को प्रेरित करने वाले अनुभव।",
      sectionText:
        "विभिन्न प्रकार के आध्यात्मिक कार्यक्रमों और आयोजनों के बारे में जानें।",
      events: [
        {
          title: "श्रीमद्भागवत कथा",
          category: "कथा एवं प्रवचन",
          text: "श्रीमद्भागवत के माध्यम से भक्ति, आध्यात्मिक चिंतन और दिव्य ज्ञान का संदेश।",
          icon: "book",
        },
        {
          title: "श्रीराम कथा",
          category: "कथा एवं प्रवचन",
          text: "श्रीराम के आदर्शों, धर्म के मूल्यों और रामायण की शाश्वत शिक्षाओं को जानें।",
          icon: "flower",
        },
        {
          title: "शिव महापुराण कथा",
          category: "कथा एवं प्रवचन",
          text: "शिव महापुराण की कथाओं और शिक्षाओं के माध्यम से आध्यात्मिक ज्ञान एवं भक्ति का अनुभव।",
          icon: "sun",
        },
        {
          title: "सत्संग",
          category: "भक्ति आयोजन",
          text: "चिंतन, आध्यात्मिक संवाद, भक्ति और सामूहिक ज्ञान का एक अवसर।",
          icon: "heart",
        },
        {
          title: "योग एवं ध्यान",
          category: "आंतरिक कल्याण",
          text: "सजग जीवनशैली, आत्म-जागरूकता और मन की स्थिरता के अभ्यास को प्रोत्साहित करने वाले सत्र।",
          icon: "sparkles",
        },
        {
          title: "वैदिक पूजा एवं आध्यात्मिक अभ्यास",
          category: "वैदिक परंपराएँ",
          text: "पारंपरिक वैदिक विधियों और आध्यात्मिक परंपराओं से जुड़ने का अवसर।",
          icon: "calendar",
        },
      ],
      announcementLabel: "कार्यक्रम की जानकारी",
      announcementTitle: "आगामी आयोजन का हिस्सा बनें।",
      announcementText:
        "आगामी कार्यक्रमों की तारीख, स्थान और अन्य जानकारी आधिकारिक घोषणा के बाद यहाँ साझा की जाएगी।",
      contact: "संपर्क करें",
      about: "गुरुजी के बारे में",
      home: "मुख्य पृष्ठ पर जाएँ",
    },
  };

  const t = content[isHindi ? "hi" : "en"];
  const icons = [BookOpen, Flower2, Sun, Heart, Sparkles, CalendarDays];

  return (
    <SiteShell>
      <main className="events-page">

        <section className="events-hero">
          <div className="events-hero-content">
            <p className="events-eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <div className="events-title-line" />
            <p>{t.subtitle}</p>
            <a href="#spiritual-gatherings" className="events-hero-link">
              {isHindi ? "आयोजनों को जानें" : "Explore Gatherings"}
              <ArrowRight size={17} />
            </a>
          </div>
          <div className="events-hero-symbol">
            <Flower2 />
          </div>
        </section>

        <section className="events-intro">
          <div className="events-intro-art">
            <div className="events-art-circle">
              <Sun />
            </div>
            <span>DHARMA · BHAKTI · GYAN</span>
          </div>

          <div className="events-intro-content">
            <p className="events-eyebrow">{t.introLabel}</p>
            <h2>{t.introTitle}</h2>
            <p>{t.introText}</p>
          </div>
        </section>

        <section className="events-gatherings" id="spiritual-gatherings">
          <div className="events-section-heading">
            <p className="events-eyebrow">{t.sectionLabel}</p>
            <h2>{t.sectionTitle}</h2>
            <p>{t.sectionText}</p>
          </div>

          <div className="events-grid">
            {t.events.map((event, index) => {
              const Icon = icons[index];

              return (
                <article className="events-card" key={event.title}>
                  <div className="events-card-top">
                    <span>0{index + 1}</span>
                    <Icon />
                  </div>
                  <div className="events-card-content">
                    <p className="events-category">{event.category}</p>
                    <h3>{event.title}</h3>
                    <p>{event.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="events-announcement">
          <div className="events-announcement-content">
            <p className="events-eyebrow">{t.announcementLabel}</p>
            <h2>{t.announcementTitle}</h2>
            <p>{t.announcementText}</p>
            <Link href="/contact" className="events-contact-button">
              {t.contact} <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="events-links">
          <Link href="/about">
            {t.about} <ArrowRight size={16} />
          </Link>
          <Link href="/">
            <ArrowRight size={16} />
            {t.home}
          </Link>
        </section>

      </main>
    </SiteShell>
  );
}
