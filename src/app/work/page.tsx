"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SplitText } from "@/components/SplitText";

const projects = [
  {
    category: "Technology",
    title: "AI Spend Analytics Platform",
    description: "Built an AI-powered spend analytics dashboard for an energy sector client, reducing procurement cycle time by 40%.",
    tags: ["AI/ML", "React", "Python", "Procurement"],
  },
  {
    category: "Technology",
    title: "Supply Chain Automation Suite",
    description: "Automated PO processing and vendor compliance workflows for a multinational manufacturing company.",
    tags: ["Automation", "Integration", "Enterprise"],
  },
  {
    category: "Sourcing",
    title: "Pan-African Supplier Network",
    description: "Established and managed a network of 200+ qualified suppliers across 12 African countries for oil & gas procurement.",
    tags: ["Global Sourcing", "Oil & Gas", "Africa"],
  },
  {
    category: "Technology",
    title: "Digital Twin Logistics Platform",
    description: "Developed a digital twin simulation for optimising container routing across European ports.",
    tags: ["Digital Twin", "Simulation", "Logistics"],
  },
  {
    category: "Sourcing",
    title: "Emergency Procurement Response",
    description: "Delivered critical equipment sourcing and logistics for a time-sensitive refinery maintenance shutdown.",
    tags: ["Procurement", "Logistics", "Energy"],
  },
  {
    category: "Technology",
    title: "Procurement Intelligence Dashboard",
    description: "Real-time supplier risk scoring and market intelligence platform for a chemicals distributor.",
    tags: ["Data Analytics", "Risk", "SaaS"],
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-xs tracking-[0.2em] uppercase text-accent">
                Our Work
              </span>
            </div>
          </AnimatedSection>

          <SplitText

            className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[0.95] tracking-tight mb-8 max-w-4xl"
          >
            Projects That Move Industries Forward
          </SplitText>

          <AnimatedSection delay={0.4}>
            <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              A selection of projects across technology and sourcing that
              demonstrate the depth and range of what we deliver.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.08}>
                <div className="group p-8 rounded-2xl border border-card-border bg-card-bg hover:border-accent/30 transition-all duration-500 h-full flex flex-col">
                  <div className="text-xs text-accent uppercase tracking-wider mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border border-card-border text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-card-bg/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <SplitText
              className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6"
            >
              Want to See Your Project Here?
            </SplitText>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted max-w-xl mx-auto mb-10 text-lg">
              We&apos;re always looking for ambitious projects. If you have an
              idea, challenge, or vision — let&apos;s make it happen.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <Link
              href="/contact"
              className="inline-flex px-10 py-4 bg-accent text-[#0A0A0B] font-semibold rounded-full hover:opacity-90 transition-opacity text-sm tracking-wide"
            >
              Start a Project
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
