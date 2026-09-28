"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const ChessScene = dynamic(
  () => import("./chess-scene").then((mod) => mod.ChessScene),
  { ssr: false },
);

const STORAGE_KEY = "ezz-chess-intro-v1";
const INTRO_MS = 8000;
const STILL_MS = 1800;

type Mode = "boot" | "play" | "still" | "leaving" | "done";

export function ChessIntro() {
  const [mode, setMode] = useState<Mode>("boot");
  const [titleOn, setTitleOn] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = false;
    }

    if (seen) {
      setMode("done");
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = Boolean(
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
        ?.saveData,
    );
    const weak = window.innerWidth < 700 || saveData;
    setMode(reduce || weak ? "still" : "play");
  }, []);

  useEffect(() => {
    if (mode !== "play" && mode !== "still") return;
    const ms = mode === "play" ? INTRO_MS : STILL_MS;
    const id = window.setTimeout(() => finish(), ms);
    const titleAt = window.setTimeout(() => setTitleOn(true), mode === "play" ? 4300 : 200);
    return () => {
      window.clearTimeout(id);
      window.clearTimeout(titleAt);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") finish();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (mode === "done") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mode]);

  const finish = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* private mode */
    }
    setMode((current) => (current === "done" ? current : "leaving"));
    window.setTimeout(() => setMode("done"), 900);
  };

  if (mode === "done") return null;

  const showTitle = titleOn;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[90] bg-[#07080c] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        mode === "leaving" && "-translate-y-full",
      )}
      role="dialog"
      aria-label="Cinematic introduction"
    >
      {mode === "play" && (
        <div className="absolute inset-0">
          <ChessScene />
        </div>
      )}

      {(mode === "still" || mode === "boot") && (
        <img
          src="/chess/intro-still.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07080c] via-transparent to-[#07080c]/40"
      />

      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center px-6 pb-16 text-center transition-all duration-700",
          showTitle && mode !== "boot" ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        )}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold/80">
          Opening
        </p>
        <p className="mt-3 font-display text-[clamp(2.6rem,8vw,5.5rem)] leading-[0.9] text-white">
          Ezz Abdelmoez
        </p>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.22em] text-white/50">
          A calculated move
        </p>
      </div>

      {mode !== "boot" && (
        <button
          type="button"
          onClick={finish}
          className="absolute right-5 top-5 z-[91] rounded-full border border-white/15 bg-background/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-md transition-colors hover:border-white/35 hover:text-white"
        >
          Skip intro
        </button>
      )}
    </div>
  );
}
