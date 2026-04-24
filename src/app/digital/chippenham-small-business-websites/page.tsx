import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Small Business Website Design in Chippenham | Rencel Procurements Digital",
  description:
    "Website design for small businesses in Chippenham and Wiltshire. Local focus, national experience. Fixed prices from £1,500.",
  alternates: { canonical: "/digital/chippenham-small-business-websites" },
};

export default function Page() {
  return (
    <ServicePage
      slug="chippenham-small-business-websites"
      title="Chippenham Small Business Websites"
      h1="Website Design for Chippenham Businesses"
      description="Dedicated website and digital support for small businesses in Chippenham and the wider Wiltshire area."
      intro="Rencel works with small businesses across Chippenham, Wiltshire and the surrounding areas. Local focus, national experience. Fixed-price packages from £1,500, with most projects delivered in two to four weeks."
      sections={[
        {
          heading: "Why local matters",
          body: "When you work with a local partner, things move faster. We understand the Wiltshire market, the kind of customers you are trying to reach, and the businesses you compete with.\n\nThat said, we do not insist on meeting in person. Most of our work is delivered through calls and screen shares, which keeps costs down and projects moving quickly. If you prefer an in-person kickoff, we can do that too.",
        },
        {
          heading: "What Chippenham small businesses need",
          body: "Most local small businesses in Chippenham need the same things: a clear website that explains what they do, a way for customers to get in touch, and a Google Business Profile that actually shows up when people search locally.\n\nGetting found in local search matters more than anything else. That means proper Google Business Profile setup, consistent business details across directories, and a website optimised for local terms like 'plumber Chippenham' or 'wedding photographer Wiltshire'. We handle all of this as part of our Launch package.",
        },
        {
          heading: "Industries we work with locally",
          body: "Tradespeople, builders, plumbers, electricians, landscapers, painters and decorators. Service businesses: hairdressers, beauticians, fitness trainers, tutors, cleaners. Professional services: accountants, solicitors, consultants, coaches. Hospitality: cafes, restaurants, pubs, caterers. Wedding and events businesses. Property: letting agents, property managers, estate agents.\n\nWe have built or advised on websites for most of these industries. The principles are similar. The execution varies.",
        },
        {
          heading: "What you get",
          body: "The Launch package at £1,500 includes everything most local small businesses need: a five-page website, mobile-responsive design, your domain and business email set up, SSL and security, Google Business Profile configured properly, basic SEO optimised for local search, a contact form, and online payment setup.\n\nMost projects go live in two to three weeks. We come back to you for content, images, and review points. You do not need to be technical. We handle the technical side so you can focus on running your business.",
        },
      ]}
      faqs={[
        {
          q: "Are you actually based in Chippenham?",
          a: "Our registered office is in Bristol, but we work with businesses across Wiltshire, Somerset, and the South West. Most of our work is delivered remotely, which means we can work with you whether you are in Chippenham town centre or a village nearby.",
        },
        {
          q: "Can we meet in person?",
          a: "Yes, for a kickoff call or major milestone review. For most of the project, calls and screen shares are faster and more efficient. That keeps the cost down without losing quality.",
        },
        {
          q: "Do you work with businesses outside Wiltshire?",
          a: "Yes. We support businesses across the UK. The Chippenham page exists because we do a lot of local work here, but the same packages and services are available wherever you are based.",
        },
        {
          q: "What if I need ongoing support?",
          a: "We offer monthly support packages from £150 a month for small businesses that want to keep their website and digital tools running smoothly without hiring internal help.",
        },
      ]}
    />
  );
}
