"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";
import { GlowOrb } from "./primitives";

function RotatingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, [words]);

  const word = words[index] ?? "";
  const widest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");

  return (
    <span className="relative inline-block align-baseline">
      {/* reserve the widest word so the headline never reflows */}
      <span aria-hidden="true" className="invisible">
        {widest}
      </span>
      <span
        key={index}
        className="text-gradient animate-word-in absolute inset-0 whitespace-nowrap"
      >
        {word}
      </span>
    </span>
  );
}

export function Hero() {
  const { profile, contactLinks, coreStack, heroStats, hero } = useSiteContent();
  const [leftChip, rightChip] = hero.chips;

  return (
    <section id="top" className="noise relative isolate overflow-hidden">
      {/* ── Backdrop ───────────────────────────────────────────── */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="bg-grid mask-fade-b absolute inset-0 opacity-70" />
        <GlowOrb className="animate-aurora -left-32 top-[-10%] h-[520px] w-[520px]" color="gold" />
        <GlowOrb
          className="animate-aurora right-[-10%] top-[10%] h-[560px] w-[560px]"
          color="violet"
        />
        <GlowOrb
          className="animate-aurora bottom-[-20%] left-1/3 h-[420px] w-[420px]"
          color="cyan"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="container-page relative">
        <div className="grid items-center gap-14 pb-16 pt-32 md:pt-36 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:pb-24 lg:pt-44">
          {/* ── Copy ─────────────────────────────────────────── */}
          <div>
            <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.07] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-gold">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-gold" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                {hero.availabilityLabel}
              </span>
              {hero.trackBadge && (
                <span className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">
                  {hero.trackBadge}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-white/40">
                <MapPin className="h-3 w-3" />
                {profile.location}
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.75rem,8.5vw,5.75rem)] leading-[0.95] tracking-tight text-white">
              <span className="block">{hero.headlineLine1}</span>
              <span className="block">
                {hero.headlineLine2Before} <RotatingWord words={hero.rotatingWords} />
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              {hero.introBeforeName} <span className="text-white">{profile.name}</span>
              {hero.introAfterName}{" "}
              <span className="text-white/85">{hero.introHighlight1}</span>
              {hero.introMid} <span className="text-white/85">{hero.introHighlight2}</span>
              {hero.introAfter}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={hero.primaryCta.href}
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-black transition-all duration-300 hover:bg-gold hover:shadow-[0_16px_40px_-16px_rgb(var(--gold))]"
              >
                {hero.primaryCta.label}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-6 text-sm text-white/80 transition-colors duration-300 hover:border-white/35 hover:text-white"
              >
                {hero.secondaryCta.label}
              </a>

              <div className="ml-1 flex items-center gap-1">
                <a
                  href={contactLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/55 transition-colors hover:border-white/30 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={contactLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/55 transition-colors hover:border-white/30 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Portrait ─────────────────────────────────────── */}
          <div className="relative mx-auto w-full max-w-[340px] lg:max-w-none">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-gold/20 via-transparent to-violet-500/10 blur-2xl"
              />

              <div className="surface relative overflow-hidden rounded-[2rem] p-2">
                <div className="relative overflow-hidden rounded-[1.6rem]">
                  <img
                    src={profile.photo}
                    alt={`Portrait of ${profile.fullName}`}
                    width={640}
                    height={640}
                    className="aspect-square w-full object-cover object-top grayscale-[0.15] transition-all duration-700 hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />

                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                    <div>
                      <p className="font-display text-lg leading-tight text-white">
                        {profile.name}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold/80">
                        {profile.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {leftChip && (
                <div
                  className="animate-float absolute -left-4 top-10 hidden rounded-xl border border-white/10 bg-background/85 px-3 py-2 shadow-xl backdrop-blur-md sm:block"
                  style={{ animationDelay: "0.4s" }}
                >
                  <p className="font-mono text-[10px] text-white/45">{leftChip.kicker}</p>
                  <p className="text-sm text-white">{leftChip.label}</p>
                </div>
              )}
              {rightChip && (
                <div
                  className="animate-float absolute -right-3 bottom-16 hidden rounded-xl border border-white/10 bg-background/85 px-3 py-2 shadow-xl backdrop-blur-md sm:block"
                  style={{ animationDelay: "1.6s" }}
                >
                  <p className="font-mono text-[10px] text-white/45">{rightChip.kicker}</p>
                  <p className="text-sm text-white">{rightChip.label}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Stat strip ─────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] md:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-background/80 px-5 py-6 backdrop-blur-sm">
              <p className="font-display text-2xl text-white md:text-3xl">{stat.value}</p>
              <p className="mt-1 whitespace-pre-line text-xs leading-snug text-white/45">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Stack marquee ────────────────────────────────────── */}
      <div className="marquee-paused relative mt-14 border-y border-white/[0.07] py-4">
        <div className="mask-fade-x flex overflow-hidden">
          <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
            {[...coreStack, ...coreStack].map((tech, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-10 font-mono text-xs uppercase tracking-[0.18em] text-white/35"
              >
                {tech}
                <span className="h-1 w-1 rounded-full bg-gold/40" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container-page hidden pb-6 pt-8 md:block">
        <a
          href="#about"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-white"
        >
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          Scroll
        </a>
      </div>
    </section>
  );
}
