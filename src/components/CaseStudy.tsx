import Link from "next/link";
import type { ReactNode } from "react";
import { BreadcrumbSchema } from "@/components/StructuredData";

export interface CaseStudyProps {
  slug: string;
  category: string;
  title: string;
  headline: string;
  client: string; // e.g. "Anonymous upstream oil and gas operator"
  sector: string;
  region: string;
  duration: string;
  problem: ReactNode;
  approach: ReactNode;
  built: string[]; // Bulleted list of what was built / delivered
  tools?: string[]; // Tools and platforms used
  outcomes: { metric: string; label: string }[];
  liveUrl?: string;
  liveLabel?: string;
  ctaHeading?: string;
  ctaBody?: string;
}

export function CaseStudy({
  slug,
  category,
  title,
  headline,
  client,
  sector,
  region,
  duration,
  problem,
  approach,
  built,
  tools,
  outcomes,
  liveUrl,
  liveLabel,
  ctaHeading = "Want Similar Results?",
  ctaBody = "Tell us what you are working on. We will tell you honestly whether we can help and what it would look like.",
}: CaseStudyProps) {
  const url = `https://www.rencelprocurements.co.uk/work/${slug}`;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.rencelprocurements.co.uk/" },
          { name: "Work", url: "https://www.rencelprocurements.co.uk/work" },
          { name: title, url },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-44 md:pb-16 relative overflow-hidden">
        <div className="hero-glow" />
        <div className="relative max-w-4xl mx-auto px-6">
          <Link href="/work" className="text-sm text-accent hover:underline mb-6 inline-block">
            &larr; Selected Work
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs text-accent uppercase tracking-wider">{category}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.05] tracking-tight mb-6">
            {title}
          </h1>

          <p className="text-base md:text-lg text-muted max-w-2xl leading-relaxed">
            {headline}
          </p>
        </div>
      </section>

      {/* Meta bar */}
      <section className="py-8 border-y border-card-border bg-card-bg/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted mb-1">Client</div>
              <div className="text-sm font-medium">{client}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted mb-1">Sector</div>
              <div className="text-sm font-medium">{sector}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted mb-1">Region</div>
              <div className="text-sm font-medium">{region}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted mb-1">Duration</div>
              <div className="text-sm font-medium">{duration}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">The Problem</span>
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-3 mb-6">
            What the client needed
          </h2>
          <div className="text-muted leading-relaxed space-y-4">{problem}</div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-20 relative overflow-hidden mesh-gradient">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">The Approach</span>
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-3 mb-6">
            How we tackled it
          </h2>
          <div className="text-muted leading-relaxed space-y-4">{approach}</div>
        </div>
      </section>

      {/* Built */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">What We Built</span>
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-3 mb-6">
            Delivered
          </h2>
          <ul className="space-y-3">
            {built.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-card-bg/50 border border-card-border rounded-xl p-4">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-accent shrink-0 mt-0.5">
                  <path d="M13.3 4.3 6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm text-foreground/90 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          {tools && tools.length > 0 && (
            <div className="mt-10">
              <div className="text-[10px] uppercase tracking-wider text-muted mb-3">Tools & Platforms</div>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-card-border text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">Outcomes</span>
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mt-3">
              The measurable impact
            </h2>
          </div>
          <div className={`grid grid-cols-2 ${outcomes.length >= 4 ? "md:grid-cols-4" : "md:grid-cols-3"} gap-5`}>
            {outcomes.map((outcome) => (
              <div key={outcome.label} className="glass-card rounded-xl p-5 text-center">
                <div className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text mb-2">
                  {outcome.metric}
                </div>
                <div className="text-xs text-muted leading-snug">{outcome.label}</div>
              </div>
            ))}
          </div>

          {liveUrl && (
            <div className="text-center mt-10">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent text-sm hover:underline"
              >
                {liveLabel || "View the live project"} &rarr;
              </a>
            </div>
          )}
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
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-accent text-background font-semibold rounded-full text-sm hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all duration-300"
            >
              Start a Conversation
            </Link>
            <Link
              href="/work"
              className="px-7 py-3.5 border border-card-border rounded-full text-sm hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
            >
              See More Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
