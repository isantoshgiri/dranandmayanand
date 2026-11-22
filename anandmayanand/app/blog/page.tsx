
"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Flower2,
  Sparkles,
  Sun,
} from "lucide-react";
import { SiteShell, useSiteLanguage } from "@/components/site-shell";
import "./blog.css";

export default function BlogPage() {
  const { language } = useSiteLanguage();
  const isHindi = language === "hi";

  const content = {
    en: {
      eyebrow: "THE JOURNAL",
      title: "Words that inspire.",
      subtitle:
        "Explore reflections on spirituality, Sanatan Dharma, meditation and the wisdom of everyday life.",
      featured: "FEATURED REFLECTION",
      featuredTitle: "The journey towards inner peace begins within.",
      featuredText:
        "Discover how awareness, devotion and mindful living can bring a deeper sense of meaning to everyday life.",
      read: "Explore the reflection",
      latest: "EXPLORE THE JOURNAL",
      heading: "Wisdom for the journey of life.",
      description:
        "Thoughts, teachings and reflections to help you explore the deeper dimensions of life.",
      categories: ["All", "Spirituality", "Sanatan Dharma", "Meditation", "Vedic Wisdom"],
      articles: [
        {
          category: "Spirituality",
          title: "Understanding the true meaning of spirituality",
          text: "Explore spirituality as a journey of awareness, self-understanding and a deeper connection with life.",
          icon: "flower",
        },
        {
          category: "Sanatan Dharma",
          title: "The timeless wisdom of Sanatan Dharma",
          text: "Discover the values, traditions and timeless principles that guide a meaningful way of living.",
          icon: "sun",
        },
        {
          category: "Meditation",
          title: "Why making time for meditation matters",
          text: "Understand the importance of stillness, patience and regular practice in everyday life.",
          icon: "sparkles",
        },
        {
          category: "Vedic Wisdom",
          title: "Learning from the wisdom of the Vedas",
          text: "An introduction to the knowledge and insights preserved in India's ancient spiritual traditions.",
          icon: "book",
        },
      ],
      note: "More reflections and teachings will be shared here.",
      ctaLabel: "CONTINUE YOUR JOURNEY",
      ctaTitle: "Let wisdom become a part of everyday life.",
      ctaText:
        "Explore spiritual teachings and discover more about the journey of Dr. Swami Anandmayanand.",
      ctaButton: "Know About Guruji",
      home: "Back to Home",
    },
    hi: {
      eyebrow: "आध्यात्मिक विचार",
      title: "ऐसे विचार जो प्रेरित करें।",
      subtitle:
        "आध्यात्मिकता, सनातन धर्म, ध्यान और जीवन के ज्ञान से जुड़े विचारों को जानें।",
      featured: "विशेष विचार",
      featuredTitle: "आंतरिक शांति की यात्रा स्वयं से शुरू होती है।",
      featuredText:
        "जानें कि जागरूकता, भक्ति और सजग जीवनशैली किस प्रकार दैनिक जीवन को अधिक अर्थपूर्ण बना सकती है।",
      read: "विचार को जानें",
      latest: "आध्यात्मिक लेख",
      heading: "जीवन की यात्रा के लिए ज्ञान।",
      description:
        "जीवन के गहरे आयामों को समझने के लिए विचार, शिक्षाएँ और प्रेरणादायक चिंतन।",
      categories: ["सभी", "आध्यात्मिकता", "सनातन धर्म", "ध्यान", "वैदिक ज्ञान"],
      articles: [
        {
          category: "आध्यात्मिकता",
          title: "आध्यात्मिकता का वास्तविक अर्थ",
          text: "आध्यात्मिकता को जागरूकता, आत्मबोध और जीवन से गहरे जुड़ाव की यात्रा के रूप में समझें।",
          icon: "flower",
        },
        {
          category: "सनातन धर्म",
          title: "सनातन धर्म का शाश्वत ज्ञान",
          text: "अर्थपूर्ण जीवन का मार्ग दिखाने वाले सनातन मूल्यों, परंपराओं और सिद्धांतों को जानें।",
          icon: "sun",
        },
        {
          category: "ध्यान",
          title: "ध्यान के लिए समय निकालना क्यों जरूरी है?",
          text: "दैनिक जीवन में शांति, धैर्य और नियमित अभ्यास के महत्व को समझें।",
          icon: "sparkles",
        },
        {
          category: "वैदिक ज्ञान",
          title: "वेदों के ज्ञान से जीवन की सीख",
          text: "भारत की प्राचीन आध्यात्मिक परंपराओं में सुरक्षित ज्ञान और विचारों का परिचय।",
          icon: "book",
        },
      ],
      note: "यहाँ जल्द ही और आध्यात्मिक विचार एवं लेख साझा किए जाएँगे।",
      ctaLabel: "अपनी यात्रा जारी रखें",
      ctaTitle: "ज्ञान को अपने दैनिक जीवन का हिस्सा बनाएँ।",
      ctaText:
        "आध्यात्मिक शिक्षाओं को जानें और डॉ. स्वामी आनंदमयानंद जी की यात्रा के बारे में पढ़ें।",
      ctaButton: "गुरुजी के बारे में जानें",
      home: "मुख्य पृष्ठ पर जाएँ",
    },
  };

  const t = content[isHindi ? "hi" : "en"];

  const icons = [Flower2, Sun, Sparkles, BookOpen];

  return (
    <SiteShell>
      <main className="journal-page">

        <section className="journal-hero">
          <div className="journal-hero-content">
            <p className="journal-eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <div className="journal-title-line" />
            <p>{t.subtitle}</p>
          </div>
          <div className="journal-hero-symbol">
            <Flower2 />
          </div>
        </section>

        <section className="journal-featured">
          <div className="journal-featured-visual">
            <div className="journal-featured-circle">
              <Sun />
            </div>
            <span>DHARMA · DHYAN · DIVYA GYAN</span>
          </div>

          <div className="journal-featured-content">
            <p className="journal-eyebrow">{t.featured}</p>
            <h2>{t.featuredTitle}</h2>
            <p>{t.featuredText}</p>
            <a href="#journal-articles" className="journal-read-link">
              {t.read} <ArrowRight size={17} />
            </a>
          </div>
        </section>

        <section className="journal-articles" id="journal-articles">
          <div className="journal-section-heading">
            <p className="journal-eyebrow">{t.latest}</p>
            <h2>{t.heading}</h2>
            <p>{t.description}</p>
          </div>

          <div className="journal-grid">
            {t.articles.map((article, index) => {
              const Icon = icons[index];

              return (
                <article className="journal-card" key={article.title}>
                  <div className="journal-card-art">
                    <span>0{index + 1}</span>
                    <Icon />
                  </div>
                  <div className="journal-card-content">
                    <p className="journal-category">{article.category}</p>
                    <h3>{article.title}</h3>
                    <p className="journal-card-description">
                      {article.text}
                    </p>
                    <span className="journal-coming-soon">
                      {isHindi ? "शीघ्र प्रकाशित होगा" : "Coming soon"}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="journal-note">{t.note}</p>
        </section>

        <section className="journal-cta">
          <div className="journal-cta-content">
            <p className="journal-eyebrow">{t.ctaLabel}</p>
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaText}</p>
            <Link href="/about" className="journal-cta-button">
              {t.ctaButton} <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="journal-bottom">
          <Link href="/" className="journal-home-link">
            <ArrowRight size={16} />
            {t.home}
          </Link>
        </section>

      </main>
    </SiteShell>
  );
}
