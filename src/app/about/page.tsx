"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SplitText } from "@/components/SplitText";

const timeline = [
  { year: "2015", title: "Founded", description: "Rencel Procurements Limited incorporated in England & Wales. Started with oil & gas procurement consulting." },
  { year: "2016", title: "European Expansion", description: "Extended operations across European markets, building supplier networks in the UK, Netherlands, and Norway." },
  { year: "2018", title: "Global Reach", description: "Expanded into Asian and African markets. Established sourcing relationships across three continents." },
  { year: "2020", title: "Supply Chain Mastery", description: "Delivered end-to-end supply chain management for major energy sector clients. Managed £100M+ in procurement." },
  { year: "2024", title: "The Tech Pivot", description: "Began building AI-powered procurement intelligence platforms. Combined a decade of domain expertise with cutting-edge technology." },
  { year: "2026", title: "Intelligence & Supply", description: "Relaunched as a technology-first company. Now engineering the platforms that will define the future of procurement." },
];

const values = [
  { title: "Domain First", description: "We build technology from procurement expertise — not the other way around. Every feature solves a real problem we've faced." },
  { title: "Engineering Excellence", description: "Enterprise-grade platforms built with modern architecture, rigorous testing, and scalability from day one." },
  { title: "Global Perspective", description: "Three continents, ten years, countless supply chains. Our global experience is baked into everything we build." },
  { title: "Transparent Partnership", description: "No black boxes. We work alongside your team, sharing knowledge and building capability as we go." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-xs tracking-[0.2em] uppercase text-accent">
                About Rencel
              </span>
            </div>
          </AnimatedSection>

          <SplitText

            className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[0.95] tracking-tight mb-8 max-w-4xl"
          >
            A Decade of Procurement. Now Building the Future.
          </SplitText>

          <AnimatedSection delay={0.4}>
            <p className="text-lg md:text-xl text-muted max-w-3xl leading-relaxed">
              Rencel started as a procurement consultancy serving the energy
              sector. After 10+ years working inside supply chains across
              Europe, Asia, and Africa, we saw what the industry truly needed:
              not more consultants, but better technology — built by people
              who actually understand procurement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-card-bg/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-xs tracking-[0.2em] uppercase text-accent">
                Our Journey
              </span>
            </div>
          </AnimatedSection>

          <SplitText
            className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-16"
          >
            From Consultancy to Technology
          </SplitText>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-card-border" />

            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.1}>
                  <div className={`relative flex flex-col md:flex-row items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Content */}
                    <div className={`flex-1 pl-20 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                      <div className="text-accent font-bold text-sm tracking-wider mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-[#0A0A0B]"
                    />

                    {/* Spacer for the other side */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-xs tracking-[0.2em] uppercase text-accent">
                What Drives Us
              </span>
            </div>
          </AnimatedSection>

          <SplitText
            className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-16"
          >
            Our Principles
          </SplitText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-card-border bg-card-bg">
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 lg:py-32 bg-card-bg/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="text-sm text-muted uppercase tracking-wider mb-2">
                Registered Name
              </div>
              <div className="text-lg font-semibold">
                Rencel Procurements Limited
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="text-sm text-muted uppercase tracking-wider mb-2">
                Incorporated
              </div>
              <div className="text-lg font-semibold">
                25 August 2015
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-sm text-muted uppercase tracking-wider mb-2">
                Jurisdiction
              </div>
              <div className="text-lg font-semibold">
                England & Wales
              </div>
            </AnimatedSection>
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
              Let&apos;s Work Together
            </SplitText>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted max-w-xl mx-auto mb-10 text-lg">
              Whether you need a technology partner or a procurement
              specialist — we&apos;d love to hear from you.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <Link
              href="/contact"
              className="inline-flex px-10 py-4 bg-accent text-[#0A0A0B] font-semibold rounded-full hover:opacity-90 transition-opacity text-sm tracking-wide"
            >
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
