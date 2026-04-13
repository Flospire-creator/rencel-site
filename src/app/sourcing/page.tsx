"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SplitText } from "@/components/SplitText";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.73-3.56" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Global Sourcing",
    description:
      "We identify, qualify, and manage suppliers across Europe, Asia, and Africa. Our network and relationships — built over a decade — give you access to competitive pricing without compromising on quality or reliability.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Logistics Management",
    description:
      "End-to-end coordination of your supply chain logistics. From warehouse planning to last-mile delivery, we manage the complexity so your goods arrive on time, every time.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Quality Assurance",
    description:
      "Rigorous QA processes built into every stage of your supply chain. Factory inspections, material testing, and compliance verification — ensuring what you order is what you receive.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Planning & Scheduling",
    description:
      "Strategic procurement planning that aligns with your project timelines. We build schedules that account for lead times, seasonal variations, and supply chain risks.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Cost Optimisation",
    description:
      "Strategic sourcing that drives genuine savings. Market intelligence, competitive tendering, and negotiation support backed by deep category knowledge across energy, industrial, and manufacturing sectors.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Freight & Fulfilment",
    description:
      "Door-to-door freight management across air, sea, and road. We handle customs clearance, documentation, and tracking — giving you full visibility from origin to destination.",
  },
];

const industries = [
  "Oil & Gas",
  "Energy & Utilities",
  "Petrochemicals",
  "Manufacturing",
  "Construction",
  "Mining & Minerals",
];

export default function SourcingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 lg:pb-32">
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

            className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[0.95] tracking-tight mb-8 max-w-4xl"
          >
            Procurement Expertise Across Three Continents
          </SplitText>

          <AnimatedSection delay={0.4}>
            <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              A decade of hands-on procurement and supply chain management
              across Europe, Asia, and Africa. We know the suppliers, the
              logistics, and the pitfalls — so you don&apos;t have to learn the
              hard way.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 lg:py-32 bg-card-bg/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-xs tracking-[0.2em] uppercase text-accent">
                Industries We Serve
              </span>
            </div>
          </AnimatedSection>

          <SplitText
            className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-16"
          >
            Deep Sector Knowledge
          </SplitText>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((industry, i) => (
              <AnimatedSection key={industry} delay={i * 0.08}>
                <div className="p-6 rounded-xl border border-card-border bg-card-bg hover:border-accent/30 transition-colors">
                  <span className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)]">
                    {industry}
                  </span>
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
              Need a Sourcing Partner?
            </SplitText>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted max-w-xl mx-auto mb-10 text-lg">
              Tell us what you need sourced and where. We&apos;ll show you how
              our network and expertise can deliver.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <Link
              href="/contact"
              className="inline-flex px-10 py-4 bg-accent text-[#0A0A0B] font-semibold rounded-full hover:opacity-90 transition-opacity text-sm tracking-wide"
            >
              Discuss Your Requirements
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
