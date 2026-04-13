import Link from "next/link";

const timeline = [
  { year: "2015", title: "Founded", description: "Rencel Procurements Limited incorporated in England & Wales." },
  { year: "2016", title: "European Expansion", description: "Extended operations across UK, Netherlands, and Norway." },
  { year: "2018", title: "Global Reach", description: "Expanded into Asian and African markets across three continents." },
  { year: "2020", title: "Supply Chain Mastery", description: "Managed £100M+ in procurement for major energy clients." },
  { year: "2024", title: "The Tech Pivot", description: "Began building AI-powered procurement intelligence platforms." },
  { year: "2026", title: "Intelligence & Supply", description: "Relaunched as a technology-first company." },
];

const values = [
  { title: "Domain First", description: "We build technology from procurement expertise — not the other way around." },
  { title: "Engineering Excellence", description: "Enterprise-grade platforms with modern architecture and rigorous testing." },
  { title: "Global Perspective", description: "Three continents, ten years, countless supply chains baked into everything." },
  { title: "Transparent Partnership", description: "No black boxes. We work alongside your team, sharing knowledge." },
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
            A Decade of Procurement. Now Building the Future.
          </h1>
          <p className="text-base md:text-lg text-muted max-w-2xl leading-relaxed">
            Rencel started as a procurement consultancy serving the energy sector. After 10+ years inside supply chains across Europe, Asia, and Africa, we saw what the industry truly needed: better technology — built by people who understand procurement.
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
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">What Drives Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-10">Our Principles</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">Let&apos;s Work Together</h2>
          <p className="text-muted max-w-md mx-auto mb-8">Whether you need a technology partner or a procurement specialist — we&apos;d love to hear from you.</p>
          <Link href="/contact" className="inline-flex px-6 py-3 bg-accent text-background font-semibold rounded-full text-sm hover:opacity-90 transition-opacity">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
