import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Website Redesign Services | Rencel Procurements Digital",
  description:
    "Website redesign for UK small businesses. Improve unclear, outdated or underperforming sites. Fixed prices, faster conversions, clearer message.",
  alternates: { canonical: "/digital/website-redesign" },
};

export default function Page() {
  return (
    <ServicePage
      slug="website-redesign"
      title="Website Redesign"
      h1="Website Redesign for Small Businesses"
      description="Website improvements for small businesses with outdated, unclear or underperforming sites. Clearer message, better structure, stronger results."
      intro="If your current website is dated, slow, or not converting, we will audit it and rebuild what is not working. Most small business websites need a refresh every three to five years. We make that process simple, fast, and affordable."
      sections={[
        {
          heading: "Why businesses redesign",
          body: "The most common reason is that the business has moved on but the website has not. You have added new services, changed your target market, or sharpened your pricing. The old site no longer reflects who you are.\n\nThe second reason is that the website is not converting. You get traffic, but nobody fills in the form or picks up the phone. Usually the problem is not the design. It is that the message is unclear, the path to contact is hidden, or the site does not answer the questions customers actually have.\n\nThe third reason is technical. The site is slow, does not work properly on mobile, or was built on a platform nobody wants to maintain anymore.",
        },
        {
          heading: "How we approach it",
          body: "We start with an audit. We look at what you have, what is working, what is not, and what your customers do when they land on the site. This takes about a week and costs nothing.\n\nThen we agree on scope. Sometimes a small business website only needs a content rewrite and a design refresh. Sometimes it needs a complete rebuild. We will tell you which, honestly, based on what we find.\n\nThen we build. Typically two to four weeks from agreement to launch. You see progress every few days and give feedback as we go.",
        },
        {
          heading: "What changes",
          body: "Depending on the scope: a clearer homepage message that explains what you do in under five seconds. A simpler navigation that gets customers to the right page faster. Service pages that answer the actual questions people ask. Contact paths that work on mobile. A design that feels current without being trendy. Faster load times. Proper SEO setup. Google Business Profile integration.\n\nAll built on a platform you can maintain yourself afterwards.",
        },
        {
          heading: "What it costs",
          body: "A content-and-design refresh on an existing site typically costs £2,500 to £4,000. A complete rebuild with new structure, copy, and design starts at £4,500 (our Launch tier) and runs to £7,500 (Grow tier) for a site with booking, CRM and customer journey tracking. Larger projects with custom automation or integrations are quoted as Scale or Platform builds.\n\nAll prices are fixed. No hourly rates. No surprises. Pay upfront or spread over 12 months.",
        },
      ]}
      faqs={[
        {
          q: "Will my SEO drop when the site changes?",
          a: "Not if we do it properly. We map your existing URLs to the new structure, set up redirects for anything that changes, and preserve any content that is already ranking. A well-executed redesign usually improves SEO, not hurts it.",
        },
        {
          q: "Can you keep my existing branding?",
          a: "Yes. If your logo, colours, and brand identity are already established, we work with them. If they need refreshing too, we can do that as part of the project or recommend someone who specialises in branding.",
        },
        {
          q: "How do I know if I need a redesign?",
          a: "Book a free review. We will look at your current site, tell you what is working and what is not, and recommend whether you need a full redesign, a refresh, or just a few targeted fixes. No obligation to proceed.",
        },
        {
          q: "Can you redesign the site without taking it offline?",
          a: "Yes. We build the new version on a staging URL, test everything, then switch it over when you are ready. Customers never see a broken or half-finished site.",
        },
      ]}
    />
  );
}
