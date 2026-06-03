import Link from "next/link";
import type { Metadata } from "next";
import { LocalBusinessSchema, FAQSchema, BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Digital Agency for Small Businesses | Rencel Procurements Digital",
  description:
    "Rencel Digital is a digital agency for small businesses across the UK. Website design, digital setup, tech support and procurement operations.",
  alternates: { canonical: "/digital" },
  keywords: [
    "digital agency small business",
    "digital agency Chippenham",
    "digital agency Wiltshire",
    "digital agency UK",
    "small business digital agency",
    "website design small business",
    "small business website Chippenham",
    "small business website Wiltshire",
    "website redesign UK",
    "digital setup small business",
    "small business tech support",
    "procurement support small business",
    "business email setup",
    "Stripe setup UK",
    "booking system small business",
  ],
  openGraph: {
    title: "Website Design & Digital Support for Small Businesses",
    description:
      "Practical websites, digital setup and procurement support for small businesses across the UK.",
    url: "https://www.rencelprocurements.co.uk/digital",
    type: "website",
  },
};

const faqs = [
  {
    q: "Can you build a website for my small business?",
    a: "Yes. Rencel Procurements Digital helps small businesses build practical, credible websites that explain what they offer, build trust and make it easier for customers to get in touch. We work with local service providers, trades, consultants, and small teams.",
  },
  {
    q: "Where in the UK do you work?",
    a: "We support small businesses across the UK. Most of our work is delivered remotely with calls and screen shares, which keeps costs down and projects moving quickly. We have particularly strong local presence in Bristol, Bath, Swindon, Wiltshire and London if you prefer in-person meetings.",
  },
  {
    q: "Can you help me redesign my existing website?",
    a: "Yes. We review your current website, identify what is unclear or underperforming, and improve the structure, content and user experience. Most redesigns take two to four weeks from brief to live.",
  },
  {
    q: "Can you help set up Stripe, booking tools or business email?",
    a: "Yes. We handle practical digital setup including payment links, Stripe, booking tools like Calendly or SavvyCal, domains, business email on Google Workspace or Microsoft 365, and simple operational systems.",
  },
  {
    q: "Do you only offer websites, or do you also support business operations?",
    a: "We support websites, digital setup and operational improvements. The focus is on helping small businesses run better, not just look better online. That includes connecting your tools so they talk to each other.",
  },
  {
    q: "Can you help with procurement as well as digital setup?",
    a: "Yes. Rencel combines 20 years of procurement experience with digital support. We help businesses improve supplier processes, purchasing workflows, and operational tools. This is a unique combination most agencies do not offer.",
  },
  {
    q: "How much does a small business website cost?",
    a: "Our Launch package at £4,500 includes a complete website with cloud hosting, domain, business email, SSL, SEO setup and payment processing, live in 2-3 weeks. The Grow package at £7,500 adds booking, CRM and customer journey tracking. Scale starts at £15,000 for custom automation and AI tools. Our Platform tier (£15,000-£30,000+) covers custom SaaS products and intelligence platforms. For businesses who want expert guidance before committing to a build, our Digital Audit & Roadmap is £450. All prices exclude VAT.",
  },
  {
    q: "Can I pay monthly instead of paying upfront?",
    a: "Yes. Launch, Grow and Scale can be paid monthly over 12 months: £450/month for Launch, £750/month for Grow, £1,500/month for Scale. Platform projects use custom payment plans agreed at the start. After your build, you can also choose a Care Plan from £150/month for ongoing hosting, support and improvements.",
  },
  {
    q: "Do I own the website?",
    a: "Yes. You own the website, the domain, the code, the design and your data. We do not lock you into multi-year contracts or rent you the site like some agencies do. If you ever want to take your site elsewhere, you can.",
  },
  {
    q: "How does customer journey tracking help me get more sales?",
    a: "Most small business websites lose 70 to 90 percent of visitors before they ever enquire. Customer journey tracking shows you where those visitors drop off: which pages they leave, which buttons they ignore, where they get confused. With Care+, we review this data every month and tell you the single change that will lift your conversions most. The result is more enquiries and more sales from the same traffic, without spending more on marketing.",
  },
  {
    q: "How quickly can a small business website go live?",
    a: "A Launch package website typically goes live in two to three weeks once we have your content and images. Grow projects with booking and CRM take four to six weeks. Scale builds run six to ten weeks. Platform builds for SaaS products and custom intelligence platforms run eight to fourteen weeks.",
  },
];

