import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Portishead Tyre & MOT: Case Study",
  description:
    "Lee was losing 8 bookings a week to phone-tag and could not take payments online. We built a live booking system tied to real tyre stock. £6,000 in sales in the first 14 days. Fully booked through August.",
  alternates: { canonical: "/work/portishead-tyre-and-mot" },
};

export default function Page() {
  return (
    <CaseStudy
      slug="portishead-tyre-and-mot"
      category="Small Business Automation"
      title="Portishead Tyre & MOT"
      headline="Lee was losing 8 bookings a week to phone-tag and could not take payments online. We built a live booking system tied to real tyre stock. £6,000 in sales in the first 14 days. Fully booked through August."
      client="Portishead Tyre & MOT"
      sector="Automotive aftermarket"
      region="Portishead, Bristol (UK)"
      duration="6 weeks"
      problem={
        <>
          <p>
            Lee runs an independent tyre and MOT garage in Portishead. His old WordPress site could not take payments. Every enquiry was a phone call, and the phone was not always answered. We measured the gap: he was losing around 8 bookings a week to phone-tag. Customers calling once, getting voicemail, and never calling back.
          </p>
          <p>
            He could not show live tyre prices or stock from his Tyresoft system. Customers had no way to know if their tyre size was in stock without ringing. The national chains had live booking and price calculators on their sites. Lee did not. He was losing on the search results page before customers ever got to his number.
          </p>
        </>
      }
      approach={
        <>
          <p>
            We rebuilt the brand and the site end to end. New identity, four live third-party integrations, search optimised for local intent. Not a template. The goal: a customer enters their registration plate, sees their exact tyre size and live prices, picks a fitting slot, pays a deposit, and gets a confirmation email. All without ringing, all within 60 seconds.
          </p>
          <p>
            The site is mobile-first because 70 per cent of Lee&apos;s enquiries come from drivers at petrol stations checking prices on their phone. Every interaction is designed to take under a minute.
          </p>
        </>
      }
      built={[
        "New logo, brand identity and visual system",
        "Custom website with four live third-party integrations",
        "Registration-plate-to-tyre-size lookup",
        "Live tyre price and stock display from Lee's Tyresoft and Stapletons accounts",
        "Online booking flow: pick tyre, pick date, pay deposit, get confirmation",
        "Stripe payments checkout",
        "Automated booking and reminder emails",
        "Customer journey tracking with conversion analytics and funnel reporting",
        "Local SEO: keyword targeting, schema, indexing",
        "Google Business Profile reconfigured for local search",
        "Mobile-first design (60+ Lighthouse mobile score)",
        "Managed cloud hosting and security (year 1 included)",
        "Business email configuration on Lee's domain",
        "Staff training and walkthrough documentation",
        "6 months of priority support included",
      ]}
      outcomes={[
        { metric: "£6,000", label: "Sales in first 14 days" },
        { metric: "8/wk", label: "Bookings recovered from phone-tag" },
        { metric: "Aug", label: "Fully booked through" },
        { metric: "60s", label: "Average booking time" },
      ]}
      liveUrl="https://www.tyreandmot.co.uk/"
      liveLabel="See it live"
      ctaHeading="Your business losing bookings to the phone?"
      ctaBody="Delivered as our Scale package: full custom build with integrations, payments, customer journey tracking and 6 months of priority support. From £15,000. Same approach, your business."
    />
  );
}
