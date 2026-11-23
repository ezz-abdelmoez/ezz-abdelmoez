"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";
import { otherTracks } from "@/lib/tracks";
import { cn } from "@/lib/utils";

export function TrackLinks({
  className,
  linkClassName,
  onNavigate,
}: {
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
}) {
  const { slug } = useSiteContent();
  const tracks = otherTracks(slug);

  return (
    <ul className={className}>
      {tracks.map((track) => (
        <li key={track.href}>
          <Link href={track.href} onClick={onNavigate} className={linkClassName}>
            {track.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function TrackMenu({ className }: { className?: string }) {
  const { slug } = useSiteContent();
  const tracks = otherTracks(slug);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("mousedown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!tracks.length) return null;

  return (
    <div ref={rootRef} className={cn("relative hidden xl:block", className)}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-9 items-center gap-1 rounded-full px-2 text-sm text-white/45 transition-colors hover:text-white"
      >
        Tracks
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-[calc(100%+8px)] z-50 min-w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-background/95 py-1 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl"
        >
          {tracks.map((track) => (
            <li key={track.href} role="option">
              <Link
                href={track.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {track.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
