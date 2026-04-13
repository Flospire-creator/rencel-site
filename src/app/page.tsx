"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SplitText } from "@/components/SplitText";
import { FadeIn } from "@/components/FadeIn";
import { Marquee } from "@/components/Marquee";
import { ServiceCard } from "@/components/ServiceCard";

const stats = [
  { value: "10+", label: "Years of Expertise" },
  { value: "3", label: "Continents Served" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "£100M+", label: "Procurement Managed" },
];

const techServices = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Procurement Intelligence",
    description:
      "AI-driven spend analytics, supplier risk scoring, and demand forecasting platforms built on real procurement expertise.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Supply Chain Automation",
    description:
      "Agentic AI workflows that automate PO processing, vendor management, and compliance checks at scale.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Digital Twin Solutions",
    description:
      "Supply chain simulation and optimisation platforms that model your entire operation before you commit to change.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Custom SaaS Development",
    description:
      "Bespoke procurement and logistics platforms engineered from the ground up for enterprise-grade performance.",
  },
];

const sourcingServices = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.73-3.56" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Global Sourcing",
    description:
      "Supplier identification, qualification, and management across Europe, Asia, and Africa.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Logistics & Freight",
    description:
      "End-to-end logistics management, freight handling, and on-time goods fulfilment worldwide.",
  },
];

const marqueeItems = [
  "Procurement Intelligence",
  "Supply Chain Automation",
  "Digital Twin Platforms",
  "Global Sourcing",
  "AI-Powered Analytics",
  "Enterprise SaaS",
  "Logistics Management",
  "Oil & Gas Expertise",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[120px]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0B] to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs tracking-wider uppercase text-accent">
                Now Building Intelligence Platforms
              </span>
            </div>
          </FadeIn>

          <SplitText

            className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[0.95] tracking-tight mb-8"
            delay={0.2}
          >
            Where Procurement Meets Intelligence
          </SplitText>

          <FadeIn delay={0.8}>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
              10+ years of global procurement expertise. Now engineering
              AI-powered platforms that transform how businesses source, automate,
              and optimise their supply chains.
            </p>
          </FadeIn>

          <FadeIn delay={1} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/technology"
              className="px-8 py-4 bg-accent text-[#0A0A0B] font-semibold rounded-full hover:opacity-90 transition-opacity text-sm tracking-wide"
            >
              Explore Our Technology
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/10 rounded-full hover:border-accent/30 transition-colors text-sm tracking-wide"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <FadeIn delay={1.5} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5 animate-bounce">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          </div>
        </FadeIn>
      </section>

      {/* Marquee */}
      <Marquee items={marqueeItems} speed={35} />

      {/* Stats */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Services */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-xs tracking-[0.2em] uppercase text-accent">
                Technology
              </span>
            </div>
          </AnimatedSection>

          <SplitText
            className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6"
          >
            Intelligence Platforms Built by Procurement Experts
          </SplitText>

          <AnimatedSection delay={0.2}>
            <p className="text-muted max-w-2xl mb-16 text-lg leading-relaxed">
              We don&apos;t just build tech — we build tech that solves real
              procurement problems. Powered by a decade of hands-on supply chain
              experience.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techServices.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>

          <AnimatedSection delay={0.3} className="mt-10">
            <Link
              href="/technology"
              className="inline-flex items-center gap-2 text-accent text-sm hover:gap-3 transition-all"
            >
              Explore all technology services
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Sourcing Services */}
      <section className="py-24 lg:py-32 bg-card-bg/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-xs tracking-[0.2em] uppercase text-accent">
                Sourcing & Supply Chain
              </span>
            </div>
          </AnimatedSection>

          <SplitText
            className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6"
          >
            Global Sourcing That Delivers
          </SplitText>

          <AnimatedSection delay={0.2}>
            <p className="text-muted max-w-2xl mb-16 text-lg leading-relaxed">
              Proven procurement support across European, Asian, and African
              markets. From supplier identification to on-time fulfilment.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sourcingServices.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>

          <AnimatedSection delay={0.3} className="mt-10">
            <Link
              href="/sourcing"
              className="inline-flex items-center gap-2 text-accent text-sm hover:gap-3 transition-all"
            >
              Explore sourcing services
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <SplitText
              className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6"
            >
              Ready to Transform Your Supply Chain?
            </SplitText>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-muted max-w-xl mx-auto mb-10 text-lg">
              Whether you need an intelligence platform built or a sourcing
              partner you can trust — let&apos;s talk.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Link
              href="/contact"
              className="inline-flex px-10 py-4 bg-accent text-[#0A0A0B] font-semibold rounded-full hover:opacity-90 transition-opacity text-sm tracking-wide"
            >
              Start a Conversation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
