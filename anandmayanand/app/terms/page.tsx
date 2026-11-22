import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { Container } from "@/components/ui/container";

export default function TermsPage() { return <SiteShell><main className="legal-page"><Container maxWidth="md"><p className="eyebrow"><span />LEGAL</p><h1>Terms of <em>use.</em></h1><p className="legal-updated">Last updated: August 2026</p><h2>Using this website</h2><p>This website is provided to share the work, programmes, and charitable initiatives of Dr. Swami Anandmayanand. Please use it respectfully and lawfully.</p><h2>Content and communications</h2><p>Unless otherwise stated, the site’s written and visual materials belong to the organization. You may share links to our teachings, but please do not reproduce materials for commercial use without permission.</p><h2>Questions</h2><p>For any question about these terms, please <Link href="/contact">contact our team</Link>.</p></Container></main></SiteShell>; }
