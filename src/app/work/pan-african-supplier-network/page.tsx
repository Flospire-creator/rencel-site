import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Pan-African Supplier Network: Case Study",
  description:
    "Establishing and managing a qualified supplier network across 12 African countries for upstream oil and gas operations. Sourcing, qualification, and end-to-end procurement.",
  alternates: { canonical: "/work/pan-african-supplier-network" },
};

export default function Page() {
  return (
    <CaseStudy
      slug="pan-african-supplier-network"
      category="Global Sourcing"
      title="Pan-African Supplier Network"
      headline="Building and managing a qualified supplier network across 12 African countries for upstream oil and gas operations."
      client="Upstream oil and gas operator (anonymous under NDA)"
      sector="Oil & Gas"
      region="Africa (12 countries)"
      duration="Multi-year engagement"
      problem={
        <>
          <p>
            The client operated across multiple African jurisdictions but relied heavily on European suppliers for equipment, spares, and services. Lead times were long, costs were high, and local content regulations increasingly required African sourcing as a condition of operating licenses.
          </p>
          <p>
            They needed a qualified supplier network inside Africa that could meet technical specifications, handle the commercial and logistics complexity, and support operations without the delays that came with importing everything from Europe. Existing attempts had struggled because most supplier databases were out of date or full of brokers rather than manufacturers.
          </p>
        </>
      }
      approach={
        <>
          <p>
            We started with category analysis. What did the client actually buy, and which categories had viable African supply options. Some items (specialist downhole equipment) needed to stay imported. Others (general industrial supplies, consumables, services) were immediately replaceable with local sourcing at lower cost.
          </p>
          <p>
            Then supplier identification. We combined our existing African network with country-by-country research, trade association data, and on-the-ground verification. Every candidate supplier was qualified against the client technical and commercial standards, with site visits where needed.
          </p>
          <p>
            Then ongoing management. We set up a tiered supplier framework, negotiated framework agreements where volume justified it, and provided monthly reporting on performance. Local content compliance tracking was built into the reporting from day one.
          </p>
        </>
      }
      built={[
        "Qualified supplier network covering 12 African countries across 15 procurement categories",
        "Tiered framework with approved, conditional, and restricted supplier classifications",
        "Framework agreements with 40+ suppliers covering recurring categories",
        "Monthly performance reporting including OTIF (on time in full), quality, and local content metrics",
        "Supplier qualification process covering technical, commercial, HSE, and compliance criteria",
        "On-the-ground supplier visits across multiple countries for critical suppliers",
        "Local content compliance documentation supporting operating license requirements",
        "Dedicated procurement support team for day-to-day purchase order execution",
      ]}
      tools={[
        "Custom supplier database",
        "SAP Ariba (client-side)",
        "Excel analytics",
        "In-country agent network",
      ]}
      outcomes={[
        { metric: "12", label: "Countries with active supplier networks" },
        { metric: "40+", label: "Framework agreements signed" },
        { metric: "25%", label: "Average cost reduction on substituted categories" },
        { metric: "60%", label: "Reduction in lead times for covered categories" },
      ]}
      ctaHeading="Need sourcing across complex markets?"
      ctaBody="We have been doing this for 20 years across five continents. Tell us what you need and we will tell you what is possible."
    />
  );
}
