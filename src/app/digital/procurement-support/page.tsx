import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Procurement Support for Small Businesses | Rencel Procurements Digital",
  description:
    "20 years of procurement experience applied to UK small business problems. Supplier sourcing, purchasing workflows, and operational structure.",
  alternates: { canonical: "/digital/procurement-support" },
};

export default function Page() {
  return (
    <ServicePage
      slug="procurement-support"
      title="Procurement Support"
      h1="Procurement Support for Small Businesses"
      description="Procurement and supplier support for small businesses that need better sourcing, purchasing or operational structure."
      intro="Most agencies only do websites. We bring 20 years of procurement experience across five continents, applied to small business problems. If you buy stock, materials, equipment, or services, we can help you do it better."
      sections={[
        {
          heading: "What procurement support means for a small business",
          body: "For a large company, procurement is a dedicated team, enterprise software, and complex processes. For a small business, it is usually the owner managing suppliers in their head, paying too much, and waiting too long.\n\nWe apply the same principles that work in large enterprises, scaled down to small business reality. Know your suppliers. Track what you buy. Have backups for critical inputs. Negotiate from data, not guesses. Automate the boring parts. Spend less time on admin, more time running the business.",
        },
        {
          heading: "Where we help",
          body: "Supplier sourcing and qualification. If you need a supplier for specific goods or services, we can use our global network to find options, vet them, and introduce you. Especially useful for anything imported.\n\nPurchasing workflow setup. How you raise orders, track deliveries, pay invoices, and reconcile everything. We set this up in tools like Xero, QuickBooks, or bespoke systems so nothing falls through the cracks.\n\nSupplier management. Keeping track of who supplies what, at what price, with what lead time, and what your backups are if they fail. Essential for any business that depends on physical inputs.\n\nOperational structure. Sometimes the problem is not the suppliers, it is how the business is organised around them. We help redesign processes so they scale.",
        },
        {
          heading: "Why this combination matters",
          body: "Rencel is one of the very few firms that combines procurement expertise with digital capability. That means when we set up your systems, they are designed to support real operational work, not just look pretty.\n\nWhen we build a customer-facing website, we also think about what happens on the supplier side. When we set up a CRM, we also think about how you order stock. Most agencies cannot do this. Most procurement consultants cannot do the tech side. We do both, as one team, for one fee.",
        },
        {
          heading: "What it costs",
          body: "Procurement audits start at £750. We look at what you buy, from whom, how often, and recommend specific improvements. You get a written report and a follow-up call.\n\nSupplier sourcing projects are quoted individually depending on scope. A single supplier search and introduction is typically £500 to £1,500. Larger sourcing projects across multiple categories are scoped after an initial conversation.\n\nIf you are taking a Grow or Scale package, basic procurement advice is included.",
        },
      ]}
      faqs={[
        {
          q: "Do I need to be importing goods to get value from this?",
          a: "No. Even if all your suppliers are UK-based, better purchasing processes usually save money and time. We have helped plumbers, salons, cafes, and office-based businesses improve their procurement without a single international supplier involved.",
        },
        {
          q: "Can you help me find overseas suppliers?",
          a: "Yes. We have spent 20 years building supplier networks across Europe, Asia, Africa, and the Americas. If you need to source something internationally, we know how to do it properly.",
        },
        {
          q: "I am a service business, not a product business. Does this apply?",
          a: "Often yes. Service businesses still buy services: software, subcontractors, marketing, professional services. The same principles apply. Know who you are paying, track what you get, negotiate from data.",
        },
        {
          q: "Can this work alongside my existing accountant?",
          a: "Yes. We work with your accountant, not around them. If you use Xero or QuickBooks, we configure procurement workflows to feed the right data in, so your accountant has less manual work.",
        },
      ]}
    />
  );
}
