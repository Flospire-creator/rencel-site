"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/sourcing", label: "Sourcing" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  // Close on Escape and restore focus to the toggle (WCAG 2.1.2)
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
        }`}
        aria-label="Primary"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Logo />

            <div className="hidden md:flex items-center gap-7">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`text-sm transition-colors min-h-[44px] flex items-center ${
                    pathname === link.href ? "text-accent" : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-2 px-4 py-2 text-sm font-medium bg-accent text-background rounded-full hover:opacity-90 transition-opacity min-h-[44px] flex items-center"
              >
                Get in Touch
              </Link>
            </div>

            <button
              ref={toggleRef}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-3 min-h-[44px] min-w-[44px] items-center justify-center"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span aria-hidden="true" className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span aria-hidden="true" className={`block w-5 h-0.5 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span aria-hidden="true" className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-6"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`text-2xl font-bold font-[family-name:var(--font-space-grotesk)] min-h-[44px] flex items-center ${
                pathname === link.href ? "text-accent" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
