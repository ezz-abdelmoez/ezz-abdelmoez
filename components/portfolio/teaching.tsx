"use client";

import { BookOpen, GraduationCap, Sparkle } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";
import { Chip, GlowOrb, Reveal, Section, SectionHeader } from "./primitives";
import { SectionTitle } from "./section-title";

export function Teaching() {
  const { beyondCode, teaching, copy } = useSiteContent();

  return (
    <Section
      id="teaching"
      className="border-t border-white/[0.06]"
      bleed={
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <GlowOrb className="left-1/4 top-0 h-[420px] w-[420px]" color="gold" />
        </div>
      }
    >
      <SectionHeader
        index={copy.teaching.index}
        eyebrow={copy.teaching.eyebrow}
        title={<SectionTitle copy={copy.teaching} />}
      />

      <Reveal>
        <div className="surface relative overflow-hidden rounded-3xl p-7 md:p-10">
          <div className="bg-dots absolute inset-0 opacity-40" aria-hidden="true" />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.07] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
                <BookOpen className="h-3 w-3" />
                Side project
              </span>

              <p
                dir="rtl"
                lang="ar"
                className="mt-6 font-display text-[clamp(2.25rem,6vw,3.5rem)] leading-tight text-white"
              >
                {teaching.brand}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                {teaching.brandLatin}
              </p>

              <p className="mt-6 max-w-md text-base leading-relaxed text-white/55">
                {teaching.intro}
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
                  Topics covered
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {teaching.topics.map((topic) => (
                    <li key={topic}>
                      <Chip>{topic}</Chip>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
                  <GraduationCap className="h-3.5 w-3.5 text-gold/70" />
                  School curricula
                </h3>
                <ul className="space-y-3">
                  {teaching.curricula.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-sm leading-relaxed text-white/65"
                    >
                      <Sparkle
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/60"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ── Beyond code ───────────────────────────────────────── */}
      <Reveal className="mt-16 mb-7">
        <h3 className="font-display text-2xl text-white">Beyond code</h3>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {beyondCode.map((item, i) => (
          <Reveal key={item.title} delay={i * 80}>
            <div className="surface surface-hover h-full rounded-2xl p-6">
              <h4 className="font-display text-xl text-white">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{item.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
