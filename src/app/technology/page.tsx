"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SplitText } from "@/components/SplitText";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "AI Procurement Intelligence",
    description:
      "We build platforms that turn procurement data into strategic advantage. Spend analytics that surface hidden savings. Supplier risk models that predict disruption before it hits. Demand forecasting that keeps your supply chain one step ahead.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Supply Chain Automation",
    description:
      "Agentic AI that does the heavy lifting. Automated PO processing, intelligent vendor management workflows, and compliance checks that run 24/7. We free your team to focus on strategy, not spreadsheets.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Digital Twin Solutions",
    description:
      "Simulate your entire supply chain before making changes. Our digital twin platforms let you model scenarios, stress-test logistics networks, and optimise operations — without risking a single shipment.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Custom SaaS Development",
    description:
      "Bespoke platforms built for your exact workflow. From procurement portals to logistics dashboards, we design and engineer enterprise-grade SaaS products that your team actually wants to use.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Data & Analytics Platforms",
    description:
      "Turn fragmented procurement data into clear, actionable dashboards. Real-time visibility across spend, suppliers, compliance, and performance — so you can make decisions with confidence.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Security & Compliance",
    description:
      "Every platform we build meets enterprise security standards. SOC 2 readiness, GDPR compliance, role-based access, and audit trails — built in from day one, not bolted on later.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We map your procurement workflows, pain points, and goals to define exactly what needs building.",
  },
  {
    step: "02",
    title: "Architecture",
    description: "Our team designs the platform architecture, data models, and integration points before writing a line of code.",
  },
  {
    step: "03",
    title: "Build & Iterate",
    description: "Agile sprints with regular demos. You see progress every two weeks and steer the direction.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    description: "We deploy, monitor, and optimise. Then help you scale the platform as your needs grow.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-xs tracking-[0.2em] uppercase text-accent">
                Technology Services
              </span>
            </div>
          </AnimatedSection>

          <SplitText

            className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[0.95] tracking-tight mb-8 max-w-4xl"
          >
            Intelligence Platforms That Solve Real Problems
          </SplitText>

          <AnimatedSection delay={0.4}>
            <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              Most tech companies build procurement tools from the outside in.
              We build from the inside out — because we&apos;ve lived the
              problems we&apos;re solving for over a decade.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-card-bg/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-xs tracking-[0.2em] uppercase text-accent">
                Our Process
              </span>
            </div>
          </AnimatedSection>

          <SplitText
            className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-16"
          >
            From Concept to Deployed Platform
          </SplitText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div className="relative">
                  <div className="text-6xl font-bold font-[family-name:var(--font-space-grotesk)] text-accent/10 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <SplitText
              className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6"
            >
              Have an Idea for a Platform?
            </SplitText>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted max-w-xl mx-auto mb-10 text-lg">
              We&apos;ll scope it, architect it, and build it — with the procurement
              expertise to make sure it actually works.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <Link
              href="/contact"
              className="inline-flex px-10 py-4 bg-accent text-[#0A0A0B] font-semibold rounded-full hover:opacity-90 transition-opacity text-sm tracking-wide"
            >
              Let&apos;s Build Together
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
