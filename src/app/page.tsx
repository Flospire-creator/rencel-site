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

const sectors = [
  { name: "Automotive", icon: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" },
  { name: "Healthcare", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" },
  { name: "Energy", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" },
  { name: "Supply Chain", icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.73-3.56" },
];

const marqueeItems = ["Procurement Intelligence", "Supply Chain Automation", "Digital Twins", "Global Sourcing", "AI Analytics", "Enterprise SaaS", "Healthcare Platforms", "Automotive Intelligence", "Energy Sector", "NHS Digital"];

export default function Home() {
  const marqueeText = marqueeItems.join(" \u00B7 ");

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="hero-glow" />
        <div className="dot-grid absolute inset-0" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs tracking-wider uppercase text-accent font-medium">Technology + Procurement</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.05] tracking-tight mb-6">
            We Build Intelligence<br />Platforms That Work
          </h1>

          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Rencel is a technology and procurement consultancy. We design and build AI-powered platforms for automotive, healthcare, energy, and supply chain sectors. We also source goods and manage logistics across five continents. 20+ years of industry experience, applied to software that delivers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/technology" className="px-6 py-3 bg-accent text-background font-semibold rounded-full text-sm hover:opacity-90 transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]">
              See Our Technology Services
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-card-border rounded-full text-sm hover:border-accent/40 transition-colors">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors we serve */}
      <section className="py-16 border-y border-card-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">Sectors We Serve</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sectors.map((s) => (
              <div key={s.name} className="glass-card rounded-xl p-5 flex items-center gap-3">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-accent shrink-0">
                  <path d={s.icon} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm font-medium">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-b border-card-border py-6">
        <div className="animate-marquee whitespace-nowrap flex">
          <span className="text-2xl md:text-3xl tracking-[0.12em] uppercase text-muted/20 font-[family-name:var(--font-space-grotesk)] font-bold">{marqueeText} &middot;&nbsp;</span>
          <span className="text-2xl md:text-3xl tracking-[0.12em] uppercase text-muted/20 font-[family-name:var(--font-space-grotesk)] font-bold">{marqueeText} &middot;&nbsp;</span>
        </div>
      </div>

      {/* Stats */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text mb-1">{s.value}</div>
                <div className="text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Services */}
      <section className="py-20 md:py-28 dot-grid">
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
              <div key={s.title} className="glass-card p-6 rounded-xl">
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
      <section className="py-20 md:py-28">
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
              <div key={s.title} className="glass-card p-6 rounded-xl">
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
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="hero-glow" style={{ top: "50%" }} />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-muted max-w-md mx-auto mb-8">
            We work with businesses that need intelligence platforms built or supply chains managed. Tell us what you are working on.
          </p>
          <Link href="/contact" className="inline-flex px-6 py-3 bg-accent text-background font-semibold rounded-full text-sm hover:opacity-90 transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
