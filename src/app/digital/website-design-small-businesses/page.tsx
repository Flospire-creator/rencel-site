import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Website Design for Small Businesses | Rencel Procurements Digital",
  description:
    "Practical, credible website design for small businesses in Chippenham, Wiltshire and across the UK. Fixed prices, clear scope, fast delivery.",
  alternates: { canonical: "/digital/website-design-small-businesses" },
};

export default function Page() {
  return (
    <ServicePage
      slug="website-design-small-businesses"
      title="Website Design for Small Businesses"
      h1="Website Design for Small Businesses"
      description="Practical website design for small businesses that need a clear, credible online presence. Fixed prices from £4,500."
      intro="Rencel Procurements Digital builds simple, credible websites for small businesses, local service providers, trades, consultants and small teams. Websites that explain what you do, build trust, and make it easy for customers to get in touch."
      sections={[
        {
          heading: "What we build",
          body: "Every website we build is designed around what your customers actually need to see. A clear homepage that explains what you offer. Service pages that answer the questions people ask. Contact paths that work on the first click, whether that is a phone number, a form, or a WhatsApp link.\n\nWe focus on clarity over cleverness. Most small business websites fail because they try to look impressive instead of being useful. We take the opposite approach. The goal is that a customer lands on your site, understands what you offer within five seconds, and knows exactly what to do next.",
        },
        {
          heading: "Who this is for",
          body: "This is for small businesses that need their first real website, or want to replace one that is not working. Tradespeople, local service businesses, consultants, coaches, small retailers, wedding and events businesses, and anyone running a practical business that needs a practical online presence.\n\nIf you are a Fortune 500 or running a SaaS startup, this is not for you. We focus on small businesses because that is where we add the most value.",
        },
        {
          heading: "What is included",
          body: "Every Launch package website includes a custom-designed site of up to five pages, mobile-responsive design, cloud hosting set up properly (year 1 included), your domain configured, business email set up, SSL and security, basic SEO configuration, Google Business Profile setup, a contact form wired to your email, and online payment setup if you need it.\n\nAll for a fixed price of £4,500, or £450/month over 12 months. No hourly rates. No scope creep. No surprises at the end. We tell you exactly what you get before we start.",
        },
        {
          heading: "How long it takes",
          body: "A Launch package website typically goes from brief to live in two to three weeks. That assumes you have your content and images ready when we start. If you do not, we can help you structure what to write and where to source images from.\n\nThe first week is design and structure. The second week is build and refinement. The third week is review, revisions, and launch. You see progress every few days, not just at the end.",
        },
      ]}
      faqs={[
        {
          q: "Do I need to know what I want before I start?",
          a: "No. Most small business owners do not have a clear brief when they start. That is normal. We will work through what your business does, who your customers are, and what your website needs to achieve. You will come out with a clear plan before we build anything.",
        },
        {
          q: "Can I update the website myself afterwards?",
          a: "Yes. We build sites you can maintain without needing a developer for every small change. We will show you how to update text, swap images, and add new pages. If you want us to handle ongoing updates, we can do that too.",
        },
        {
          q: "What if I already have a domain?",
          a: "No problem. We will connect your existing domain to the new site without changing your email or anything else. If you do not have a domain yet, we will help you pick and register one.",
        },
        {
          q: "Do you work with businesses outside Chippenham?",
          a: "Yes. We work with small businesses across Wiltshire and the wider UK. Most of our work is delivered remotely, which keeps costs down and projects moving quickly.",
        },
      ]}
    />
  );
}
