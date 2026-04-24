import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Procurement Spend Analytics Engine: Case Study",
  description:
    "AI-powered spend classification and savings identification platform for a mid-market energy company. Cut procurement cycle time by 40% in the first quarter.",
  alternates: { canonical: "/work/spend-analytics-engine" },
};

export default function Page() {
  return (
    <CaseStudy
      slug="spend-analytics-engine"
      category="Procurement Intelligence"
      title="Procurement Spend Analytics Engine"
      headline="AI-powered spend classification and savings identification platform. Turned 18 months of messy ERP data into actionable procurement decisions."
      client="Mid-market energy company (anonymous under NDA)"
      sector="Energy & Utilities"
      region="United Kingdom and Ireland"
      duration="12 weeks to launch, ongoing refinement"
      problem={
        <>
          <p>
            The client had three legacy ERP systems after a series of acquisitions. Each had its own supplier master data, its own chart of accounts, and its own interpretation of spend categories. Consolidated reporting at group level took two weeks of manual work and still contained errors. The procurement team could not reliably answer simple questions like "who are our top ten suppliers" or "how much do we spend on category X across the group".
          </p>
          <p>
            Without that visibility, negotiating framework agreements was guesswork. Identifying maverick spend was impossible. Opportunities to consolidate suppliers or renegotiate pricing were disappearing because nobody could see them.
          </p>
        </>
      }
      approach={
        <>
          <p>
            We started by extracting and consolidating 18 months of transaction data from all three ERP systems. Straightforward engineering, but with care around data quality: misspelled supplier names, duplicated vendors, line items that had been miscategorised at source.
          </p>
          <p>
            Then we trained a classification model on a sample of correctly coded transactions. The model learned to classify every transaction into a standardised spend taxonomy regardless of how it was recorded in the source ERP. A confidence score on each classification flagged items needing human review.
          </p>
          <p>
            Then we built the analytics layer. Not a generic dashboard, but views designed around the specific questions the procurement team needed answered. Supplier concentration. Off-contract spend. Price variance across entities for the same items. Volume aggregation opportunities. Every finding linked back to source transactions for audit.
          </p>
        </>
      }
      built={[
        "Consolidated spend database across 3 ERP systems covering 18 months of transactions",
        "ML-based classification model mapping transactions to a unified 4-level spend taxonomy",
        "Supplier master deduplication reducing 6,400 raw vendor records to 2,800 canonical suppliers",
        "Real-time dashboards for supplier concentration, maverick spend, and price variance analysis",
        "Savings opportunity engine surfacing consolidation, renegotiation, and compliance targets",
        "Audit trail linking every finding back to source transactions for finance signoff",
        "Automated monthly refresh replacing manual reporting cycle",
        "Training and documentation for the client procurement and finance teams",
      ]}
      tools={[
        "Python (pandas, scikit-learn)",
        "PostgreSQL",
        "Tableau",
        "Airbyte for ERP extraction",
        "AWS",
      ]}
      outcomes={[
        { metric: "40%", label: "Reduction in procurement cycle time (Q1)" },
        { metric: "£4.2M", label: "Savings opportunities identified in year one" },
        { metric: "2,800", label: "Deduplicated suppliers from 6,400 raw records" },
        { metric: "< 24h", label: "Spend reporting refresh time (was 2 weeks)" },
      ]}
      ctaHeading="Drowning in procurement data?"
      ctaBody="If your spend visibility is a problem, we can fix it. Start with a conversation about what you are trying to understand."
    />
  );
}
