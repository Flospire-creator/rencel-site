import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Rebranding and Rebuilding Rencel: Case Study",
  description:
    "How we took Rencel from an expired-SSL dead site to an AI-optimised intelligence platform in four weeks. Design, development, SEO, and positioning rebuilt end to end.",
  alternates: { canonical: "/work/our-own-rebuild" },
};

export default function Page() {
  return (
    <CaseStudy
      slug="our-own-rebuild"
      category="Digital Transformation"
      title="Rebuilding Our Own Brand"
      headline="We practise what we sell. Here is how we took Rencel from a broken, dated website to an AI-optimised intelligence platform in four weeks."
      client="Rencel Procurements Limited (internal)"
      sector="Procurement & Technology"
      region="United Kingdom"
      duration="4 weeks"
      problem={
        <>
          <p>
            The previous Rencel Procurements website had expired its SSL certificate and was effectively offline. The design was dated, the content was thin, and the positioning described Rencel as a traditional procurement consultancy. That did not reflect the business we had become: technology and procurement combined under one roof, serving enterprise clients and small businesses across multiple sectors.
          </p>
          <p>
            We needed a site that did three things. Repositioned Rencel as a technology-first company while keeping procurement credibility. Worked properly for enterprise buyers (intelligence platforms, automotive, healthcare, supply chain). Provided a clear path for small businesses to find our SME services. And we needed it to be discoverable in AI search, not just Google.
          </p>
        </>
      }
      approach={
        <>
          <p>
            We started with positioning. Two audiences, one brand. The main site speaks to enterprise buyers and positions Rencel as an intelligence platform builder. A sub-brand (Rencel Digital) serves small businesses with productised packages. The two do not compete for attention.
          </p>
          <p>
            Then design and build. Dark mode done properly, inspired by Palantir, Linear and Apple. CSS-driven animations (no heavy frameworks, no SSR hydration issues). Animated network canvas in the hero. A system pipeline visualisation showing how we think about intelligence platforms. Scroll-triggered reveals with smooth easing. Every section designed to feel like one continuous experience, not a stack of unrelated blocks.
          </p>
          <p>
            Then content and SEO. Human-toned copy with zero em dashes or AI-speak. Per-page metadata. Structured data (Organization, WebSite, LocalBusiness, Service, FAQ, Article, Breadcrumb schemas). Explicit crawl permissions for OpenAI, Anthropic, Perplexity, Google, Apple and Meta bots. A comprehensive llms.txt file. Sitemap with 24 URLs submitted to Search Console.
          </p>
          <p>
            Finally, security. Input validation and HTML escaping on the contact API. Origin header checks for CSRF. Security headers (HSTS, X-Frame-Options, Referrer-Policy) configured in Next.js. Resend integration for transactional email routed to a real inbox.
          </p>
        </>
      }
      built={[
        "Full Next.js 16 website with 24 pages including enterprise services, SME packages, 9 blog posts, and 4 case studies",
        "Animated hero with canvas-based network visualisation and data pulses",
        "Reusable SystemPipeline component animating Data > Process > Analyse > Act",
        "6 dedicated service landing pages for the Rencel Digital sub-brand",
        "9 long-form blog articles with Article schema for AI search discoverability",
        "Contact form wired via Resend with input validation, HTML escaping, and CSRF origin checks",
        "JSON-LD structured data across all pages (LocalBusiness, Service, FAQ, Article, Breadcrumb)",
        "Explicit crawl allowances for 10+ AI search bots in robots.txt",
        "SEO metadata, OpenGraph tags, and canonical URLs on every page",
        "Dark mode locked across all devices regardless of system preference",
        "New brand identity: abstract network logo, cyan accent colour, Space Grotesk display typography",
        "Letterhead and brand asset pack (SVG logo files, PDF letterhead template)",
      ]}
      tools={[
        "Next.js 16",
        "TypeScript",
        "Tailwind CSS v4",
        "Vercel",
        "Resend",
        "GitHub",
        "Google Search Console",
        "Google Business Profile",
      ]}
      outcomes={[
        { metric: "24", label: "Pages live and indexable" },
        { metric: "100%", label: "Lighthouse accessibility target" },
        { metric: "4 weeks", label: "From dead site to live platform" },
        { metric: "10+", label: "AI search bots explicitly allowed" },
      ]}
      liveUrl="https://www.rencelprocurements.co.uk"
      liveLabel="Visit the site"
      ctaHeading="Want us to do this for you?"
      ctaBody="We rebuild brands, websites, and digital infrastructure. Same approach, your business."
    />
  );
}
