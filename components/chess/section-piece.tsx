"use client";

import { useEffect, useRef, useState } from "react";
import { ChessPiece, type ChessPieceName } from "@/components/chess/pieces";
import { cn } from "@/lib/utils";

export type { ChessPieceName };

const GHOST_POS: Record<ChessPieceName, string> = {
  king: "-right-[6%] top-[10%] h-[300px] w-[300px] xl:h-[340px] xl:w-[340px]",
  bishop: "-left-[5%] top-[8%] h-[300px] w-[300px] xl:h-[340px] xl:w-[340px]",
  queen: "-right-[6%] top-[6%] h-[320px] w-[320px] xl:h-[360px] xl:w-[360px]",
  knight: "-right-[8%] top-[16%] h-[340px] w-[340px] xl:h-[380px] xl:w-[380px]",
  rook: "-left-[4%] bottom-[8%] h-[280px] w-[280px] xl:h-[320px] xl:w-[320px]",
  pawn: "-right-[5%] top-[10%] h-[280px] w-[280px] xl:h-[320px] xl:w-[320px]",
};

export function SectionPieceGlyph({
  piece,
  square,
}: {
  piece: ChessPieceName;
  square?: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5" aria-hidden="true">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-[3px] border border-gold/25 bg-gold/10 text-gold">
        <ChessPiece piece={piece} className="h-3.5 w-3.5" />
      </span>
      {square ? (
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-gold/55 sm:inline">
          {square}
        </span>
      ) : null}
    </span>
  );
}

export function SectionPieceGhost({
  piece,
  className,
}: {
  piece: ChessPieceName;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [placed, setPlaced] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPlaced(true);
      return;
    }

    const target = ref.current?.closest("section") ?? ref.current;
    if (!target) return;

    if (typeof IntersectionObserver === "undefined") {
      setPlaced(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlaced(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute hidden text-gold lg:block",
        GHOST_POS[piece],
        "chess-place",
        placed && "is-placed",
        className,
      )}
    >
      <ChessPiece piece={piece} className="h-full w-full" />
    </div>
  );
}
