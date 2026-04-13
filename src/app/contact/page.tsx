"use client";

import { useState } from "react";

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
  const [formData, setFormData] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">Contact</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.05] tracking-tight mb-6">
              Start a Conversation
            </h1>
            <p className="text-muted leading-relaxed mb-10">
              Whether you have a platform to build, a supply chain to optimise, or just want to explore what&apos;s possible — we&apos;re here to talk.
            </p>

            <div className="space-y-5">
              <div>
                <div className="text-xs text-muted uppercase tracking-wider mb-1">Phone</div>
                <a href="tel:+441934515563" className="text-lg hover:text-accent transition-colors">+44 (0)1934 515563</a>
              </div>
              <div>
                <div className="text-xs text-muted uppercase tracking-wider mb-1">Email</div>
                <a href="mailto:info@rencelprocurements.co.uk" className="text-lg hover:text-accent transition-colors">info@rencelprocurements.co.uk</a>
              </div>
              <div>
                <div className="text-xs text-muted uppercase tracking-wider mb-1">Registered Office</div>
                <p className="text-muted">England & Wales, United Kingdom</p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-10 rounded-xl border border-card-border bg-card-bg">
                <div className="text-accent text-4xl mb-4">&#10003;</div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">Message Sent</h3>
                <p className="text-muted text-sm">Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-8 rounded-xl border border-card-border bg-card-bg">
                <div>
                  <label htmlFor="name" className="block text-xs text-muted uppercase tracking-wider mb-1.5">Name *</label>
                  <input id="name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-transparent border-b border-card-border py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors" placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-muted uppercase tracking-wider mb-1.5">Email *</label>
                  <input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-transparent border-b border-card-border py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs text-muted uppercase tracking-wider mb-1.5">Company</label>
                  <input id="company" type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-transparent border-b border-card-border py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors" placeholder="Your company name" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs text-muted uppercase tracking-wider mb-1.5">Interested In</label>
                  <select id="service" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full bg-transparent border-b border-card-border py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option value="" className="bg-card-bg">Select a service...</option>
                    {serviceOptions.map((o) => <option key={o} value={o} className="bg-card-bg">{o}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs text-muted uppercase tracking-wider mb-1.5">Message *</label>
                  <textarea id="message" required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-transparent border-b border-card-border py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="mt-2 w-full py-3 bg-accent text-background font-semibold rounded-full text-sm hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
