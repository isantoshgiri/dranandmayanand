
"use client";

import Link from "next/link";
import {
  Heart,
  BookOpen,
  Utensils,
  Leaf,
  HandHeart,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { SiteShell, useSiteLanguage } from "@/components/site-shell";
import "./donation.css";

export default function DonationPage() {
  const { language } = useSiteLanguage();
  const isHindi = language === "hi";

  const t = {
    en: {
      label: "SUPPORT OUR MISSION",
      title: "Be a Part of",
      highlight: "Something Meaningful",
      subtitle:
        "Your support helps us continue the journey of Vedic education, service and spiritual values.",
      introLabel: "YOUR CONTRIBUTION MATTERS",
      introTitle: "A Small Act of Giving. A Lasting Impact.",
      intro:
        "Every contribution is an opportunity to support a meaningful cause. Together, we can help preserve traditional knowledge, support students and serve those in need.",
      purposeLabel: "WHERE YOUR SUPPORT GOES",
      purposeTitle: "Support the Work That Matters",
      purposes: [
        {
          title: "Vedic Education",
          desc: "Supporting traditional learning and the education of students in the Gurukul.",
        },
        {
          title: "Food Service",
          desc: "Contributing towards daily food distribution and nourishment for those in need.",
        },
        {
          title: "Gurukul Development",
          desc: "Helping improve learning spaces, facilities and resources for students.",
        },
        {
          title: "Community Service",
          desc: "Supporting initiatives rooted in compassion, service and social well-being.",
        },
      ],
      howLabel: "WAYS TO CONTRIBUTE",
      howTitle: "Your Support, Your Way",
      ways: [
        {
          title: "One-Time Contribution",
          desc: "Make a contribution whenever you feel inspired to support the mission.",
        },
        {
          title: "Regular Support",
          desc: "Offer support regularly to help sustain ongoing educational and service activities.",
        },
      ],
      donationLabel: "MAKE A CONTRIBUTION",
      donationTitle: "Support Our Mission",
      donationText:
        "For verified donation details, bank information or other ways to contribute, please contact our team.",
      contact: "Contact Us",
      transparencyTitle: "A Note on Contributions",
      transparencyText:
        "Please use only the official payment details shared by the organisation. Verify the recipient and payment information before making any contribution.",
      faqLabel: "COMMON QUESTIONS",
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          q: "How can I contribute?",
          a: "Please contact the organisation for verified bank or payment details.",
        },
        {
          q: "Can I support a specific activity?",
          a: "Please get in touch with the team to discuss the available areas of support.",
        },
        {
          q: "How can I get more information?",
          a: "You can reach out through the Contact page for further information.",
        },
      ],
      back: "Back to Home",
    },
    hi: {
      label: "हमारे मिशन में सहयोग करें",
      title: "बनें एक",
      highlight: "सार्थक प्रयास का हिस्सा",
      subtitle:
        "आपका सहयोग वैदिक शिक्षा, सेवा और आध्यात्मिक मूल्यों की परंपरा को आगे बढ़ाने में सहायक है।",
      introLabel: "आपका सहयोग महत्वपूर्ण है",
      introTitle: "छोटा सा सहयोग, बड़ा प्रभाव",
      intro:
        "हर योगदान एक सार्थक उद्देश्य को आगे बढ़ाने का अवसर है। आइए, मिलकर पारंपरिक ज्ञान, विद्यार्थियों की शिक्षा और जरूरतमंदों की सेवा में सहयोग करें।",
      purposeLabel: "आपका सहयोग कहाँ उपयोगी होगा",
      purposeTitle: "महत्वपूर्ण सेवा कार्यों में सहयोग",
      purposes: [
        {
          title: "वैदिक शिक्षा",
          desc: "गुरुकुल में पारंपरिक ज्ञान और विद्यार्थियों की शिक्षा को सहयोग।",
        },
        {
          title: "अन्न सेवा",
          desc: "प्रतिदिन भोजन वितरण और जरूरतमंदों के पोषण में सहयोग।",
        },
        {
          title: "गुरुकुल विकास",
          desc: "विद्यार्थियों के लिए अध्ययन स्थल, सुविधाओं और संसाधनों के विकास में सहयोग।",
        },
        {
          title: "समाज सेवा",
          desc: "करुणा, सेवा और सामाजिक कल्याण से जुड़े कार्यों में सहयोग।",
        },
      ],
      howLabel: "सहयोग के तरीके",
      howTitle: "अपनी इच्छानुसार सहयोग करें",
      ways: [
        {
          title: "एक बार का सहयोग",
          desc: "जब भी प्रेरणा हो, इस मिशन के लिए अपना योगदान दें।",
        },
        {
          title: "नियमित सहयोग",
          desc: "शिक्षा और सेवा कार्यों को निरंतर चलाने के लिए नियमित सहयोग दें।",
        },
      ],
      donationLabel: "अपना योगदान दें",
      donationTitle: "हमारे मिशन का सहयोग करें",
      donationText:
        "सत्यापित दान संबंधी जानकारी, बैंक विवरण या सहयोग के अन्य तरीकों के लिए हमारी टीम से संपर्क करें।",
      contact: "संपर्क करें",
      transparencyTitle: "योगदान से जुड़ी महत्वपूर्ण जानकारी",
      transparencyText:
        "कृपया केवल संस्था द्वारा साझा किए गए आधिकारिक भुगतान विवरण का उपयोग करें। योगदान करने से पहले प्राप्तकर्ता और भुगतान की जानकारी अवश्य जाँच लें।",
      faqLabel: "सामान्य प्रश्न",
      faqTitle: "अक्सर पूछे जाने वाले सवाल",
      faqs: [
        {
          q: "मैं सहयोग कैसे कर सकता हूँ?",
          a: "सत्यापित बैंक या भुगतान विवरण प्राप्त करने के लिए कृपया संस्था से संपर्क करें।",
        },
        {
          q: "क्या मैं किसी विशेष सेवा कार्य में सहयोग कर सकता हूँ?",
          a: "सहयोग के उपलब्ध क्षेत्रों की जानकारी के लिए हमारी टीम से संपर्क करें।",
        },
        {
          q: "अधिक जानकारी कैसे प्राप्त करें?",
          a: "अधिक जानकारी के लिए Contact पेज के माध्यम से हमसे जुड़ सकते हैं।",
        },
      ],
      back: "मुख्य पृष्ठ पर जाएँ",
    },
  };

  const c = isHindi ? t.hi : t.en;

  const purposeIcons = [BookOpen, Utensils, Leaf, HandHeart];

  return (
    <SiteShell>
      <main className="donation-page">
        <section className="donation-hero">
          <div className="donation-hero-inner">
            <span className="donation-eyebrow">{c.label}</span>
            <div className="donation-heart-icon">
              <Heart size={25} strokeWidth={1.4} />
            </div>
            <h1>
              {c.title}
              <span>{c.highlight}</span>
            </h1>
            <p>{c.subtitle}</p>
            <div className="donation-hero-line" />
          </div>
        </section>

        <section className="donation-intro">
          <span className="donation-section-label">
            <span /> {c.introLabel}
          </span>
          <h2>{c.introTitle}</h2>
          <p>{c.intro}</p>
        </section>

        <section className="donation-purpose">
          <div className="donation-heading">
            <span className="donation-section-label">
              <span /> {c.purposeLabel}
            </span>
            <h2>{c.purposeTitle}</h2>
          </div>

          <div className="donation-purpose-grid">
            {c.purposes.map((item, index) => {
              const Icon = purposeIcons[index];
              return (
                <div className="donation-purpose-card" key={item.title}>
                  <div className="donation-purpose-icon">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <span className="donation-card-number">
                    0{index + 1}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="donation-ways">
          <div className="donation-heading">
            <span className="donation-section-label">
              <span /> {c.howLabel}
            </span>
            <h2>{c.howTitle}</h2>
          </div>

          <div className="donation-ways-grid">
            {c.ways.map((item, index) => (
              <div className="donation-way-card" key={item.title}>
                <div className="donation-way-number">0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="donation-cta">
          <div className="donation-cta-icon">
            <Heart size={27} />
          </div>
          <span className="donation-section-label">{c.donationLabel}</span>
          <h2>{c.donationTitle}</h2>
          <p>{c.donationText}</p>
          <Link href="/contact" className="donation-button">
            {c.contact} <ArrowRight size={17} />
          </Link>
        </section>

        <section className="donation-transparency">
          <ShieldCheck size={25} />
          <div>
            <h3>{c.transparencyTitle}</h3>
            <p>{c.transparencyText}</p>
          </div>
        </section>

        <section className="donation-faq">
          <div className="donation-heading">
            <span className="donation-section-label">
              <span /> {c.faqLabel}
            </span>
            <h2>{c.faqTitle}</h2>
          </div>

          <div className="donation-faq-list">
            {c.faqs.map((item, index) => (
              <div className="donation-faq-item" key={item.q}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="donation-home-link">
          <Link href="/">{c.back}</Link>
        </div>
      </main>
    </SiteShell>
  );
}
