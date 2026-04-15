import Link from "next/link";
import { HeroNetwork } from "@/components/HeroNetwork";
import { SystemPipeline } from "@/components/SystemPipeline";
import { ScrollReveal } from "@/components/ScrollReveal";

const capabilities = [
  {
    title: "Procurement Intelligence",
    input: "Spend data, supplier records, market signals",
    output: "Risk scores, savings identified, demand forecasted",
    icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v-5.5m3 5.5V8.25m3 3v-2",
  },
  {
    title: "Automotive Intelligence",
    input: "Vehicle data, workshop operations, parts catalogues",
    output: "Predictive maintenance, stock optimisation, trade insights",
    icon: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
  },
  {
    title: "Healthcare Platforms",
    input: "Patient observations, clinical workflows, NHS standards",
    output: "Real-time monitoring, automated escalation, compliance met",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
  },
  {
    title: "Supply Chain Automation",
    input: "Purchase orders, vendor data, compliance requirements",
    output: "Automated workflows, risk alerts, on-time fulfilment",
    icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.73-3.56",
  },
];

const proofPoints = [
  { value: "20+", label: "Years building in procurement" },
  { value: "5", label: "Continents with active operations" },
  { value: "100+", label: "Clients across industries" },
  { value: "£100M+", label: "Portfolio under management" },
];

const sectors = [
  "Automotive", "Healthcare", "Energy", "Oil & Gas", "Manufacturing", "Supply Chain",
];

