import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rencel Digital | Digital Infrastructure for Growing Businesses",
  description: "We set up the systems your business runs on. Website, automation, CRM, AI tools. One partner, everything connected. Packages from £1,500.",
  alternates: { canonical: "/digital" },
};

const packages = [
  {
    name: "Launch",
    price: "£1,500",
    description: "Everything you need to get online and look professional.",
    features: [
      "Custom website (up to 5 pages)",
      "Mobile responsive design",
      "Domain and hosting setup",
      "Business email configuration",
      "SSL certificate and security",
      "Google Business Profile setup",
      "Basic SEO configuration",
      "Contact form with email routing",
    ],
    highlight: false,
    cta: "Get Started",
  },
  {
    name: "Grow",
    price: "£3,500",
    description: "Your business runs smoother. Clients book, pay, and come back.",
    features: [
      "Everything in Launch",
      "Online booking or scheduling system",
      "CRM setup and configuration",
      "Payment processing integration",
      "Email marketing setup",
      "Google Analytics and tracking",
      "Social media integration",
      "3 months of support included",
    ],
    highlight: true,
    cta: "Most Popular",
  },
  {
    name: "Scale",
    price: "£7,500+",
    description: "Custom systems built around how your business actually works.",
    features: [
      "Everything in Grow",
      "Custom workflow automation",
      "AI-powered tools (chatbot, lead scoring)",
      "Third-party integrations (accounting, inventory)",
      "Customer portal or dashboard",
      "Advanced analytics and reporting",
      "Staff training and documentation",
      "6 months of priority support",
    ],
    highlight: false,
    cta: "Talk to Us",
  },
];

const whyUs = [
  {
    title: "One partner, not ten vendors",
    description: "Website, email, CRM, automation, AI. We connect everything so you deal with one team, not a stack of disconnected tools.",
  },
  {
    title: "Built by people who run businesses",
    description: "We have managed supply chains across five continents. We understand operational complexity. Your digital setup reflects that experience.",
  },
  {
    title: "Systems that grow with you",
    description: "Start with a website. Add booking. Then automation. Then AI. Every piece is designed to connect to the next. No rip-and-replace later.",
  },
  {
    title: "No jargon, no fluff",
    description: "We tell you exactly what you get, what it costs, and how long it takes. If something is not worth doing, we will say so.",
  },
];

const industries = [
  "Trades and construction",
  "Professional services",
  "Healthcare and wellness",
  "Hospitality and food",
  "Retail and e-commerce",
  "Property and lettings",
  "Automotive and garages",
  "Education and training",
];

export default function DigitalPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 relative overflow-hidden">
        <div className="hero-glow" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6">
            <span className="text-xs tracking-wider uppercase text-accent font-medium">Rencel Digital</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1] tracking-tight mb-6 max-w-4xl">
            The Systems Your Business Runs On
          </h1>

          <p className="text-base md:text-lg text-muted max-w-2xl leading-relaxed mb-10">
            Website. Booking. Payments. CRM. Automation. AI tools. We set up your entire digital infrastructure so everything works together from day one. One partner. Everything connected.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#packages" className="px-7 py-3.5 bg-accent text-background font-semibold rounded-full text-sm hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300 text-center">
              View Packages
            </a>
            <Link href="/contact" className="px-7 py-3.5 border border-card-border rounded-full text-sm hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 text-center">
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-4">
                You are running a business, not managing software.
              </h2>
              <p className="text-muted leading-relaxed">
                Most small businesses end up with a website from one company, email from another, a booking tool that does not talk to anything, and a spreadsheet pretending to be a CRM. Nothing connects. Everything takes longer than it should.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { before: "5 different logins", after: "1 connected system" },
                { before: "Manual follow-ups", after: "Automated workflows" },
                { before: "Scattered data", after: "Single source of truth" },
                { before: "Guesswork", after: "Real-time insights" },
              ].map((item) => (
                <div key={item.before} className="glass-card rounded-xl p-4">
                  <div className="text-xs text-muted line-through mb-2">{item.before}</div>
                  <div className="text-sm font-medium text-accent">{item.after}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 md:py-28 relative overflow-hidden mesh-gradient">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">Packages</span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-4 mb-4">
              Clear Scope. Fixed Price. No Surprises.
            </h2>
            <p className="text-muted max-w-lg mx-auto">
              Choose the level that fits where you are now. Every package is designed to scale up when you are ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-6 md:p-8 flex flex-col relative ${
                  pkg.highlight
                    ? "bg-card-bg border-2 border-accent/30 shadow-[0_0_40px_rgba(0,212,255,0.08)]"
                    : "bg-card-bg/50 border border-card-border"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-background text-xs font-semibold rounded-full">
                    Recommended
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-1">{pkg.name}</h3>
                  <div className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text mb-2">{pkg.price}</div>
                  <p className="text-sm text-muted">{pkg.description}</p>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent shrink-0 mt-0.5">
                        <path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3 rounded-full text-sm font-semibold text-center transition-all duration-300 ${
                    pkg.highlight
                      ? "bg-accent text-background hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
                      : "border border-card-border hover:border-accent/30 hover:bg-accent/5"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted mt-6">
            All prices exclude VAT. Custom requirements? We will scope it properly and give you a fixed quote.
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-4">
              Why Rencel Digital
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyUs.map((item) => (
              <div key={item.title} className="capability-card rounded-2xl p-6 md:p-8">
                <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">Works For</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-5 py-2.5 rounded-full border border-card-border text-sm text-muted hover:border-accent/20 hover:text-foreground transition-all duration-300 cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Call", desc: "15 minutes. We learn what you need and recommend the right package." },
              { step: "02", title: "Scope", desc: "We define exactly what gets built, by when, and for how much." },
              { step: "03", title: "Build", desc: "We set up everything. You review it. We refine until it is right." },
              { step: "04", title: "Launch", desc: "Go live. We train you on everything and stay available for support." },
            ].map((item) => (
              <div key={item.step} className="text-center md:text-left">
                <div className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text mb-2">{item.step}</div>
                <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] mb-1">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="hero-glow" style={{ top: "50%" }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-5">
            Let Us Set Up Your Systems
          </h2>
          <p className="text-muted max-w-md mx-auto mb-8">
            Book a 15-minute call. We will tell you exactly what you need, what it costs, and how quickly we can deliver it.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4 bg-accent text-background font-semibold rounded-full text-sm hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all duration-300 animate-pulse-glow">
            Book a Call
          </Link>
        </div>
      </section>
    </>
  );
}
