import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://ezz-abdelmoez.vercel.app",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://ezz-abdelmoez.vercel.app/software-engineer",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
