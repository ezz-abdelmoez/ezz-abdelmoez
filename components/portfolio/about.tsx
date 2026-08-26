"use client";

import { Quote } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";
import { GlowOrb, Reveal, Section, SectionHeader } from "./primitives";
import { SectionTitle } from "./section-title";

export function About() {
  const { profile, quickFacts, copy } = useSiteContent();

  return (
    <Section
      id="about"
      bleed={
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <GlowOrb className="-left-40 top-1/3 h-[420px] w-[420px]" color="gold" />
        </div>
      }
    >
      <SectionHeader
        index={copy.about.index}
        eyebrow={copy.about.eyebrow}
        title={<SectionTitle copy={copy.about} />}
      />

      <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
        {/* Narrative */}
        <div>
          <Reveal>
            <div className="relative mb-10 rounded-2xl border-l-2 border-gold/50 bg-white/[0.025] p-6 pl-7">
              <Quote className="mb-3 h-5 w-5 text-gold/60" aria-hidden="true" />
              <p className="font-display text-xl leading-snug text-white/90 md:text-2xl">
                {profile.summary}
              </p>
            </div>
          </Reveal>

          <div className="space-y-5">
            {profile.bio.map((paragraph, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="text-base leading-relaxed text-white/55 md:text-[1.05rem]">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Quick facts */}
        <Reveal delay={120}>
          <div className="surface sticky top-28 rounded-2xl p-6 md:p-7">
            <h3 className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
              At a glance
            </h3>
            <dl className="space-y-5">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="border-b border-white/[0.06] pb-5 last:border-0 last:pb-0">
                  <dt className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-gold/70">
                    {fact.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-white/80">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
