"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const ChessPlateScene = dynamic(
  () => import("./chess-plate-scene").then((mod) => mod.ChessPlateScene),
  { ssr: false },
);

type Mode = "boot" | "play" | "still";

export function ChessHeroPlate() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<Mode>("boot");
  const [inView, setInView] = useState(true);
  const [pageOn, setPageOn] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = Boolean(
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData,
    );
    setMode(reduce || saveData ? "still" : "play");
  }, []);

  useEffect(() => {
    if (mode !== "play") return;
    const node = frameRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio > 0.08),
      { threshold: [0, 0.08, 0.35] },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [mode]);

  useEffect(() => {
    if (mode !== "play") return;
    const onVis = () => setPageOn(document.visibilityState === "visible");
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [mode]);

  const showFilm = mode === "play" && inView && pageOn;

  return (
    <div
      ref={frameRef}
      aria-hidden="true"
      className="pointer-events-none absolute -right-[10%] top-[11%] z-0 hidden aspect-[16/10] w-[min(54vw,640px)] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#07080c] shadow-[0_40px_90px_-36px_rgb(var(--gold)/0.4)] lg:block"
    >
      {showFilm ? (
        <div className="absolute inset-0">
          <ChessPlateScene />
        </div>
      ) : (
        <img
          src="/chess/intro-still.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div className="absolute inset-x-0 top-0 h-[9%] bg-black/65" />
      <div className="absolute inset-x-0 bottom-0 h-[11%] bg-gradient-to-t from-black/85 to-black/45" />
      <div className="absolute inset-y-0 left-0 w-[28%] bg-gradient-to-r from-background via-background/50 to-transparent" />
      <div
        className="hero-plate-grain pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold/75">
          Opening
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">Nf3</span>
      </div>
    </div>
  );
}