export default function Home() {
  const marqueeItems = ["Procurement Intelligence", "Supply Chain Automation", "Digital Twins", "Automotive Platforms", "Healthcare Systems", "AI Analytics", "Enterprise SaaS", "Global Sourcing"];
  const marqueeText = marqueeItems.join(" \u00B7 ");

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated network background */}
        <HeroNetwork />

        {/* Gradient overlays for depth */}
        <div className="hero-glow" />
        <div className="hero-glow-secondary" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-xs tracking-wider uppercase text-accent font-medium">Systems Online</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[0.95] tracking-tight mb-6">
            <span className="gradient-text-subtle">Intelligence</span>
            <br />
            <span className="text-foreground">Platforms That</span>
            <br />
            <span className="text-foreground">Think and Move</span>
          </h1>

          <p className="text-base md:text-lg text-muted max-w-xl mx-auto mb-10 leading-relaxed">
            We build AI-powered systems for procurement, automotive, healthcare, and supply chain. Not dashboards. Not reports. Living platforms that process, learn, and act.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/technology" className="group px-7 py-3.5 bg-accent text-background font-semibold rounded-full text-sm hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300">
              See What We Build
              <span className="inline-block ml-1 transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </Link>
            <Link href="/contact" className="px-7 py-3.5 border border-card-border rounded-full text-sm hover:border-accent/30 hover:bg-accent/5 transition-all duration-300">
              Start a Conversation
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted/30">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-accent/20" />
        </div>
      </section>

      {/* ==================== MARQUEE ==================== */}
      <div className="overflow-hidden py-6 relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="animate-marquee whitespace-nowrap flex">
          <span className="text-2xl md:text-3xl tracking-[0.12em] uppercase text-muted/10 font-[family-name:var(--font-space-grotesk)] font-bold">{marqueeText} &middot;&nbsp;</span>
          <span className="text-2xl md:text-3xl tracking-[0.12em] uppercase text-muted/10 font-[family-name:var(--font-space-grotesk)] font-bold">{marqueeText} &middot;&nbsp;</span>
        </div>
      </div>

      {/* ==================== SYSTEM STORY (Centrepiece) ==================== */}
      <section className="py-24 md:py-36 relative overflow-hidden mesh-gradient">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">How It Works</span>
              <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-4 mb-4">
                Data In. Decisions Out.
              </h2>
              <p className="text-muted max-w-lg mx-auto">
                Every platform we build follows the same principle. Connect the data, apply intelligence, deliver actionable outcomes.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <SystemPipeline />
          </ScrollReveal>

          {/* Visual proof — mini dashboard mockup */}
          <ScrollReveal delay={400}>
            <div className="mt-20 relative rounded-2xl overflow-hidden border border-card-border bg-card-bg/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

              {/* Mock dashboard header */}
              <div className="relative border-b border-card-border px-6 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <span className="ml-3 text-[10px] text-muted/50 font-mono">rencel-platform / dashboard</span>
              </div>

              {/* Mock dashboard content */}
              <div className="relative p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Suppliers Monitored", value: "2,847", change: "+12%", up: true },
                  { label: "Risk Alerts (7d)", value: "23", change: "-8%", up: false },
                  { label: "Avg Lead Time", value: "14.2d", change: "-3.1d", up: false },
                  { label: "Cost Savings (YTD)", value: "£2.4M", change: "+18%", up: true },
                ].map((metric) => (
                  <div key={metric.label} className="p-4 rounded-xl bg-background/50 border border-card-border">
                    <div className="text-[10px] text-muted uppercase tracking-wider mb-2">{metric.label}</div>
                    <div className="text-xl md:text-2xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text">{metric.value}</div>
                    <div className={`text-xs mt-1 ${metric.up ? "text-emerald-400" : "text-amber-400"}`}>
                      {metric.change}
                    </div>
                  </div>
                ))}

                {/* Mock chart area */}
                <div className="col-span-2 md:col-span-4 mt-2 p-4 rounded-xl bg-background/50 border border-card-border h-32 flex items-end gap-1">
                  {Array.from({ length: 24 }).map((_, i) => {
                    const h = 20 + Math.sin(i * 0.5) * 30 + Math.random() * 20;
                    return (
                      <div
                        key={i}
                        className="flex-1 rounded-t"
                        style={{
                          height: `${h}%`,
                          background: `linear-gradient(to top, rgba(0,212,255,${0.15 + (i / 24) * 0.3}), rgba(0,212,255,0.05))`,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== CAPABILITIES ==================== */}
      <section className="py-24 md:py-36 relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16">
              <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">Capabilities</span>
              <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-4 mb-4 max-w-2xl">
                Inputs Become Intelligence
              </h2>
              <p className="text-muted max-w-lg">
                Each platform we build transforms raw industry data into decisions that move your business forward.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 100}>
                <div className="capability-card rounded-2xl p-6 md:p-8 h-full">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-accent">
                        <path d={cap.icon} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)]">{cap.title}</h3>
                  </div>

                  {/* Input → Output visualization */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-[10px] uppercase tracking-wider text-muted/60 mt-0.5 shrink-0 w-8">In</span>
                      <span className="text-sm text-muted">{cap.input}</span>
                    </div>
                    <div className="ml-8 w-px h-4 bg-gradient-to-b from-card-border to-accent/20" />
                    <div className="flex items-start gap-3">
                      <span className="text-[10px] uppercase tracking-wider text-accent mt-0.5 shrink-0 w-8">Out</span>
                      <span className="text-sm text-foreground/90">{cap.output}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-10 text-center">
              <Link href="/technology" className="group inline-flex items-center gap-2 text-accent text-sm hover:underline">
                Explore all capabilities
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== PROOF / STATS ==================== */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {proofPoints.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== SECTORS ==================== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {sectors.map((sector) => (
                <span
                  key={sector}
                  className="px-5 py-2.5 rounded-full border border-card-border text-sm text-muted hover:border-accent/20 hover:text-foreground transition-all duration-300 cursor-default"
                >
                  {sector}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== SOURCING (brief) ==================== */}
      <section className="py-24 md:py-36 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">Beyond Technology</span>
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-4 mb-4">
                  We Also Source, Ship, and Deliver
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  20 years of supplier networks across five continents. When you need goods sourced, freight managed, or supply chains optimised, we handle it end to end.
                </p>
                <Link href="/sourcing" className="group inline-flex items-center gap-2 text-accent text-sm hover:underline">
                  View sourcing services
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Global Sourcing", desc: "5 continents" },
                  { label: "Logistics", desc: "End to end" },
                  { label: "Quality Assurance", desc: "On-site inspections" },
                  { label: "Cost Optimisation", desc: "Market intelligence" },
                ].map((s) => (
                  <div key={s.label} className="glass-card rounded-xl p-4">
                    <div className="text-sm font-medium mb-1">{s.label}</div>
                    <div className="text-xs text-muted">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 md:py-36 relative overflow-hidden">
        <div className="hero-glow" style={{ top: "50%" }} />
        <ScrollReveal>
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-5">
              Ready to Build Something<br />That Thinks?
            </h2>
            <p className="text-muted max-w-md mx-auto mb-8">
              We work with businesses that need intelligence platforms built or supply chains managed. Tell us what you are working on.
            </p>
            <Link href="/contact" className="inline-flex px-8 py-4 bg-accent text-background font-semibold rounded-full text-sm hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all duration-300 animate-pulse-glow">
              Start a Conversation
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
