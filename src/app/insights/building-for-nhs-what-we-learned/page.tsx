import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building for the NHS: What We Learned",
  description: "Clinical platforms are not like other software projects. Here is what we learned designing a remote patient monitoring platform for NHS virtual ward programmes.",
  alternates: { canonical: "/insights/building-for-nhs-what-we-learned" },
};

export default function Post() {
  return (
    <article className="pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/insights" className="text-sm text-accent hover:underline mb-8 inline-block">&larr; Back to Insights</Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-accent uppercase tracking-wider">Healthcare</span>
          <span className="text-xs text-muted">3 April 2026</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.1] tracking-tight mb-8">
          Building for the NHS: What We Learned
        </h1>

        <div className="prose-custom space-y-6 text-muted leading-relaxed">
          <p className="text-lg text-foreground/90 leading-relaxed">
            When we started designing a remote patient monitoring platform for NHS virtual ward programmes, we thought the hard part would be the technology. Real-time observations, clinical scoring algorithms, automated alerts. Complex engineering, certainly, but engineering we understood. The real challenge turned out to be something else entirely.
          </p>

          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground pt-4">Clinical workflows are not like business workflows</h2>

          <p>
            In a business application, a delayed notification is an inconvenience. In a clinical application, it could mean a deteriorating patient is not escalated in time. That difference shapes every decision you make as a builder. The tolerance for error is close to zero, and the consequences of getting it wrong are measured in patient outcomes, not lost revenue.
          </p>

          <p>
            We learned quickly that clinical users think about software differently from other professionals. A nurse on a virtual ward round does not want options. They want the system to surface what matters, in the order it matters, with clear next steps. Every additional click is time taken away from patient care. Every unnecessary screen is a source of frustration in an already demanding role.
          </p>

          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground pt-4">NHS Digital standards are there for good reason</h2>

          <p>
            Working to NHS Digital standards is not a box-ticking exercise. The standards exist because the healthcare system has learned, through painful experience, what happens when clinical software is built without rigorous interoperability, security, and accessibility requirements.
          </p>

          <p>
            HL7 FHIR for data exchange, WCAG for accessibility, DTAC for digital technology assessment, DCB0129 for clinical safety. Each standard adds complexity to the build, but each one exists because someone, somewhere, was harmed by a system that did not meet it. Once you understand that context, compliance stops feeling like overhead and starts feeling like the bare minimum.
          </p>

          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground pt-4">What the NHS actually needs from technology partners</h2>

          <p>
            The NHS is not short of technology vendors. What it lacks are partners who understand both the technical and operational sides of healthcare delivery. Too many platforms are built in isolation from the clinical teams who will use them. The result is software that passes every compliance check but fails the most important test: whether a clinician will actually use it under pressure.
          </p>

          <p>
            We spent time with clinical staff before writing a single line of code. Watched how they managed virtual ward patients. Listened to what frustrated them about existing tools. Mapped their workflows not as we assumed they worked, but as they actually did, including all the workarounds and informal processes that no specification document captures.
          </p>

          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground pt-4">Lessons we took forward</h2>

          <p>
            Build for the worst moment, not the average one. When a clinical user is making a time-critical decision, your platform should be invisible. It should present the right information without requiring the user to go looking for it.
          </p>

          <p>
            Respect the domain. Healthcare has its own language, its own hierarchies, and its own risk profile. If you try to impose patterns from other industries, you will build something that looks modern but feels wrong to the people using it.
          </p>

          <p>
            And test with real users, in real conditions. A clinician reviewing a demo on a Tuesday afternoon will tell you it looks fine. Put the same system in front of them during a Friday evening ward round, and you will get very different feedback.
          </p>

          <p>
            These lessons shaped how we approach every healthcare project now. They also reinforced something we already believed from our procurement work: you cannot build good software for an industry you do not understand.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-card-border">
          <p className="text-sm text-muted mb-4">If you are building a clinical or healthcare platform and need a partner who understands the requirements, we should talk.</p>
          <Link href="/contact" className="inline-flex px-5 py-2.5 bg-accent text-background font-semibold rounded-full text-sm hover:opacity-90 transition-opacity">
            Get in Touch
          </Link>
        </div>
      </div>
    </article>
  );
}
