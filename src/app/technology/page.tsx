import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Services",
  description: "AI-powered intelligence platforms for automotive, healthcare, energy, and supply chain. Procurement intelligence, supply chain automation, digital twins, and custom SaaS development.",
  alternates: { canonical: "/technology" },
};

const services = [
  { title: "Automotive Data Intelligence", description: "Connected vehicle platforms, workshop analytics, and predictive maintenance systems for the automotive aftermarket. Real-time diagnostics and fleet intelligence delivered as managed SaaS." },
  { title: "Healthcare & Clinical Platforms", description: "Patient monitoring systems, clinical dashboards, and care coordination platforms for NHS trusts and private healthcare providers. Built to meet NHS Digital standards." },
  { title: "AI Procurement Intelligence", description: "Platforms that turn procurement data into decisions. Spend analytics that surface hidden savings, supplier risk models that flag disruption early, and demand forecasting that gets ahead of shortfalls." },
  { title: "Supply Chain Automation", description: "Intelligent workflows that handle the repetitive work. Automated purchase order processing, vendor onboarding, compliance checks, and exception routing. Freeing your team for strategy." },
  { title: "Custom SaaS Development", description: "Bespoke platforms built around your process. Industry portals, operational dashboards, and management tools. Enterprise-grade software your team will actually use." },
  { title: "Data & Analytics Platforms", description: "Unified dashboards across operations, compliance, and performance. Real-time visibility that replaces spreadsheets and guesswork with data you can trust." },
  { title: "Digital Twin Solutions", description: "Simulate complex operations before making changes. Model scenarios, test networks under stress, and find the best path forward without risking live systems." },
  { title: "Security & Compliance", description: "Every platform we ship meets enterprise standards. SOC 2 readiness, GDPR compliance, role-based access, and full audit trails. Built in from day one, not added later." },
];

const process = [
  { step: "01", title: "Discovery", description: "We map your workflows, pain points, and goals. No assumptions." },
  { step: "02", title: "Architecture", description: "Platform design, data models, and integration planning before any code is written." },
  { step: "03", title: "Build & Iterate", description: "Two-week sprints with working demos. You see progress and steer the direction." },
  { step: "04", title: "Launch & Scale", description: "Deployment, monitoring, and optimisation. Then we help you grow it." },
];

export default function TechnologyPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">Technology Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.05] tracking-tight mb-6 max-w-3xl">
            Intelligence Platforms That Solve Real Problems
          </h1>
          <p className="text-base md:text-lg text-muted max-w-xl leading-relaxed">
            We build platforms for industries we understand. Automotive, healthcare, energy, and supply chain. 20 years of operational experience shapes every product we design and ship.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-xl bg-card-bg border border-card-border hover:border-accent/20 transition-colors">
                <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card-bg/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">How We Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-12">
            From Concept to Deployed Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step}>
                <div className="text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-accent/20 mb-3">{p.step}</div>
                <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] mb-1">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">Have a Platform in Mind?</h2>
          <p className="text-muted max-w-md mx-auto mb-8">Tell us what you need built. We will scope it, design it, and deliver it right.</p>
          <Link href="/contact" className="inline-flex px-6 py-3 bg-accent text-background font-semibold rounded-full text-sm hover:opacity-90 transition-opacity">Talk to Our Team</Link>
        </div>
      </section>
    </>
  );
}
