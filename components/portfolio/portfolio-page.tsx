"use client";

import { About } from "@/components/portfolio/about";
import { BackToTop } from "@/components/portfolio/back-to-top";
import { Contact } from "@/components/portfolio/contact";
import { Documents } from "@/components/portfolio/documents";
import { Experience } from "@/components/portfolio/experience";
import { Hero } from "@/components/portfolio/hero";
import { Projects } from "@/components/portfolio/projects";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteHeader } from "@/components/portfolio/site-header";
import { Skills } from "@/components/portfolio/skills";
import { Teaching } from "@/components/portfolio/teaching";
import { useSiteContent } from "@/lib/site-content";

export function PortfolioPage() {
  const { documents } = useSiteContent();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-white focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="relative overflow-x-clip">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Teaching />
        {documents.length > 0 && <Documents />}
        <Contact />
      </main>

      <SiteFooter />
      <BackToTop />
    </>
  );
}
