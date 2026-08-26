"use client";

import { Download, FileSignature, FileText, Upload } from "lucide-react";
import { useSiteContent } from "@/lib/site-content";
import type { DocumentAsset } from "@/lib/site-types";
import { GlowOrb, Reveal, Section, SectionHeader } from "./primitives";
import { SectionTitle } from "./section-title";

const icons = {
  cv: FileText,
  "cover-letter": FileSignature,
  other: FileText,
} as const;

function DocumentCard({ doc, delay }: { doc: DocumentAsset; delay: number }) {
  const Icon = icons[doc.kind];

  return (
    <Reveal delay={delay}>
      <article className="surface surface-hover flex h-full flex-col rounded-2xl p-6 md:p-7">
        <div className="mb-5 flex items-start justify-between gap-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.08] text-gold">
            <Icon className="h-5 w-5" strokeWidth={1.6} />
          </span>
          <span
            className={
              doc.available
                ? "rounded-full border border-gold/25 bg-gold/[0.08] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-gold"
                : "rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40"
            }
          >
            {doc.available ? "Ready" : "Awaiting upload"}
          </span>
        </div>

        <h3 className="font-display text-2xl text-white">{doc.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">{doc.description}</p>
        <p className="mt-4 font-mono text-[11px] text-white/35">{doc.filename}</p>

        {doc.available ? (
          <a
            href={doc.href}
            download
            className="group mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-black transition-all duration-300 hover:bg-gold hover:shadow-[0_14px_36px_-16px_rgb(var(--gold))]"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        ) : (
          <div className="mt-6 flex items-center gap-2 rounded-full border border-dashed border-white/15 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/35">
            <Upload className="h-3.5 w-3.5" />
            PDF coming soon
          </div>
        )}
      </article>
    </Reveal>
  );
}

export function Documents() {
  const { documents, copy } = useSiteContent();
  if (!documents.length) return null;

  return (
    <Section
      id="documents"
      className="border-t border-white/[0.06]"
      bleed={
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <GlowOrb className="right-[-10%] top-1/3 h-[420px] w-[420px]" color="cyan" />
        </div>
      }
    >
      <SectionHeader
        index={copy.documents.index}
        eyebrow={copy.documents.eyebrow}
        title={<SectionTitle copy={copy.documents} />}
        lead={copy.documents.lead}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {documents.map((doc, i) => (
          <DocumentCard key={doc.id} doc={doc} delay={i * 80} />
        ))}
      </div>
    </Section>
  );
}
