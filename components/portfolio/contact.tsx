"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Check,
  Clock,
  Copy,
  FileSignature,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useSiteContent } from "@/lib/site-content";
import { GlowOrb, Reveal, Section, SectionHeader } from "./primitives";
import { SectionTitle } from "./section-title";

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      /* clipboard unavailable — fail quietly */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/45 opacity-0 transition-all duration-300 hover:border-white/25 hover:text-white focus-visible:opacity-100 group-hover:opacity-100"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-gold" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  );
}

function MessageForm() {
  const { contactLinks, copy } = useSiteContent();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`${copy.formSubjectPrefix} ${name || "someone"}`);
    const body = encodeURIComponent(
      `${message}\n\n—\n${name}${email ? `\n${email}` : ""}`,
    );

    window.location.href = `mailto:${contactLinks.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const fieldClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 transition-colors focus:border-gold/40 focus:bg-white/[0.05] focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="surface rounded-2xl p-6 md:p-7">
      <h3 className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
        Send a message
      </h3>

      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="sr-only">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Your email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="What are you building?"
            className={`${fieldClass} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="group mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white text-sm font-medium text-black transition-all duration-300 hover:bg-gold hover:shadow-[0_14px_36px_-16px_rgb(var(--gold))]"
      >
        {sent ? "Opening your mail app…" : "Send message"}
        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>

      <p className="mt-3 text-center text-xs text-white/30" role="status">
        This opens your email client with the message ready to send.
      </p>
    </form>
  );
}

export function Contact() {
  const { contactLinks, profile, documents, copy } = useSiteContent();
  const cv = documents.find((d) => d.kind === "cv" && d.available);
  const cover = documents.find((d) => d.kind === "cover-letter" && d.available);
  const resumeHref = cv?.href ?? profile.resume;
  const showResume = Boolean(cv || documents.length === 0);

  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: contactLinks.email,
      href: `mailto:${contactLinks.email}`,
      copyable: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: contactLinks.phone,
      href: `tel:${contactLinks.phone}`,
      copyable: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: contactLinks.linkedinHandle,
      href: contactLinks.linkedin,
      copyable: false,
    },
    {
      icon: Github,
      label: "GitHub",
      value: contactLinks.githubHandle,
      href: contactLinks.github,
      copyable: false,
    },
  ] as const;

  return (
    <Section
      id="contact"
      className="border-t border-white/[0.06]"
      bleed={
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <GlowOrb className="left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2" color="gold" />
        </div>
      }
    >
      <SectionHeader
        index={copy.contact.index}
        eyebrow={copy.contact.eyebrow}
        title={<SectionTitle copy={copy.contact} />}
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <p className="max-w-lg text-lg leading-relaxed text-white/60">{copy.contactBody}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`mailto:${contactLinks.email}`}
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-black transition-all duration-300 hover:bg-gold hover:shadow-[0_16px_40px_-16px_rgb(var(--gold))]"
            >
              {contactLinks.email}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            {showResume && (
              <a
                href={resumeHref}
                download
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-6 text-sm text-white/80 transition-colors hover:border-white/35 hover:text-white"
              >
                Download résumé
              </a>
            )}
            {cover && (
              <a
                href={cover.href}
                download
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-6 text-sm text-white/80 transition-colors hover:border-white/35 hover:text-white"
              >
                <FileSignature className="h-4 w-4" />
                Cover letter
              </a>
            )}
            {!showResume && documents.length > 0 && (
              <a
                href="#documents"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-6 text-sm text-white/80 transition-colors hover:border-white/35 hover:text-white"
              >
                View documents
              </a>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-gold/60" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-gold/60" />
              {profile.timezone}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-gold" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              {profile.availabilityNote}
            </span>
          </div>

          {/* Channels */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {channels.map((channel) => {
              const Icon = channel.icon;
              const external = channel.href.startsWith("http");
              return (
                <div
                  key={channel.label}
                  className="surface surface-hover group relative rounded-2xl p-5"
                >
                  <a
                    href={channel.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    <Icon
                      className="mb-3 h-4.5 w-4.5 text-white/45 transition-colors group-hover:text-gold"
                      strokeWidth={1.6}
                    />
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                      {channel.label}
                    </p>
                    <p className="mt-1 break-all text-sm text-white/85">{channel.value}</p>
                  </a>
                  {channel.copyable && (
                    <CopyButton value={channel.value} label={channel.label} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <Reveal delay={100}>
          <MessageForm />
        </Reveal>
      </div>
    </Section>
  );
}
