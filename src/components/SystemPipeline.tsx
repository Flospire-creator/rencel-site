"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  {
    label: "Ingest",
    sublabel: "Data sources connected",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Process",
    sublabel: "AI models applied",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.3 24.3 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 0 1-1.591.659H9.061a2.25 2.25 0 0 1-1.591-.659L5 14.5m14 0-5-5m-4 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Analyse",
    sublabel: "Patterns identified",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v-5.5m3 5.5V8.25m3 3v-2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Act",
    sublabel: "Decisions delivered",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function SystemPipeline() {
  const [activeStage, setActiveStage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div ref={containerRef} className="relative">
      {/* Pipeline */}
      <div className="flex items-center justify-between gap-2 md:gap-0">
        {stages.map((stage, i) => (
          <div key={stage.label} className="flex items-center flex-1">
            {/* Stage node */}
            <div className="flex flex-col items-center relative z-10 flex-1">
              <div
                className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-700"
                style={{
                  background: i <= activeStage && visible
                    ? "rgba(0, 212, 255, 0.1)"
                    : "rgba(255, 255, 255, 0.02)",
                  borderColor: i <= activeStage && visible
                    ? "rgba(0, 212, 255, 0.3)"
                    : "rgba(255, 255, 255, 0.05)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  boxShadow: i === activeStage && visible
                    ? "0 0 30px rgba(0, 212, 255, 0.15), 0 0 60px rgba(0, 212, 255, 0.05)"
                    : "none",
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  opacity: visible ? 1 : 0,
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                <div
                  className="transition-colors duration-500"
                  style={{ color: i <= activeStage && visible ? "#00D4FF" : "#555" }}
                >
                  {stage.icon}
                </div>

                {/* Pulse ring on active */}
                {i === activeStage && visible && (
                  <div className="absolute inset-0 rounded-2xl animate-ping-slow" style={{
                    border: "1px solid rgba(0, 212, 255, 0.2)",
                  }} />
                )}
              </div>

              <span
                className="mt-3 text-xs md:text-sm font-semibold font-[family-name:var(--font-space-grotesk)] tracking-wide transition-colors duration-500"
                style={{ color: i <= activeStage && visible ? "#EDEDED" : "#555" }}
              >
                {stage.label}
              </span>
              <span
                className="text-[10px] md:text-xs transition-colors duration-500 mt-0.5"
                style={{ color: i <= activeStage && visible ? "#888" : "#333" }}
              >
                {stage.sublabel}
              </span>
            </div>

            {/* Connector line */}
            {i < stages.length - 1 && (
              <div className="flex-1 h-px relative mx-1 md:mx-3 -mt-8">
                <div className="absolute inset-0 bg-card-border" />
                <div
                  className="absolute inset-y-0 left-0 transition-all duration-700 ease-out"
                  style={{
                    width: i < activeStage && visible ? "100%" : "0%",
                    background: "linear-gradient(90deg, rgba(0,212,255,0.4), rgba(0,212,255,0.1))",
                    height: "1px",
                  }}
                />
                {/* Moving dot */}
                {i < activeStage && visible && (
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent animate-slide-right"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
