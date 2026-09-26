import type { MetadataRoute } from "next";
import { catalogProjects } from "@/lib/project-catalog";
import { portfolioTracks } from "@/lib/tracks";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const origin = "https://ezz-abdelmoez.vercel.app";

  const tracks = portfolioTracks.map((track, index) => ({
    url: track.href === "/" ? origin : `${origin}${track.href}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: index === 0 ? 1 : 0.9,
  }));

  const work = catalogProjects().map((project) => ({
    url: `${origin}/work/${project.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...tracks, ...work];
}
