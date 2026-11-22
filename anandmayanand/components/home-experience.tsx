
"use client";

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Menu,
  X,
  Globe2,
  Flower2,
  Sparkles,
  Sun,
  Orbit,
} from "lucide-react";
import {
  SiteHeader,
  SiteFooter,
  useSiteLanguage,
} from "@/components/site-shell";

type Language = "en" | "hi";

const content = {
  en: {
    nav: [
  "Home",
  "About",
  "Aatma Milan",
  "Meditation",
  "Seva",
  "Events",
  "Media",
  "Journal",
  "Gallery",
  "Contact",
],
    eyebrow: "A LIFE DEDICATED TO SPIRITUAL WISDOM",
    title: "Discover the path to",
    highlight: "inner awakening.",
    description:
      "Explore the teachings of Dr. Swami Anandmayanand through Dharma, Meditation and Divine Knowledge.",
    explore: "Explore His Journey",
    aatma: "Discover Aatma Milan",
    scroll: "SCROLL TO EXPLORE",
    introLabel: "ABOUT SHREE GURU",
    introTitle: "Wisdom that guides the journey of life.",
    introText:
      "Dr. Swami Anandmayanand, known as Shree Guru, shares spiritual knowledge through Bhagwat Katha, Ram Katha, meditation, yoga and teachings rooted in Indian spiritual traditions.",
    readMore: "READ HIS STORY",
    philosophy: "A SPIRITUAL PATH",
    philosophyTitle: "Aatma Milan – Sankalp Siddhi",
    philosophyText: "Dharma · Dhyan · Divya Gyan",
    philosophyDesc:
      "A spiritual practice centred on self-awareness, inner peace and awakening.",
    pillars: [
      {
        number: "01",
        title: "Dharma",
        subtitle: "RELIGION",
        text: "Astrology, Navgrah and Dhyan Sadhana.",
      },
      {
        number: "02",
        title: "Dhyan",
        subtitle: "MEDITATION",
        text: "Yoga, Bindu Dhyan, Kundalini Jagran, Shaktipaat and other meditation practices.",
      },
      {
        number: "03",
        title: "Divya Gyan",
        subtitle: "DIVINE KNOWLEDGE",
        text: "Bhagwat Katha, Ram Katha and Satsang.",
      },
    ],
    teachings: "SHREE GURU'S WORK",
    teachingsTitle: "Sharing the light of spiritual knowledge.",
    services: [
      [
        "Bhagwat Katha",
        "Spiritual discourses rooted in the wisdom of Shrimad Bhagwat.",
      ],
      [
        "Ram Katha",
        "Sharing the timeless teachings and values of Shri Ram.",
      ],
      [
        "Shiv Maha Puran",
        "Spiritual knowledge through the sacred tradition of Shiv Puran.",
      ],
      [
        "Yoga & Meditation",
        "Practices for physical, mental and spiritual well-being.",
      ],
    ],
    journey: "A JOURNEY BEYOND BORDERS",
    journeyTitle: "Sharing spiritual wisdom across the world.",
    journeyText:
      "Shree Guru has travelled across the United Kingdom, Europe and North America, sharing spiritual knowledge through Bhagwat Katha and other teachings.",
    hospital: "COMPASSION & HUMANITY",
    hospitalTitle: "Hospital of Hope",
    hospitalText:
      "Discover the charitable healthcare initiative associated with Radhe Sharnam Manav Kalyan Charitable Trust, presented separately as a humanitarian mission.",
    hospitalLink: "EXPLORE THE INITIATIVE",
    contact: "CONNECT WITH SHREE GURU",
    contactTitle: "Begin a journey of spiritual discovery.",
    contactText:
      "For spiritual programmes, Bhagwat Katha, Ram Katha and other enquiries, connect with the team.",
    contactButton: "GET IN TOUCH",
    footer: "A journey of Dharma, Meditation and Divine Knowledge.",
  },

  hi: {
    nav: [
  "होम",
  "गुरुजी परिचय",
  "आत्म मिलन",
  "ध्यान",
  "सेवा",
  "कार्यक्रम",
  "मीडिया",
  "लेख",
  "चित्र संग्रह",
  "संपर्क",
],
    eyebrow: "आध्यात्मिक ज्ञान को समर्पित जीवन",
    title: "आत्म जागरण की",
    highlight: "दिशा में एक यात्रा।",
    description:
      "डॉ. स्वामी आनंदमयानंद जी के धर्म, ध्यान और दिव्य ज्ञान पर आधारित आध्यात्मिक विचारों को जानें।",
    explore: "श्री गुरु की यात्रा जानें",
    aatma: "आत्म मिलन के बारे में जानें",
    scroll: "आगे जानने के लिए स्क्रॉल करें",
    introLabel: "श्री गुरु का परिचय",
    introTitle: "जीवन की यात्रा को दिशा देता आध्यात्मिक ज्ञान।",
    introText:
      "डॉ. स्वामी आनंदमयानंद, जिन्हें श्री गुरु के नाम से जाना जाता है, भागवत कथा, राम कथा, ध्यान, योग और भारतीय आध्यात्मिक परंपराओं के माध्यम से ज्ञान साझा करते हैं।",
    readMore: "जीवन परिचय पढ़ें",
    philosophy: "आध्यात्मिक पथ",
    philosophyTitle: "आत्म मिलन – संकल्प सिद्धि",
    philosophyText: "धर्म · ध्यान · दिव्य ज्ञान",
    philosophyDesc:
      "स्व-जागरूकता, आंतरिक शांति और आत्म जागरण पर आधारित एक आध्यात्मिक साधना।",
    pillars: [
      {
        number: "01",
        title: "धर्म",
        subtitle: "RELIGION",
        text: "ज्योतिष, नवग्रह एवं ध्यान साधना।",
      },
      {
        number: "02",
        title: "ध्यान",
        subtitle: "MEDITATION",
        text: "योग, बिंदु ध्यान, कुंडलिनी जागरण, शक्तिपात एवं अन्य ध्यान पद्धतियां।",
      },
      {
        number: "03",
        title: "दिव्य ज्ञान",
        subtitle: "DIVINE KNOWLEDGE",
        text: "भागवत कथा, राम कथा एवं सत्संग।",
      },
    ],
    teachings: "श्री गुरु के आध्यात्मिक कार्य",
    teachingsTitle: "आध्यात्मिक ज्ञान का प्रकाश साझा करना।",
    services: [
      [
        "भागवत कथा",
        "श्रीमद्भागवत के ज्ञान पर आधारित आध्यात्मिक प्रवचन।",
      ],
      [
        "राम कथा",
        "श्रीराम के शाश्वत आदर्शों और शिक्षाओं का प्रसार।",
      ],
      [
        "शिव महापुराण",
        "शिव पुराण की पवित्र परंपरा के माध्यम से आध्यात्मिक ज्ञान।",
      ],
      [
        "योग एवं ध्यान",
        "शारीरिक, मानसिक और आध्यात्मिक कल्याण के अभ्यास।",
      ],
    ],
    journey: "सीमाओं से परे आध्यात्मिक यात्रा",
    journeyTitle: "विश्वभर में आध्यात्मिक ज्ञान का प्रसार।",
    journeyText:
      "श्री गुरु ने भागवत कथा और आध्यात्मिक ज्ञान साझा करने के लिए यूनाइटेड किंगडम, यूरोप और उत्तरी अमेरिका की यात्रा की है।",
    hospital: "करुणा एवं मानव सेवा",
    hospitalTitle: "हॉस्पिटल ऑफ होप",
    hospitalText:
      "राधे शरणम मानव कल्याण चैरिटेबल ट्रस्ट से जुड़े इस धर्मार्थ स्वास्थ्य सेवा अभियान के बारे में जानें।",
    hospitalLink: "इस सेवा पहल के बारे में जानें",
    contact: "श्री गुरु से जुड़ें",
    contactTitle: "आध्यात्मिक यात्रा की शुरुआत करें।",
    contactText:
      "आध्यात्मिक कार्यक्रमों, भागवत कथा, राम कथा एवं अन्य जानकारियों के लिए संपर्क करें।",
    contactButton: "संपर्क करें",
    footer: "धर्म, ध्यान और दिव्य ज्ञान की एक आध्यात्मिक यात्रा।",
  },
};

