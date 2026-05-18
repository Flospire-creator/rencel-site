import Link from "next/link";

export function Logo({ size = "default" }: { size?: "default" | "large" }) {
  const iconSize = size === "large" ? 36 : 28;
  const textSize = size === "large" ? "text-xl" : "text-base";

  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Rencel home">
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Rounded square background */}
        <rect width="32" height="32" rx="8" fill="#00D4FF" />
        {/* Abstract network/intelligence mark: three connected nodes */}
        <circle cx="10" cy="11" r="2.5" fill="#0A0A0B" />
        <circle cx="22" cy="11" r="2.5" fill="#0A0A0B" />
        <circle cx="16" cy="22" r="2.5" fill="#0A0A0B" />
        {/* Connection lines */}
        <line x1="12" y1="12.5" x2="20" y2="12.5" stroke="#0A0A0B" strokeWidth="1.8" />
        <line x1="11" y1="13.2" x2="14.5" y2="20" stroke="#0A0A0B" strokeWidth="1.8" />
        <line x1="21" y1="13.2" x2="17.5" y2="20" stroke="#0A0A0B" strokeWidth="1.8" />
      </svg>
      <span className={`${textSize} font-bold tracking-[0.15em] font-[family-name:var(--font-space-grotesk)]`}>
        RENCEL
      </span>
    </Link>
  );
}
