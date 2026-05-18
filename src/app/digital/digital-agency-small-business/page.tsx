import Link from "next/link";
import type { Metadata } from "next";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Digital Agency for Small Businesses | Rencel Procurements Digital",
  description:
    "Looking for a digital agency for your small business? Rencel is a different kind of agency. We build websites, set up your tools, and improve how your business runs.",
  alternates: { canonical: "/digital/digital-agency-small-business" },
  keywords: [
    "digital agency small business",
    "digital agency for small business UK",
    "small business digital agency",
    "digital agency Chippenham",
    "digital agency Wiltshire",
    "digital agency Bristol",
    "affordable digital agency UK",
    "best digital agency small business",
  ],
};

const comparison = [
  {
    feature: "Fixed-price packages",
    typical: "Usually hourly rates with open-ended scope",
    rencel: "£4,500, £7,500, £15,000+ or custom Platform tier with clear scope",
  },
  {
    feature: "Operational understanding",
    typical: "Designers and developers, not operators",
    rencel: "20+ years running real procurement and supply chains",
  },
  {
    feature: "Connected systems",
    typical: "Builds the website, leaves you to connect the rest",
    rencel: "Website, email, bookings, payments, CRM all connected from day one",
  },
  {
    feature: "Procurement support",
    typical: "Not offered",
    rencel: "Supplier sourcing and workflows included for procurement-heavy businesses",
  },
  {
    feature: "Ongoing support",
    typical: "Chargeable ad-hoc or expensive retainers",
    rencel: "From £150/month including proactive checks",
  },
  {
    feature: "Typical delivery time",
    typical: "6 to 12 weeks for a basic site",
    rencel: "2 to 3 weeks for Launch, 4 to 6 weeks for Grow",
  },
  {
    feature: "What happens after launch",
    typical: "You are on your own unless you pay a retainer",
    rencel: "Three months of support included in Grow, six months in Scale",
  },
  {
    feature: "Who you work with",
    typical: "Account manager, then designer, then developer",
    rencel: "Direct access to the team delivering your work",
  },
];

const faqs = [
  {
    q: "Is Rencel really a digital agency?",
    a: "Yes, we provide all the services a digital agency does: website design, development, SEO, digital strategy, and ongoing support. We also provide things most agencies do not: procurement support, operational consulting, and 20+ years of running real businesses. So we are a digital agency with extra operational depth.",
  },
  {
    q: "Why not just use a cheaper digital agency?",
    a: "For a purely cosmetic website, a cheap agency is fine. For a website that actually supports how your business runs, you need someone who understands both the tech and the business operations. That combination is rare, and it is what Rencel offers. The cheap agency usually costs more in the long run when you realise the site does not do what you need.",
  },
  {
    q: "Do you work with big businesses too?",
    a: "Yes. Our main brand (Rencel Procurements) serves enterprise clients with intelligence platforms and global procurement. Rencel Digital is specifically for small businesses, with packages and pricing designed for that market.",
  },
  {
    q: "Are you a full-service digital agency?",
    a: "Yes. We handle website design, development, SEO, digital setup (email, payments, booking, CRM), hosting, ongoing support, and operational consulting. If you need paid advertising or specialist branding, we work with trusted partners. You still get one point of contact.",
  },
  {
    q: "Are you based near me?",
    a: "We are based in Bristol with strong local presence in Chippenham, Wiltshire, Bath, Swindon and London. We work across the UK remotely, and our wider team extends to Miami, USA and Nigeria. Most work is delivered remotely so we can support any UK small business without a travel premium.",
  },
  {
    q: "What if I just want a website, not all the extra stuff?",
    a: "Our Launch package at £4,500 is just a website with the essentials (cloud hosting, domain, email, SSL, SEO, contact form, payment setup). You do not have to take anything else. But the tools and systems are there when you are ready to grow.",
  },
];

