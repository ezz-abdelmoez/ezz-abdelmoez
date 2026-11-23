"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Github, Layers } from "lucide-react";
import type { Project } from "@/lib/site-types";
import { catalogProjects } from "@/lib/project-catalog";
import { Chip, GlowOrb } from "./primitives";

function hostOf(url?: string) {
  if (!url) return "";
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  const others = catalogProjects().filter((item) => item.slug !== project.slug);
  const study = project.caseStudy;

  return (
    <article className="relative overflow-x-clip pb-24 pt-28 md:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <GlowOrb className="left-[-10%] top-20 h-[420px] w-[420px]" color="gold" />
        <GlowOrb className="right-[-12%] top-40 h-[480px] w-[480px]" color="violet" />
      </div>

      <div className="container-page">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/45 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All work
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold/75">
            {project.subtitle}
            <span className="mx-2 text-white/20">·</span>
            {project.year}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.4rem)] leading-[0.95] text-white">
            {project.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/55">{project.description}</p>

          {study?.role && (
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-white/40">
              Role · {study.role}
            </p>
          )}
        </header>

        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-white/[0.08]">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} interface`}
              className="aspect-[16/9] w-full object-cover object-top"
            />
          ) : (
            <div className="relative flex aspect-[16/9] flex-col justify-between bg-background p-8">
              <div className="bg-dots absolute inset-0 opacity-60" aria-hidden="true" />
              <GlowOrb className="-right-20 -top-16 h-64 w-64" color="gold" />
              <Layers className="relative h-6 w-6 text-gold/60" strokeWidth={1.4} />
              <p className="relative font-display text-4xl text-white/80">{project.title}</p>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-black transition-all duration-300 hover:bg-gold"
            >
              {hostOf(project.demo) || "Live demo"}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-sm text-white/75 hover:border-white/35 hover:text-white"
            >
              <Github className="h-4 w-4" />
              Source
            </a>
          )}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="space-y-10">
            {study?.problem && (
              <section>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold/70">
                  The brief
                </h2>
                <p className="mt-3 text-base leading-relaxed text-white/60">{study.problem}</p>
              </section>
            )}

            {(study?.approach?.length || project.highlights.length > 0) && (
              <section>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold/70">
                  What shipped
                </h2>
                <ul className="mt-4 space-y-3">
                  {(study?.approach ?? project.highlights).map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-white/65">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" strokeWidth={2} />
                      {point}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {study?.outcome && (
              <section>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold/70">
                  Outcome
                </h2>
                <p className="mt-3 text-base leading-relaxed text-white/60">{study.outcome}</p>
              </section>
            )}
          </div>

          <aside className="surface h-fit rounded-3xl p-6">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
              Stack
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <li key={item}>
                  <Chip>{item}</Chip>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {others.length > 0 && (
          <section className="mt-24">
            <h2 className="font-display text-2xl text-white">More work</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {others.slice(0, 6).map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/work/${item.slug}`}
                    className="surface surface-hover block rounded-2xl p-5"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold/70">
                      {item.subtitle}
                    </p>
                    <p className="mt-2 font-display text-xl text-white">{item.title}</p>
                    <p className="mt-2 font-mono text-[11px] text-white/35">{item.year}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