const packages = [
  {
    name: "Launch",
    price: "£4,500",
    monthlyPrice: "or £450/month over 12 months",
    timeline: "Live in 2-3 weeks",
    description: "Everything you need to get online and look professional.",
    features: [
      "Custom website (up to 5 pages)",
      "Mobile responsive design",
      "Cloud hosting setup (year 1 included)",
      "Domain registration and configuration",
      "Business email configuration",
      "SSL certificate and security",
      "Google Business Profile setup",
      "Basic SEO configuration",
      "Contact form with email routing",
      "Online payment setup",
    ],
    highlight: false,
    cta: "Get Started",
  },
  {
    name: "Grow",
    price: "£7,500",
    monthlyPrice: "or £750/month over 12 months",
    timeline: "Live in 4-6 weeks",
    description: "Your business runs smoother. Clients book, pay, and come back.",
    features: [
      "Everything in Launch",
      "Online booking or scheduling system",
      "CRM setup and configuration",
      "Payment processing integration",
      "Email marketing setup",
      "Customer journey tracking: heatmaps, analytics and drop-off analysis",
      "Social media integration",
      "Managed cloud hosting (year 1 included)",
      "3 months of support included",
    ],
    highlight: true,
    cta: "Get Started",
  },
  {
    name: "Scale",
    price: "£15,000+",
    monthlyPrice: "or £1,500/month over 12 months",
    timeline: "Live in 6-10 weeks",
    description: "Custom systems built around how your business actually works.",
    proofText: "Real example: Portishead Tyre & MOT - £6,000 in 14 days.",
    proofLink: "/work/portishead-tyre-and-mot",
    proofLinkLabel: "See case study",
    features: [
      "Everything in Grow",
      "Custom workflow automation",
      "AI tools (chatbot, smart follow-ups)",
      "Third-party integrations (accounting, inventory)",
      "Customer portal or dashboard",
      "Conversion funnel analytics with session recordings",
      "Staff training and documentation",
      "Managed cloud hosting (year 1 included)",
      "6 months of priority support",
    ],
    highlight: false,
    cta: "Talk to Us",
  },
  {
    name: "Platform",
    price: "£15,000-£30,000+",
    monthlyPrice: "Custom payment plans available",
    timeline: "Live in 8-14 weeks",
    description: "Custom intelligence platforms and SaaS products. Production-grade from day one.",
    features: [
      "Multi-user platform or SaaS product",
      "Custom architecture and database design",
      "Authentication and user management",
      "Admin panel with customer journey analytics",
      "AI and data pipelines where needed",
      "Stripe and third-party API integrations",
      "Enterprise-grade security",
      "Managed cloud hosting and DevOps (year 1 included)",
      "12 months of priority support",
    ],
    highlight: false,
    cta: "Scope a Project",
  },
];

const carePlans = [
  {
    name: "Care",
    price: "£150",
    description: "Keep your site safe, fast and online.",
    features: [
      "Managed cloud hosting and SSL",
      "Security updates and weekly backups",
      "24/7 uptime monitoring",
      "1 hour of content updates per month",
      "Monthly performance report",
    ],
    highlight: false,
    cta: "Start Care Plan",
  },
  {
    name: "Care+",
    price: "£350",
    description: "Use data to grow. Every month we tell you the one thing to fix to convert more visitors into paying customers.",
    features: [
      "Everything in Care",
      "3 hours of content and design work per month",
      "Monthly customer journey review with one growth recommendation",
      "Quarterly strategy and growth call",
      "Annual site refresh (visual and content update)",
      "Priority response (next business day)",
    ],
    highlight: true,
    cta: "Start Care+",
  },
];

