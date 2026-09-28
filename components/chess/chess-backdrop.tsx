"use client";

import { useSiteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export type ChessMotif = "file" | "coords" | "grid" | "rank" | "knight" | "empty";

const COORDS = ["a1", "e4", "Nf3", "Qd2", "O-O", "h7", "b5", "Rd1", "c3", "Kg1"];

function KnightSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor" aria-hidden="true">
      <path d="M14 54h36v4H14zM18 50c0-6 3-10 8-14 2-8 4-14 12-18 3-1 5 1 4 4-2 3 1 5 4 4 4-1 8 3 8 9 0 6-3 11-10 13H22c-3 0-4-2-4-4zM28 22c-5 2-8 7-9 12 4-3 9-4 13-2-1-4-1-8-4-10z" />
    </svg>
  );
}

function FileMotif() {
  return (
    <div className="chess-drift absolute left-[4%] top-[8%] hidden w-16 flex-col opacity-[0.11] md:flex">
      <span className="mb-2 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
        e
      </span>
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "aspect-square w-full border border-white/5",
            i % 2 === 0 ? "bg-gold/25" : "bg-white/[0.04]",
          )}
        />
      ))}
    </div>
  );
}

function CoordsMotif() {
  const line = [...COORDS, ...COORDS, ...COORDS];
  return (
    <div className="absolute inset-x-0 top-1/3 mask-fade-x overflow-hidden opacity-[0.09]">
      <div className="chess-coords-track flex w-max gap-10 font-mono text-4xl uppercase tracking-[0.28em] text-white md:text-6xl">
        {line.map((c, i) => (
          <span key={`${c}-${i}`}>{c}</span>
        ))}
      </div>
    </div>
  );
}

function GridMotif() {
  return (
    <div className="chess-hero-board absolute -right-[22%] top-[10%] h-[620px] w-[620px] opacity-[0.08]" />
  );
}

function RankMotif() {
  return (
    <div className="chess-drift absolute bottom-[12%] left-[8%] right-[8%] hidden h-10 opacity-[0.1] md:block">
      <div className="flex h-full">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "relative h-full flex-1 border border-white/5",
              i % 2 === 0 ? "bg-gold/20" : "bg-white/[0.03]",
            )}
          >
            {i === 3 && (
              <span className="absolute inset-1 rounded-sm bg-gold/50 shadow-[0_0_24px_rgb(var(--gold)/0.45)]" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

function KnightMotif() {
  return (
    <div className="chess-float absolute -right-8 top-8 hidden h-[380px] w-[380px] text-gold opacity-[0.08] lg:block">
      <KnightSvg className="h-full w-full" />
    </div>
  );
}

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

const motifs = {
  file: FileMotif,
  coords: CoordsMotif,
  grid: GridMotif,
  rank: RankMotif,
  knight: KnightMotif,
  empty: EmptyMotif,
};

export function ChessBackdrop({
  motif,
  className,
}: {
  motif: ChessMotif;
  className?: string;
}) {
  const { slug } = useSiteContent();
  if (slug !== "home") return null;

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
