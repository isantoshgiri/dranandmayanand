
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  Flower2,
  Heart,
  Sparkles,
  Sun,
} from "lucide-react";
import { SiteShell, useSiteLanguage } from "@/components/site-shell";
import "./aatma-milan.css";

export default function AatmaMilanPage() {
  const { language } = useSiteLanguage();
  const isHindi = language === "hi";

  const content = {
    en: {
      eyebrow: "THE JOURNEY WITHIN",
      title: "Aatma Milan",
      subtitle:
        "A journey from the noise of the outside world to the peace within.",
      explore: "Explore the Journey",
      introLabel: "DISCOVER YOURSELF",
      introTitle: "The most meaningful journey is the one within.",
      introText:
        "Aatma Milan is an invitation to pause, look within and reconnect with your true self. Through awareness, meditation and spiritual understanding, discover a deeper sense of peace and purpose.",
      introText2:
        "It is not about escaping life. It is about understanding life with greater clarity, compassion and awareness.",
      pathLabel: "THE INNER PATH",
      pathTitle: "A journey through awareness",
      pathSubtitle:
        "Every step brings you closer to understanding yourself.",
      steps: [
        {
          title: "Self-Awareness",
          text: "Begin by observing your thoughts, emotions and actions with honesty and awareness.",
        },
        {
          title: "Meditation",
          text: "Create moments of stillness and experience the calm that comes from within.",
        },
        {
          title: "Inner Understanding",
          text: "Explore the deeper questions of life through reflection and spiritual wisdom.",
        },
        {
          title: "Peace & Balance",
          text: "Bring awareness into everyday life and nurture harmony in thoughts and actions.",
        },
      ],
      guidanceLabel: "SPIRITUAL GUIDANCE",
      guidanceTitle: "Walk the path with awareness and guidance.",
      guidanceText:
        "With the spiritual teachings and guidance of Dr. Swami Anandmayanand, explore the values of Dharma, Dhyan and Divya Gyan.",
      cta: "Explore Meditation",
      home: "Back to Home",
    },
    hi: {
      eyebrow: "भीतर की आध्यात्मिक यात्रा",
      title: "आत्म मिलन",
      subtitle:
        "बाहरी संसार के शोर से भीतर की शांति तक की एक आध्यात्मिक यात्रा।",
      explore: "यात्रा को जानें",
      introLabel: "स्वयं को जानें",
      introTitle: "सबसे महत्वपूर्ण यात्रा स्वयं के भीतर की यात्रा है।",
      introText:
        "आत्म मिलन स्वयं को समझने, भीतर देखने और अपने वास्तविक स्वरूप से जुड़ने का एक निमंत्रण है। जागरूकता, ध्यान और आध्यात्मिक ज्ञान के माध्यम से जीवन में शांति और उद्देश्य को अनुभव करें।",
      introText2:
        "यह जीवन से दूर जाने का मार्ग नहीं, बल्कि जीवन को अधिक स्पष्टता, करुणा और जागरूकता के साथ समझने का प्रयास है।",
      pathLabel: "आंतरिक मार्ग",
      pathTitle: "आत्म जागरूकता की यात्रा",
      pathSubtitle:
        "हर कदम आपको स्वयं को समझने के और निकट ले जाता है।",
      steps: [
        {
          title: "आत्म जागरूकता",
          text: "अपने विचारों, भावनाओं और कार्यों को ईमानदारी एवं सजगता से देखना प्रारंभ करें।",
        },
        {
          title: "ध्यान",
          text: "मन को स्थिर करने के लिए समय निकालें और भीतर की शांति का अनुभव करें।",
        },
        {
          title: "आंतरिक समझ",
          text: "आत्म चिंतन और आध्यात्मिक ज्ञान के माध्यम से जीवन के गहरे प्रश्नों को समझें।",
        },
        {
          title: "शांति और संतुलन",
          text: "दैनिक जीवन में जागरूकता लाएँ और विचारों एवं कर्मों में सामंजस्य विकसित करें।",
        },
      ],
      guidanceLabel: "आध्यात्मिक मार्गदर्शन",
      guidanceTitle: "जागरूकता और मार्गदर्शन के साथ आगे बढ़ें।",
      guidanceText:
        "डॉ. स्वामी आनंदमयानंद जी की आध्यात्मिक शिक्षाओं और मार्गदर्शन के साथ धर्म, ध्यान और दिव्य ज्ञान के मूल्यों को समझें।",
      cta: "ध्यान के बारे में जानें",
      home: "मुख्य पृष्ठ पर जाएँ",
    },
  };

  const t = content[isHindi ? "hi" : "en"];

  const icons = [Sparkles, Flower2, Heart, Sun];

  return (
    <SiteShell>
      <main className="aatma-page">
        <section className="aatma-hero">
          <div className="aatma-hero-content">
            <p className="aatma-eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <div className="aatma-title-line" />
            <p className="aatma-hero-subtitle">{t.subtitle}</p>
            <a href="#aatma-intro" className="aatma-hero-link">
              {t.explore}
              <ArrowDown size={17} />
            </a>
          </div>
          <div className="aatma-hero-symbol" aria-hidden="true">
            <Flower2 />
          </div>
        </section>

        <section className="aatma-intro" id="aatma-intro">
          <div className="aatma-intro-symbol">
            <div className="aatma-symbol-circle">
              <Flower2 />
            </div>
            <span>DHARMA · DHYAN · DIVYA GYAN</span>
          </div>

          <div className="aatma-intro-content">
            <p className="aatma-eyebrow">{t.introLabel}</p>
            <h2>{t.introTitle}</h2>
            <p>{t.introText}</p>
            <p>{t.introText2}</p>
          </div>
        </section>

        <section className="aatma-path">
          <div className="aatma-section-heading">
            <p className="aatma-eyebrow">{t.pathLabel}</p>
            <h2>{t.pathTitle}</h2>
            <p>{t.pathSubtitle}</p>
          </div>

          <div className="aatma-steps">
            {t.steps.map((step, index) => {
              const Icon = icons[index];
              return (
                <article className="aatma-step-card" key={step.title}>
                  <span className="aatma-step-number">
                    0{index + 1}
                  </span>
                  <div className="aatma-step-icon">
                    <Icon size={25} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="aatma-guidance">
          <div className="aatma-guidance-content">
            <p className="aatma-eyebrow">{t.guidanceLabel}</p>
            <h2>{t.guidanceTitle}</h2>
            <p>{t.guidanceText}</p>
            <Link href="/meditation" className="aatma-cta-button">
              {t.cta}
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="aatma-bottom">
          <Link href="/" className="aatma-home-link">
            <ArrowRight size={16} />
            {t.home}
          </Link>
        </section>
      </main>
    </SiteShell>
  );
}