const services = [
  {
    slug: "website-design-small-businesses",
    title: "Website Design for Small Businesses",
    description: "Simple, credible websites for local businesses, service providers, trades, consultants and small teams. We focus on what your customers need to see, not design awards.",
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    description: "If your current website is outdated, unclear or not converting, we will audit it and rebuild what is not working. Clearer message, better structure, stronger results.",
  },
  {
    slug: "digital-setup-small-businesses",
    title: "Digital Setup",
    description: "Domains, business email, payment links, Stripe, booking tools, forms, and basic automation. All set up properly and connected together from the start.",
  },
  {
    slug: "procurement-support",
    title: "Procurement Support",
    description: "Supplier sourcing, purchasing workflows, process improvement and operational structure. 20 years of procurement experience applied to small business problems.",
  },
  {
    slug: "small-business-tech-support",
    title: "Small Business Tech Support",
    description: "Practical help for owners who need digital tools set up and working, without the complexity. We handle the technical side so you can focus on running your business.",
  },
  {
    slug: "chippenham-small-business-websites",
    title: "UK-Wide with Local Presence",
    description: "Dedicated UK coverage with strong local presence in Bristol, Bath, Wiltshire and Chippenham. National reach, local focus.",
  },
];

const whoWeWorkWith = [
  "Small business owners",
  "Local service businesses",
  "Trades and repair businesses",
  "Consultants",
  "Wedding and events businesses",
  "Startups",
  "Procurement-led businesses",
];

const recentWork: { name: string; description: string; slug?: string }[] = [
  {
    name: "Portishead Tyre & MOT",
    description: "Independent garage. Live booking system tied to real tyre stock, four third-party integrations, Stripe payments. £6,000 in sales in the first 14 days. Fully booked through August.",
    slug: "portishead-tyre-and-mot",
  },
  {
    name: "Automotive Trade Platform",
    description: "Website and go-to-market positioning for a connected vehicle intelligence startup serving the UK automotive aftermarket.",
  },
  {
    name: "Events Technology Platform",
    description: "Digital product for the wedding and events industry, covering guest experience and on-the-day coordination.",
  },
];

const locations = [
  "United Kingdom",
  "United States",
  "United Arab Emirates",
];

