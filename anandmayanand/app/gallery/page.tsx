
"use client";

import Link from "next/link";
import { useSiteLanguage, SiteShell } from "@/components/site-shell";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import "./gallery.css";

export default function GalleryPage() {
  const { language } = useSiteLanguage();
  const isHindi = language === "hi";

  const content = {
    en: {
      label: "VISUAL MOMENTS",
      title: "A Glimpse Into Our",
      highlight: "Spiritual Journey",
      subtitle:
        "Moments of devotion, wisdom, meditation and togetherness.",
      introTitle: "Moments That Inspire",
      intro:
        "Explore glimpses of spiritual gatherings, divine discourses and activities guided by Dr. Swami Anandmayanand.",
      categories: [
        { title: "Spiritual Discourses", desc: "Bhagwat Katha, Ram Katha and spiritual teachings" },
        { title: "Spiritual Gatherings", desc: "Satsang and devotional celebrations" },
        { title: "Meditation & Yoga", desc: "Moments of meditation and inner awareness" },
        { title: "Events & Programmes", desc: "Special programmes and community gatherings" },
        { title: "Vedic Traditions", desc: "Pooja, rituals and sacred traditions" },
        { title: "Community & Seva", desc: "Service, compassion and togetherness" },
      ],
      note: "More Moments Coming Soon",
      noteText:
        "Our gallery is being updated. More photographs and memories will be added soon.",
      button: "Explore Events",
      home: "Back to Home",
    },
    hi: {
      label: "स्मृतियों की झलक",
      title: "हमारी आध्यात्मिक",
      highlight: "यात्रा की झलक",
      subtitle: "भक्ति, ज्ञान, ध्यान और आत्मीयता से जुड़े कुछ विशेष पल।",
      introTitle: "प्रेरणादायक पल",
      intro:
        "डॉ. स्वामी आनंदमयानंद जी के मार्गदर्शन में आयोजित आध्यात्मिक कार्यक्रमों, प्रवचनों और गतिविधियों की झलक देखें।",
      categories: [
        { title: "आध्यात्मिक प्रवचन", desc: "भागवत कथा, राम कथा और आध्यात्मिक ज्ञान" },
        { title: "सत्संग एवं आयोजन", desc: "सत्संग और भक्ति से जुड़े उत्सव" },
        { title: "ध्यान एवं योग", desc: "ध्यान और आत्मचेतना के विशेष पल" },
        { title: "कार्यक्रम एवं उत्सव", desc: "विशेष आयोजन और सामुदायिक कार्यक्रम" },
        { title: "वैदिक परंपराएँ", desc: "पूजन, अनुष्ठान और पवित्र परंपराएँ" },
        { title: "सेवा एवं समाज", desc: "सेवा, करुणा और सामूहिक सहभागिता" },
      ],
      note: "और भी तस्वीरें जल्द आएँगी",
      noteText:
        "हमारी गैलरी अपडेट की जा रही है। जल्द ही इसमें और तस्वीरें एवं यादगार पल जोड़े जाएँगे।",
      button: "कार्यक्रम देखें",
      home: "मुख्य पृष्ठ पर जाएँ",
    },
  };

  const t = isHindi ? content.hi : content.en;

  return (
    <SiteShell>
      <main className="gallery-page">
        <section className="gallery-hero">
          <div className="gallery-hero-inner">
            <span className="gallery-eyebrow">{t.label}</span>
            <h1>
              {t.title}
              <span>{t.highlight}</span>
            </h1>
            <p>{t.subtitle}</p>
            <div className="gallery-hero-line" />
          </div>
        </section>

        <section className="gallery-intro">
          <span className="gallery-section-label">
            <span /> {t.label}
          </span>
          <h2>{t.introTitle}</h2>
          <p>{t.intro}</p>
        </section>

        <section className="gallery-grid-section">
          <div className="gallery-grid">
            {t.categories.map((item, index) => (
              <div className="gallery-card" key={item.title}>
                <div className={`gallery-card-visual gallery-visual-${index + 1}`}>
                  <div className="gallery-card-icon">
                    <ImageIcon size={30} strokeWidth={1.3} />
                  </div>
                  <span className="gallery-card-number">
                    0{index + 1}
                  </span>
                </div>
                <div className="gallery-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="gallery-note">
          <span className="gallery-note-icon">
            <ImageIcon size={24} />
          </span>
          <h2>{t.note}</h2>
          <p>{t.noteText}</p>
          <Link href="/events" className="gallery-button">
            {t.button} <ArrowRight size={17} />
          </Link>
        </section>

        <div className="gallery-home-link">
          <Link href="/">{t.home}</Link>
        </div>
      </main>
    </SiteShell>
  );
}
