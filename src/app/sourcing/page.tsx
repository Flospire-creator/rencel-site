import Link from "next/link";

const services = [
  { title: "Global Sourcing", description: "We identify, qualify, and manage suppliers across Europe, Asia, and Africa. Our decade-long network gives you competitive pricing without compromising quality." },
  { title: "Logistics Management", description: "End-to-end coordination of your supply chain logistics. From warehouse planning to last-mile delivery, we manage the complexity." },
  { title: "Quality Assurance", description: "Rigorous QA at every stage. Factory inspections, material testing, and compliance verification — ensuring what you order is what you receive." },
  { title: "Planning & Scheduling", description: "Strategic procurement planning aligned with your project timelines, accounting for lead times, seasonal variations, and supply chain risks." },
  { title: "Cost Optimisation", description: "Market intelligence, competitive tendering, and negotiation support backed by deep category knowledge across energy and manufacturing." },
  { title: "Freight & Fulfilment", description: "Door-to-door freight management across air, sea, and road. Customs clearance, documentation, and full tracking from origin to destination." },
];

const industries = ["Oil & Gas", "Energy & Utilities", "Petrochemicals", "Manufacturing", "Construction", "Mining & Minerals"];

export default function SourcingPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">Sourcing & Supply Chain</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.05] tracking-tight mb-6 max-w-3xl">
            Procurement Expertise Across Three Continents
          </h1>
          <p className="text-base md:text-lg text-muted max-w-xl leading-relaxed">
            A decade of hands-on procurement and supply chain management across Europe, Asia, and Africa. We know the suppliers, the logistics, and the pitfalls.
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
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">Industries</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-10">Deep Sector Knowledge</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <div key={ind} className="p-5 rounded-xl border border-card-border hover:border-accent/20 transition-colors">
                <span className="font-semibold font-[family-name:var(--font-space-grotesk)]">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">Need a Sourcing Partner?</h2>
          <p className="text-muted max-w-md mx-auto mb-8">Tell us what you need sourced and where. We&apos;ll show you how our network can deliver.</p>
          <Link href="/contact" className="inline-flex px-6 py-3 bg-accent text-background font-semibold rounded-full text-sm hover:opacity-90 transition-opacity">Discuss Your Requirements</Link>
        </div>
      </section>
    </>
  );
}