export default function DigitalPage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.rencelprocurements.co.uk/" },
          { name: "Rencel Digital", url: "https://www.rencelprocurements.co.uk/digital" },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-20 relative overflow-hidden">
        <div className="hero-glow" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6">
            <span className="text-xs tracking-wider uppercase text-accent font-medium">Rencel Procurements Digital</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.05] tracking-tight mb-6 max-w-4xl">
            Website Design and Digital Support for Small Businesses
          </h1>

          <p className="text-base md:text-lg text-muted max-w-2xl leading-relaxed mb-6">
            A digital agency for small businesses across the UK who want more than a website. We help small businesses build practical websites, set up digital tools, improve operations and access procurement support. One partner for everything your business needs online.
          </p>
          <p className="text-sm text-muted max-w-xl leading-relaxed mb-10">
            <Link href="/digital/digital-agency-small-business" className="text-accent hover:underline">See how we compare to a typical digital agency &rarr;</Link>
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="px-7 py-3.5 bg-accent text-background font-semibold rounded-full text-sm hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300 text-center">
              Book a Free Consultation
            </Link>
            <Link href="/digital/free-website-review" className="px-7 py-3.5 border border-card-border rounded-full text-sm hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 text-center">
              Request a Free Website Review
            </Link>
          </div>

          {/* Big-brand credibility for SMB buyers */}
          <div className="mt-14 pt-8 border-t border-card-border/50">
            <p className="text-xs tracking-[0.25em] uppercase text-muted font-medium mb-4">
              The same team has delivered technology for
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {["Dyson", "Philips", "CBRE", "Oxford University"].map((client) => (
                <span
                  key={client}
                  className="text-base md:text-lg font-bold font-[family-name:var(--font-space-grotesk)] tracking-[0.05em] text-foreground/75"
                >
                  {client}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted leading-relaxed">
              Most recent small business build: Portishead Tyre & MOT delivered <span className="text-foreground font-semibold">£6,000 in sales in the first 14 days</span>, fully booked through August.{" "}
              <Link href="/work/portishead-tyre-and-mot" className="text-accent hover:underline whitespace-nowrap">
                See case study &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-4">
                You are running a business, not managing software.
              </h2>
              <p className="text-muted leading-relaxed">
                Most small businesses end up with a website from one company, email from another, a booking tool that does not talk to anything, and a spreadsheet pretending to be a CRM. Nothing connects. Everything takes longer than it should. We fix that.
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

      {/* Services */}
      <section className="py-16 md:py-20 relative overflow-hidden mesh-gradient">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-4 mb-4 max-w-2xl">
              What We Do for Small Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/digital/${service.slug}`}
                className="capability-card rounded-2xl p-6 md:p-7 block group"
              >
                <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{service.description}</p>
                <span className="text-accent text-sm inline-flex items-center gap-1">
                  Learn more <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">Packages</span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-4 mb-4">
              Clear Scope. Fixed Price. No Surprises.
            </h2>
            <p className="text-muted max-w-lg mx-auto">
              Choose the level that fits where you are now. Every package is designed to scale up when you are ready.
            </p>
          </div>

          {/* Digital Audit entry-level card */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="rounded-2xl p-6 md:p-7 bg-card-bg/40 border border-card-border flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)]">Digital Audit & Roadmap</h3>
                  <span className="text-xs tracking-wider uppercase text-accent font-medium">Start Here</span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  Not ready to commit to a build? Get expert eyes on your current setup, a written audit, a 90-minute strategy call and a 12-month roadmap.
                </p>
                <p className="text-xs text-muted/80 leading-relaxed mt-2">
                  Paid upfront. Credited against any package booked within 60 days, so you lose nothing if you go ahead.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end gap-3 md:gap-2 md:shrink-0">
                <div className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text">£450</div>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-full text-sm font-semibold border border-card-border hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 whitespace-nowrap"
                >
                  Book Audit
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-6 md:p-7 flex flex-col relative ${
                  pkg.highlight
                    ? "bg-card-bg border-2 border-accent/30 shadow-[0_0_40px_rgba(0,212,255,0.08)]"
                    : "bg-card-bg/50 border border-card-border"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-background text-xs font-semibold rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-1">{pkg.name}</h3>
                  <div className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text mb-1">{pkg.price}</div>
                  <div className="text-xs text-muted/90 mb-2">{pkg.monthlyPrice}</div>
                  <div className="text-xs uppercase tracking-wider text-accent font-medium mb-3">{pkg.timeline}</div>
                  <p className="text-sm text-muted">{pkg.description}</p>
                  {pkg.proofText && pkg.proofLink && (
                    <p className="text-xs text-accent/90 mt-3 leading-relaxed">
                      {pkg.proofText}{" "}
                      <Link href={pkg.proofLink} className="underline hover:text-accent transition-colors whitespace-nowrap">
                        {pkg.proofLinkLabel ?? "See case study"} &rarr;
                      </Link>
                    </p>
                  )}
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent shrink-0 mt-0.5" aria-hidden="true">
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

          <p className="text-center text-xs text-muted mt-6 max-w-2xl mx-auto">
            All prices exclude VAT. Cloud hosting included for year 1. From year 2, choose a Care Plan below or self-host from £20-80/month. Custom requirements? We will scope it properly and give you a fixed quote. You always own your website.
          </p>
        </div>
      </section>

      {/* Care Plans */}
      <section id="care" className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">Aftercare</span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-4 mb-4">
              Keep Your Site Working After Launch.
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              When your included support window ends, choose a Care Plan to keep your site running, improving and converting. Month to month. Cancel anytime. You always own your website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {carePlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 md:p-7 flex flex-col relative ${
                  plan.highlight
                    ? "bg-card-bg border-2 border-accent/30 shadow-[0_0_40px_rgba(0,212,255,0.08)]"
                    : "bg-card-bg/50 border border-card-border"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-background text-xs font-semibold rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-1">{plan.name}</h3>
                  <div className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text mb-1">
                    {plan.price}
                    <span className="text-base text-muted font-normal">/month</span>
                  </div>
                  <p className="text-sm text-muted mt-3">{plan.description}</p>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent shrink-0 mt-0.5" aria-hidden="true">
                        <path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3 rounded-full text-sm font-semibold text-center transition-all duration-300 ${
                    plan.highlight
                      ? "bg-accent text-background hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
                      : "border border-card-border hover:border-accent/30 hover:bg-accent/5"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted mt-6 max-w-2xl mx-auto">
            All prices exclude VAT. Care Plans replace standard hosting after year 1. Pause or cancel anytime. No long-term contracts.
          </p>
        </div>
      </section>

      {/* Recent Work */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">Recent Work</span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-4 mb-4">
              Projects We Have Shipped
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {recentWork.map((work) => {
              const inner = (
                <>
                  <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] mb-2">{work.name}</h3>
                  <p className="text-sm text-muted leading-relaxed">{work.description}</p>
                  {work.slug && (
                    <p className="text-xs text-accent mt-4 group-hover:underline">See case study &rarr;</p>
                  )}
                </>
              );
              return work.slug ? (
                <Link key={work.name} href={`/work/${work.slug}`} className="capability-card rounded-2xl p-6 block group">
                  {inner}
                </Link>
              ) : (
                <div key={work.name} className="capability-card rounded-2xl p-6">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">Who We Work With</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {whoWeWorkWith.map((type) => (
              <span
                key={type}
                className="px-5 py-2.5 rounded-full border border-card-border text-sm text-muted hover:border-accent/20 hover:text-foreground transition-all duration-300 cursor-default"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Built by operators */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">Credibility</span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-4 mb-5">
                Built by operators, not just designers.
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Rencel Procurements Digital is led by a team with 20+ years of procurement, operations and digital delivery experience across five continents. We have run real businesses, managed real supply chains, and delivered real technology projects.
              </p>
              <p className="text-muted leading-relaxed">
                That means when we build your website or set up your digital tools, we think about how your business actually runs. Not just how the homepage looks. We build practical systems that support real operations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="glass-card rounded-xl p-5">
                <div className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text mb-1">20+</div>
                <div className="text-xs text-muted">Years in procurement and operations</div>
              </div>
              <div className="glass-card rounded-xl p-5">
                <div className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text mb-1">5</div>
                <div className="text-xs text-muted">Continents with active operations</div>
              </div>
              <div className="glass-card rounded-xl p-5">
                <div className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text mb-1">100+</div>
                <div className="text-xs text-muted">Clients across industries</div>
              </div>
              <div className="glass-card rounded-xl p-5">
                <div className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text mb-1">£100M+</div>
                <div className="text-xs text-muted">Portfolio managed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local trust */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">Where We Work</span>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-4 mb-4">
            Supporting Small Businesses Across Three Continents
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed mb-10">
            Headquartered in the United Kingdom with extended teams in the United States and the United Arab Emirates. Most of our work is delivered remotely, so we can support any small business across the UK without a travel premium.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {locations.map((loc) => (
              <span
                key={loc}
                className="px-4 py-2 rounded-full border border-card-border text-sm text-muted hover:border-accent/20 hover:text-foreground transition-all duration-300 cursor-default"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
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

      {/* FAQ */}
      <section className="py-16 md:py-24 relative overflow-hidden mesh-gradient">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-4 mb-4">
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

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="hero-glow" style={{ top: "50%" }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-5">
            Need a Clearer Website?
          </h2>
          <p className="text-muted max-w-md mx-auto mb-8">
            Send us a short note about what you need, and we will come back with practical next steps. Book a 15-minute call and we will tell you exactly what it will cost and how quickly we can deliver it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="px-7 py-3.5 bg-accent text-background font-semibold rounded-full text-sm hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all duration-300">
              Book a Free Consultation
            </Link>
            <Link href="/digital/free-website-review" className="px-7 py-3.5 border border-card-border rounded-full text-sm hover:border-accent/30 hover:bg-accent/5 transition-all duration-300">
              Request a Free Website Review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
