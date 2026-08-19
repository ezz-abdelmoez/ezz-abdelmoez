"use client";

import {
  Database,
  LayoutTemplate,
  Server,
  Smartphone,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { learning, skillGroups } from "@/lib/site-data";
import { Chip, Reveal, Section, SectionHeader } from "./primitives";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  server: Server,
  layout: LayoutTemplate,
  database: Database,
  smartphone: Smartphone,
  wrench: Wrench,
};

const spans = [
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
];

export function Skills() {
  return (
    <Section id="skills" className="border-t border-white/[0.06]">
      <SectionHeader
        index="02"
        eyebrow="Toolkit"
        title={
          <>
            The stack I <span className="text-gradient">actually</span> use.
          </>
        }
        lead="Grouped by what it does rather than by logo count — these are the tools I've shipped real features with."
      />

      <div className="grid gap-4 md:grid-cols-6">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon] ?? Server;
          return (
            <Reveal key={group.title} delay={i * 70} className={cn(spans[i] ?? "md:col-span-2")}>
              <div className="surface surface-hover group h-full rounded-2xl p-6 md:p-7">
                <div className="mb-5 flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.08] text-gold transition-colors duration-300 group-hover:bg-gold/15">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl leading-tight text-white">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-sm leading-snug text-white/45">{group.blurb}</p>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <Chip>{skill}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* ── Currently exploring ───────────────────────────────── */}
      <Reveal className="mt-16">
        <div className="mb-7 flex items-center gap-3">
          <Sparkles className="h-4 w-4 text-gold/70" aria-hidden="true" />
          <h3 className="font-display text-2xl text-white">Currently learning</h3>
          <span className="hidden font-mono text-[11px] text-white/35 sm:inline">
            — honest about what&apos;s still in progress
          </span>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {learning.map((item, i) => (
          <Reveal key={item.title} delay={i * 70}>
            <div className="surface surface-hover h-full rounded-2xl p-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold/70">
                {item.level}
              </span>
              <h4 className="mt-3 text-base font-medium text-white">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{item.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
