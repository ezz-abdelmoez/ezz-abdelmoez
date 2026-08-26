import type { MetadataRoute } from "next";
import { portfolioTracks } from "@/lib/tracks";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const origin = "https://ezz-abdelmoez.vercel.app";

  return portfolioTracks.map((track, index) => ({
    url: track.href === "/" ? origin : `${origin}${track.href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.9,
  }));
}
