import type { SiteContent } from "@/lib/site-types";

export const portfolioTracks = [
  { slug: "home" as const, label: "Full Stack", href: "/" },
  { slug: "software-engineer" as const, label: "Software Engineer", href: "/software-engineer" },
  { slug: "frontend-engineer" as const, label: "Frontend Engineer", href: "/frontend-engineer" },
  { slug: "desktop-engineer" as const, label: "Desktop Engineer", href: "/desktop-engineer" },
  { slug: "backend-engineer" as const, label: "Backend Engineer", href: "/backend-engineer" },
];

export function otherTracks(slug: SiteContent["slug"]) {
  return portfolioTracks.filter((track) => track.slug !== slug);
}
