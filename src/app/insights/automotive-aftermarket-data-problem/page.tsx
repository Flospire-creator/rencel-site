import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Automotive Aftermarket Has a Data Problem",
  description: "Workshops run on gut feeling and outdated catalogues. The aftermarket needs real-time intelligence, and the technology to deliver it is finally within reach.",
  alternates: { canonical: "/insights/automotive-aftermarket-data-problem" },
};

export default function Post() {
  return (
    <article className="pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/insights" className="text-sm text-accent hover:underline mb-8 inline-block">&larr; Back to Insights</Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-accent uppercase tracking-wider">Automotive</span>
          <span className="text-xs text-muted">7 April 2026</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.1] tracking-tight mb-8">
          The Automotive Aftermarket Has a Data Problem
        </h1>

        <div className="prose-custom space-y-6 text-muted leading-relaxed">
          <p className="text-lg text-foreground/90 leading-relaxed">
            The UK automotive aftermarket is worth over £21 billion a year. It employs hundreds of thousands of people across workshops, parts suppliers, and distribution networks. And most of it still runs on phone calls, paper job cards, and catalogues that were printed before the vehicles they reference were even on the road.
          </p>

          <p>
            That is not a criticism. It is a reflection of an industry where the margins are tight, the pace is fast, and the technology on offer has never quite met the need. Workshop management systems exist, but they tend to focus on booking and billing rather than the operational intelligence that would actually change how a business runs.
          </p>

          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground pt-4">What is missing</h2>

          <p>
            A typical independent garage knows its regular customers and the common faults on popular models. That knowledge lives in the heads of experienced technicians. When those people leave or retire, the knowledge goes with them. There is no system capturing what they know, no way to turn years of hands-on experience into data that the next person can use.
          </p>

          <p>
            Parts ordering is another area where the lack of data shows. A workshop might stock fast-moving items based on what sold last month, but they have no predictive view of what is likely to come through the door next week. The result is over-ordering on some lines and emergency sourcing on others, with margins getting squeezed at both ends.
          </p>

          <p>
            Vehicle data itself is fragmented. MOT histories, service records, DVLA registrations, manufacturer recalls, and warranty information all live in separate systems. Connecting those sources would give workshops a far richer picture of every vehicle they work on, but right now, that connection barely exists outside of the franchised dealer networks.
          </p>

          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground pt-4">Intelligence, not just software</h2>

          <p>
            The aftermarket does not need another booking system. It needs an intelligence layer that brings vehicle data, workshop operations, and supply chain visibility together in one place. Something that tells you which vehicles in your area are approaching a service interval, which parts you should have in stock next week, and which jobs are going to take longer than the estimate because of a known issue with that model year.
          </p>

          <p>
            That kind of platform requires two things. First, access to the right data sources and the engineering to connect them. Second, a genuine understanding of how workshops operate, what their day looks like, and where the pressure points sit. Without both, you end up building something that looks good in a demo but does not survive contact with a Monday morning in a busy garage.
          </p>

          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground pt-4">The opportunity</h2>

          <p>
            Connected vehicles are generating more data than ever. Electric vehicle adoption is reshaping the skills and parts that workshops need. Consumer expectations around transparency and digital booking are rising. The aftermarket is changing, and the businesses that adopt intelligence-led operations early will be the ones that thrive.
          </p>

          <p>
            We are working on this problem. Not from a pure technology angle, but from the perspective of people who understand supply chains, parts procurement, and the operational realities of running a service business. The aftermarket deserves better tools. We intend to build them.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-card-border">
          <p className="text-sm text-muted mb-4">Interested in automotive intelligence? We are building something for this space.</p>
          <Link href="/contact" className="inline-flex px-5 py-2.5 bg-accent text-background font-semibold rounded-full text-sm hover:opacity-90 transition-opacity">
            Start a Conversation
          </Link>
        </div>
      </div>
    </article>
  );
}
