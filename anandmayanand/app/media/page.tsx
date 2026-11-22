
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Play,
  Image as ImageIcon,
  Video,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { SiteShell, useSiteLanguage } from "@/components/site-shell";
import "./media.css";

export default function MediaPage() {
  const { language } = useSiteLanguage();
  const isHindi = language === "hi";

  const content = {
    en: {
      eyebrow: "A GLIMPSE OF THE JOURNEY",
      title: "Media & Moments",
      subtitle:
        "Explore moments of devotion, spiritual teachings and gatherings through photographs and videos.",
      introLabel: "VISUAL STORIES",
      introTitle: "Every moment carries a story.",
      introText:
        "A collection of moments from spiritual discourses, devotional gatherings, meditation sessions and activities connected with the journey of Dr. Swami Anandmayanand.",
      galleryLabel: "EXPLORE THE COLLECTION",
      galleryTitle: "Moments worth remembering.",
      galleryText:
        "Explore different aspects of spiritual gatherings and teachings.",
      categories: [
        {
          title: "Spiritual Discourses",
          text: "Bhagwat Katha, Ram Katha and spiritual teachings.",
          type: "VIDEO",
          icon: "book",
        },
        {
          title: "Spiritual Gatherings",
          text: "Moments of satsang, devotion and collective prayer.",
          type: "PHOTOS",
          icon: "sparkles",
        },
        {
          title: "Meditation & Yoga",
          text: "Reflections from meditation and yoga activities.",
          type: "PHOTOS",
          icon: "image",
        },
        {
          title: "Events & Programmes",
          text: "Highlights from spiritual events and gatherings.",
          type: "VIDEO",
          icon: "video",
        },
      ],
      videoLabel: "VIDEO COLLECTION",
      videoTitle: "Watch and reflect.",
      videoText:
        "Video recordings and selected spiritual discourses can be featured in this section.",
      coming: "Videos will be added soon",
      connectLabel: "STAY CONNECTED",
      connectTitle: "Continue exploring the journey.",
      connectText:
        "Discover more about Guruji's teachings, spiritual activities and upcoming programmes.",
      about: "About Guruji",
      events: "Explore Events",
      home: "Back to Home",
    },
    hi: {
      eyebrow: "आध्यात्मिक यात्रा की एक झलक",
      title: "मीडिया एवं यादगार पल",
      subtitle:
        "फोटो और वीडियो के माध्यम से भक्ति, आध्यात्मिक शिक्षाओं और आयोजनों की झलक देखें।",
      introLabel: "दृश्य कहानियाँ",
      introTitle: "हर पल अपने भीतर एक कहानी समेटे है।",
      introText:
        "डॉ. स्वामी आनंदमयानंद जी की आध्यात्मिक यात्रा से जुड़े प्रवचनों, भक्ति आयोजनों, ध्यान सत्रों और विभिन्न गतिविधियों के कुछ यादगार क्षणों का संग्रह।",
      galleryLabel: "हमारा संग्रह",
      galleryTitle: "यादगार आध्यात्मिक क्षण।",
      galleryText:
        "आध्यात्मिक आयोजनों और शिक्षाओं के विभिन्न पहलुओं को जानें।",
      categories: [
        {
          title: "आध्यात्मिक प्रवचन",
          text: "भागवत कथा, राम कथा और आध्यात्मिक शिक्षाएँ।",
          type: "वीडियो",
          icon: "book",
        },
        {
          title: "आध्यात्मिक आयोजन",
          text: "सत्संग, भक्ति और सामूहिक प्रार्थना के क्षण।",
          type: "फोटो",
          icon: "sparkles",
        },
        {
          title: "ध्यान एवं योग",
          text: "ध्यान और योग गतिविधियों की झलकियाँ।",
          type: "फोटो",
          icon: "image",
        },
        {
          title: "कार्यक्रम एवं आयोजन",
          text: "आध्यात्मिक कार्यक्रमों और आयोजनों की झलकियाँ।",
          type: "वीडियो",
          icon: "video",
        },
      ],
      videoLabel: "वीडियो संग्रह",
      videoTitle: "देखें और आत्मचिंतन करें।",
      videoText:
        "इस भाग में आध्यात्मिक प्रवचनों और चुनिंदा कार्यक्रमों के वीडियो जोड़े जा सकते हैं।",
      coming: "वीडियो जल्द जोड़े जाएँगे",
      connectLabel: "हमसे जुड़े रहें",
      connectTitle: "आध्यात्मिक यात्रा को आगे बढ़ाएँ।",
      connectText:
        "गुरुजी की शिक्षाओं, आध्यात्मिक गतिविधियों और आगामी कार्यक्रमों के बारे में जानें।",
      about: "गुरुजी के बारे में",
      events: "कार्यक्रम देखें",
      home: "मुख्य पृष्ठ पर जाएँ",
    },
  };

  const t = content[isHindi ? "hi" : "en"];
  const icons = [BookOpen, Sparkles, ImageIcon, Video];

  return (
    <SiteShell>
      <main className="media-page">

        <section className="media-hero">
          <div className="media-hero-content">
            <p className="media-eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <div className="media-title-line" />
            <p>{t.subtitle}</p>
            <a href="#media-gallery" className="media-hero-link">
              {isHindi ? "संग्रह देखें" : "Explore Collection"}
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="media-hero-symbol">
            <ImageIcon />
          </div>
        </section>

        <section className="media-intro">
          <div className="media-intro-art">
            <div className="media-art-circle">
              <Play />
            </div>
            <span>DHARMA · DHYAN · DIVYA GYAN</span>
          </div>

          <div className="media-intro-content">
            <p className="media-eyebrow">{t.introLabel}</p>
            <h2>{t.introTitle}</h2>
            <p>{t.introText}</p>
          </div>
        </section>

        <section className="media-gallery" id="media-gallery">
          <div className="media-section-heading">
            <p className="media-eyebrow">{t.galleryLabel}</p>
            <h2>{t.galleryTitle}</h2>
            <p>{t.galleryText}</p>
          </div>

          <div className="media-grid">
            {t.categories.map((item, index) => {
              const Icon = icons[index];

              return (
                <article className="media-card" key={item.title}>
                  <div className={`media-card-visual media-visual-${index + 1}`}>
                    <span className="media-card-number">0{index + 1}</span>
                    <Icon />
                    <span className="media-card-type">{item.type}</span>
                  </div>

                  <div className="media-card-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="media-video">
          <div className="media-video-content">
            <p className="media-eyebrow">{t.videoLabel}</p>
            <h2>{t.videoTitle}</h2>
            <p>{t.videoText}</p>

            <div className="media-video-placeholder">
              <div className="media-play-button">
                <Play fill="currentColor" size={24} />
              </div>
              <span>{t.coming}</span>
            </div>
          </div>
        </section>

        <section className="media-cta">
          <div className="media-cta-content">
            <p className="media-eyebrow">{t.connectLabel}</p>
            <h2>{t.connectTitle}</h2>
            <p>{t.connectText}</p>

            <div className="media-cta-links">
              <Link href="/about">
                {t.about} <ArrowRight size={16} />
              </Link>
              <Link href="/events">
                {t.events} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="media-bottom">
          <Link href="/" className="media-home-link">
            <ArrowRight size={16} />
            {t.home}
          </Link>
        </section>

      </main>
    </SiteShell>
  );
}
