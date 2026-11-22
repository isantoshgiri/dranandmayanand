
"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Brain,
  Flower2,
  Heart,
  Moon,
  Sun,
} from "lucide-react";
import { SiteShell, useSiteLanguage } from "@/components/site-shell";
import "./meditation.css";

export default function MeditationPage() {
  const { language } = useSiteLanguage();
  const isHindi = language === "hi";

  const content = {
    en: {
      eyebrow: "THE ART OF INNER STILLNESS",
      title: "Meditation",
      subtitle:
        "Discover the quiet strength within through awareness, patience and practice.",
      explore: "Discover Meditation",
      introLabel: "A MOMENT FOR YOURSELF",
      introTitle: "Find stillness in a world that never stops.",
      introText:
        "Meditation is a practice of turning your attention inward. It offers an opportunity to observe your thoughts, understand your emotions and develop a calmer relationship with everyday life.",
      introText2:
        "With patience and regular practice, meditation can become a meaningful part of your journey towards self-awareness and inner balance.",
      importanceLabel: "WHY MEDITATION MATTERS",
      importanceTitle: "Make space for a calmer mind.",
      importanceSubtitle:
        "A regular practice can support a more mindful and balanced way of living.",
      benefits: [
        {
          title: "Mental Clarity",
          text: "Create space to observe thoughts and approach everyday situations with greater awareness.",
        },
        {
          title: "Inner Peace",
          text: "Take a pause from daily distractions and develop moments of calm and stillness.",
        },
        {
          title: "Self-Awareness",
          text: "Understand your thoughts, emotions and responses through mindful observation.",
        },
        {
          title: "Emotional Balance",
          text: "Build a more thoughtful relationship with emotions through patience and practice.",
        },
      ],
      practiceLabel: "BEGIN YOUR PRACTICE",
      practiceTitle: "A simple beginning can make a difference.",
      practiceSubtitle:
        "Start gently. Give yourself time and make consistency more important than duration.",
      practices: [
        "Choose a quiet and comfortable place.",
        "Sit comfortably and keep your body relaxed.",
        "Bring your attention gently to your breathing.",
        "When thoughts arise, notice them without judgement.",
        "Return your attention to your breath and continue patiently.",
      ],
      guidanceLabel: "SPIRITUAL GUIDANCE",
      guidanceTitle: "Explore the deeper dimensions of meditation.",
      guidanceText:
        "Dr. Swami Anandmayanand shares teachings rooted in spirituality, yoga and meditation, encouraging individuals to explore awareness and inner understanding.",
      cta: "Explore Aatma Milan",
      home: "Back to Home",
    },
    hi: {
      eyebrow: "आंतरिक शांति की कला",
      title: "ध्यान",
      subtitle:
        "जागरूकता, धैर्य और अभ्यास के माध्यम से अपने भीतर की शांति को जानें।",
      explore: "ध्यान को जानें",
      introLabel: "स्वयं के लिए एक क्षण",
      introTitle: "ऐसी दुनिया में मन को स्थिर करना सीखें जो कभी नहीं रुकती।",
      introText:
        "ध्यान स्वयं के भीतर ध्यान केंद्रित करने का एक अभ्यास है। यह अपने विचारों को देखने, भावनाओं को समझने और दैनिक जीवन में अधिक शांत दृष्टिकोण विकसित करने का अवसर देता है।",
      introText2:
        "धैर्य और नियमित अभ्यास के साथ ध्यान आत्म-जागरूकता और आंतरिक संतुलन की यात्रा का एक महत्वपूर्ण हिस्सा बन सकता है।",
      importanceLabel: "ध्यान का महत्व",
      importanceTitle: "मन की शांति के लिए समय निकालें।",
      importanceSubtitle:
        "नियमित अभ्यास अधिक सजग और संतुलित जीवनशैली विकसित करने में सहायक हो सकता है।",
      benefits: [
        {
          title: "मानसिक स्पष्टता",
          text: "विचारों को समझने और दैनिक परिस्थितियों को अधिक जागरूकता से देखने का अवसर।",
        },
        {
          title: "आंतरिक शांति",
          text: "दैनिक व्यस्तताओं से कुछ समय विराम लेकर मन की स्थिरता का अनुभव करें।",
        },
        {
          title: "आत्म-जागरूकता",
          text: "सजग निरीक्षण के माध्यम से अपने विचारों, भावनाओं और प्रतिक्रियाओं को समझें।",
        },
        {
          title: "भावनात्मक संतुलन",
          text: "धैर्य और अभ्यास के माध्यम से भावनाओं को अधिक समझदारी से संभालना सीखें।",
        },
      ],
      practiceLabel: "अभ्यास की शुरुआत",
      practiceTitle: "एक छोटी शुरुआत भी महत्वपूर्ण हो सकती है।",
      practiceSubtitle:
        "धीरे-धीरे शुरुआत करें। समय से अधिक नियमितता को महत्व दें।",
      practices: [
        "एक शांत और आरामदायक स्थान चुनें।",
        "सहज होकर बैठें और शरीर को आराम दें।",
        "अपना ध्यान धीरे-धीरे श्वास पर केंद्रित करें।",
        "विचार आने पर बिना निर्णय किए उन्हें देखें।",
        "धैर्यपूर्वक अपना ध्यान फिर से श्वास पर लाएँ।",
      ],
      guidanceLabel: "आध्यात्मिक मार्गदर्शन",
      guidanceTitle: "ध्यान के गहरे आयामों को समझें।",
      guidanceText:
        "डॉ. स्वामी आनंदमयानंद जी आध्यात्मिकता, योग और ध्यान पर आधारित शिक्षाओं के माध्यम से आत्म-जागरूकता और आंतरिक समझ की दिशा में प्रेरित करते हैं।",
      cta: "आत्म मिलन के बारे में जानें",
      home: "मुख्य पृष्ठ पर जाएँ",
    },
  };

  const t = content[isHindi ? "hi" : "en"];

  const icons = [Brain, Moon, Flower2, Heart];

  return (
    <SiteShell>
      <main className="meditation-page">
        <section className="meditation-hero">
          <div className="meditation-hero-content">
            <p className="meditation-eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <div className="meditation-title-line" />
            <p className="meditation-hero-subtitle">{t.subtitle}</p>
            <a href="#meditation-intro" className="meditation-hero-link">
              {t.explore}
              <ArrowDown size={17} />
            </a>
          </div>
          <div className="meditation-sun-symbol" aria-hidden="true">
            <Sun />
          </div>
        </section>

        <section className="meditation-intro" id="meditation-intro">
          <div className="meditation-intro-art">
            <div className="meditation-art-circle">
              <Flower2 />
            </div>
            <span>DHARMA · DHYAN · DIVYA GYAN</span>
          </div>

          <div className="meditation-intro-content">
            <p className="meditation-eyebrow">{t.introLabel}</p>
            <h2>{t.introTitle}</h2>
            <p>{t.introText}</p>
            <p>{t.introText2}</p>
          </div>
        </section>

        <section className="meditation-benefits">
          <div className="meditation-section-heading">
            <p className="meditation-eyebrow">{t.importanceLabel}</p>
            <h2>{t.importanceTitle}</h2>
            <p>{t.importanceSubtitle}</p>
          </div>

          <div className="meditation-benefit-grid">
            {t.benefits.map((item, index) => {
              const Icon = icons[index];

              return (
                <article className="meditation-benefit-card" key={item.title}>
                  <span className="meditation-card-number">
                    0{index + 1}
                  </span>
                  <div className="meditation-benefit-icon">
                    <Icon size={26} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="meditation-practice">
          <div className="meditation-practice-inner">
            <div className="meditation-practice-heading">
              <p className="meditation-eyebrow">{t.practiceLabel}</p>
              <h2>{t.practiceTitle}</h2>
              <p>{t.practiceSubtitle}</p>
            </div>

            <div className="meditation-practice-list">
              {t.practices.map((item, index) => (
                <div className="meditation-practice-item" key={item}>
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="meditation-guidance">
          <div className="meditation-guidance-content">
            <p className="meditation-eyebrow">{t.guidanceLabel}</p>
            <h2>{t.guidanceTitle}</h2>
            <p>{t.guidanceText}</p>
            <Link href="/aatma-milan" className="meditation-cta-button">
              {t.cta}
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="meditation-bottom">
          <Link href="/" className="meditation-home-link">
            <ArrowRight size={16} />
            {t.home}
          </Link>
        </section>
      </main>
    </SiteShell>
  );
}
