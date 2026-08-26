/**
 * Shared shape for every portfolio track on the site.
 * Home and the /software-engineer, /frontend-engineer and /desktop-engineer tracks.
 */

export type NavLink = {
  name: string;
  href: string;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type QuickFact = {
  label: string;
  value: string;
};

export type SkillGroup = {
  title: string;
  blurb: string;
  icon: "server" | "layout" | "database" | "smartphone" | "wrench" | "palette" | "monitor";
  skills: string[];
};

export type Project = {
  title: string;
  subtitle: string;
  year: string;
  description: string;
  highlights: string[];
  tech: string[];
  image?: string;
  demo?: string;
  repo?: string;
  featured?: boolean;
};

export type TimelineItem = {
  kind: "work" | "training";
  role: string;
  org: string;
  period: string;
  location?: string;
  description: string;
  points: string[];
  current?: boolean;
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  location: string;
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
};

export type LearningItem = {
  title: string;
  note: string;
  level: string;
};

export type Language = {
  name: string;
  level: string;
  score: number;
};

export type BeyondItem = {
  title: string;
  note: string;
};

export type DocumentAsset = {
  id: string;
  title: string;
  description: string;
  href: string;
  filename: string;
  kind: "cv" | "cover-letter" | "other";
  /** Flip to true once the PDF lives in /public at `href`. */
  available: boolean;
};

export type SectionCopy = {
  index: string;
  eyebrow: string;
  titleBefore: string;
  /** Text between an optional line break and the accent word. */
  titlePrefix?: string;
  titleAccent: string;
  titleAfter?: string;
  titleBreak?: boolean;
  lead?: string;
};

export type HeroCopy = {
  rotatingWords: string[];
  headlineLine1: string;
  headlineLine2Before: string;
  availabilityLabel: string;
  trackBadge?: string;
  introBeforeName: string;
  introAfterName: string;
  introHighlight1: string;
  introMid: string;
  introHighlight2: string;
  introAfter: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  chips: { kicker: string; label: string }[];
};

export type SiteContent = {
  slug: "home" | "software-engineer" | "frontend-engineer" | "desktop-engineer";
  basePath: string;
  profile: {
    name: string;
    fullName: string;
    role: string;
    stack: string;
    tagline: string;
    location: string;
    timezone: string;
    available: boolean;
    availabilityNote: string;
    resume: string;
    photo: string;
    summary: string;
    bio: string[];
  };
  contactLinks: {
    email: string;
    phone: string;
    github: string;
    githubHandle: string;
    linkedin: string;
    linkedinHandle: string;
  };
  navLinks: NavLink[];
  hero: HeroCopy;
  heroStats: HeroStat[];
  quickFacts: QuickFact[];
  coreStack: string[];
  skillGroups: SkillGroup[];
  projects: Project[];
  timeline: TimelineItem[];
  education: EducationItem[];
  certifications: Certification[];
  learning: LearningItem[];
  teaching: {
    brand: string;
    brandLatin: string;
    intro: string;
    topics: string[];
    curricula: string[];
  };
  languages: Language[];
  beyondCode: BeyondItem[];
  documents: DocumentAsset[];
  copy: {
    headerSubtitle: string;
    about: SectionCopy;
    skills: SectionCopy;
    work: SectionCopy;
    experience: SectionCopy;
    teaching: SectionCopy;
    documents: SectionCopy;
    contact: SectionCopy;
    contactBody: string;
    formSubjectPrefix: string;
    footerBlurb: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    jobTitle: string;
    knowsAbout: string[];
  };
};
