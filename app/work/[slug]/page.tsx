import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackToTop } from "@/components/portfolio/back-to-top";
import { ProjectCaseStudy } from "@/components/portfolio/project-case-study";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteHeader } from "@/components/portfolio/site-header";
import { catalogProjects, getProjectBySlug, workChrome } from "@/lib/project-catalog";
import { SiteContentProvider } from "@/lib/site-content";
import { siteUrl } from "@/lib/track-seo";
import { withAvailableDocuments } from "@/lib/with-available-documents";

type Params = { slug: string };

export function generateStaticParams() {
  return catalogProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Work" };

  const title = project.title;
  const description = project.description;
  const url = `${siteUrl}/work/${project.slug}`;

  return {
    title,
    description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      url,
      title: `${project.title} — Ezz Abdelmoez`,
      description,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function WorkPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const content = withAvailableDocuments(workChrome());

  return (
    <SiteContentProvider value={content}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-white focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <ProjectCaseStudy project={project} />
      </main>
      <SiteFooter />
      <BackToTop />
    </SiteContentProvider>
  );
}
