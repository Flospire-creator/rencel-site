import Link from "next/link";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/StructuredData";

export interface ServicePageProps {
  slug: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  ctaHeading?: string;
  ctaBody?: string;
}

export function ServicePage({
  slug,
  title,
  h1,
  description,
  intro,
  sections,
  faqs,
  ctaHeading = "Ready to Get Started?",
  ctaBody = "Send us a short note about what you need. We will come back with practical next steps.",
}: ServicePageProps) {
  const url = `https://www.rencelprocurements.co.uk/digital/${slug}`;

  return (
    <>
      <ServiceSchema name={title} description={description} url={url} />
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.rencelprocurements.co.uk/" },
          { name: "Rencel Digital", url: "https://www.rencelprocurements.co.uk/digital" },
          { name: title, url },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-44 md:pb-16 relative overflow-hidden">
        <div className="hero-glow" />
        <div className="relative max-w-4xl mx-auto px-6">
          <Link href="/digital" className="text-sm text-accent hover:underline mb-6 inline-block">
            &larr; Rencel Digital
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.05] tracking-tight mb-6">
            {h1}
          </h1>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            {intro}
          </p>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-4">
                {section.heading}
              </h2>
              <div className="text-muted leading-relaxed space-y-4">
                {section.body.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 relative overflow-hidden mesh-gradient">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight">
              Questions
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
            {ctaHeading}
          </h2>
          <p className="text-muted max-w-md mx-auto mb-8">{ctaBody}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="px-7 py-3.5 bg-accent text-background font-semibold rounded-full text-sm hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all duration-300">
              Book a Free Consultation
            </Link>
            <Link href="/digital" className="px-7 py-3.5 border border-card-border rounded-full text-sm hover:border-accent/30 hover:bg-accent/5 transition-all duration-300">
              See All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
