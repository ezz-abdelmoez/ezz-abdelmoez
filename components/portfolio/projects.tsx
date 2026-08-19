"use client";

import { ArrowUpRight, Check, Code2, Github, Layers } from "lucide-react";
import { projects, type Project } from "@/lib/site-data";
import { Chip, GlowOrb, Reveal, Section, SectionHeader } from "./primitives";
import { cn } from "@/lib/utils";

function ProjectVisual({ project, index }: { project: Project; index: number }) {
  if (project.image) {
    return (
      <div className="surface group/visual relative overflow-hidden rounded-2xl p-2">
        {/* browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          {project.demo && (
            <span className="ml-3 truncate font-mono text-[10px] text-white/30">
              {project.demo.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </span>
          )}
        </div>
        <div className="relative overflow-hidden rounded-xl border border-white/[0.07]">
          <img
            src={project.image}
            alt={`${project.title} interface`}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover/visual:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
      </div>
    );
  }

  // Fallback visual for projects without a screenshot
  return (
    <div className="surface relative overflow-hidden rounded-2xl">
      <div className="bg-dots absolute inset-0 opacity-60" aria-hidden="true" />
      <GlowOrb
        className="-right-20 -top-20 h-64 w-64"
        color={index % 2 === 0 ? "gold" : "violet"}
      />
      <div className="relative flex aspect-[16/10] flex-col justify-between p-7">
        <Layers className="h-6 w-6 text-gold/70" strokeWidth={1.4} aria-hidden="true" />
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
            {project.subtitle}
          </p>
          <p className="mt-2 font-display text-3xl leading-tight text-white/90">
            {project.title}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-background/60 px-2.5 py-1 font-mono text-[10px] text-white/50"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1;

  return (
    <Reveal as="article" className="group">
      <div
        className={cn(
          "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
          flipped && "lg:[&>*:first-child]:order-2",
        )}
      >
        <ProjectVisual project={project} index={index} />

        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-[11px] tracking-[0.2em] text-gold/70">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-5 bg-white/15" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
              {project.subtitle}
            </span>
            <span className="ml-auto font-mono text-[11px] text-white/30">{project.year}</span>
          </div>

          <h3 className="font-display text-3xl leading-tight text-white md:text-4xl">
            {project.title}
          </h3>

          <p className="mt-4 text-base leading-relaxed text-white/55">{project.description}</p>

          {project.highlights.length > 0 && (
            <ul className="mt-6 space-y-2.5">
              {project.highlights.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-white/65">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold/70"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
          )}

          <ul className="mt-7 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t}>
                <Chip>{t}</Chip>
              </li>
            ))}
          </ul>

          {(project.demo || project.repo) && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cta inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-black transition-all duration-300 hover:bg-gold hover:shadow-[0_14px_36px_-16px_rgb(var(--gold))]"
                >
                  Live demo
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-sm text-white/75 transition-colors hover:border-white/35 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  Source
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Section
      id="work"
      className="border-t border-white/[0.06]"
      bleed={
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <GlowOrb className="right-[-15%] top-1/4 h-[500px] w-[500px]" color="violet" />
        </div>
      }
    >
      <SectionHeader
        index="03"
        eyebrow="Selected work"
        title={
          <>
            Products I&apos;ve <span className="text-gradient">built</span> end to end.
          </>
        }
        lead="Booking platforms and management systems — the kind with roles, permissions, schedules and a lot of edge cases."
      />

      <div className="space-y-20 md:space-y-28">
        {featured.map((project, i) => (
          <FeaturedProject key={project.title} project={project} index={i} />
        ))}
      </div>

      {others.length > 0 && (
        <div className="mt-24">
          <Reveal className="mb-8 flex items-center gap-3">
            <Code2 className="h-4 w-4 text-gold/70" aria-hidden="true" />
            <h3 className="font-display text-2xl text-white">Also built</h3>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {others.map((project, i) => (
              <Reveal key={project.title} delay={i * 80}>
                <article className="surface surface-hover h-full rounded-2xl p-6">
                  <div className="mb-3 flex items-baseline justify-between gap-4">
                    <h4 className="font-display text-xl text-white">{project.title}</h4>
                    <span className="shrink-0 font-mono text-[11px] text-white/30">
                      {project.year}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold/60">
                    {project.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <li key={t}>
                        <Chip>{t}</Chip>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
