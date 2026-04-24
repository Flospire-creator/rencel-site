import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description: "Thinking on procurement technology, supply chain intelligence, and the intersection of operational expertise with modern software. Written by the team at Rencel.",
  alternates: { canonical: "/insights" },
};

const posts = [
  {
    slug: "digital-agency-vs-digital-partner",
    title: "Digital Agency vs Digital Partner: What Should a Small Business Choose?",
    excerpt: "Most small businesses hire a digital agency when they actually need a digital partner. Here is the difference, why it matters, and how to tell which one you need.",
    date: "2026-04-23",
    category: "Small Business",
  },
  {
    slug: "small-business-website-cost-uk",
    title: "How Much Does a Small Business Website Cost in the UK?",
    excerpt: "Prices range from £500 to £15,000 and the gap is not about design quality. Here is what you actually pay for at each level, and how to work out what you need.",
    date: "2026-04-22",
    category: "Small Business",
  },
  {
    slug: "what-small-business-website-needs",
    title: "What Every Small Business Website Needs Before It Goes Live",
    excerpt: "A website is not ready for customers just because the pages load. Here is the list we run through with every small business before we put anything live.",
    date: "2026-04-20",
    category: "Small Business",
  },
  {
    slug: "how-to-set-up-stripe-small-business",
    title: "How to Set Up Stripe Payments for a Small Business",
    excerpt: "Stripe is the default choice for most UK small businesses taking card payments online. Here is how to set it up properly, and what to avoid.",
    date: "2026-04-18",
    category: "Small Business",
  },
  {
    slug: "best-booking-tools-uk-small-business",
    title: "Best Booking Tools for Small UK Businesses",
    excerpt: "We have set up booking systems for trades, salons, consultants, and wedding businesses. Here are the tools that actually work, and when to use each.",
    date: "2026-04-16",
    category: "Small Business",
  },
  {
    slug: "website-checklist-tradespeople",
    title: "Website Checklist for Tradespeople and Local Service Businesses",
    excerpt: "Plumbers, electricians, roofers, landscapers. The rules are the same and most trade websites get them wrong. This is the checklist we use.",
    date: "2026-04-14",
    category: "Small Business",
  },
  {
    slug: "small-business-website-not-converting",
    title: "Why Your Small Business Website Is Not Converting",
    excerpt: "Traffic is not the problem. The problem is usually one of five things, and all of them are fixable without a full rebuild.",
    date: "2026-04-12",
    category: "Small Business",
  },
  {
    slug: "why-procurement-teams-need-their-own-platforms",
    title: "Why Procurement Teams Need Their Own Platforms",
    excerpt: "Most procurement software is built by engineers who have never raised a purchase order. That disconnect shows up in every workflow, every report, and every frustrated user.",
    date: "2026-04-10",
    category: "Procurement Technology",
  },
  {
    slug: "automotive-aftermarket-data-problem",
    title: "The Automotive Aftermarket Has a Data Problem",
    excerpt: "Workshops run on gut feeling and outdated catalogues. The aftermarket is one of the last major industries where operational decisions are still made without real-time intelligence.",
    date: "2026-04-07",
    category: "Automotive",
  },
  {
    slug: "building-for-nhs-what-we-learned",
    title: "Building for the NHS: What We Learned",
    excerpt: "Clinical platforms are not like other software projects. The stakes are higher, the compliance requirements are stricter, and the users have zero patience for tools that slow them down.",
    date: "2026-04-03",
    category: "Healthcare",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function InsightsPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">Insights</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.05] tracking-tight mb-6 max-w-3xl">
            Thinking Out Loud
          </h1>
          <p className="text-base md:text-lg text-muted max-w-xl leading-relaxed">
            Notes on procurement technology, supply chain intelligence, and building platforms for industries we know.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="block p-6 md:p-8 rounded-xl bg-card-bg border border-card-border hover:border-accent/20 transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-accent uppercase tracking-wider">{post.category}</span>
                      <span className="text-xs text-muted">{formatDate(post.date)}</span>
                    </div>
                    <h2 className="text-lg md:text-xl font-semibold font-[family-name:var(--font-space-grotesk)] mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted leading-relaxed">{post.excerpt}</p>
                  </div>
                  <span className="text-accent text-sm shrink-0 mt-2 md:mt-6">Read more &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
