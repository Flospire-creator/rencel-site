import Link from "next/link";

const footerLinks = {
  Services: [
    { href: "/technology", label: "AI Procurement Intelligence" },
    { href: "/technology", label: "Supply Chain Automation" },
    { href: "/technology", label: "Digital Twin Solutions" },
    { href: "/sourcing", label: "Global Sourcing" },
    { href: "/sourcing", label: "Logistics Management" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center">
                <span className="text-[#0A0A0B] font-bold text-sm font-[family-name:var(--font-space-grotesk)]">
                  R
                </span>
              </div>
              <span className="text-lg font-bold tracking-wider font-[family-name:var(--font-space-grotesk)]">
                RENCEL
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-md mb-6">
              Intelligence & Supply. 10+ years of global procurement expertise,
              now building AI-powered platforms that transform how businesses
              source, automate, and optimise their supply chains.
            </p>
            <div className="flex flex-col gap-1 text-sm text-muted">
              <a
                href="tel:+441934515563"
                className="hover:text-accent transition-colors"
              >
                +44 (0)1934 515563
              </a>
              <a
                href="mailto:info@rencelprocurements.co.uk"
                className="hover:text-accent transition-colors"
              >
                info@rencelprocurements.co.uk
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Rencel Procurements Limited. All
            rights reserved. Company No. 09759065
          </p>
          <p className="text-xs text-muted">
            Registered in England & Wales
          </p>
        </div>
      </div>
    </footer>
  );
}
