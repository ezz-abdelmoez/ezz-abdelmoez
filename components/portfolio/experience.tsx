"use client";

import { Award, Briefcase, GraduationCap, Languages as LanguagesIcon } from "lucide-react";
import { certifications, education, languages, timeline } from "@/lib/site-data";
import { Reveal, Section, SectionHeader } from "./primitives";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <Section id="experience" className="border-t border-white/[0.06]">
      <SectionHeader
        index="04"
        eyebrow="The path so far"
        title={
          <>
            Experience &amp; <span className="text-gradient">education</span>
          </>
        }
        lead="From a computer science degree in Luxor, through ITI's .NET track, to shipping production software."
      />

      <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
        {/* ── Timeline ───────────────────────────────────────── */}
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/45 via-white/10 to-transparent"
          />

          <ol className="space-y-10">
            {timeline.map((item, i) => (
              <Reveal as="li" key={`${item.org}-${i}`} delay={i * 90} className="relative pl-9">
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border",
                    item.kind === "work"
                      ? "border-gold/60 bg-background"
                      : "border-white/25 bg-background",
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      item.kind === "work" ? "bg-gold" : "bg-white/40",
                    )}
                  />
                </span>

                <div className="surface surface-hover rounded-2xl p-6 md:p-7">
                  <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                      {item.kind === "work" ? (
                        <Briefcase className="h-3 w-3" />
                      ) : (
                        <GraduationCap className="h-3 w-3" />
                      )}
                      {item.kind === "work" ? "Role" : "Training"}
                    </span>
                    <span className="font-mono text-[11px] text-gold/70">{item.period}</span>
                    {item.location && (
                      <span className="font-mono text-[11px] text-white/30">{item.location}</span>
                    )}
                  </div>

                  <h3 className="font-display text-xl leading-snug text-white md:text-2xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-white/55">{item.org}</p>

                  <p className="mt-4 text-sm leading-relaxed text-white/55">{item.description}</p>

                  <ul className="mt-4 space-y-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-white/50"
                      >
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold/50" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* ── Side rail ──────────────────────────────────────── */}
        <div className="space-y-6">
          <Reveal>
            <div className="surface rounded-2xl p-6">
              <h3 className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
                <GraduationCap className="h-3.5 w-3.5 text-gold/70" />
                Education
              </h3>
              {education.map((edu) => (
                <div key={edu.degree}>
                  <p className="font-display text-lg leading-snug text-white">{edu.degree}</p>
                  <p className="mt-1 text-sm text-white/55">{edu.school}</p>
                  <p className="mt-2 font-mono text-[11px] text-white/35">
                    {edu.period} · {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="surface rounded-2xl p-6">
              <h3 className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
                <Award className="h-3.5 w-3.5 text-gold/70" />
                Certifications
              </h3>
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="border-b border-white/[0.06] pb-4 last:border-0 last:pb-0"
                  >
                    <p className="text-sm font-medium leading-snug text-white/90">{cert.name}</p>
                    <p className="mt-1 text-xs text-white/45">{cert.issuer}</p>
                    <p className="mt-1 font-mono text-[10px] text-gold/60">{cert.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="surface rounded-2xl p-6">
              <h3 className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
                <LanguagesIcon className="h-3.5 w-3.5 text-gold/70" />
                Languages
              </h3>
              <ul className="space-y-4">
                {languages.map((lang) => (
                  <li key={lang.name}>
                    <div className="mb-2 flex items-baseline justify-between gap-3">
                      <span className="text-sm text-white/90">{lang.name}</span>
                      <span className="font-mono text-[10px] text-white/40">{lang.level}</span>
                    </div>
                    <div className="flex gap-1" aria-hidden="true">
                      {[1, 2, 3, 4, 5].map((step) => (
                        <span
                          key={step}
                          className={cn(
                            "h-1 flex-1 rounded-full transition-colors",
                            step <= lang.score ? "bg-gold/70" : "bg-white/10",
                          )}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
