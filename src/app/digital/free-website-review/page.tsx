import Link from "next/link";
import type { Metadata } from "next";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Free Website Review for Small Businesses | Rencel Procurements Digital",
  description:
    "Free website review for UK small businesses. We audit your existing site and give you a prioritised list of fixes to improve conversions, SEO and credibility.",
  alternates: { canonical: "/digital/free-website-review" },
  keywords: [
    "free website review",
    "website audit UK",
    "small business website review",
    "website audit Chippenham",
    "free site review",
    "website review service",
  ],
};

const faqs = [
  {
    q: "What does the review actually cover?",
    a: "We look at the five things that typically hold small business websites back: clarity of message, user experience on mobile, SEO basics (titles, headings, metadata, page speed), conversion paths (forms, CTAs, contact info), and trust signals (reviews, certifications, work examples). You get a written summary with prioritised fixes.",
  },
  {
    q: "How much does it cost?",
    a: "The review is genuinely free. No card required, no upsell pressure. We offer it because it usually takes us under an hour, it gives you real value, and it is a low-friction way for us to meet businesses who might later become clients.",
  },
  {
    q: "How long does it take?",
    a: "You submit your website URL, we come back within 48 working hours with a written review. No call required unless you want one afterwards.",
  },
  {
    q: "Do I have to hire you after the review?",
    a: "No. If the fixes are small, we will tell you how to do them yourself. If they are bigger, we will tell you honestly whether it is worth investing in a refresh or a rebuild. There is no pressure either way.",
  },
  {
    q: "Does this work for any business?",
    a: "It works for any UK small business with an existing website. Trades, service businesses, consultants, salons, retail, hospitality. If you are not sure your site is a fit, send us the URL and we will let you know before we start.",
  },
  {
    q: "Will the review tell me if I need a full redesign?",
    a: "Yes. Most businesses do not need a full rebuild. We will tell you directly whether your site needs a few targeted fixes, a content refresh, or a complete redesign. If we recommend a redesign, we will explain exactly why.",
  },
];

export default function Page() {
  const url = "https://www.rencelprocurements.co.uk/digital/free-website-review";
  return (
    <>
      <ServiceSchema
        name="Free Website Review for Small Businesses"
        description="Free audit of your existing small business website. Written review covering clarity, mobile UX, SEO, conversion paths and trust signals. Prioritised list of fixes."
        url={url}
      />
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.rencelprocurements.co.uk/" },
          { name: "Rencel Digital", url: "https://www.rencelprocurements.co.uk/digital" },
          { name: "Free Website Review", url },
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
            <span className="text-xs tracking-wider uppercase text-accent font-medium">Free Service</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.05] tracking-tight mb-6 max-w-3xl">
            Free Website Review for Small Businesses
          </h1>

          <p className="text-base md:text-lg text-muted max-w-2xl leading-relaxed mb-10">
            Send us your website. We will audit it and send back a written review with the three to five things you can change to win more business. Free, no obligation, no sales pitch.
          </p>

          <Link href="/contact" className="inline-flex px-7 py-3.5 bg-accent text-background font-semibold rounded-full text-sm hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300">
            Request Your Free Review
          </Link>
        </div>
      </section>

      {/* What it covers */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">What We Check</span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-4 mb-4 max-w-2xl">
              The Five Things That Hold Small Business Websites Back
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "Message clarity",
                body: "Can a visitor work out what you do, who you do it for, and how to get in touch within five seconds of landing on your homepage.",
              },
              {
                title: "Mobile user experience",
                body: "Over 70% of small business website traffic is on mobile. We check your site on real phones, not just a desktop browser set to narrow width.",
              },
              {
                title: "SEO fundamentals",
                body: "Title tags, meta descriptions, heading structure, page speed, mobile-friendliness, Google Business Profile consistency, and local search signals.",
              },
              {
                title: "Conversion paths",
                body: "Whether forms actually work, phone numbers are clickable, CTAs are visible, and the path from landing to contact is as short as possible.",
              },
              {
                title: "Trust signals",
                body: "Reviews, testimonials, certifications, insurance, photos of real work, and anything else that makes a visitor believe you are a real, credible business.",
              },
              {
                title: "Technical health",
                body: "SSL certificate, broken links, image optimisation, loading speed, accessibility basics, and anything else that might be silently losing you visitors.",
              },
            ].map((item) => (
              <div key={item.title} className="capability-card rounded-2xl p-6">
                <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="py-16 md:py-20 relative overflow-hidden mesh-gradient">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-8 text-center">
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">Who It Is For</span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-4 mb-4">
              You Will Get Value From This Review If
            </h2>
          </div>

          <ul className="space-y-3">
            {[
              "Your website is getting traffic but hardly anyone contacts you or books.",
              "You built your own site and want a second opinion before spending money on a redesign.",
              "Your site was built two or three years ago and you suspect it is starting to look dated.",
              "You are planning to invest in ads and want to make sure the site is ready to receive traffic.",
              "A freelancer built your site and left, and you are not sure what they delivered properly.",
              "You want to improve your Google ranking but do not know what to fix first.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 bg-card-bg/50 border border-card-border rounded-xl p-4">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-accent shrink-0 mt-0.5">
                  <path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm text-muted leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What you get back */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">What You Get Back</span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-4 mb-4">
              A Written Review With Specific Next Steps
            </h2>
          </div>

          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Within 48 working hours of submitting your website, you receive a written review covering the six areas above. Not a generic template. A real review of your actual site.
            </p>
            <p>
              Each finding includes what we noticed, why it matters, and what to do about it. The fixes are prioritised: the ones that will have the biggest impact first, the nice-to-haves later. For each fix, we tell you whether it is something you can do yourself, something a freelancer can do, or something that needs a proper rebuild.
            </p>
            <p>
              If you want to discuss the review afterwards, you can book a 15-minute call. No obligation. If you would rather just take the review and get on with it, that is also fine.
            </p>
          </div>

          <div className="mt-10">
            <Link href="/contact" className="inline-flex px-7 py-3.5 bg-accent text-background font-semibold rounded-full text-sm hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300">
              Request Your Free Review
            </Link>
          </div>
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
          <p className="text-sm text-muted mb-4">Need more than a review?</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/digital"
              className="px-5 py-2.5 rounded-full border border-card-border text-sm text-muted hover:border-accent/20 hover:text-foreground transition-all duration-300"
            >
              See all digital services
            </Link>
            <Link
              href="/digital/website-redesign"
              className="px-5 py-2.5 rounded-full border border-card-border text-sm text-muted hover:border-accent/20 hover:text-foreground transition-all duration-300"
            >
              Website redesign services
            </Link>
            <Link
              href="/digital/website-design-small-businesses"
              className="px-5 py-2.5 rounded-full border border-card-border text-sm text-muted hover:border-accent/20 hover:text-foreground transition-all duration-300"
            >
              Small business website design
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="hero-glow" style={{ top: "50%" }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-5">
            Send Us Your Website
          </h2>
          <p className="text-muted max-w-md mx-auto mb-8">
            Takes you 30 seconds to request. You get a real written review back within 48 working hours. No sales pressure.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4 bg-accent text-background font-semibold rounded-full text-sm hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all duration-300 animate-pulse-glow">
            Request Your Free Review
          </Link>
        </div>
      </section>
    </>
  );
}
