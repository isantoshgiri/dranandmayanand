
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Phone,
  Send,
  Clock,
  Globe,
} from "lucide-react";
import { SiteShell, useSiteLanguage } from "@/components/site-shell";
import "./contact.css";

export default function ContactPage() {
  const { language } = useSiteLanguage();
  const isHindi = language === "hi";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const t = {
    en: {
      label: "GET IN TOUCH",
      title: "We Would Love to",
      highlight: "Hear From You",
      subtitle:
        "For spiritual guidance, Bhagwat Katha, Ram Katha, spiritual programmes or general enquiries, feel free to connect with us.",
      sectionLabel: "CONTACT INFORMATION",
      sectionTitle: "Let's Connect",
      sectionText:
        "Every meaningful journey begins with a conversation. Reach out to us through phone or email.",
      email: "Email Address",
      india: "India Contact",
      international: "International Contact",
      emailValue: "dranandmay@gmail.com",
      phoneNote: "Call us for enquiries and programme details.",
      emailNote: "Write to us for general and programme enquiries.",
      formLabel: "SEND AN ENQUIRY",
      formTitle: "Write to Us",
      formText:
        "Share your enquiry with us. Our team will get back to you.",
      name: "Your Name",
      emailField: "Email Address",
      phoneField: "Phone Number",
      subject: "Subject",
      message: "Your Message",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email",
      phonePlaceholder: "Enter your phone number",
      subjectPlaceholder: "What is your enquiry about?",
      messagePlaceholder: "Write your message here...",
      submit: "Send Message",
      success: "Thank you! Your message has been prepared.",
      note:
        "For urgent enquiries, please contact us directly by phone or email.",
      back: "Back to Home",
    },
    hi: {
      label: "संपर्क करें",
      title: "हम आपसे",
      highlight: "जुड़ना चाहेंगे",
      subtitle:
        "आध्यात्मिक मार्गदर्शन, श्रीमद्भागवत कथा, राम कथा, धार्मिक कार्यक्रमों या अन्य जानकारी के लिए हमसे संपर्क करें।",
      sectionLabel: "संपर्क जानकारी",
      sectionTitle: "आइए जुड़ें",
      sectionText:
        "हर सार्थक यात्रा की शुरुआत एक संवाद से होती है। फोन या ईमेल के माध्यम से हमसे जुड़ें।",
      email: "ईमेल पता",
      india: "भारत संपर्क",
      international: "अंतरराष्ट्रीय संपर्क",
      emailValue: "dranandmay@gmail.com",
      phoneNote: "जानकारी एवं कार्यक्रमों के लिए संपर्क करें।",
      emailNote: "सामान्य जानकारी एवं कार्यक्रमों के लिए ईमेल करें।",
      formLabel: "अपनी जानकारी भेजें",
      formTitle: "हमें संदेश लिखें",
      formText:
        "अपनी जिज्ञासा या जानकारी हमारे साथ साझा करें।",
      name: "आपका नाम",
      emailField: "ईमेल पता",
      phoneField: "फोन नंबर",
      subject: "विषय",
      message: "आपका संदेश",
      namePlaceholder: "अपना नाम लिखें",
      emailPlaceholder: "अपना ईमेल लिखें",
      phonePlaceholder: "अपना फोन नंबर लिखें",
      subjectPlaceholder: "आप किस विषय में जानकारी चाहते हैं?",
      messagePlaceholder: "अपना संदेश यहाँ लिखें...",
      submit: "संदेश भेजें",
      success: "धन्यवाद! आपका संदेश तैयार हो गया है।",
      note:
        "तत्काल जानकारी के लिए कृपया सीधे फोन या ईमेल के माध्यम से संपर्क करें।",
      back: "मुख्य पृष्ठ पर जाएँ",
    },
  };

  const c = isHindi ? t.hi : t.en;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <SiteShell>
      <main className="contact-page">
        {/* Hero */}
        <section className="contact-hero">
          <div className="contact-hero-inner">
            <span className="contact-eyebrow">{c.label}</span>
            <h1>
              {c.title}
              <span>{c.highlight}</span>
            </h1>
            <p>{c.subtitle}</p>
            <div className="contact-hero-line" />
          </div>
        </section>

        {/* Introduction */}
        <section className="contact-intro">
          <span className="contact-section-label">
            <span /> {c.sectionLabel}
          </span>
          <h2>{c.sectionTitle}</h2>
          <p>{c.sectionText}</p>
        </section>

        {/* Contact details and form */}
        <section className="contact-main">
          <div className="contact-info">
            <a
              href="tel:+919714876566"
              className="contact-info-item contact-info-link"
            >
              <div className="contact-info-icon">
                <Phone size={21} />
              </div>
              <div>
                <h3>{c.india}</h3>
                <p className="contact-detail-value">+91 971-487-6566</p>
                <span>{c.phoneNote}</span>
              </div>
            </a>

            <a
              href="tel:+19452492115"
              className="contact-info-item contact-info-link"
            >
              <div className="contact-info-icon">
                <Globe size={21} />
              </div>
              <div>
                <h3>{c.international}</h3>
                <p className="contact-detail-value">+1 945-249-2115</p>
                <span>{c.phoneNote}</span>
              </div>
            </a>

            <a
              href="mailto:dranandmay@gmail.com"
              className="contact-info-item contact-info-link"
            >
              <div className="contact-info-icon">
                <Mail size={21} />
              </div>
              <div>
                <h3>{c.email}</h3>
                <p className="contact-detail-value">
                  {c.emailValue}
                </p>
                <span>{c.emailNote}</span>
              </div>
            </a>

            <div className="contact-info-note">
              <Clock size={19} />
              <p>{c.note}</p>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="contact-form-wrap">
            <span className="contact-form-label">{c.formLabel}</span>
            <h2>{c.formTitle}</h2>
            <p className="contact-form-description">{c.formText}</p>

            {submitted ? (
              <div className="contact-success">
                <Send size={25} />
                <p>{c.success}</p>
                <button onClick={() => setSubmitted(false)}>
                  {isHindi ? "दूसरा संदेश लिखें" : "Write another message"}
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <label>
                    {c.name}
                    <input
                      required
                      value={form.name}
                      placeholder={c.namePlaceholder}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </label>

                  <label>
                    {c.emailField}
                    <input
                      required
                      type="email"
                      value={form.email}
                      placeholder={c.emailPlaceholder}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </label>
                </div>

                <label>
                  {c.phoneField}
                  <input
                    type="tel"
                    value={form.phone}
                    placeholder={c.phonePlaceholder}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                </label>

                <label>
                  {c.subject}
                  <input
                    required
                    value={form.subject}
                    placeholder={c.subjectPlaceholder}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                  />
                </label>

                <label>
                  {c.message}
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    placeholder={c.messagePlaceholder}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </label>

                <button className="contact-submit" type="submit">
                  {c.submit} <ArrowRight size={17} />
                </button>
              </form>
            )}
          </div>
        </section>

        <div className="contact-home-link">
          <Link href="/">{c.back}</Link>
        </div>
      </main>
    </SiteShell>
  );
}
