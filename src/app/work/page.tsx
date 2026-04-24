import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Case studies across technology and procurement. Automotive intelligence platforms, NHS healthcare systems, supply chain automation, and global sourcing projects.",
  alternates: { canonical: "/work" },
};

interface Project {
  slug?: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  status?: "In Development" | "Live Case Study";
}

const projects: Project[] = [
  {
    slug: "our-own-rebuild",
    category: "Digital Transformation",
    title: "Rebuilding Our Own Brand",
    description: "We took Rencel from an expired-SSL dead site to an AI-optimised intelligence platform in four weeks. New positioning, new design, new stack, 24 indexed pages.",
    tags: ["Web", "Branding", "SEO", "Meta"],
    status: "Live Case Study",
  },
  {
    slug: "spend-analytics-engine",
    category: "Procurement Intelligence",
    title: "Procurement Spend Analytics Engine",
    description: "AI-powered spend classification and savings identification for a mid-market energy company. Turned 18 months of messy ERP data into actionable procurement decisions.",
    tags: ["AI/ML", "Analytics", "Energy"],
    status: "Live Case Study",
  },
  {
    slug: "pan-african-supplier-network",
    category: "Global Sourcing",
    title: "Pan-African Supplier Network",
    description: "Qualified supplier network across 12 African countries supporting upstream oil and gas operations. 40+ framework agreements, 25% cost reduction on substituted categories.",
    tags: ["Global Sourcing", "Oil & Gas", "Africa"],
    status: "Live Case Study",
  },
  {
    slug: "refinery-equipment-procurement",
    category: "Procurement & Logistics",
    title: "Refinery Turnaround Procurement",
    description: "Time-critical sourcing and logistics for a refinery turnaround. Specialist equipment delivered from three continents within a four-week window. Zero delay.",
    tags: ["Procurement", "Energy", "Logistics"],
    status: "Live Case Study",
  },
  {
    category: "Technology",
    title: "Automotive Intelligence as a Service",
    description: "Building a connected intelligence platform for the UK automotive aftermarket. Vehicle data, workshop operations, and predictive analytics unified into a single managed service for the trade.",
    tags: ["Automotive", "SaaS", "AI/ML", "Platform"],
    status: "In Development",
  },
  {
    category: "Technology",
    title: "Remote Patient Monitoring Platform",
    description: "Designing a clinical monitoring and care coordination platform for NHS virtual ward programmes. Real-time patient observations, automated clinical scoring, and clinician alerting built to NHS Digital standards.",
    tags: ["Healthcare", "NHS", "SaaS", "Clinical"],
    status: "In Development",
  },
  {
    category: "Technology",
    title: "Supply Chain Automation Suite",
    description: "Automated purchase order processing, vendor compliance workflows, and exception routing for multinational manufacturing operations.",
    tags: ["Automation", "Integration", "Enterprise"],
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">Selected Work</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.05] tracking-tight mb-6 max-w-3xl">
            What We Have Built
          </h1>
          <p className="text-base md:text-lg text-muted max-w-xl leading-relaxed">
            Platforms we have built and sourcing work we have done. Case studies below are anonymised where client confidentiality applies.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((p) => {
              const CardContent = (
                <div className="p-6 rounded-xl bg-card-bg border border-card-border hover:border-accent/20 transition-colors h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs text-accent uppercase tracking-wider">{p.category}</div>
                    {p.status && (
                      <span className={`text-[10px] px-2 py-1 rounded-full border ${
                        p.status === "Live Case Study"
                          ? "border-accent/30 text-accent bg-accent/5"
                          : "border-card-border text-muted"
                      }`}>
                        {p.status}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] mb-2">{p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-card-border text-muted">{t}</span>
                    ))}
                  </div>
                  {p.slug && (
                    <div className="mt-4 text-sm text-accent">
                      Read case study &rarr;
                    </div>
                  )}
                </div>
              );

              return p.slug ? (
                <Link key={p.title} href={`/work/${p.slug}`} className="block group">
                  {CardContent}
                </Link>
              ) : (
                <div key={p.title}>{CardContent}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card-bg/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">Have a Project for Us?</h2>
          <p className="text-muted max-w-md mx-auto mb-8">We take on a limited number of engagements at a time. If you have something worth building, we would like to hear about it.</p>
          <Link href="/contact" className="inline-flex px-6 py-3 bg-accent text-background font-semibold rounded-full text-sm hover:opacity-90 transition-opacity">Start a Project</Link>
        </div>
      </section>
    </>
  );
}
