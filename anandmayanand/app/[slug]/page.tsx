import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { Container } from "@/components/ui/container";
import { pages } from "@/lib/site-content";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  return page ? { title: `${page.title} ${page.italic} | Anandmayanand`, description: page.description } : {};
}

export default async function DetailPage({ params }: Props) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  const isContact = slug === "contact";
  return <SiteShell><main className="detail-page"><section className="detail-hero"><Image priority fill sizes="100vw" src={page.image} alt="" /><div className="hero-overlay" /><Container><div className="detail-hero-copy"><p className="eyebrow light"><span />{page.eyebrow}</p><h1>{page.title}<br /><em>{page.italic}</em></h1><p>{page.description}</p></div></Container></section><Container><section className="detail-intro"><p className="eyebrow"><span />THE INTENTION</p><h2>{page.focus}</h2><div className="detail-cta"><p>Explore this offering at your own pace. Every step is an invitation to make room for what truly matters.</p><Link href={slug === "charity" || slug === "hospital-project" ? "/donation" : "/events"}>Explore upcoming offerings <ArrowRight /></Link></div></section><section className="detail-stats">{page.statistics.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</section>{isContact ? <ContactForm /> : <section className="detail-steps"><article><span>01</span><h3>Begin with<br /><em>curiosity.</em></h3><p>Choose the format and moment that feels right for you.</p></article><article><span>02</span><h3>Make room<br /><em>to listen.</em></h3><p>Arrive as you are. Nothing is required except your presence.</p></article><article><span>03</span><h3>Let it move<br /><em>through life.</em></h3><p>Carry a little more clarity into each ordinary day.</p></article></section>}</Container></main></SiteShell>;
}

function ContactForm() {
  return <section className="contact-panel"><div><p className="eyebrow"><span />SEND A NOTE</p><h2>How can we<br /><em>help?</em></h2><p>Use this form for general questions. For programme registrations, please visit the events page.</p></div><form action="mailto:hello@anandmayanand.org" method="post" encType="text/plain"><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Message<textarea required name="message" placeholder="Tell us a little more" rows={4} /></label><button type="submit">Send your message <ArrowRight /></button></form></section>;
}
