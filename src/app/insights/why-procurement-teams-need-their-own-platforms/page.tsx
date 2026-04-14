import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Procurement Teams Need Their Own Platforms",
  description: "Most procurement software is built by engineers who have never raised a purchase order. Here is why that matters and what purpose-built platforms look like.",
  alternates: { canonical: "/insights/why-procurement-teams-need-their-own-platforms" },
};

export default function Post() {
  return (
    <article className="pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/insights" className="text-sm text-accent hover:underline mb-8 inline-block">&larr; Back to Insights</Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-accent uppercase tracking-wider">Procurement Technology</span>
          <span className="text-xs text-muted">10 April 2026</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.1] tracking-tight mb-8">
          Why Procurement Teams Need Their Own Platforms
        </h1>

        <div className="prose-custom space-y-6 text-muted leading-relaxed">
          <p className="text-lg text-foreground/90 leading-relaxed">
            Most procurement software is built by engineers who have never raised a purchase order. You can feel it the moment you log in. The workflows are logical in theory but awkward in practice. The reports give you data but not the data you actually need. The integrations connect systems but miss the steps that happen between them.
          </p>

          <p>
            We have spent over 20 years inside procurement operations. Energy companies, manufacturers, construction firms, mining operations. Across five continents, the pattern is the same: teams are forced to bend their work around tools that were not designed for the way procurement actually happens.
          </p>

          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground pt-4">The gap between software and operations</h2>

          <p>
            Procurement is not a straight line from requisition to payment. It is a web of relationships, negotiations, quality checks, logistics, and compliance requirements. Every purchase order carries context that no dropdown menu can capture. The supplier you chose has a track record with your team. The delivery window depends on a vessel schedule that changed yesterday. The spec was revised three times before sign-off.
          </p>

          <p>
            Generic ERP modules treat procurement as a transaction. Raise a PO, approve it, receive the goods, pay the invoice. But anyone who has managed a supply chain knows that the real work sits in the gaps between those steps. That is where delays happen, where costs escalate, and where the wrong decisions get made.
          </p>

          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground pt-4">What purpose-built looks like</h2>

          <p>
            A procurement platform built by people who understand the work looks different from day one. The spend analytics surface the insights that a procurement lead actually needs, not just what the finance team wants to see. The supplier risk models account for the factors that matter in your sector. The automation handles the repetitive tasks that eat up your team's time without stripping away the judgment calls that require experience.
          </p>

          <p>
            We are not talking about replacing your ERP. We are talking about putting an intelligence layer on top of it that turns procurement from an administrative function into a strategic one. The difference is significant. Teams spend less time chasing paperwork and more time on the work that requires their expertise.
          </p>

          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground pt-4">Domain knowledge is not optional</h2>

          <p>
            There is a reason we started building technology platforms after 20 years in the industry rather than on day one. You cannot build good procurement software without understanding how procurement people think. What they check first thing in the morning. Which reports they print out and pin to the wall. What keeps them up at night before a plant shutdown.
          </p>

          <p>
            That kind of knowledge does not come from user interviews. It comes from years of sitting across the table from suppliers, managing freight across time zones, and explaining to a project manager why their equipment will not arrive on the date they were promised.
          </p>

          <p>
            If you are running a procurement operation and your current tools feel like they were built for someone else, they probably were. That is the problem we set out to solve.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-card-border">
          <p className="text-sm text-muted mb-4">If you want to discuss what a purpose-built platform could look like for your team, we would be happy to talk.</p>
          <Link href="/contact" className="inline-flex px-5 py-2.5 bg-accent text-background font-semibold rounded-full text-sm hover:opacity-90 transition-opacity">
            Get in Touch
          </Link>
        </div>
      </div>
    </article>
  );
}
