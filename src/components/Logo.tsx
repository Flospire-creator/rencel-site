import Link from "next/link";

export function Logo({ size = "default" }: { size?: "default" | "large" }) {
  const iconSize = size === "large" ? "w-9 h-9" : "w-7 h-7";
  const textSize = size === "large" ? "text-xl" : "text-base";

  return (
    <Link href="/" className="flex items-center gap-2.5">
      <div className={`${iconSize} rounded-lg bg-accent flex items-center justify-center`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={size === "large" ? "w-5 h-5" : "w-4 h-4"}
        >
          {/* Minimal geometric R mark */}
          <path
            d="M6 4h7a5 5 0 0 1 3.54 8.54L20 18h-3.5l-3.04-5H9v5H6V4zm3 2.5v4H12.5a2 2 0 0 0 0-4H9z"
            fill="#0A0A0B"
          />
        </svg>
      </div>
      <span className={`${textSize} font-bold tracking-[0.15em] font-[family-name:var(--font-space-grotesk)]`}>
        RENCEL
      </span>
    </Link>
  );
}
