"use client";

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export function Marquee({ items, speed = 30 }: MarqueeProps) {
  const content = items.join(" \u2014 ");

  return (
    <div className="overflow-hidden border-y border-white/5 py-5">
      <div
        className="animate-marquee whitespace-nowrap flex"
        style={{ animationDuration: `${speed}s` }}
      >
        <span className="text-sm tracking-[0.2em] uppercase text-muted font-medium">
          {content} &mdash;&nbsp;
        </span>
        <span className="text-sm tracking-[0.2em] uppercase text-muted font-medium">
          {content} &mdash;&nbsp;
        </span>
      </div>
    </div>
  );
}
