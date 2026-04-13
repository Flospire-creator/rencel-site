import Link from "next/link";

const stats = [
  { value: "10+", label: "Years of Expertise" },
  { value: "3", label: "Continents Served" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "£100M+", label: "Procurement Managed" },
];

const techServices = [
  { title: "Procurement Intelligence", description: "AI-driven spend analytics, supplier risk scoring, and demand forecasting platforms." },
  { title: "Supply Chain Automation", description: "Agentic AI workflows that automate PO processing, vendor management, and compliance." },
  { title: "Digital Twin Solutions", description: "Supply chain simulation and optimisation platforms that model your entire operation." },
  { title: "Custom SaaS Development", description: "Bespoke procurement and logistics platforms built for enterprise performance." },
];

const sourcingServices = [
  { title: "Global Sourcing", description: "Supplier identification, qualification, and management across Europe, Asia, and Africa." },
  { title: "Logistics & Freight", description: "End-to-end logistics management, freight handling, and on-time fulfilment worldwide." },
];

const marqueeItems = ["Procurement Intelligence", "Supply Chain Automation", "Digital Twin Platforms", "Global Sourcing", "AI-Powered Analytics", "Enterprise SaaS", "Logistics Management", "Oil & Gas Expertise"];

export default function Home() {
  const marqueeText = marqueeItems.join(" \u2014 ");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs tracking-wider uppercase text-accent font-medium">Now Building Intelligence Platforms</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.05] tracking-tight mb-6">
            Where Procurement<br />Meets Intelligence
          </h1>

          <p className="text-base md:text-lg text-muted max-w-xl mx-auto mb-10 leading-relaxed">
            10+ years of global procurement expertise. Now engineering AI-powered platforms that transform how businesses source, automate, and optimise their supply chains.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/technology" className="px-6 py-3 bg-accent text-background font-semibold rounded-full text-sm hover:opacity-90 transition-opacity">
              Explore Our Technology
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-card-border rounded-full text-sm hover:border-accent/40 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-card-border py-4">
        <div className="animate-marquee whitespace-nowrap flex">
          <span className="text-xs tracking-[0.15em] uppercase text-muted/60">{marqueeText} &mdash;&nbsp;</span>
          <span className="text-xs tracking-[0.15em] uppercase text-muted/60">{marqueeText} &mdash;&nbsp;</span>
        </div>
      </div>

      {/* Stats */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-accent mb-1">{s.value}</div>
                <div className="text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Services */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">Technology</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-4">
            Intelligence Platforms Built by<br />Procurement Experts
          </h2>
          <p className="text-muted max-w-lg mb-12">
            We don&apos;t just build tech — we build tech that solves real procurement problems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {techServices.map((s) => (
              <div key={s.title} className="p-6 rounded-xl bg-card-bg border border-card-border hover:border-accent/20 transition-colors">
                <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/technology" className="inline-flex items-center gap-1.5 text-accent text-sm hover:underline">
              Explore all technology services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="py-20 md:py-28 bg-card-bg/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">Sourcing & Supply Chain</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-4">
            Global Sourcing That Delivers
          </h2>
          <p className="text-muted max-w-lg mb-12">
            Proven procurement support across European, Asian, and African markets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sourcingServices.map((s) => (
              <div key={s.title} className="p-6 rounded-xl bg-card-bg border border-card-border hover:border-accent/20 transition-colors">
                <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/sourcing" className="inline-flex items-center gap-1.5 text-accent text-sm hover:underline">
              Explore sourcing services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-muted max-w-md mx-auto mb-8">
            Whether you need an intelligence platform built or a sourcing partner you can trust — let&apos;s talk.
          </p>
          <Link href="/contact" className="inline-flex px-6 py-3 bg-accent text-background font-semibold rounded-full text-sm hover:opacity-90 transition-opacity">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
