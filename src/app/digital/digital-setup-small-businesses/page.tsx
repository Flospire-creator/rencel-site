import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Digital Setup for Small Businesses | Rencel Procurements Digital",
  description:
    "Domain, business email, Stripe, booking tools, and automation setup for UK small businesses. All connected from day one. One partner, one invoice.",
  alternates: { canonical: "/digital/digital-setup-small-businesses" },
};

export default function Page() {
  return (
    <ServicePage
      slug="digital-setup-small-businesses"
      title="Digital Setup for Small Businesses"
      h1="Digital Setup for Small Businesses"
      description="Support with domains, business email, payment tools, booking systems and simple digital operations. All connected from day one."
      intro="Most small businesses end up with five different logins, three disconnected tools, and nothing talking to each other. We fix that. One partner to set up everything your business needs online, properly configured and connected from the start."
      sections={[
        {
          heading: "What we set up",
          body: "Domains and DNS. Business email on Google Workspace or Microsoft 365. Payment processing with Stripe, Square, or GoCardless. Booking tools like Calendly, SavvyCal, or SimplyBook. CRM setup on HubSpot, Pipedrive, or Notion. Email marketing through Mailchimp or Brevo. Contact forms that route to the right inbox. Basic automation to stop repetitive work.\n\nWhatever tools you need, we pick the right ones for your business and make sure they work together.",
        },
        {
          heading: "Why this matters",
          body: "The difference between a small business that runs smoothly and one that is always firefighting is usually the systems. When your booking tool talks to your calendar, your calendar talks to your email, and your CRM logs everything automatically, you get hours of your week back.\n\nWhen they do not, you spend your life copying and pasting, chasing follow-ups manually, and losing customers to businesses that respond faster. We have watched this play out hundreds of times across industries.",
        },
        {
          heading: "How we approach it",
          body: "We start with a conversation about how your business actually runs. What happens when a new customer finds you? How do they book? How do they pay? What needs to happen after? We map the whole customer journey, then pick the tools that fit.\n\nThen we set it all up. Usually a week of work, sometimes two if there are multiple integrations. You get written documentation and a walkthrough call at the end so your team knows how to use everything.",
        },
        {
          heading: "What it costs",
          body: "A full digital setup, included in our £3,500 Grow package, covers everything most small businesses need: website, email, payments, booking, CRM, and analytics.\n\nIf you just need specific tools set up without a full website project, we do that too. Stripe and payments setup alone is around £300. Booking system setup is £400. Full CRM configuration is £600. Quote requests are free.",
        },
      ]}
      faqs={[
        {
          q: "What tools do you recommend?",
          a: "It depends on your business. For most small businesses we recommend Google Workspace for email, Stripe for payments, Calendly for booking, and HubSpot or Notion for CRM. For specific industries we may recommend something different. We explain our reasoning so you understand why.",
        },
        {
          q: "Will the tools work with what I already use?",
          a: "Usually yes. Most modern tools connect to each other through Zapier, Make, or direct integrations. If they do not, we will tell you upfront and suggest alternatives.",
        },
        {
          q: "Who pays for the tool subscriptions?",
          a: "You do. We set up the accounts in your name so you own everything. Tools typically cost £20 to £50 per month depending on what you need. We never take commission from tool providers.",
        },
        {
          q: "Can you help me switch from my current setup?",
          a: "Yes. We handle data migrations regularly. Exporting from one CRM to another, moving email, transferring domains, preserving customer records. We do it carefully so nothing gets lost.",
        },
      ]}
    />
  );
}
