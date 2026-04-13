import Link from "next/link";

const projects = [
  { category: "Technology", title: "Automotive Data Intelligence Platform", description: "Currently developing an intelligence platform for the UK automotive aftermarket. The product brings together vehicle data, workshop operations, and predictive analytics into a single managed service. Launching soon.", tags: ["Automotive", "SaaS", "AI/ML", "In Development"] },
  { category: "Technology", title: "Remote Patient Monitoring Platform", description: "Designed a clinical monitoring and care coordination platform for NHS virtual ward programmes. Real-time patient observations, automated clinical scoring, and clinician alerting built to NHS Digital standards.", tags: ["Healthcare", "NHS", "SaaS", "Clinical"] },
  { category: "Technology", title: "Procurement Spend Analytics Engine", description: "AI-powered spend classification and savings identification platform for a mid-market energy company. Reduced procurement cycle time by 40% in the first quarter.", tags: ["AI/ML", "Analytics", "Energy"] },
  { category: "Technology", title: "Supply Chain Automation Suite", description: "Automated purchase order processing, vendor compliance workflows, and exception routing for a multinational manufacturer with 200+ active suppliers.", tags: ["Automation", "Integration", "Enterprise"] },
  { category: "Sourcing", title: "Pan-African Supplier Network", description: "Established and managed a qualified supplier network across 12 African countries. End-to-end procurement support for upstream oil and gas operations.", tags: ["Global Sourcing", "Oil & Gas", "Africa"] },
  { category: "Sourcing", title: "Critical Equipment Procurement", description: "Time-sensitive sourcing and logistics for a refinery turnaround. Delivered specialist equipment from three continents within a four-week window.", tags: ["Procurement", "Energy", "Logistics"] },
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
            Projects Across Technology and Sourcing
          </h1>
          <p className="text-base md:text-lg text-muted max-w-xl leading-relaxed">
            A selection of the platforms we have built and the procurement engagements we have delivered.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((p) => (
              <div key={p.title} className="p-6 rounded-xl bg-card-bg border border-card-border hover:border-accent/20 transition-colors">
                <div className="text-xs text-accent uppercase tracking-wider mb-3">{p.category}</div>
                <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-card-border text-muted">{t}</span>
                  ))}
                </div>
              </div>
            ))}
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
