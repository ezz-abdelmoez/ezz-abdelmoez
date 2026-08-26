"use client";

import Link from "next/link";
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

  if (!tracks.length) return null;

  return (
    <nav aria-label="Other portfolios" className={cn("hidden items-center gap-3 xl:flex", className)}>
      {tracks.map((track) => (
        <Link
          key={track.href}
          href={track.href}
          className="link-underline text-sm text-white/45 transition-colors hover:text-white"
        >
          {track.label}
        </Link>
      ))}
    </nav>
  );
}
