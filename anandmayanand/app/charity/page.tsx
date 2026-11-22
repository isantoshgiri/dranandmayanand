
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Heart,
  HandHeart,
  Utensils,
  GraduationCap,
  Users,
  Flower2,
} from "lucide-react";
import { SiteShell, useSiteLanguage } from "@/components/site-shell";
import "./charity.css";

export default function CharityPage() {
  const { language } = useSiteLanguage();
  const isHindi = language === "hi";

  const content = {
    en: {
      eyebrow: "A PATH OF COMPASSION",
      title: "Seva is the highest form of devotion.",
      subtitle:
        "Serving humanity with compassion, kindness and a spirit of selflessness.",
      introLabel: "THE SPIRIT OF SEVA",
      introTitle: "Let kindness become a way of life.",
      introText:
        "Seva is an expression of compassion and humanity. It reminds us that serving others is also a meaningful way to connect with the divine.",
      introText2:
        "Through spiritual values, education and community service, we can contribute towards a more compassionate society.",
      workLabel: "OUR INITIATIVES",
      workTitle: "Small acts. Meaningful impact.",
      workSubtitle:
        "Service initiatives inspired by the values of compassion, knowledge and humanity.",
      initiatives: [
        {
          title: "Food Distribution",
          text: "Daily food distribution and support for people in need, inspired by the belief that no one should go hungry.",
        },
        {
          title: "Vedic Education",
          text: "Encouraging traditional learning, Sanskrit studies and the preservation of India's spiritual heritage.",
        },
        {
          title: "Community Service",
          text: "Promoting kindness, support and meaningful contributions towards the well-being of society.",
        },
        {
          title: "Spiritual Awareness",
          text: "Sharing the values of Dharma, meditation, knowledge and humanity through spiritual activities.",
        },
      ],
      missionLabel: "OUR BELIEF",
      missionTitle: "Service without expectation. Compassion without boundaries.",
      missionText:
        "True seva comes from the heart. Every thoughtful action, however small, can bring hope and make a positive difference in someone's life.",
      supportLabel: "BE A PART OF THE JOURNEY",
      supportTitle: "Together, let us make a difference.",
      supportText:
        "Your support can help strengthen initiatives rooted in education, compassion and community welfare.",
      support: "Support the Mission",
      home: "Back to Home",
    },
    hi: {
      eyebrow: "करुणा और सेवा का मार्ग",
      title: "सेवा ही भक्ति का सर्वोच्च स्वरूप है।",
      subtitle:
        "करुणा, दया और निस्वार्थ भाव से मानवता की सेवा।",
      introLabel: "सेवा की भावना",
      introTitle: "करुणा को अपने जीवन का हिस्सा बनाएँ।",
      introText:
        "सेवा करुणा और मानवता की अभिव्यक्ति है। दूसरों की सहायता करना ईश्वर से जुड़ने का एक सुंदर माध्यम भी है।",
      introText2:
        "आध्यात्मिक मूल्यों, शिक्षा और समाज सेवा के माध्यम से हम एक संवेदनशील समाज के निर्माण में योगदान दे सकते हैं।",
      workLabel: "हमारी सेवा गतिविधियाँ",
      workTitle: "छोटे प्रयास, सार्थक परिवर्तन।",
      workSubtitle:
        "करुणा, ज्ञान और मानवता के मूल्यों से प्रेरित सेवा कार्य।",
      initiatives: [
        {
          title: "अन्न सेवा",
          text: "जरूरतमंद लोगों के लिए प्रतिदिन भोजन वितरण और सहायता, ताकि कोई भूखा न रहे।",
        },
        {
          title: "वैदिक शिक्षा",
          text: "पारंपरिक शिक्षा, संस्कृत अध्ययन और भारत की आध्यात्मिक विरासत के संरक्षण को प्रोत्साहन।",
        },
        {
          title: "समाज सेवा",
          text: "समाज के कल्याण के लिए सहयोग, दया और सार्थक योगदान की भावना को बढ़ावा देना।",
        },
        {
          title: "आध्यात्मिक जागरूकता",
          text: "धर्म, ध्यान, ज्ञान और मानवता के मूल्यों का आध्यात्मिक गतिविधियों के माध्यम से प्रसार।",
        },
      ],
      missionLabel: "हमारा विश्वास",
      missionTitle: "बिना अपेक्षा के सेवा। बिना सीमा के करुणा।",
      missionText:
        "सच्ची सेवा हृदय से आती है। हर छोटा प्रयास भी किसी के जीवन में आशा और सकारात्मक बदलाव ला सकता है।",
      supportLabel: "इस यात्रा का हिस्सा बनें",
      supportTitle: "आइए, मिलकर बदलाव लाएँ।",
      supportText:
        "आपका सहयोग शिक्षा, करुणा और समाज कल्याण से जुड़े सेवा कार्यों को आगे बढ़ाने में मदद कर सकता है।",
      support: "सेवा कार्यों में सहयोग करें",
      home: "मुख्य पृष्ठ पर जाएँ",
    },
  };

  const t = content[isHindi ? "hi" : "en"];
  const icons = [Utensils, GraduationCap, Users, Flower2];

  return (
    <SiteShell>
      <main className="charity-page">
        <section className="charity-hero">
          <div className="charity-hero-content">
            <p className="charity-eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <div className="charity-title-line" />
            <p>{t.subtitle}</p>
          </div>
          <div className="charity-hero-symbol">
            <HandHeart />
          </div>
        </section>

        <section className="charity-intro">
          <div className="charity-intro-art">
            <div className="charity-art-circle">
              <Heart />
            </div>
            <span>SEVA · KARUNA · MANAVTA</span>
          </div>
          <div className="charity-intro-content">
            <p className="charity-eyebrow">{t.introLabel}</p>
            <h2>{t.introTitle}</h2>
            <p>{t.introText}</p>
            <p>{t.introText2}</p>
          </div>
        </section>

        <section className="charity-initiatives">
          <div className="charity-section-heading">
            <p className="charity-eyebrow">{t.workLabel}</p>
            <h2>{t.workTitle}</h2>
            <p>{t.workSubtitle}</p>
          </div>

          <div className="charity-card-grid">
            {t.initiatives.map((item, index) => {
              const Icon = icons[index];
              return (
                <article className="charity-card" key={item.title}>
                  <span className="charity-number">0{index + 1}</span>
                  <Icon className="charity-card-icon" size={30} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="charity-belief">
          <div className="charity-belief-content">
            <p className="charity-eyebrow">{t.missionLabel}</p>
            <h2>{t.missionTitle}</h2>
            <p>{t.missionText}</p>
          </div>
        </section>

        <section className="charity-cta">
          <p className="charity-eyebrow">{t.supportLabel}</p>
          <h2>{t.supportTitle}</h2>
          <p>{t.supportText}</p>
          <Link href="/donation" className="charity-cta-button">
            {t.support}
            <ArrowRight size={17} />
          </Link>
        </section>

        <section className="charity-bottom">
          <Link href="/" className="charity-home-link">
            {t.home}
            <ArrowRight size={16} />
          </Link>
        </section>
      </main>
    </SiteShell>
  );
}
