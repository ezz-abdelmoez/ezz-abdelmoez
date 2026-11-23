"use client";

import { ArrowUpRight } from "lucide-react";
import { TrackLinks } from "@/components/portfolio/track-links";
import { useSiteContent } from "@/lib/site-content";

export function SiteFooter() {
  const { contactLinks, navLinks, profile, documents, copy } = useSiteContent();
  const cv = documents.find((d) => d.kind === "cv" && d.available);
  const cover = documents.find((d) => d.kind === "cover-letter" && d.available);
  const resumeHref = cv?.href ?? profile.resume;
  const showResume = documents.length === 0 || Boolean(cv);

  const social = [
    { name: "GitHub", href: contactLinks.github },
    { name: "LinkedIn", href: contactLinks.linkedin },
    { name: "Email", href: `mailto:${contactLinks.email}` },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(60%_100%_at_50%_100%,rgb(var(--gold)/0.12),transparent_70%)]"
      />

      <div className="container-page relative">
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] md:py-20">
          <div>
            <p className="font-display text-2xl text-white">{profile.name}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-gold/70">
              {profile.tagline}
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/45">
              {copy.footerBlurb}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-white/35">
              Sections
            </h2>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="link-underline text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Portfolio tracks">
            <h2 className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-white/35">
              Tracks
            </h2>
            <TrackLinks
              className="space-y-3"
              linkClassName="link-underline text-sm text-white/55 transition-colors hover:text-white"
            />
          </nav>

          <div>
            <h2 className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-white/35">
              Elsewhere
            </h2>
            <ul className="space-y-3">
              {social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-1 text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
              {showResume && (
                <li>
                  <a
                    href={resumeHref}
                    download
                    className="group inline-flex items-center gap-1 text-sm text-white/55 transition-colors hover:text-white"
                  >
                    Résumé (PDF)
                    <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </li>
              )}
              {cover && (
                <li>
                  <a
                    href={cover.href}
                    download
                    className="group inline-flex items-center gap-1 text-sm text-white/55 transition-colors hover:text-white"
                  >
                    Cover letter (PDF)
                    <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div aria-hidden="true" className="mask-fade-b select-none overflow-hidden">
          <p className="font-display text-[clamp(3.5rem,15vw,12rem)] leading-[0.85] tracking-tight text-white/[0.05]">
            Ezz Abdelmoez
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] py-7 sm:flex-row">
          <p className="font-mono text-[11px] text-white/30">
            © {new Date().getFullYear()} {profile.fullName}
          </p>
          <p className="font-mono text-[11px] text-white/30">
            Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
