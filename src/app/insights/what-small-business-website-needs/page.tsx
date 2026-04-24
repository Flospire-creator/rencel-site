import Link from "next/link";
import type { Metadata } from "next";
import { BlogPost, H2, Lead } from "@/components/BlogPost";

export const metadata: Metadata = {
  title: "What Every Small Business Website Needs Before It Goes Live",
  description:
    "A website is not ready for customers just because the pages load. Here is the list we run through with every small business before we put anything live.",
  alternates: { canonical: "/insights/what-small-business-website-needs" },
};

export default function Page() {
  return (
    <BlogPost
      category="Small Business"
      date="20 April 2026"
      isoDate="2026-04-20"
      slug="what-small-business-website-needs"
      description="A website is not ready for customers just because the pages load. Here is the list we run through with every small business before we put anything live."
      title="What Every Small Business Website Needs Before It Goes Live"
      ctaHeading="Getting ready to launch?"
      ctaBody="We handle the whole launch checklist as part of every package, so nothing gets missed."
      ctaLink="/digital/website-design-small-businesses"
      ctaLabel="See our website packages"
    >
      <Lead>
        Most small business websites go live with at least three things missing. That does not mean they break. It means they quietly underperform for months before anyone works out why.
      </Lead>

      <p>
        This is the checklist we run through with every small business before we put anything live. If you are building the site yourself or working with a freelancer, use this to sense-check before you switch the domain over.
      </p>

      <H2>The homepage answers three questions in five seconds</H2>

      <p>
        What do you do. Who do you do it for. How does someone get in touch. If a visitor cannot answer those three questions in the first five seconds of landing on your homepage, you have already lost most of them.
      </p>

      <p>
        Print your homepage out. Show it to someone who has never heard of your business. Ask them those three questions. If they cannot answer, fix it before going live.
      </p>

      <H2>Every page has a way to contact you</H2>

      <p>
        Not just the contact page. Every single page. That might be a phone number in the header, a contact form at the bottom, or a "book now" button in the corner. Someone ready to get in touch should never have to hunt for how.
      </p>

      <p>
        Phone numbers should be clickable on mobile. Email addresses should use a mailto link. Addresses should link to Google Maps.
      </p>

      <H2>It works on mobile properly</H2>

      <p>
        More than seventy percent of small business website visits in the UK happen on mobile. Yet most small business websites are still built desktop-first and then tested on a phone as an afterthought.
      </p>

      <p>
        Open the site on your own phone. Try to find your phone number. Try to fill in the contact form with one thumb. Try to read the homepage copy without zooming in. If any of those feel awkward, the site is not mobile-ready.
      </p>

      <H2>The contact form sends somewhere you will actually check</H2>

      <p>
        We cannot count the number of small business websites we have audited where the contact form sends to an inbox the owner checks once a month. Or worse, to an address that bounces.
      </p>

      <p>
        Before launch, send five test submissions from different devices. Check they arrive. Check they arrive within a minute. Check they are not in spam.
      </p>

      <H2>SSL is working and the padlock shows</H2>

      <p>
        Every page should load on HTTPS with a padlock in the browser bar. If visitors see "Not Secure" warnings, they leave within seconds. SSL is usually included with your hosting but sometimes needs to be switched on manually.
      </p>

      <p>
        Visit your site on Chrome, Safari, and a mobile browser. Look at the padlock on every page, including the contact page and any booking or payment pages.
      </p>

      <H2>Google Business Profile is set up and linked</H2>

      <p>
        For any local business, Google Business Profile matters more than your website. Most people will see your business in Google search results before they see your site. Make sure your profile is verified, the information matches your website, and you have uploaded at least five photos.
      </p>

      <p>
        Your website should link to the profile, and the profile should link back to your website. Consistency in your name, address, and phone number across both is essential for local search.
      </p>

      <H2>Basic SEO is in place</H2>

      <p>
        Every page needs a title tag that describes what the page is about, a meta description that makes someone want to click, and headings that use the keywords your customers actually search for.
      </p>

      <p>
        You also need a sitemap submitted to Google Search Console, analytics installed, and the site submitted for indexing. Without these, Google will find your site eventually, but "eventually" can mean three months.
      </p>

      <H2>Legal pages exist</H2>

      <p>
        Privacy policy is legally required if you collect any personal data, which you do the moment someone fills in a contact form. Terms of service, cookie policy, and a clear business address are all worth having.
      </p>

      <p>
        These are not glamorous, but they protect you legally and they signal to visitors that you run a real business.
      </p>

      <H2>Images are optimised and load fast</H2>

      <p>
        Stock photos of generic office buildings do not build trust. Real photos of you, your team, your workshop, your previous work. Compressed properly so they load in under two seconds.
      </p>

      <p>
        A page that takes five seconds to load loses half its visitors before they have seen anything. Use a tool like Google PageSpeed Insights to check before you launch.
      </p>

      <H2>The final pre-launch test</H2>

      <p>
        Ask someone who is not involved in the project to open the site fresh, try to book or contact you, and tell you exactly what they did. Watch them do it if you can.
      </p>

      <p>
        Every confusing moment you see is a confusing moment a real customer will have. Fix those before you launch. It is easier than fixing them afterwards once traffic is coming in.
      </p>

      <p>
        If you want a second pair of eyes on your site before you launch it, a <Link href="/digital/website-redesign" className="text-accent hover:underline">website review</Link> is usually faster than you would expect.
      </p>
    </BlogPost>
  );
}
