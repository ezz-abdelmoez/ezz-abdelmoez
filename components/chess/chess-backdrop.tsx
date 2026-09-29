"use client";

import { cn } from "@/lib/utils";

export type ChessMotif = "empty" | "scoresheet";

function EmptyMotif() {
  return (
    <div className="absolute left-1/2 top-[18%] hidden -translate-x-1/2 opacity-[0.12] md:block">
      <div className="grid grid-cols-4 overflow-hidden rounded-xl border border-white/10">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-10 w-10 sm:h-12 sm:w-12",
              i % 2 === (Math.floor(i / 4) % 2) ? "bg-gold/20" : "bg-white/[0.03]",
              i === 10 && "chess-pulse-sq",
            )}
          />
        ))}
      </div>
      <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-gold/70">
        Your move
      </p>
    </div>
  );
}

function ScoresheetMotif() {
  const rows = [
    ["1.", "e4", "e5"],
    ["2.", "Nf3", "Nc6"],
    ["3.", "Bb5", "a6"],
    ["4.", "Ba4", "Nf6"],
    ["5.", "O-O", "Be7"],
  ];

  return (
    <div className="absolute right-[4%] top-[20%] hidden w-48 opacity-[0.13] lg:block">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-gold/75">
        Scoresheet
      </p>
      <div className="space-y-1.5 font-mono text-xs tracking-wide text-white/85">
        {rows.map(([n, w, b]) => (
          <div key={n} className="grid grid-cols-[1.6rem_1fr_1fr] gap-2">
            <span className="text-gold/70">{n}</span>
            <span>{w}</span>
            <span className="text-white/55">{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const motifs = {
  empty: EmptyMotif,
  scoresheet: ScoresheetMotif,
};

export function ChessBackdrop({
  motif,
  className,
}: {
  motif: ChessMotif;
  className?: string;
}) {
  const Motif = motifs[motif];

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <Motif />
    </div>
  );
}
