import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Rencel. Talk to our team about intelligence platforms, custom SaaS development, or global procurement services. Phone: +44 (0)1934 515563.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
