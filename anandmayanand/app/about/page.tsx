
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Globe2,
  Heart,
  Sparkles,
} from "lucide-react";

import "./about.css";
import { SiteShell, useSiteLanguage } from "@/components/site-shell";

function AboutPageContent() {
  const { language } = useSiteLanguage();
  const isHindi = language === "hi";

  return (
    <main className="guruji-about-page">

      {/* HERO SECTION */}
      <section className="about-page-hero">
        <div className="about-page-hero-inner">

          <Link href="/" className="about-back-link">
            <ArrowLeft size={16} />
            {isHindi ? "मुख्य पृष्ठ पर जाएँ" : "Back to Home"}
          </Link>

          <p className="about-page-eyebrow">
            {isHindi ? "जीवन और आध्यात्मिक यात्रा" : "THE LIFE & JOURNEY"}
          </p>

          <h1>
            {isHindi ? "आध्यात्मिक यात्रा" : "The Journey of"}
            <br />
            <em>Dr. Swami Anandmayanand</em>
          </h1>

          <p>
            {isHindi
              ? "आध्यात्मिक ज्ञान, ध्यान, भक्ति और दिव्य ज्ञान के प्रसार को समर्पित जीवन।"
              : "A life dedicated to spiritual wisdom, meditation, devotion and sharing divine knowledge."}
          </p>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-page-introduction">

        <div className="about-page-photo">
          <Image
            src="/images/guruji-hero.jpg"
            alt="Dr. Swami Anandmayanand"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>

        <div className="about-page-intro-content">

          <p className="about-page-eyebrow">
            {isHindi ? "श्री गुरु का परिचय" : "ABOUT SHREE GURU"}
          </p>

          <h2>
            {isHindi
              ? "जीवन की यात्रा को दिशा देने वाला ज्ञान।"
              : "Wisdom that guides the journey of life."}
          </h2>

          <p>
            {isHindi
              ? "डॉ. स्वामी आनंदमयानंद, जिन्हें श्री गुरु के नाम से जाना जाता है, भागवत कथा, राम कथा, ध्यान, योग और भारतीय आध्यात्मिक परंपराओं में निहित शिक्षाओं के माध्यम से आध्यात्मिक ज्ञान साझा करते हैं।"
              : "Dr. Swami Anandmayanand, known as Shree Guru, shares spiritual knowledge through Bhagwat Katha, Ram Katha, meditation, yoga and teachings rooted in Indian spiritual traditions."}
          </p>

          <p>
            {isHindi
              ? "उनकी आध्यात्मिक यात्रा, आध्यात्मिक जागरूकता, आत्म जागरण तथा व्यक्तियों और समाज के कल्याण के प्रति समर्पण को दर्शाती है।"
              : "His journey reflects a commitment to spiritual awareness, inner awakening and the well-being of individuals and communities."}
          </p>

        </div>
      </section>

      {/* LIFE JOURNEY */}
      <section className="about-page-story">

        <div className="about-story-heading">

          <p className="about-page-eyebrow">
            {isHindi ? "जीवन परिचय" : "HIS STORY"}
          </p>

          <h2>
            {isHindi
              ? "भक्ति और आध्यात्मिक साधना से जुड़ी यात्रा।"
              : "A journey rooted in devotion and spiritual practice."}
          </h2>

        </div>

        <div className="about-story-grid">

          {/* EARLY LIFE */}
          <article className="about-story-card">
            <span>01</span>
            <Sparkles />

            <h3>{isHindi ? "प्रारंभिक जीवन" : "Early Life"}</h3>

            <p>
              {isHindi
                ? "श्री गुरु का जन्म राजस्थान के प्रसिद्ध तीर्थ स्थल नाथद्वारा में हुआ। उनकी जीवनी के अनुसार, छह माह की आयु में उन्हें ठाकुर जी का आशीर्वाद प्राप्त हुआ और बचपन से ही उनका संबंध व्यासपीठ से रहा।"
                : "Shree Guru hails from Nathdwara, a renowned pilgrimage town in Rajasthan. According to his biography, he received the blessings of Thakur Ji at six months of age and was associated with the Vyaspeeth from childhood."}
            </p>
          </article>

          {/* MEDITATION */}
          <article className="about-story-card">
            <span>02</span>
            <Heart />

            <h3>
              {isHindi ? "ध्यान और तपस्या" : "Meditation & Penance"}
            </h3>

            <p>
              {isHindi
                ? "उनकी जीवनी में कम आयु से ही गहन ध्यान और तपस्या का उल्लेख है। वे नियमित रूप से योग और ध्यान का अभ्यास करते हैं तथा शारीरिक, मानसिक और आध्यात्मिक स्वास्थ्य को महत्व देते हैं।"
                : "His biography describes deep meditation and penance from a young age. He regularly practises yoga and meditation, valuing physical, mental and spiritual well-being."}
            </p>
          </article>

          {/* EDUCATION */}
          <article className="about-story-card">
            <span>03</span>
            <BookOpen />

            <h3>{isHindi ? "शिक्षा" : "Education"}</h3>

            <p>
              {isHindi
                ? "संस्कृत में बी.ए. ऑनर्स, संस्कृत में एम.ए., एल.एल.बी., एल.एल.बी. स्पेशल तथा ज्योतिष में पीएच.डी.। वे योग एलायंस से प्रमाणित योग एवं ध्यान शिक्षक भी हैं।"
                : "B.A. Honours in Sanskrit, M.A. in Sanskrit, LL.B., LL.B. Special and a Ph.D. in Astrology. He is also a Yoga and Meditation teacher certified by Yoga Alliance."}
            </p>
          </article>

          {/* INTERNATIONAL JOURNEY */}
          <article className="about-story-card">
            <span>04</span>
            <Globe2 />

            <h3>
              {isHindi ? "अंतरराष्ट्रीय यात्रा" : "International Journey"}
            </h3>

            <p>
              {isHindi
                ? "उन्होंने यूनाइटेड किंगडम, यूरोप और उत्तरी अमेरिका के विभिन्न क्षेत्रों की यात्रा कर भागवत कथा के माध्यम से आध्यात्मिक ज्ञान का प्रसार किया है।"
                : "He has travelled across various regions of the United Kingdom, Europe and North America, sharing spiritual knowledge through Bhagwat Katha."}
            </p>
          </article>

        </div>
      </section>

      {/* SPIRITUAL EXPERIENCE */}
      <section className="about-page-experience">

        <div>

          <p className="about-page-eyebrow">
            {isHindi ? "आध्यात्मिक अनुभव" : "SPIRITUAL EXPERIENCE"}
          </p>

          <h2>
            {isHindi
              ? "समाज और समुदायों के बीच ज्ञान का प्रसार।"
              : "Sharing wisdom across communities."}
          </h2>

          <p>
            {isHindi
              ? "उनके कार्यों में भागवत कथा, राम कथा, शिव महापुराण कथा, सत्संग, योग एवं ध्यान कार्यशालाएँ, ज्योतिषीय परामर्श और विभिन्न प्रकार की वैदिक पूजाएँ शामिल हैं। उनकी शिक्षाएँ आध्यात्मिकता, मानवता और व्यावहारिक मार्गदर्शन पर केंद्रित हैं।"
              : "His work includes Bhagwat Katha, Ram Katha, Shiv Maha Puran Katha, Satsang, yoga and meditation workshops, astrological consultations and Vedic Poojas. His teachings focus on spirituality, humanity and practical guidance."}
          </p>

        </div>
      </section>

      {/* LANGUAGES & DESIGNATIONS */}
      <section className="about-page-education">

        <p className="about-page-eyebrow">
          {isHindi ? "भाषाएँ और पद" : "LANGUAGES & DESIGNATIONS"}
        </p>

        <h2>
          {isHindi
            ? "ज्ञान की कोई सीमा नहीं।"
            : "Knowledge without boundaries."}
        </h2>

        <p>
          {isHindi
            ? "प्रदान की गई जीवनी के अनुसार, वे संस्कृत, हिंदी, अंग्रेज़ी, गुजराती और पंजाबी भाषाओं में दक्ष हैं।"
            : "The provided biography mentions proficiency in Sanskrit, Hindi, English, Gujarati and Punjabi."}
        </p>

        <div className="about-language-list">
          {[
            "Sanskrit",
            "Hindi",
            "English",
            "Gujarati",
            "Punjabi",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="about-designation-box">

          <h3>Udasin Panchayati Bada Akhada</h3>

          <p>
            {isHindi
              ? "संन्यास दीक्षा – परम तपस्वी बाबा कल्याणदास जी, अमरकंटक धाम"
              : "Sanyas Diksha – Param Tapasvi Baba Kalyandas Ji, Amarkantak Dham"}
          </p>

          <p>
            {isHindi
              ? "अध्यक्ष – गुजरात राज्य युवा भारत साधु समाज"
              : "President – Gujarat State Yuva Bharat Sadhu Samaj"}
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="about-page-cta">

        <p className="about-page-eyebrow">
          {isHindi ? "आगे की यात्रा" : "CONTINUE THE JOURNEY"}
        </p>

        <h2>
          {isHindi
            ? "धर्म, ध्यान और दिव्य ज्ञान के मार्ग को जानें।"
            : "Discover the path of Dharma, Dhyan and Divya Gyan."}
        </h2>

        <Link href="/" className="about-home-button">
          {isHindi ? "वेबसाइट देखें" : "Explore the Website"}
          <ArrowRight size={17} />
        </Link>

      </section>

    </main>
  );
}

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutPageContent />
    </SiteShell>
  );
}
