import Link from "next/link";

export function Logo({ size = "default" }: { size?: "default" | "large" }) {
  const iconSize = size === "large" ? "w-9 h-9" : "w-7 h-7";
  const textSize = size === "large" ? "text-xl" : "text-base";
  const letterSize = size === "large" ? "text-lg" : "text-sm";

  return (
    <Link href="/" className="flex items-center gap-2.5">
      <div className={`${iconSize} rounded-lg bg-accent flex items-center justify-center`}>
        <span className={`${letterSize} font-bold text-white font-[family-name:var(--font-space-grotesk)]`}>
          R
        </span>
      </div>
      <span className={`${textSize} font-bold tracking-[0.15em] font-[family-name:var(--font-space-grotesk)]`}>
        RENCEL
      </span>
    </Link>
  );
}
