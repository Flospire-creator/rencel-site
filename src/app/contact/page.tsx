"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SplitText } from "@/components/SplitText";

const serviceOptions = [
  "AI Procurement Intelligence",
  "Supply Chain Automation",
  "Digital Twin Solutions",
  "Custom SaaS Development",
  "Global Sourcing",
  "Logistics Management",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success. Will integrate with Formspree or similar.
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-40 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left column */}
            <div>
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[1px] bg-accent" />
                  <span className="text-xs tracking-[0.2em] uppercase text-accent">
                    Contact
                  </span>
                </div>
              </AnimatedSection>

              <SplitText
    
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[0.95] tracking-tight mb-8"
              >
                Start a Conversation
              </SplitText>

              <AnimatedSection delay={0.3}>
                <p className="text-lg text-muted leading-relaxed mb-12">
                  Whether you have a platform to build, a supply chain to
                  optimise, or just want to explore what&apos;s possible —
                  we&apos;re here to talk.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="flex flex-col gap-6">
                  <div>
                    <div className="text-xs text-muted uppercase tracking-wider mb-1">
                      Phone
                    </div>
                    <a
                      href="tel:+441934515563"
                      className="text-lg hover:text-accent transition-colors"
                    >
                      +44 (0)1934 515563
                    </a>
                  </div>
                  <div>
                    <div className="text-xs text-muted uppercase tracking-wider mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:info@rencelprocurements.co.uk"
                      className="text-lg hover:text-accent transition-colors"
                    >
                      info@rencelprocurements.co.uk
                    </a>
                  </div>
                  <div>
                    <div className="text-xs text-muted uppercase tracking-wider mb-1">
                      Registered Office
                    </div>
                    <p className="text-lg text-muted">
                      England & Wales, United Kingdom
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right column — form */}
            <AnimatedSection delay={0.2}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center p-12 rounded-2xl border border-card-border bg-card-bg"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3">
                    Message Sent
                  </h3>
                  <p className="text-muted">
                    Thanks for reaching out. We&apos;ll get back to you within
                    24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 p-8 md:p-10 rounded-2xl border border-card-border bg-card-bg"
                >
                  <div>
                    <label htmlFor="name" className="block text-xs text-muted uppercase tracking-wider mb-2">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-card-border py-3 text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-muted/50"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs text-muted uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-card-border py-3 text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-muted/50"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs text-muted uppercase tracking-wider mb-2">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-transparent border-b border-card-border py-3 text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-muted/50"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs text-muted uppercase tracking-wider mb-2">
                      Interested In
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-transparent border-b border-card-border py-3 text-foreground focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-card-bg">Select a service...</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option} className="bg-card-bg">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs text-muted uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-card-border py-3 text-foreground focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-muted/50"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 w-full py-4 bg-accent text-[#0A0A0B] font-semibold rounded-full hover:opacity-90 transition-opacity text-sm tracking-wide"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
