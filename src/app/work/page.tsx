import Link from "next/link";

const projects = [
  { category: "Technology", title: "AI Spend Analytics Platform", description: "Built an AI-powered spend analytics dashboard for an energy sector client, reducing procurement cycle time by 40%.", tags: ["AI/ML", "React", "Procurement"] },
  { category: "Technology", title: "Supply Chain Automation Suite", description: "Automated PO processing and vendor compliance workflows for a multinational manufacturer.", tags: ["Automation", "Integration", "Enterprise"] },
  { category: "Sourcing", title: "Pan-African Supplier Network", description: "Established and managed 200+ qualified suppliers across 12 African countries for oil & gas procurement.", tags: ["Global Sourcing", "Oil & Gas"] },
  { category: "Technology", title: "Digital Twin Logistics Platform", description: "Developed a digital twin simulation for optimising container routing across European ports.", tags: ["Digital Twin", "Simulation"] },
  { category: "Sourcing", title: "Emergency Procurement Response", description: "Delivered critical equipment sourcing and logistics for a time-sensitive refinery maintenance shutdown.", tags: ["Procurement", "Energy"] },
  { category: "Technology", title: "Procurement Intelligence Dashboard", description: "Real-time supplier risk scoring and market intelligence platform for a chemicals distributor.", tags: ["Data Analytics", "SaaS"] },
];

export default function WorkPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">Our Work</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.05] tracking-tight mb-6 max-w-3xl">
            Projects That Move Industries Forward
          </h1>
          <p className="text-base md:text-lg text-muted max-w-xl leading-relaxed">
            A selection of projects across technology and sourcing.
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
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">Want to See Your Project Here?</h2>
          <p className="text-muted max-w-md mx-auto mb-8">We&apos;re always looking for ambitious projects. Let&apos;s make it happen.</p>
          <Link href="/contact" className="inline-flex px-6 py-3 bg-accent text-background font-semibold rounded-full text-sm hover:opacity-90 transition-opacity">Start a Project</Link>
        </div>
      </section>
    </>
  );
}
