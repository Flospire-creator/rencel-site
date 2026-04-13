import Link from "next/link";

const stats = [
  { value: "20+", label: "Years in Procurement" },
  { value: "5", label: "Continents Served" },
  { value: "100+", label: "Clients Worldwide" },
  { value: "£100M+", label: "Portfolio Managed" },
];

const techServices = [
  { title: "Procurement Intelligence", description: "AI-driven spend analytics, supplier risk scoring, and demand forecasting platforms built on real-world procurement data." },
  { title: "Supply Chain Automation", description: "Intelligent workflows that automate purchase orders, vendor management, and compliance checks at scale." },
  { title: "Digital Twin Solutions", description: "Supply chain simulation and optimisation platforms that model your entire operation before you commit to change." },
  { title: "Custom SaaS Development", description: "Bespoke industry platforms built for your exact workflow, from concept through to deployment and support." },
];

const sourcingServices = [
  { title: "Global Sourcing", description: "Supplier identification, qualification, and management across Europe, Asia, Africa, and the Americas." },
  { title: "Logistics & Freight", description: "End-to-end logistics management, freight coordination, and on-time fulfilment across five continents." },
];

const marqueeItems = ["Procurement Intelligence", "Supply Chain Automation", "Digital Twin Platforms", "Global Sourcing", "AI Analytics", "Enterprise SaaS", "Logistics Management", "Energy Sector", "Automotive Platforms"];

export default function Home() {
  const marqueeText = marqueeItems.join(" \u00B7 ");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs tracking-wider uppercase text-accent font-medium">Technology + Procurement</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.05] tracking-tight mb-6">
            We Build Intelligence<br />Platforms for Supply Chains
          </h1>

          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Rencel is a technology and procurement consultancy. We design AI-powered platforms for supply chain management and source goods across five continents. 20+ years of industry experience, applied to software that works.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/technology" className="px-6 py-3 bg-accent text-background font-semibold rounded-full text-sm hover:opacity-90 transition-opacity">
              See Our Technology Services
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-card-border rounded-full text-sm hover:border-accent/40 transition-colors">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-card-border py-4">
        <div className="animate-marquee whitespace-nowrap flex">
          <span className="text-xs tracking-[0.15em] uppercase text-muted/60">{marqueeText} &middot;&nbsp;</span>
          <span className="text-xs tracking-[0.15em] uppercase text-muted/60">{marqueeText} &middot;&nbsp;</span>
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
            Platforms Built by People Who<br />Know the Industry
          </h2>
          <p className="text-muted max-w-lg mb-12">
            Every platform we build is grounded in two decades of procurement and supply chain experience. We solve problems we have lived through ourselves.
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
              View all technology services &rarr;
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
            Proven procurement support across five continents. Supplier networks built over 20 years in energy, manufacturing, and industrial sectors.
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
              View sourcing services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-muted max-w-md mx-auto mb-8">
            We work with businesses that need intelligence platforms built or supply chains managed. Tell us what you are working on.
          </p>
          <Link href="/contact" className="inline-flex px-6 py-3 bg-accent text-background font-semibold rounded-full text-sm hover:opacity-90 transition-opacity">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
