import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Small Business Tech Support UK | Rencel Procurements Digital",
  description:
    "Practical tech support for UK small business owners. We set up digital tools, fix what is broken, and keep your systems running without complexity.",
  alternates: { canonical: "/digital/small-business-tech-support" },
};

export default function Page() {
  return (
    <ServicePage
      slug="small-business-tech-support"
      title="Small Business Tech Support"
      h1="Small Business Tech Support"
      description="Practical help for small business owners who need digital tools set up and working, without complexity."
      intro="Most tech support is either too expensive, too slow, or speaks a language you do not understand. We work with small business owners directly. Clear English, practical advice, and no jargon."
      sections={[
        {
          heading: "What we help with",
          body: "Setting up a new laptop or workstation. Email not working properly. Website showing the wrong information. Payment processor rejecting cards. Domain expiring. SSL certificate broken. Forms not sending to the right inbox. Bookings not syncing with your calendar. Customer data scattered across three tools.\n\nIf it is a digital tool used by a small business, we have probably fixed it for someone before.",
        },
        {
          heading: "How it works",
          body: "You email or call. We respond within a few hours, usually faster during the working day. We ask what is going on and get a screen share or remote access if needed.\n\nMost things we can fix in under an hour. If something needs more work, we tell you exactly what and how long. No padded hourly bills. No hidden charges.\n\nWe keep notes on every business we work with, so the next time something comes up we already know your setup. That saves time for both of us.",
        },
        {
          heading: "Ongoing support",
          body: "If you want someone to keep an eye on things, we offer monthly support packages. From £150 a month you get unlimited ad-hoc support within reasonable limits, proactive checks on your website and critical tools, and quarterly reviews of what could be improved.\n\nThis suits businesses that do not want to worry about the tech side but cannot justify hiring someone internal. You outsource the technology worry to us.",
        },
        {
          heading: "What we do not do",
          body: "We do not fix broken printers, troubleshoot office WiFi, or support legacy Windows servers. We focus on the digital tools small businesses actually use: websites, email, payments, booking, CRM, and automation.\n\nIf you need office IT support or hardware fixes, we can recommend someone in your area who handles that properly.",
        },
      ]}
      faqs={[
        {
          q: "How quickly do you respond?",
          a: "Within a few hours during the working day (9am to 6pm, Monday to Friday). For monthly support clients, typically within an hour. We will tell you upfront how quickly something can be resolved.",
        },
        {
          q: "Can you support tools you did not set up?",
          a: "Yes, as long as we can get access. We regularly take over support for websites, CRMs, and booking systems originally set up by someone else. We just need the logins and a brief on how it is used.",
        },
        {
          q: "Is there a minimum?",
          a: "For ad-hoc support, no. Pay for what you use. For monthly support, the minimum commitment is three months so we can properly get to know your setup.",
        },
        {
          q: "What about emergencies outside working hours?",
          a: "If your website goes down or a critical system fails, email us. We check messages in the evening and will respond if we can. For businesses on monthly support, emergency response is included.",
        },
      ]}
    />
  );
}
