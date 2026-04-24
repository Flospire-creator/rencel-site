import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Critical Equipment Procurement for a Refinery Turnaround: Case Study",
  description:
    "Time-critical sourcing and logistics for a refinery turnaround. Specialist equipment delivered from three continents within a four-week window.",
  alternates: { canonical: "/work/refinery-equipment-procurement" },
};

export default function Page() {
  return (
    <CaseStudy
      slug="refinery-equipment-procurement"
      category="Procurement & Logistics"
      title="Refinery Turnaround Procurement"
      headline="Delivering specialist equipment from three continents within a four-week window to keep a refinery turnaround on schedule."
      client="European refinery operator (anonymous under NDA)"
      sector="Energy / Downstream"
      region="Europe, with sourcing from Asia, Americas, and Middle East"
      duration="4 weeks (intensive sourcing window)"
      problem={
        <>
          <p>
            The client was four weeks away from a scheduled refinery turnaround when a critical inspection identified additional scope. Specialist heat exchanger components, specialist valves, and non-destructive testing equipment were suddenly needed, in specific quantities, to specific ISO and industry certifications, before the turnaround window closed.
          </p>
          <p>
            A delay of even a week would cost an estimated £1.5 million per day in lost production plus penalty clauses on downstream commitments. The existing procurement team did not have the international supplier network to source this at speed. Regional agents were quoting lead times of eight to twelve weeks.
          </p>
        </>
      }
      approach={
        <>
          <p>
            We took over the urgent scope within 24 hours of being engaged. The first priority was accurate specification: we worked with the client engineering team to capture exactly what was needed, what could be substituted, and what was non-negotiable.
          </p>
          <p>
            Then simultaneous global sourcing. Our team reached out to qualified suppliers across Asia, the Americas and the Middle East in parallel, not sequentially. For each category we targeted two or three suppliers we had worked with previously or who had verifiable technical credentials. This compressed supplier selection from weeks to days.
          </p>
          <p>
            Then logistics orchestration. Air freight was pre-booked against commitments that had not yet been signed. Customs documentation was prepared in advance for multiple jurisdictions. A single logistics partner coordinated consolidation at a European hub before final delivery to the refinery.
          </p>
        </>
      }
      built={[
        "Complete sourcing of heat exchanger components, specialist valves, and inspection equipment",
        "Coordination across 6 suppliers on 3 continents running in parallel",
        "Pre-booked air freight capacity across multiple routes to avoid last-minute shortages",
        "Customs documentation prepared in advance for 4 jurisdictions",
        "Consolidation hub in Europe for final quality check and consolidated delivery",
        "Daily tracking report to the client turnaround team covering every line item",
        "Contingency planning covering alternative suppliers for each critical category",
      ]}
      tools={[
        "Established supplier network (pre-qualified)",
        "Air freight partner agreements",
        "Customs broker network",
        "Daily reporting dashboards",
      ]}
      outcomes={[
        { metric: "100%", label: "Equipment delivered within window" },
        { metric: "0 days", label: "Turnaround delay attributable to sourcing" },
        { metric: "3", label: "Continents sourced from simultaneously" },
        { metric: "£1.5M/day", label: "Downtime avoided by on-time delivery" },
      ]}
      ctaHeading="Facing a time-critical sourcing problem?"
      ctaBody="If you have a tight window and need equipment sourced globally, we can help. We have done this many times."
    />
  );
}
