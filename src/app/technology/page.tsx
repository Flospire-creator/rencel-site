import Link from "next/link";

const services = [
  { title: "AI Procurement Intelligence", description: "Platforms that turn procurement data into strategic advantage. Spend analytics that surface hidden savings, supplier risk models that predict disruption, and demand forecasting that keeps you ahead." },
  { title: "Supply Chain Automation", description: "Agentic AI that does the heavy lifting. Automated PO processing, intelligent vendor management workflows, and compliance checks that run 24/7." },
  { title: "Digital Twin Solutions", description: "Simulate your entire supply chain before making changes. Model scenarios, stress-test logistics networks, and optimise operations without risking a single shipment." },
  { title: "Custom SaaS Development", description: "Bespoke platforms built for your exact workflow. From procurement portals to logistics dashboards — enterprise-grade SaaS your team actually wants to use." },
  { title: "Data & Analytics Platforms", description: "Turn fragmented procurement data into clear, actionable dashboards. Real-time visibility across spend, suppliers, compliance, and performance." },
  { title: "Security & Compliance", description: "Every platform meets enterprise standards. SOC 2 readiness, GDPR compliance, role-based access, and audit trails — built in from day one." },
];

const process = [
  { step: "01", title: "Discovery", description: "We map your procurement workflows, pain points, and goals." },
  { step: "02", title: "Architecture", description: "We design the platform architecture, data models, and integrations." },
  { step: "03", title: "Build & Iterate", description: "Agile sprints with demos every two weeks. You steer the direction." },
  { step: "04", title: "Launch & Scale", description: "We deploy, monitor, and optimise. Then help you scale." },
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
            Most tech companies build procurement tools from the outside in. We build from the inside out — because we&apos;ve lived the problems for over a decade.
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
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">Our Process</span>
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
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">Have an Idea for a Platform?</h2>
          <p className="text-muted max-w-md mx-auto mb-8">We&apos;ll scope it, architect it, and build it — with the procurement expertise to make sure it works.</p>
          <Link href="/contact" className="inline-flex px-6 py-3 bg-accent text-background font-semibold rounded-full text-sm hover:opacity-90 transition-opacity">Let&apos;s Build Together</Link>
        </div>
      </section>
    </>
  );
}
