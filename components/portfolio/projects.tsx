"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Github, Layers } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";
import type { Project } from "@/lib/site-types";
import { ChessBackdrop } from "@/components/chess/chess-backdrop";
import { Chip, GlowOrb, Reveal, Section, SectionHeader } from "./primitives";
import { SectionTitle } from "./section-title";
import { cn } from "@/lib/utils";

function hostOf(url?: string) {
  if (!url) return "";
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function GalleryTile({
  project,
  index,
  selected,
  wide,
  onSelect,
}: {
  project: Project;
  index: number;
  selected: boolean;
  wide?: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      aria-label={`${project.title} — ${project.year}`}
      className={cn(
        "group/tile relative overflow-hidden rounded-2xl border text-left outline-none transition-all duration-400",
        wide ? "col-span-2 aspect-[16/8] min-h-[180px]" : "aspect-[4/3]",
        selected
          ? "border-gold/45 ring-1 ring-gold/30 shadow-[0_18px_50px_-24px_rgb(var(--gold)/0.55)]"
          : "border-white/[0.08] hover:-translate-y-0.5 hover:border-gold/25",
      )}
    >
      {project.image ? (
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover/tile:scale-[1.06]"
        />
      ) : (
        <div className="relative h-full w-full bg-background">
          <div className="bg-dots absolute inset-0 opacity-70" aria-hidden="true" />
          <GlowOrb
            className="-right-16 -top-16 h-48 w-48"
            color={index % 2 === 0 ? "gold" : "violet"}
          />
          <Layers
            className="absolute left-4 top-4 h-5 w-5 text-gold/50"
            strokeWidth={1.4}
            aria-hidden="true"
          />
        </div>
      )}

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent"
        aria-hidden="true"
      />

      {project.demo && (
        <span className="absolute right-3 top-3 rounded-full border border-white/12 bg-background/70 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/70 backdrop-blur-md">
          Live
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold/75">
          {project.subtitle}
        </p>
        <p
          className={cn(
            "mt-1 font-display leading-tight text-white",
            wide ? "text-2xl sm:text-3xl" : "text-base sm:text-lg",
          )}
        >
          {project.title}
        </p>
      </div>
    </button>
  );
}

function ProjectDetail({ project, index }: { project: Project; index: number }) {
  return (
    <article
      id="project-detail"
      className="surface relative overflow-hidden rounded-3xl p-6 md:p-8"
    >
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="font-mono text-[11px] tracking-[0.2em] text-gold/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px w-5 bg-white/15" aria-hidden="true" />
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
          {project.subtitle}
        </span>
        <span className="ml-auto font-mono text-[11px] text-white/30">{project.year}</span>
      </div>

      <h3 className="font-display text-3xl leading-tight text-white md:text-[2.35rem]">
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

      {(project.demo || project.repo || project.slug) && (
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-sm text-white/80 transition-colors hover:border-white/35 hover:text-white"
          >
            Case study
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-black transition-all duration-300 hover:bg-gold hover:shadow-[0_14px_36px_-16px_rgb(var(--gold))]"
            >
              {hostOf(project.demo) || "Live demo"}
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
    </article>
  );
}

export function Projects() {
  const { projects, copy } = useSiteContent();
  const [active, setActive] = useState(0);
  const headingId = useId();
  const catalogKey = projects.map((p) => p.title).join("|");

  useEffect(() => {
    setActive(0);
  }, [catalogKey]);

  const index = projects.length === 0 ? 0 : Math.min(active, projects.length - 1);
  const selected = projects[index];

  return (
    <Section
      id="work"
      className="border-t border-white/[0.06]"
      bleed={
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <GlowOrb className="right-[-15%] top-1/4 h-[500px] w-[500px]" color="violet" />
          <ChessBackdrop motif="grid" />
        </div>
      }
    >
      <SectionHeader
        index={copy.work.index}
        eyebrow={copy.work.eyebrow}
        title={<SectionTitle copy={copy.work} />}
        lead={copy.work.lead}
      />

      {selected && (
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10">
          <Reveal>
            <div role="group" aria-labelledby={headingId} className="grid grid-cols-2 gap-3">
              <p id={headingId} className="sr-only">
                Project gallery — select a work to read the details
              </p>
              {projects.map((project, i) => (
                <GalleryTile
                  key={project.title}
                  project={project}
                  index={i}
                  selected={i === index}
                  wide={i === 0}
                  onSelect={() => setActive(i)}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:sticky lg:top-28">
            <ProjectDetail project={selected} index={index} />
          </Reveal>
        </div>
      )}
    </Section>
  );
}
