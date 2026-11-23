import { site } from "@/lib/site-data";
import type { Project, SiteContent } from "@/lib/site-types";

export function catalogProjects(): Project[] {
  return site.projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return site.projects.find((project) => project.slug === slug);
}

export function workChrome(): SiteContent {
  return {
    ...site,
    navLinks: site.navLinks.map((link) => ({
      ...link,
      href: link.href.startsWith("#") ? `/${link.href}` : link.href,
    })),
  };
}
