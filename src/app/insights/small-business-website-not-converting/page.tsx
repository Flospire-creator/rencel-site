import Link from "next/link";
import type { Metadata } from "next";
import { BlogPost, H2, Lead, ProofCallout } from "@/components/BlogPost";

export const metadata: Metadata = {
  title: "Why Your Small Business Website Is Not Converting",
  description:
    "Traffic is not the problem. The problem is usually one of five things, and all of them are fixable without a full rebuild.",
  alternates: { canonical: "/insights/small-business-website-not-converting" },
};

export default function Page() {
  return (
    <BlogPost
      category="Small Business"
      date="12 April 2026"
      isoDate="2026-04-12"
      slug="small-business-website-not-converting"
      description="Traffic is not the problem. The problem is usually one of five things, and all of them are fixable without a full rebuild."
      title="Why Your Small Business Website Is Not Converting"
      ctaHeading="Not getting enough from your site?"
      ctaBody="Book a free website review. We will tell you exactly what is wrong and how to fix it. No obligation."
      ctaLink="/digital/website-redesign"
      ctaLabel="Get a website review"
    >
      <Lead>
        You have a website. You get traffic. But hardly anyone contacts you, books, or buys. Something is wrong, but you cannot put your finger on what.
      </Lead>

      <p>
        In our experience reviewing hundreds of underperforming small business websites, the problem is almost always one of five things. None of them usually require a full rebuild. All of them are fixable.
      </p>

      <H2>1. The visitor cannot tell what you do</H2>

      <p>
        This is the most common problem by a wide margin. Someone lands on your homepage and has to scroll, read paragraphs, or click around to work out what you actually do and who you do it for.
      </p>

      <p>
        The test: show your homepage to someone who has never heard of your business. Give them five seconds. Then ask them what the business does, who it is for, and how to get in touch. If they cannot answer all three, that is your conversion problem.
      </p>

      <p>
        The fix: a one-sentence description at the top of your homepage. "We do X for Y in Z." No fluff. No brand slogan. Plain English. Put it somewhere they cannot miss.
      </p>

      <H2>2. There is no clear next step</H2>

      <p>
        A visitor wants to do something. Call you, book a consultation, send a message, request a quote, buy a product. If they have to hunt for how, most of them leave.
      </p>

      <p>
        Every page should have one primary action. Not five equal options. One. The "get a quote" button or "book a call" link should be obvious, appear multiple times on the page, and take you straight to the action without forcing a detour through a "services" page first.
      </p>

      <H2>3. You are asking for too much too early</H2>

      <p>
        Ten-field contact forms with required fields for phone number, postcode, budget, timeline, and a hundred-word project description kill conversions. Most people will not fill that in just to ask a question.
      </p>

      <p>
        The fix: start with name, email, and one open text field. Ask for more information later if you need it. You want to start a conversation, not pre-qualify every lead before you have even said hello.
      </p>

      <H2>4. The site does not answer the questions people have</H2>

      <p>
        Every small business has five or six questions customers ask before they commit. How much does it cost. How long does it take. Do you cover my area. Are you certified or insured. What happens if something goes wrong. Can I see examples of your work.
      </p>

      <p>
        If your website does not answer these directly, visitors leave and ask someone else. Usually a competitor whose site does answer them.
      </p>

      <p>
        Add an FAQ section with real answers to the questions you actually get asked. Not the questions marketing thinks people have. The actual ones that come up on phone calls.
      </p>

      <H2>5. The site is slow, broken, or looks dated</H2>

      <p>
        Slow pages lose half their visitors before they see anything. Broken forms, expired SSL certificates, and half-loaded images signal that the business is not paying attention. A dated design (usually from 2015 or earlier) makes visitors wonder whether the business is still active.
      </p>

      <p>
        None of this is about looking fancy. It is about looking credible. A simple, current-feeling design loads fast and builds trust. A cluttered site with dated graphics and slow load times does the opposite.
      </p>

      <H2>The diagnostic</H2>

      <p>
        Open your site on your phone. Pretend you have never heard of your business. Try to answer these questions within ten seconds:
      </p>

      <p>
        What does this business do. Is it for me. How much does it cost. How do I get in touch.
      </p>

      <p>
        If you cannot answer all four, you have found your conversion problem. It is almost never a traffic problem.
      </p>

      <H2>The common mistake</H2>

      <p>
        Most small business owners respond to a low-converting website by spending more on ads to get more traffic. That makes the problem worse, not better. More people arrive, fail to convert, and leave.
      </p>

      <p>
        Fix the conversion first, then scale the traffic. A site that converts at five percent with 1,000 visitors a month beats a site that converts at half a percent with 5,000 visitors a month. And the first one is cheaper to run.
      </p>

      <H2>Where to start</H2>

      <p>
        Pick the most obvious problem and fix that first. Usually the homepage message. Then the main call to action. Then the contact form. Then the FAQs. Then the speed.
      </p>

      <p>
        Most of these fixes take a few hours each, not a full rebuild. You do not need a new website. You need the existing one to do its job properly.
      </p>

      <ProofCallout
        title="When a rebuild is the right answer"
        body="Sometimes the existing site is too broken to fix. Lee at Portishead Tyre & MOT was losing 8 bookings a week because his WordPress site could not take payments. We rebuilt with a live booking system tied to real tyre stock. £6,000 in sales in the first 14 days. Fully booked through August."
        href="/work/portishead-tyre-and-mot"
      />

      <p>
        If you want a second opinion on what to fix first, <Link href="/digital/website-redesign" className="text-accent hover:underline">a website review</Link> takes us about an hour and comes back with a specific list of changes in priority order.
      </p>
    </BlogPost>
  );
}