const navLinks = [
  "/",
  "/about",
  "/aatma-milan",
  "/meditation",
  "/charity",
  "/events",
  "/media",
  "/blog",
  "/gallery",
  "/contact",
];

export function HomeExperience() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageReady, setLanguageReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("site-language");

    if (saved === "hi") {
      setLanguage("hi");
    }

    setLanguageReady(true);
  }, []);

  useEffect(() => {
    if (!languageReady) return;

    localStorage.setItem("site-language", language);
    document.documentElement.lang = language;
  }, [language, languageReady]);

  const t = content[language];

  return (
    <main
      className={
        language === "hi" ? "hindi-font" : "english-font"
      }
    >
      {/* HEADER */}
      
<header className="site-header">
  <Link
    href="/"
    className="brand"
    aria-label="Dr. Swami Anandmayanand Home"
  >
    <img
      src="/images/drswamianandmayanand.png"
      alt="Dr. Swami Anandmayanand Logo"
      className="brand-logo"
    />
  </Link>

  <nav className="desktop-nav">
    {t.nav.map((item, i) => (
      <Link href={navLinks[i]} key={item}>
        {item}
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


      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.25 }}
          >
            {t.nav.map((item, i) => (
             <Link
  key={item}
  href={navLinks[i]}
  onClick={() => setMenuOpen(false)}
>
  {item}
</Link>
            ))}

            <button
              onClick={() => {
                setLanguage(language === "en" ? "hi" : "en");
                setMenuOpen(false);
              }}
            >
              {language === "en"
                ? "हिंदी में देखें"
                : "View in English"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      
<section className="hero hero-split" id="top">
  <div className="hero-split-container">

    {/* LEFT CONTENT */}
    <motion.div
      className="hero-content"
      initial={{ opacity: 0, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p className="eyebrow">{t.eyebrow}</p>

      <h1 className="hero-title">
        <span>{t.title}</span>
        <span className="hero-highlight">
          {t.highlight}
        </span>
      </h1>

      <p className="hero-description">
        {t.description}
      </p>

      <div className="hero-buttons">
        <a href="#about" className="primary-button">
          {t.explore}
          <ArrowRight size={18} />
        </a>

        <a href="#aatma-milan" className="secondary-button">
          {t.aatma}
        </a>
      </div>

      <div className="hero-bottom-note">
        <span>DHARMA · DHYAN · DIVYA GYAN</span>
      </div>
    </motion.div>

    {/* RIGHT GURUJI IMAGE */}
    <motion.div
      className="hero-image-column"
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="hero-image-frame">
        <img
          src="/images/guruji-hero.jpg"
          alt="Dr. Swami Anandmayanand"
          className="hero-portrait"
        />

        <div className="hero-image-caption">
          <span>DIVINE WISDOM</span>
          <strong>Dr. Swami Anandmayanand</strong>
        </div>
      </div>

      <div className="hero-image-decoration">ॐ</div>
    </motion.div>

  </div>

  <a href="#about" className="scroll-indicator">
    {t.scroll}
    <ArrowDown size={16} />
  </a>
</section>


      {/* ABOUT SECTION */}
      
<section className="about-guruji-section" id="about">
  <div className="about-guruji-container">

    {/* Guruji Image */}
    <motion.div
      className="about-guruji-image"
      initial={{ opacity: 0, x: -35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="/images/guruji-hero.jpg"
        alt="Dr. Swami Anandmayanand"
      />
      <div className="about-image-caption">
        DR. SWAMI ANANDMAYANAND
      </div>
    </motion.div>

    {/* Guruji Introduction */}
    <motion.div
      className="about-guruji-content"
      initial={{ opacity: 0, x: 35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
    >
      <p className="about-guruji-label">
        <span></span>
        {t.introLabel}
      </p>

      <h2>{t.introTitle}</h2>

      <div className="about-guruji-divider"></div>

      <p className="about-guruji-description">
        {t.introText}
      </p>

      <p className="about-guruji-description">
        {language === "hi"
          ? "धर्म, ध्यान और दिव्य ज्ञान के माध्यम से आध्यात्मिक चेतना एवं आत्म जागरण की दिशा में मार्गदर्शन।"
          : "Guidance towards spiritual awareness and inner awakening through Dharma, Meditation and Divine Knowledge."}
      </p>

      <a href="/about" className="about-guruji-button">
        {t.readMore}
        <ArrowRight size={17} />
      </a>
    </motion.div>

  </div>
</section>


{/* DETAILED GURUJI BIOGRAPHY */}

<section className="guruji-biography" id="guruji-biography">
  <div className="biography-container">

    <div className="biography-heading">
      <p className="biography-eyebrow">
        {language === "hi" ? "श्री गुरु का जीवन परिचय" : "THE LIFE & JOURNEY"}
      </p>

      <h2>
        {language === "hi"
          ? "भक्ति, साधना और आध्यात्मिक ज्ञान की यात्रा।"
          : "A journey of devotion, spiritual wisdom and knowledge."}
      </h2>

      <p>
        {language === "hi"
          ? "डॉ. स्वामी आनंदमयानंद जी के जीवन, शिक्षा, साधना और आध्यात्मिक योगदान की एक झलक।"
          : "Discover the life, education, spiritual practice and teachings of Dr. Swami Anandmayanand."}
      </p>
    </div>

    <div className="biography-grid">

      {/* 01 - Early Life */}
      <article className="biography-card biography-wide">
        <span className="biography-number">01</span>
        <p className="biography-card-label">
          {language === "hi" ? "प्रारंभिक जीवन" : "EARLY LIFE"}
        </p>
        <h3>
          {language === "hi"
            ? "नाथद्वारा से आध्यात्मिक यात्रा"
            : "Roots in Nathdwara"}
        </h3>
        <p>
          {language === "hi"
            ? "राजस्थान के प्रसिद्ध तीर्थस्थल नाथद्वारा से जुड़े श्री गुरु को मात्र छह माह की आयु में ठाकुर जी की दिव्य कृपा प्राप्त हुई। बाल्यावस्था से ही वे व्यासपीठ से जुड़े और उनका जीवन भक्ति एवं आध्यात्मिक चेतना की दिशा में आगे बढ़ा।"
            : "Hailing from Nathdwara, a renowned pilgrimage town in Rajasthan, Shree Guru received the divine blessings of Thakur Ji at just six months of age. From childhood, he was associated with the Vyaspeeth, beginning a life deeply rooted in devotion and spirituality."}
        </p>
      </article>

      {/* 02 - Spiritual Practice */}
      <article className="biography-card">
        <span className="biography-number">02</span>
        <p className="biography-card-label">
          {language === "hi" ? "साधना एवं ध्यान" : "SPIRITUAL PRACTICE"}
        </p>
        <h3>
          {language === "hi" ? "ध्यान और तपस्या" : "Meditation & Penance"}
        </h3>
        <p>
          {language === "hi"
            ? "कम आयु से ही श्री गुरु ने गहन ध्यान और तपस्या के माध्यम से आध्यात्मिक साधना की। वे नियमित रूप से योग और ध्यान का अभ्यास करते हैं तथा शारीरिक, मानसिक और आध्यात्मिक स्वास्थ्य को समान महत्व देते हैं।"
            : "From a young age, Shree Guru devoted himself to deep meditation and penance. He continues to practise Yoga and Meditation regularly, emphasising the importance of physical, mental and spiritual well-being."}
        </p>
      </article>

      {/* 03 - Education */}
      <article className="biography-card">
        <span className="biography-number">03</span>
        <p className="biography-card-label">
          {language === "hi" ? "शैक्षणिक योग्यता" : "EDUCATION"}
        </p>
        <h3>
          {language === "hi" ? "शिक्षा एवं अध्ययन" : "Academic Background"}
        </h3>
        <ul>
          <li>B.A. Honours – Sanskrit</li>
          <li>M.A. – Sanskrit</li>
          <li>LL.B. and LL.B. Special</li>
          <li>
            {language === "hi" ? "ज्योतिष में Ph.D." : "Ph.D. in Astrology"}
          </li>
          <li>
            {language === "hi"
              ? "Yoga Alliance प्रमाणित योग एवं ध्यान शिक्षक"
              : "Yoga & Meditation Teacher certified by Yoga Alliance"}
          </li>
        </ul>
      </article>

      {/* 04 - Teachings */}
      <article className="biography-card">
        <span className="biography-number">04</span>
        <p className="biography-card-label">
          {language === "hi" ? "आध्यात्मिक कार्य" : "SPIRITUAL TEACHINGS"}
        </p>
        <h3>
          {language === "hi"
            ? "कथा, योग एवं आध्यात्मिक मार्गदर्शन"
            : "Teachings & Guidance"}
        </h3>
        <p>
          {language === "hi"
            ? "श्री गुरु विभिन्न भाषाओं में भागवत एवं राम कथा के माध्यम से आध्यात्मिक ज्ञान साझा करते हैं। वे मानवता, योग और ध्यान की शिक्षाओं के साथ योग एवं ध्यान कार्यशालाओं तथा ज्योतिष संबंधी परामर्श के माध्यम से भी लोगों का मार्गदर्शन करते हैं।"
            : "Shree Guru shares spiritual wisdom through Bhagwat and Ram Katha in different languages. His work also includes teachings on humanity, Yoga and Meditation, workshops, and astrological consultations."}
        </p>
      </article>

      {/* 05 - Global Journey */}
      <article className="biography-card">
        <span className="biography-number">05</span>
        <p className="biography-card-label">
          {language === "hi" ? "विश्वव्यापी यात्रा" : "GLOBAL JOURNEY"}
        </p>
        <h3>
          {language === "hi"
            ? "विश्वभर में ज्ञान का प्रसार"
            : "Sharing Wisdom Worldwide"}
        </h3>
        <p>
          {language === "hi"
            ? "आध्यात्मिक ज्ञान और भागवत कथा के प्रसार के लिए श्री गुरु ने यूनाइटेड किंगडम, यूरोप और उत्तरी अमेरिका के विभिन्न क्षेत्रों की यात्रा की है।"
            : "Shree Guru has travelled across various regions of the United Kingdom, Europe and North America, sharing spiritual knowledge and the teachings of Bhagwat Katha with communities worldwide."}
        </p>
        <p className="biography-languages">
          {language === "hi"
            ? "भाषाएँ: संस्कृत, हिंदी, अंग्रेज़ी, गुजराती और पंजाबी"
            : "Languages: Sanskrit, Hindi, English, Gujarati and Punjabi"}
        </p>
      </article>

      {/* 06 - Specialisations */}
      <article className="biography-card biography-wide">
        <span className="biography-number">06</span>
        <p className="biography-card-label">
          {language === "hi" ? "विशेषज्ञता" : "AREAS OF SPECIALISATION"}
        </p>
        <h3>
          {language === "hi"
            ? "आध्यात्मिक ज्ञान की विविध धाराएँ"
            : "A Diverse Range of Spiritual Disciplines"}
        </h3>
        <p>
          {language === "hi"
            ? "श्री गुरु भागवत कथा, राम कथा, शिव महापुराण, सत्संग, योग, ध्यान, ज्योतिष एवं विभिन्न प्रकार की वैदिक पूजाओं में विशेषता रखते हैं। वे सरल और व्यावहारिक भाषा में आध्यात्मिक विचार प्रस्तुत करते हैं।"
            : "Shree Guru specialises in Bhagwat Katha, Ram Katha, Shiv Maha Puran Katha, Satsang, Yoga, Meditation, Astrology and various Vedic Poojas. He is known for presenting spiritual teachings in simple and practical language."}
        </p>

        <div className="biography-tags">
          <span>Bhagwat Katha</span>
          <span>Ram Katha</span>
          <span>Shiv Maha Puran</span>
          <span>Satsang</span>
          <span>Yoga</span>
          <span>Meditation</span>
          <span>Astrology</span>
          <span>Vedic Poojas</span>
        </div>
      </article>

    </div>

    {/* Designations */}
    <div className="biography-designation">
      <p>
        {language === "hi" ? "संस्थागत परिचय एवं सम्मान" : "DESIGNATIONS & SPIRITUAL ASSOCIATIONS"}
      </p>

      <h3>Udasin Panchayati Bada Akhada</h3>

      <span>
        {language === "hi"
          ? "संन्यास दीक्षा – परम तपस्वी बाबा कल्याणदास जी, अमरकंटक धाम"
          : "Sanyas Diksha – Param Tapasvi Baba Kalyandas Ji, Amarkantak Dham"}
      </span>

      <span>
        {language === "hi"
          ? "अध्यक्ष – गुजरात स्टेट युवा भारत साधु समाज"
          : "President – Gujarat State Yuva Bharat Sadhu Samaj"}
      </span>
    </div>

  </div>
</section>


{/* VIDEOS & SPIRITUAL MOMENTS */}

<section className="media-showcase" id="videos">
  <div className="media-showcase-container">

    <div className="media-showcase-heading">
      <p className="media-eyebrow">
        {language === "hi" ? "वीडियो संग्रह" : "WATCH & EXPERIENCE"}
      </p>

      <h2>
        {language === "hi"
          ? "आध्यात्मिक ज्ञान के कुछ विशेष क्षण"
          : "Spiritual Wisdom, Through Every Moment"}
      </h2>

      <p>
        {language === "hi"
          ? "श्री गुरु के प्रवचन, आध्यात्मिक विचार और प्रेरणादायक वीडियो देखें।"
          : "Explore spiritual discourses, inspiring thoughts and divine moments with Shree Guru."}
      </p>
    </div>

    {/* YOUTUBE VIDEOS */}
    <div className="media-category-heading">
      <h3>YouTube</h3>
      <span>
        {language === "hi" ? "प्रवचन एवं वीडियो" : "Discourses & Videos"}
      </span>
    </div>

    <div className="youtube-video-grid">

      <div className="youtube-video-card">
        <div className="youtube-video-frame">
          <iframe
            src="https://www.youtube.com/embed/CE-3Fb_D2o4"
            title="Shree Guru YouTube Video 1"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <div className="youtube-video-card">
        <div className="youtube-video-frame">
          <iframe
            src="https://www.youtube.com/embed/wgxXXZ0NWO4"
            title="Shree Guru YouTube Video 2"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <div className="youtube-video-card">
        <div className="youtube-video-frame">
          <iframe
            src="https://www.youtube.com/embed/54TfiO_KOIQ"
            title="Shree Guru YouTube Video 3"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

    </div>

    {/* INSTAGRAM REELS */}
    <div className="media-category-heading instagram-heading">
      <h3>Instagram Reels</h3>
      <span>
        {language === "hi" ? "विशेष झलकियाँ" : "Short Spiritual Moments"}
      </span>
    </div>

    <div className="instagram-video-grid">

      <div className="instagram-video-card">
        <iframe
          src="https://www.instagram.com/reel/DcEd0pECRE7/embed"
          title="Shree Guru Instagram Reel 1"
          loading="lazy"
          allowFullScreen
        />
      </div>

      <div className="instagram-video-card">
        <iframe
          src="https://www.instagram.com/reel/DbV70JbjqcZ/embed"
          title="Shree Guru Instagram Reel 2"
          loading="lazy"
          allowFullScreen
        />
      </div>

      <div className="instagram-video-card">
        <iframe
          src="https://www.instagram.com/reel/Dd12jZ_OyYg/embed"
          title="Shree Guru Instagram Reel 3"
          loading="lazy"
          allowFullScreen
        />
      </div>

    </div>

    <div className="media-social-links">
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore on YouTube ↗
      </a>

      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore on Instagram ↗
      </a>
    </div>

  </div>
</section>


      {/* AATMA MILAN SECTION */}
      <section className="aatma-section" id="aatma-milan">
        <div className="aatma-heading">
          <p className="eyebrow">{t.philosophy}</p>
          <h2>{t.philosophyTitle}</h2>
          <p>{t.philosophyText}</p>
          <span>{t.philosophyDesc}</span>
        </div>

        <div className="pillar-grid">
          {t.pillars.map((pillar, index) => {
            const Icon =
              index === 0
                ? Sun
                : index === 1
                  ? Flower2
                  : Sparkles;

            return (
              <article
                className="pillar-card"
                key={pillar.number}
              >
                <span className="pillar-number">
                  {pillar.number}
                </span>

                <div className="pillar-symbol">
                  <Icon size={38} strokeWidth={1.5} />
                </div>

                <p>{pillar.subtitle}</p>
                <h3>{pillar.title}</h3>

                <span className="pillar-description">
                  {pillar.text}
                </span>
              </article>
            );
          })}
        </div>
      </section>

      {/* TEACHINGS SECTION */}
      <section
        className="teachings-section section"
        id="teachings"
      >
        <p className="eyebrow">{t.teachings}</p>

        <h2>{t.teachingsTitle}</h2>

        <div className="teaching-grid">
          {t.services.map(([title, text], i) => (
            <article className="teaching-card" key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* INTERNATIONAL JOURNEY */}
      <section className="journey-section" id="katha">
        <div className="journey-content">
          <p className="eyebrow">{t.journey}</p>
          <h2>{t.journeyTitle}</h2>
          <p>{t.journeyText}</p>
        </div>
      </section>

      {/* HOSPITAL OF HOPE */}
      <section
        className="hospital-section section"
        id="hospital"
      >
        <div className="hospital-mark">
          <Sun size={90} strokeWidth={1} />
        </div>

        <div>
          <p className="eyebrow">{t.hospital}</p>
          <h2>{t.hospitalTitle}</h2>
          <p>{t.hospitalText}</p>

          <a
            href="/hospital-of-hope"
            className="text-link"
          >
            {t.hospitalLink}
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <p className="eyebrow">{t.contact}</p>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactText}</p>

        <a href="/contact" className="primary-button">
          {t.contactButton}
          <ArrowRight size={17} />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-brand">
          ॐ
          <span>
            SHREE GURU
            <small>DR. SWAMI ANANDMAYANAND</small>
          </span>
        </div>

        <p>{t.footer}</p>

        <span>
          © {new Date().getFullYear()} Dr. Swami Anandmayanand
        </span>
      </footer>
    </main>
  );
}