export default function Page() {
  const url = "https://www.rencelprocurements.co.uk/digital/digital-agency-small-business";
  return (
    <>
      <ServiceSchema
        name="Digital Agency for Small Businesses"
        description="Rencel Procurements Digital is a digital agency for small businesses in the UK. Website design, digital setup, tech support and procurement operations delivered as fixed-price packages."
        url={url}
      />
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.rencelprocurements.co.uk/" },
          { name: "Rencel Digital", url: "https://www.rencelprocurements.co.uk/digital" },
          { name: "Digital Agency for Small Businesses", url },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-20 relative overflow-hidden">
        <div className="hero-glow" />
        <div className="relative max-w-4xl mx-auto px-6">
          <Link href="/digital" className="text-sm text-accent hover:underline mb-6 inline-block">
            &larr; Rencel Digital
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6">
            <span className="text-xs tracking-wider uppercase text-accent font-medium">Digital Agency for Small Businesses</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.05] tracking-tight mb-6 max-w-3xl">
            A Digital Agency for Small Businesses Who Want More Than a Website
          </h1>

          <p className="text-base md:text-lg text-muted max-w-2xl leading-relaxed mb-10">
            Most digital agencies build you a website and disappear. We build the website, connect your tools, set up your operations, and stay involved long enough to make sure it is actually working. One agency, one partner, fixed prices.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="px-7 py-3.5 bg-accent text-background font-semibold rounded-full text-sm hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300 text-center">
              Book a Free Consultation
            </Link>
            <Link href="/digital/free-website-review" className="px-7 py-3.5 border border-card-border rounded-full text-sm hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 text-center">
              Get a Free Website Review
            </Link>
          </div>
        </div>
      </section>

      {/* The comparison */}
      <section className="py-16 md:py-20 relative overflow-hidden mesh-gradient">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">The Difference</span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-4 mb-4">
              Typical Digital Agency vs Rencel
            </h2>
            <p className="text-muted max-w-lg mx-auto">
              We are an agency. But not the agency you are probably thinking of.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-card-border bg-card-bg/50">
            <div className="grid grid-cols-3 gap-0 bg-card-bg border-b border-card-border">
              <div className="p-4 md:p-5 text-xs text-muted uppercase tracking-wider">Feature</div>
              <div className="p-4 md:p-5 text-xs text-muted uppercase tracking-wider">Typical Agency</div>
              <div className="p-4 md:p-5 text-xs text-accent uppercase tracking-wider">Rencel Digital</div>
            </div>
            {comparison.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 gap-0 ${i !== comparison.length - 1 ? "border-b border-card-border" : ""}`}
              >
                <div className="p-4 md:p-5 text-sm font-medium">{row.feature}</div>
                <div className="p-4 md:p-5 text-sm text-muted leading-relaxed">{row.typical}</div>
                <div className="p-4 md:p-5 text-sm text-foreground/90 leading-relaxed bg-accent/5">{row.rencel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">What Makes Us Different</span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-4 mb-4 max-w-2xl">
              Built by Operators, Not Just Designers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="capability-card rounded-2xl p-6">
              <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] mb-2">20+ years of operations</h3>
              <p className="text-sm text-muted leading-relaxed">
                We have managed real supply chains across five continents. That means when we build your digital setup, we think about how your business actually runs. Not just how the homepage looks.
              </p>
            </div>
            <div className="capability-card rounded-2xl p-6">
              <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] mb-2">Everything connects</h3>
              <p className="text-sm text-muted leading-relaxed">
                Most agencies build one thing at a time, leaving you to connect the dots. We set up website, email, payments, booking, CRM, and automation as one connected system from day one.
              </p>
            </div>
            <div className="capability-card rounded-2xl p-6">
              <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] mb-2">We stay involved</h3>
              <p className="text-sm text-muted leading-relaxed">
                A website that works for a week and then quietly breaks is not a win. Our packages include ongoing support so your setup keeps working, not just keeps existing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When a typical agency is right */}
      <section className="py-16 md:py-20 bg-card-bg/30">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-5">
            When a typical agency is the right call
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            We are not the right fit for every small business. If you need a purely visual, creative-heavy website (a luxury brand, a design-led portfolio, a film director), a specialist creative agency is probably a better choice.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            If you need large-scale paid advertising, social media management, or brand identity from scratch, specialist agencies in those disciplines will do a better job than us.
          </p>
          <p className="text-muted leading-relaxed">
            Where we excel is when you need the whole stack set up properly: website, tools, operations, and procurement. Especially if you are a trade, service business, consultant, or any small business where the website is not the business, but needs to support the business.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 relative overflow-hidden mesh-gradient">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-card-bg/50 border border-card-border rounded-xl p-5 md:p-6 hover:border-accent/20 transition-colors"
              >
                <summary className="flex items-start justify-between cursor-pointer list-none gap-4">
                  <h3 className="text-base md:text-lg font-semibold font-[family-name:var(--font-space-grotesk)]">{faq.q}</h3>
                  <span className="text-accent text-lg shrink-0 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm text-muted leading-relaxed mt-3 pt-3 border-t border-card-border">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-muted mb-4">Related</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/digital" className="px-5 py-2.5 rounded-full border border-card-border text-sm text-muted hover:border-accent/20 hover:text-foreground transition-all duration-300">
              See all services
            </Link>
            <Link href="/digital/website-design-small-businesses" className="px-5 py-2.5 rounded-full border border-card-border text-sm text-muted hover:border-accent/20 hover:text-foreground transition-all duration-300">
              Website design
            </Link>
            <Link href="/digital/website-redesign" className="px-5 py-2.5 rounded-full border border-card-border text-sm text-muted hover:border-accent/20 hover:text-foreground transition-all duration-300">
              Website redesign
            </Link>
            <Link href="/digital/free-website-review" className="px-5 py-2.5 rounded-full border border-card-border text-sm text-muted hover:border-accent/20 hover:text-foreground transition-all duration-300">
              Free website review
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="hero-glow" style={{ top: "50%" }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-5">
            Ready for a Different Kind of Agency?
          </h2>
          <p className="text-muted max-w-md mx-auto mb-8">
            Book a 15-minute call. We will tell you exactly what you need, what it costs, and how quickly we can deliver it.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4 bg-accent text-background font-semibold rounded-full text-sm hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all duration-300 animate-pulse-glow">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
