import Link from "next/link";
import type { Metadata } from "next";
import { BlogPost, H2, Lead } from "@/components/BlogPost";

export const metadata: Metadata = {
  title: "How Much Does a Small Business Website Cost in the UK?",
  description:
    "Prices range from £500 to £30,000 and the gap is not about design quality. Here is what you pay for at each level and how to work out what you need.",
  alternates: { canonical: "/insights/small-business-website-cost-uk" },
};

export default function Page() {
  return (
    <BlogPost
      category="Small Business"
      date="22 April 2026"
      isoDate="2026-04-22"
      slug="small-business-website-cost-uk"
      description="Prices range from £500 to £30,000 and the gap is not about design quality. Here is what you pay for at each level and how to work out what you need."
      title="How Much Does a Small Business Website Cost in the UK?"
      ctaHeading="Thinking about a website?"
      ctaBody="Our fixed-price packages start at £4,500 (or £450/month over 12 months) with everything most small businesses need included."
      ctaLink="/digital"
      ctaLabel="See our packages"
    >
      <Lead>
        If you have asked three different web agencies what a website costs, you will have been given three wildly different numbers. That is not because they are hiding anything. It is because there are real price bands in this market, and each one buys you a genuinely different thing.
      </Lead>

      <p>
        Here is what you actually pay for at each level, what you get, and how to work out which makes sense for your business.
      </p>

      <H2>£0 to £500: the DIY range</H2>

      <p>
        This is Wix, Squarespace, or a WordPress theme that you set up yourself. You pay a monthly subscription of £10 to £30, buy a domain for £10 a year, and put the whole thing together at your kitchen table.
      </p>

      <p>
        It can work for a first-year side hustle or a business that only needs a holding page. The downside is time. Most owners spend twenty to forty hours getting it to look right, plus another five hours a month maintaining it. If you value your time at £30 an hour, a DIY site has already cost you £1,500 before you have added anything.
      </p>

      <H2>£500 to £2,000: the freelancer range</H2>

      <p>
        A freelancer picks a template, tweaks it for your brand, and hands it over. You usually get three to five pages, a contact form, and basic setup. It is a step up from DIY and good value if the freelancer is competent.
      </p>

      <p>
        Where it gets expensive is what is not included. Often no domain setup, no business email, no payment tools, no SEO, no analytics. You end up either doing those yourself or hiring someone else. The total cost of getting fully online often ends up closer to £3,000.
      </p>

      <H2>£2,500 to £8,000: the small agency range</H2>

      <p>
        This is where most serious small businesses land. You get a proper scope, a designed-from-scratch site (not a template), and all the supporting setup included. Cloud hosting, domain, business email, SSL, SEO configuration, Google Business Profile, payment processing, contact forms that actually work on mobile.
      </p>

      <p>
        Our <Link href="/digital" className="text-accent hover:underline">Launch package at £4,500</Link> sits in this bracket. The <Link href="/digital" className="text-accent hover:underline">Grow package at £7,500</Link> adds booking, CRM, customer journey tracking and three months of support. Both can be paid monthly. For most small businesses, this is the right range.
      </p>

      <H2>£8,000 to £20,000: the custom range</H2>

      <p>
        Custom functionality. Bespoke integrations. Member areas, booking flows that connect to external systems, custom calculators, AI features, conversion funnel analytics with session recordings, multi-language support. You are usually replacing several tools at once or building something that does not exist off the shelf.
      </p>

      <p>
        If you are a standard service business, you probably do not need this. If you are automating a specific workflow or combining several business functions into one platform, it can pay for itself quickly. Our <Link href="/digital" className="text-accent hover:underline">Scale package starts at £15,000</Link>.
      </p>

      <H2>£15,000 to £30,000+: the bespoke and SaaS range</H2>

      <p>
        Multi-user platforms. SaaS products. Custom intelligence platforms with admin panels, authentication, AI and data pipelines, and enterprise-grade security. You are not building a website any more, you are building a product. Our <Link href="/digital" className="text-accent hover:underline">Platform tier</Link> sits here.
      </p>

      <H2>£30,000 and up: the big agency range</H2>

      <p>
        You are paying for a team. Project manager, designer, developer, copywriter, SEO specialist. For a growing business with real complexity this can make sense. For a small business with a £250,000 turnover, it is almost never the right spend.
      </p>

      <H2>How to work out what you need</H2>

      <p>
        Three questions help.
      </p>

      <p>
        First: how do customers actually find and contact you today? If the answer is "Google and then they call me", you need a clear, credible website. You do not need complex functionality.
      </p>

      <p>
        Second: what repetitive work are you doing manually? If you are sending ten booking confirmation emails a day, you need booking automation. If you chase payments every month, you need a proper invoicing setup. Each of these pushes you up a tier.
      </p>

      <p>
        Third: how much is an extra customer worth to you? A roofer who makes £3,000 on a job can afford to spend more on their website than a coach who charges £80 a session. The calculation is how many customers your site needs to win before it has paid for itself.
      </p>

      <H2>Avoid the common traps</H2>

      <p>
        Hourly pricing without a cap. If someone quotes you £40 an hour and tells you the project will take around twenty hours, you are almost certainly going to end up paying for thirty or forty. Always get a fixed price for a fixed scope.
      </p>

      <p>
        Monthly rental models. Some agencies offer websites for £99 a month forever. Over three years you pay £3,600 for something that is usually a templated site, and you do not own the code. You are renting indefinitely.
      </p>

      <p>
        Quotes that do not include setup. Ask what happens about domain, email, SSL, SEO, Google Business Profile, analytics, and mobile testing. If those are extras, your £1,200 quote is really £2,000.
      </p>

      <H2>The honest answer</H2>

      <p>
        For most UK small businesses, budget between £4,500 and £7,500 for a website that will genuinely help your business. Below that, you will pay in time or missing features. Above that, you need a specific reason for the extra spend (custom automation, SaaS-style functionality, or building a product rather than a brochure).
      </p>
    </BlogPost>
  );
}
