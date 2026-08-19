"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Reveal — fades content in the first time it enters the viewport.   */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article" | "span";
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as any;

  return (
    <Component
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

/* ------------------------------------------------------------------ */
/*  Section shell + heading                                            */
/* ------------------------------------------------------------------ */

export function Section({
  id,
  children,
  className,
  bleed,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  bleed?: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative isolate py-20 md:py-28 lg:py-36", className)}>
      {bleed}
      <div className="container-page relative z-10">{children}</div>
    </section>
  );
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-2xl",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 mb-5",
          align === "center" && "justify-center",
        )}
      >
        {index && (
          <span className="font-mono text-[11px] tracking-[0.2em] text-gold/70">{index}</span>
        )}
        <span className="h-px w-6 bg-gold/40" aria-hidden="true" />
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
          {eyebrow}
        </span>
      </div>

      <h2 className="font-display text-[clamp(2.1rem,5.2vw,3.6rem)] leading-[1.02] tracking-tight text-white">
        {title}
      </h2>

      {lead && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-white/55",
            align === "center" && "mx-auto",
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Small pieces                                                       */
/* ------------------------------------------------------------------ */

export function Chip({
  children,
  className,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "gold";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide transition-colors",
        tone === "gold"
          ? "border-gold/30 bg-gold/10 text-gold"
          : "border-white/10 bg-white/[0.04] text-white/65 hover:border-white/20 hover:text-white/90",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function GlowOrb({
  className,
  color = "gold",
}: {
  className?: string;
  color?: "gold" | "violet" | "cyan";
}) {
  const colors = {
    gold: "rgb(var(--gold) / 0.16)",
    violet: "rgb(var(--violet) / 0.14)",
    cyan: "rgb(var(--cyan) / 0.12)",
  } as const;

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute rounded-full blur-[110px]", className)}
      style={{ background: colors[color] }}
    />
  );
}
