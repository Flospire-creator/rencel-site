import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-card-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-5">
              Intelligence & Supply. 20+ years of global procurement expertise, now building AI-powered platforms.
            </p>
            <div className="text-sm text-muted space-y-1">
              <div><a href="tel:+441934515563" className="hover:text-accent transition-colors">+44 (0)1934 515563</a></div>
              <div><a href="mailto:hello@rencelprocurements.co.uk" className="hover:text-accent transition-colors">hello@rencelprocurements.co.uk</a></div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
            <div className="space-y-2.5">
              {["AI Procurement Intelligence", "Supply Chain Automation", "Digital Twin Solutions", "Global Sourcing", "Logistics Management"].map((s) => (
                <div key={s}><Link href={s.includes("Global") || s.includes("Logistics") ? "/sourcing" : "/technology"} className="text-sm text-muted hover:text-accent transition-colors">{s}</Link></div>
              ))}
              <div className="pt-1"><Link href="/digital" className="text-sm text-accent/70 hover:text-accent transition-colors">Rencel Digital</Link></div>
              <div><Link href="/digital/digital-setup-small-businesses" className="text-sm text-muted hover:text-accent transition-colors">Digital Setup</Link></div>
              <div><Link href="/digital/small-business-tech-support" className="text-sm text-muted hover:text-accent transition-colors">Small Business Tech Support</Link></div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <div className="space-y-2.5">
              {[{ href: "/about", label: "About" }, { href: "/work", label: "Case Studies" }, { href: "/insights", label: "Insights" }, { href: "/contact", label: "Contact" }].map((l) => (
                <div key={l.href}><Link href={l.href} className="text-sm text-muted hover:text-accent transition-colors">{l.label}</Link></div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-card-border flex flex-col md:flex-row justify-between gap-2 text-sm text-muted">
          <span>&copy; {new Date().getFullYear()} Rencel Procurements Limited. Company No. 09746971</span>
          <span>Registered in England & Wales</span>
        </div>
      </div>
    </footer>
  );
}
