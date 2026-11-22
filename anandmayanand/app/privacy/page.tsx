import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { Container } from "@/components/ui/container";

export default function PrivacyPage() { return <SiteShell><main className="legal-page"><Container maxWidth="md"><p className="eyebrow"><span />LEGAL</p><h1>Privacy <em>policy.</em></h1><p className="legal-updated">Last updated: August 2026</p><h2>Your privacy matters</h2><p>We collect only the information needed to respond to your requests, share updates you choose to receive, and improve this website. We never sell your personal information.</p><h2>How we use information</h2><p>Information provided through forms is used solely for the purpose stated at the time of collection. You can unsubscribe from communications at any time.</p><h2>Questions</h2><p>For any privacy question, please <Link href="/contact">contact our team</Link>.</p></Container></main></SiteShell>; }
