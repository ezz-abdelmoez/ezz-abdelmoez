"use client";

import { useSiteContent } from "@/lib/site-content";

export function ChessAtmosphere() {
  const { slug } = useSiteContent();
  if (slug !== "home") return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="chess-hero-board mask-fade-b absolute -right-[18%] top-[12%] hidden h-[540px] w-[540px] opacity-[0.11] lg:block" />
      <div className="chess-hero-board absolute -left-24 bottom-10 h-44 w-44 rotate-[-8deg] opacity-[0.05]" />
    </div>
  );
}

export function ChessMark({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`chess-mark ${className}`} />;
}
