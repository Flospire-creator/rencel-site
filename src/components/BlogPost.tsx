import Link from "next/link";
import type { ReactNode } from "react";

export interface BlogPostProps {
  category: string;
  date: string; // Display date, e.g. "22 April 2026"
  isoDate?: string; // ISO date for schema, e.g. "2026-04-22"
  slug?: string; // For canonical schema URL
  title: string;
  description?: string;
  children: ReactNode;
  ctaHeading?: string;
  ctaBody?: string;
  ctaLink?: string;
  ctaLabel?: string;
}

export function BlogPost({
  category,
  date,
  isoDate,
  slug,
  title,
  description,
  children,
  ctaHeading = "Need help with this?",
  ctaBody = "Rencel Procurements Digital helps small businesses across the UK with websites, digital setup and procurement support.",
  ctaLink = "/digital",
  ctaLabel = "See how we can help",
}: BlogPostProps) {
  const articleSchema = slug && isoDate ? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description || "",
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      "@type": "Organization",
      name: "Rencel Procurements Limited",
      url: "https://www.rencelprocurements.co.uk",
    },
    publisher: {
      "@type": "Organization",
      name: "Rencel Procurements Limited",
      logo: {
        "@type": "ImageObject",
        url: "https://www.rencelprocurements.co.uk/favicon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.rencelprocurements.co.uk/insights/${slug}`,
    },
    articleSection: category,
  } : null;

  return (
    <article className="pt-32 pb-20 md:pt-44 md:pb-28">
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/insights" className="text-sm text-accent hover:underline mb-8 inline-block">
          &larr; Back to Insights
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-accent uppercase tracking-wider">{category}</span>
          <span className="text-xs text-muted">{date}</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.1] tracking-tight mb-8">
          {title}
        </h1>

        <div className="prose-custom space-y-6 text-muted leading-relaxed">
          {children}
        </div>

        <div className="mt-12 pt-8 border-t border-card-border">
          <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-2">{ctaHeading}</h3>
          <p className="text-sm text-muted mb-4">{ctaBody}</p>
          <Link
            href={ctaLink}
            className="inline-flex px-5 py-2.5 bg-accent text-background font-semibold rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground pt-4">
      {children}
    </h2>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className="text-lg text-foreground/90 leading-relaxed">{children}</p>;
}
