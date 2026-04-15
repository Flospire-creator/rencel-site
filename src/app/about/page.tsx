import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rencel",
  description: "Rencel Procurements Limited. 20 years of procurement expertise across five continents, now building AI-powered intelligence platforms for automotive, healthcare, and energy sectors.",
  alternates: { canonical: "/about" },
};

const timeline = [
  { year: "2006", title: "Industry Roots", description: "Started in procurement and supply chain management within the energy sector." },
  { year: "2015", title: "Rencel Founded", description: "Rencel Procurements Limited incorporated in England & Wales to formalise 10 years of industry work." },
  { year: "2017", title: "European Expansion", description: "Extended supplier networks across the UK, Netherlands, Norway, and wider European markets." },
  { year: "2019", title: "Global Operations", description: "Expanded into Asian, African, and American markets. Five continents, 100+ active clients." },
  { year: "2024", title: "Technology Division", description: "Launched our technology practice, building AI-powered intelligence platforms grounded in procurement expertise." },
  { year: "2026", title: "Intelligence & Supply", description: "Operating as a dual-capability firm: technology platforms and strategic sourcing under one roof." },
];

const values = [
  { title: "Built From Experience", description: "We build technology from procurement expertise, not the other way around. Every feature solves a problem we have seen firsthand." },
  { title: "Enterprise Standards", description: "Production-grade platforms with modern architecture, thorough testing, and security built in from the start." },
  { title: "Global Reach", description: "Five continents, 20 years, and hundreds of supply chain engagements inform everything we design and deliver." },
  { title: "No Black Boxes", description: "We work alongside your team, share our reasoning, and upskill your people as we go." },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">About Rencel</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.05] tracking-tight mb-6 max-w-3xl">
            20 Years of Procurement.<br />Now Building the Platforms.
          </h1>
          <p className="text-base md:text-lg text-muted max-w-2xl leading-relaxed">
            Rencel started as a procurement consultancy serving the energy sector. After two decades inside supply chains across five continents, we saw what the industry needed most: better technology, built by people who understand the work.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card-bg/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">Our Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-12">From Consultancy to Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map((t) => (
              <div key={t.year} className="p-6 rounded-xl border border-card-border">
                <div className="text-accent text-sm font-bold tracking-wider mb-2">{t.year}</div>
                <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] mb-1">{t.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">How We Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-10">Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-xl bg-card-bg border border-card-border">
                <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] mb-2">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card-bg/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-xs text-muted uppercase tracking-wider mb-1">Registered Name</div>
              <div className="font-semibold">Rencel Procurements Limited</div>
            </div>
            <div>
              <div className="text-xs text-muted uppercase tracking-wider mb-1">Incorporated</div>
              <div className="font-semibold">25 August 2015</div>
            </div>
            <div>
              <div className="text-xs text-muted uppercase tracking-wider mb-1">Jurisdiction</div>
              <div className="font-semibold">England & Wales</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">Work With Us</h2>
          <p className="text-muted max-w-md mx-auto mb-8">Whether you need a technology partner or a procurement specialist, we would like to hear from you.</p>
          <Link href="/contact" className="inline-flex px-6 py-3 bg-accent text-background font-semibold rounded-full text-sm hover:opacity-90 transition-opacity">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
