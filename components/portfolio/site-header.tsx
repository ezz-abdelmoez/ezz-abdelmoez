"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { contactLinks, navLinks, profile } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);

  /* Scroll state + reading progress ------------------------------- */
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 24);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(y / max, 1) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  /* Scroll spy ---------------------------------------------------- */
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* Sliding pill behind the active nav link ------------------------ */
  useEffect(() => {
    const el = active ? linkRefs.current[active] : null;
    if (!el) {
      setPill(null);
      return;
    }
    setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active, scrolled]);

  /* Lock body scroll while the mobile menu is open ----------------- */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Reading progress */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-gold via-gold-soft to-gold/30 transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />

      <header
        className={cn(
          "fixed inset-x-0 z-50 transition-all duration-500",
          scrolled ? "top-3" : "top-0",
        )}
      >
        <div className="container-page">
          <nav
            aria-label="Primary"
            className={cn(
              "flex items-center justify-between gap-4 transition-all duration-500",
              scrolled
                ? "h-14 rounded-2xl border border-white/10 bg-background/70 px-4 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl"
                : "h-20 rounded-2xl border border-transparent px-0",
            )}
          >
            {/* Wordmark */}
            <a
              href="#top"
              className="group flex items-baseline gap-2 shrink-0"
              aria-label={`${profile.name} — back to top`}
            >
              <span className="font-display text-xl text-white transition-colors group-hover:text-gold">
                Ezz
              </span>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 sm:inline">
                .NET / React
              </span>
            </a>

            {/* Desktop links */}
            <div className="relative hidden items-center md:flex">
              {pill && (
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 -z-0 h-8 -translate-y-1/2 rounded-full bg-white/[0.07] ring-1 ring-white/10 transition-all duration-300 ease-out"
                  style={{ left: pill.left, width: pill.width }}
                />
              )}
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = active === id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    ref={(el) => {
                      linkRefs.current[id] = el;
                    }}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative z-10 px-4 py-2 text-sm transition-colors duration-300",
                      isActive ? "text-white" : "text-white/55 hover:text-white",
                    )}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Desktop actions */}
            <div className="hidden items-center gap-2 md:flex">
              <a
                href={`mailto:${contactLinks.email}`}
                className="link-underline px-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                Email
              </a>
              <a
                href={profile.resume}
                download
                className="inline-flex h-9 items-center gap-2 rounded-full bg-white px-4 text-sm font-medium text-black transition-all duration-300 hover:bg-gold hover:shadow-[0_10px_30px_-12px_rgb(var(--gold))]"
              >
                <Download className="h-3.5 w-3.5" />
                Résumé
              </a>
            </div>

            {/* Mobile trigger */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="relative z-[70] inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/10 md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        inert={!menuOpen}
        aria-hidden={!menuOpen}
        className={cn(
          "fixed inset-0 z-[55] bg-background/95 backdrop-blur-2xl transition-opacity duration-300 md:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative flex h-full flex-col px-6 pb-10 pt-28">
          <ul className="flex flex-1 flex-col justify-center gap-1">
            {navLinks.map((link, i) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "flex items-baseline gap-4 border-b border-white/[0.07] py-4 font-display text-4xl text-white transition-all duration-500",
                    menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                  )}
                  style={{ transitionDelay: menuOpen ? `${80 + i * 60}ms` : "0ms" }}
                >
                  <span className="font-mono text-[11px] text-gold/60">
                    0{i + 1}
                  </span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-3 pt-8">
            <a
              href={`mailto:${contactLinks.email}`}
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 text-sm text-white"
            >
              Email me
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resume}
              download
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white text-sm font-medium text-black"
            >
              <Download className="h-4 w-4" />
              Résumé
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
