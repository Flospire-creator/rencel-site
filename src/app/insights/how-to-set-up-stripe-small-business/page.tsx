import Link from "next/link";
import type { Metadata } from "next";
import { BlogPost, H2, Lead } from "@/components/BlogPost";

export const metadata: Metadata = {
  title: "How to Set Up Stripe Payments for a Small Business",
  description:
    "Stripe is the default choice for most UK small businesses taking card payments online. Here is how to set it up properly, and what to avoid.",
  alternates: { canonical: "/insights/how-to-set-up-stripe-small-business" },
};

export default function Page() {
  return (
    <BlogPost
      category="Small Business"
      date="18 April 2026"
      isoDate="2026-04-18"
      slug="how-to-set-up-stripe-small-business"
      description="Stripe is the default choice for most UK small businesses taking card payments online. Here is how to set it up properly, and what to avoid."
      title="How to Set Up Stripe Payments for a Small Business"
      ctaHeading="Want Stripe set up properly?"
      ctaBody="We set up Stripe alongside website, email, and booking tools in our Launch and Grow packages."
      ctaLink="/digital/digital-setup-small-businesses"
      ctaLabel="Talk to us about setup"
    >
      <Lead>
        Stripe is the default choice for most UK small businesses taking card payments online. It is reliable, the integrations work, and the fees are reasonable. Setting it up is not hard. Setting it up properly so you do not hit problems later is where most businesses get it wrong.
      </Lead>

      <p>
        Here is the order we do it in, and the things that catch people out.
      </p>

      <H2>Before you start</H2>

      <p>
        You need a UK business bank account in the name of the business. Personal accounts will not work for limited companies. You need your company registration details if you trade as a limited company, or your sole trader details if not. You need a valid photo ID for the person signing up.
      </p>

      <p>
        If you are VAT registered, have your VAT number ready. Stripe will ask whether your prices include VAT, so the system handles it correctly on invoices and receipts.
      </p>

      <H2>Create the account</H2>

      <p>
        Go to stripe.com and sign up. Use a business email address, not a personal one. If you are part of a team, set it up with a shared inbox like accounts@yourbusiness.co.uk so other people can access it when needed.
      </p>

      <p>
        Stripe will walk you through activating the account. This involves providing your business details, bank account for payouts, and verifying your identity. It usually takes ten minutes. Stripe then reviews everything and activates your account within a day or two.
      </p>

      <H2>Turn on the payment methods you actually need</H2>

      <p>
        By default Stripe turns on card payments. That is usually enough for most UK small businesses. If your customers might pay by Apple Pay, Google Pay, or bank transfer (Bacs), you can enable those in the Payment Methods settings.
      </p>

      <p>
        Do not turn on every available payment method. Some, like Afterpay or Klarna, charge higher fees and are not worth it unless you sell consumer goods at a specific price point. Start simple and add methods only if customers ask.
      </p>

      <H2>Set up your statement descriptor properly</H2>

      <p>
        This is the name customers see on their bank statement when they pay you. Most people skip this, and then get chargebacks because customers do not recognise the payment.
      </p>

      <p>
        Go to Settings, then Public Details. Set the statement descriptor to something customers will recognise. If your business name is long, abbreviate it clearly. "YOURBIZ * CHIPPENHAM" is better than "XYZLT38401 LTD".
      </p>

      <H2>Decide between Payment Links and a full integration</H2>

      <p>
        If you just need to take one-off payments, Stripe Payment Links are the fastest option. You create a link for each product or service, share it on invoices or via email, and Stripe handles the payment page.
      </p>

      <p>
        If you want customers to pay through your website, you need a proper integration. This can be as simple as adding a Stripe button to your site, or as involved as a full e-commerce setup. Most small businesses need something in between.
      </p>

      <H2>Connect it to your accounting software</H2>

      <p>
        Stripe integrates with Xero, QuickBooks, FreeAgent, and most other UK accounting tools. Set this up early. Otherwise you end up manually reconciling Stripe payouts to your bank account, and it becomes a month-end nightmare.
      </p>

      <p>
        The integration automatically logs each payment, matches it to the right invoice, and books the Stripe fees as a separate expense. A few hours of setup saves dozens of hours over a year.
      </p>

      <H2>Set up proper receipts</H2>

      <p>
        In Settings, go to Emails, and make sure automatic receipts are turned on. Customise the email with your business name, logo, and contact details. This is a small thing but it looks far more professional than a generic Stripe-branded receipt.
      </p>

      <p>
        If you are VAT registered, make sure the receipts show VAT correctly. Stripe handles this if you set it up in the tax settings.
      </p>

      <H2>Turn on fraud protection, but not everything</H2>

      <p>
        Stripe Radar protects against fraud and is included by default. For most small businesses, the default settings are fine. Do not turn on aggressive rules unless you are seeing real fraud problems, because they block legitimate customers too.
      </p>

      <p>
        Radar for Teams costs extra and is only worth it if you are processing large volumes or in a high-risk industry.
      </p>

      <H2>What Stripe costs</H2>

      <p>
        Standard UK pricing is 1.5% plus 20p per transaction for European cards, and 2.5% plus 20p for international cards. Bacs Direct Debit is 1% capped at £2. There is no monthly fee, no setup fee, and no minimum.
      </p>

      <p>
        For a small business processing £5,000 a month, that is about £80 in fees. Worth it for a payment system that actually works.
      </p>

      <H2>What to avoid</H2>

      <p>
        Do not use your personal email or bank account. Do not skip the identity verification (Stripe will eventually freeze payouts if it is incomplete). Do not leave the default statement descriptor in place. Do not forget to set up receipts.
      </p>

      <p>
        And do not mix personal and business payments through the same Stripe account. Keep them separate. It makes accounting, tax, and audits dramatically simpler.
      </p>

      <H2>When you need more</H2>

      <p>
        If you are running subscriptions, selling digital products, or taking payments in multiple currencies, Stripe can handle all of it. But the setup gets more involved. For anything beyond basic card payments, it is usually worth getting help to set it up properly once, rather than fixing it later.
      </p>

      <p>
        If you want Stripe set up alongside your website, booking, and CRM so it all connects properly, that is <Link href="/digital/digital-setup-small-businesses" className="text-accent hover:underline">what we do</Link>.
      </p>
    </BlogPost>
  );
}
