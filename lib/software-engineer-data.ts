/**
 * Software Engineer track — same design system as /, reframed for SE roles.
 *
 * Upload the tailored PDFs here (then flip `available` to true):
 *   public/software-engineer/Ezz-Abdelmoez-Software-Engineer-CV.pdf
 *   public/software-engineer/Ezz-Abdelmoez-Software-Engineer-Cover-Letter.pdf
 */

import { site } from "@/lib/site-data";
import type { SiteContent } from "@/lib/site-types";

const cvHref = "/software-engineer/Ezz-Abdelmoez-Software-Engineer-CV.pdf";
const coverHref = "/software-engineer/Ezz-Abdelmoez-Software-Engineer-Cover-Letter.pdf";

export const softwareEngineerSite: SiteContent = {
  ...site,
  slug: "software-engineer",
  basePath: "/software-engineer",
  profile: {
    ...site.profile,
    role: "Software Engineer",
    tagline: "Software Engineer — .NET & React",
    resume: cvHref,
    summary:
      "Software Engineer with experience designing and shipping scalable web systems using ASP.NET Core, React, Entity Framework Core and SQL Server. I own features end to end — data models, secure APIs, and interfaces — with a bias toward clean architecture, readable code, and systems that hold up in production.",
    bio: [
      "I'm Ezz — a Computer Science graduate from Luxor University and a software engineer working mainly across the .NET and React ecosystems. I like the whole path of a feature: modelling the data, shaping the API, then making the interface feel effortless.",
      "Most of my work so far has been booking platforms and management systems — real products with real users, roles, permissions and edge cases. I trained intensively on the .NET full stack track at ITI (Qena) and have been shipping ever since.",
      "Outside of client work I write and record programming lessons in Arabic under عالم البرمجة, explore React Native, and keep an eye on where AI tooling is taking our craft.",
    ],
  },
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Path", href: "#experience" },
    { name: "Teaching", href: "#teaching" },
    { name: "Docs", href: "#documents" },
    { name: "Contact", href: "#contact" },
  ],
  hero: {
    rotatingWords: ["ship", "scale", "last", "hold"],
    headlineLine1: "Systems",
    headlineLine2Before: "that",
    availabilityLabel: "Available for work",
    trackBadge: "Software Engineer track",
    introBeforeName: "I'm",
    introAfterName:
      ", a software engineer in Luxor, Egypt. I design and ship production systems —",
    introHighlight1: "ASP.NET Core",
    introMid: " APIs and SQL Server data models underneath,",
    introHighlight2: "React",
    introAfter: " interfaces on top.",
    primaryCta: { label: "View selected work", href: "#work" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
    chips: [
      { kicker: "backend", label: "ASP.NET Core" },
      { kicker: "frontend", label: "React · Next.js" },
    ],
  },
  heroStats: [
    { value: "1+", label: "year building\nproduction systems" },
    { value: "4", label: "platforms shipped\nend to end" },
    { value: "B.Sc.", label: "Computer Science\nLuxor University" },
    { value: "ITI", label: ".NET engineering\ntrack graduate" },
  ],
  quickFacts: [
    { label: "Based in", value: "Luxor, Egypt (GMT+2)" },
    { label: "Focus", value: "Software engineering · ASP.NET Core · React" },
    { label: "Education", value: "B.Sc. Computer Science, Luxor University" },
    { label: "Training", value: "ITI — .NET Full Stack Web Development" },
    { label: "Languages", value: "Arabic (native) · English (very good) · German (A1)" },
    { label: "Status", value: "Open to Software Engineer roles — remote & on-site" },
  ],
  documents: [
    {
      id: "se-cv",
      title: "Curriculum Vitae",
      description:
        "Software Engineer CV — tailored for engineering roles across .NET, React and SQL Server.",
      href: cvHref,
      filename: "Ezz-Abdelmoez-Software-Engineer-CV.pdf",
      kind: "cv",
      available: false,
    },
    {
      id: "se-cover",
      title: "Cover letter",
      description:
        "A one-page letter written for Software Engineer applications. Swap in the company name when you send it.",
      href: coverHref,
      filename: "Ezz-Abdelmoez-Software-Engineer-Cover-Letter.pdf",
      kind: "cover-letter",
      available: false,
    },
  ],
  copy: {
    headerSubtitle: "Software Engineer",
    about: {
      index: "01",
      eyebrow: "About",
      titleBefore: "An engineer who likes",
      titlePrefix: " ",
      titleAccent: "the whole",
      titleAfter: " problem.",
      titleBreak: true,
    },
    skills: {
      index: "02",
      eyebrow: "Toolkit",
      titleBefore: "The stack I ",
      titleAccent: "actually",
      titleAfter: " use.",
      lead: "Grouped by what it does rather than by logo count — these are the tools I've shipped real features with.",
    },
    work: {
      index: "03",
      eyebrow: "Selected work",
      titleBefore: "Systems I've ",
      titleAccent: "shipped",
      titleAfter: " end to end.",
      lead: "Booking platforms and management systems — the kind with roles, permissions, schedules and a lot of edge cases.",
    },
    experience: {
      index: "04",
      eyebrow: "The path so far",
      titleBefore: "Experience & ",
      titleAccent: "education",
      lead: "From a Computer Science degree in Luxor, through ITI's .NET track, to shipping production software.",
    },
    teaching: {
      index: "05",
      eyebrow: "Teaching",
      titleBefore: "Explaining code in ",
      titleAccent: "Arabic",
      titleAfter: ".",
    },
    documents: {
      index: "06",
      eyebrow: "Documents",
      titleBefore: "CV & ",
      titleAccent: "cover letter",
      lead: "Role-specific PDFs for Software Engineer applications — a tailored CV and cover letter live here once they are uploaded.",
    },
    contact: {
      index: "07",
      eyebrow: "Contact",
      titleBefore: "Let's build something ",
      titleAccent: "together",
      titleAfter: ".",
    },
    contactBody:
      "I'm looking for Software Engineer roles — full stack or backend-leaning .NET — and I'm happy to talk about freelance work too. Tell me what you're building — I usually reply within a day.",
    formSubjectPrefix: "Software Engineer enquiry from",
    footerBlurb:
      "Software Engineer building production web systems with ASP.NET Core, SQL Server and React — from Luxor, Egypt.",
  },
  seo: {
    title: "Software Engineer",
    description:
      "Software Engineer from Luxor, Egypt, designing and shipping production web systems with ASP.NET Core, Entity Framework Core, SQL Server and React.",
    keywords: [
      "Ezz Abdelmoez",
      "Software Engineer",
      "Software Engineer Egypt",
      ".NET Software Engineer",
      "ASP.NET Core",
      "React",
      "C#",
      "SQL Server",
      "Entity Framework Core",
      "Luxor",
    ],
    jobTitle: "Software Engineer (.NET / React)",
    knowsAbout: [
      "Software Engineering",
      "C#",
      ".NET",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "React",
      "Next.js",
      "TypeScript",
      "REST APIs",
    ],
  },
};
