/**
 * Frontend Engineer track — same design system as /, reframed for React / Next.js roles.
 *
 * Upload the tailored PDFs here (availability is detected automatically):
 *   public/frontend-engineer/Ezz-Abdelmoez-Frontend-Engineer-CV.pdf
 *   public/frontend-engineer/Ezz-Abdelmoez-Frontend-Engineer-Cover-Letter.pdf
 */

import { site } from "@/lib/site-data";
import type { SiteContent } from "@/lib/site-types";

const cvHref = "/frontend-engineer/Ezz-Abdelmoez-Frontend-Engineer-CV.pdf";
const coverHref = "/frontend-engineer/Ezz-Abdelmoez-Frontend-Engineer-Cover-Letter.pdf";

export const frontendEngineerSite: SiteContent = {
  ...site,
  slug: "frontend-engineer",
  basePath: "/frontend-engineer",
  profile: {
    ...site.profile,
    role: "Frontend Engineer",
    stack: "React & Next.js",
    tagline: "Frontend Engineer — React & Next.js",
    resume: cvHref,
    availabilityNote: "Open to Frontend Engineer roles",
    summary:
      "Frontend Engineer who ships production interfaces with React, Next.js, TypeScript and Tailwind CSS. I care about the path a person actually takes through a product — clear flows, readable components, and UIs that stay fast on a phone in Luxor as well as on a desktop in Cairo.",
    bio: [
      "I'm Ezz — a Computer Science graduate from Luxor University. Most days I am on the frontend: component architecture, responsive layouts, and the awkward middle where a REST API becomes something a person can finish in one sitting.",
      "The products I have shipped are booking platforms and operations consoles — catalogues, calendars, dashboards and role-aware screens, not landing-page demos. I trained on the .NET full stack track at ITI (Qena), which is why I can talk to a backend without guessing, then I come back to the interface and make it feel inevitable.",
      "Outside of client work I write and record programming lessons in Arabic under عالم البرمجة, and I am taking the same React muscles onto mobile with React Native and Expo.",
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
    rotatingWords: ["feel", "flow", "last", "click"],
    headlineLine1: "Interfaces",
    headlineLine2Before: "that",
    availabilityLabel: "Available for work",
    trackBadge: "Frontend Engineer track",
    introBeforeName: "I'm",
    introAfterName:
      ", a frontend engineer in Luxor, Egypt. I design and ship the screens people actually use —",
    introHighlight1: "React & Next.js",
    introMid: " in TypeScript, talking cleanly to",
    introHighlight2: "REST APIs",
    introAfter: " underneath.",
    primaryCta: { label: "View selected work", href: "#work" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
    chips: [
      { kicker: "ui", label: "React · Next.js" },
      { kicker: "language", label: "TypeScript" },
    ],
  },
  heroStats: [
    { value: "3", label: "production React UIs\nin the wild" },
    { value: "1+", label: "year shipping\ninterfaces" },
    { value: "B.Sc.", label: "Computer Science\nLuxor University" },
    { value: "ITI", label: "React & Next.js\non the .NET track" },
  ],
  quickFacts: [
    { label: "Based in", value: "Luxor, Egypt (GMT+2)" },
    { label: "Focus", value: "React · Next.js · TypeScript · Tailwind CSS" },
    { label: "Education", value: "B.Sc. Computer Science, Luxor University" },
    { label: "Training", value: "ITI — .NET Full Stack (React & Next.js)" },
    { label: "Languages", value: "Arabic (native) · English (very good) · German (A1)" },
    { label: "Status", value: "Open to Frontend Engineer roles — remote & on-site" },
  ],
  coreStack: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "REST APIs",
    "Responsive UI",
    "Git",
    "Vercel",
    "React Native",
  ],
  skillGroups: [
    {
      title: "React & Next.js",
      blurb: "The stack I reach for when the interface has to ship.",
      icon: "layout",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Component architecture",
        "Client-side routing",
        "Hooks & composition",
        "SPA structure",
      ],
    },
    {
      title: "Interface craft",
      blurb: "Layout, type and motion that still work on a small phone.",
      icon: "palette",
      skills: [
        "HTML5 / CSS3",
        "Tailwind CSS",
        "Responsive layouts",
        "Accessible UI basics",
        "Design-to-code",
        "Empty, loading & error states",
      ],
    },
    {
      title: "Client data",
      blurb: "The unglamorous half of frontend — talking to real APIs.",
      icon: "database",
      skills: [
        "REST API integration",
        "JWT session handling",
        "Protected routes",
        "Role-aware screens",
        "Forms & validation",
        "Async UI states",
      ],
    },
    {
      title: "Mobile",
      blurb: "Same React habits, a smaller surface.",
      icon: "smartphone",
      skills: [
        "React Native",
        "Expo & Expo Router",
        "Mobile navigation patterns",
        "Mobile-first layouts",
      ],
    },
    {
      title: "How I ship",
      blurb: "The practice around the components.",
      icon: "wrench",
      skills: [
        "Git & GitHub",
        "Vercel deployment",
        "Agile / Scrum",
        "Readable component APIs",
        "Working with designers & backends",
      ],
    },
  ],
  projects: [
    {
      title: "Farhetak",
      subtitle: "Wedding hall booking UI",
      year: "2026",
      description:
        "The product people actually tap through: browse halls, filter what they need, check a real calendar, reserve a date and manage the booking afterwards — built as a mobile-first React interface.",
      highlights: [
        "Venue catalogue with search, filtering and photo galleries",
        "Availability calendar and a reservation flow that surfaces conflicts",
        "Customer dashboard for reviewing and managing bookings",
        "Responsive React UI consumed from an ASP.NET Core API",
      ],
      tech: ["React.js", "REST APIs", "JWT", "Responsive layout"],
      image: "/projects/farhetak.png",
      demo: "https://farhetak.vercel.app/",
      featured: true,
    },
    {
      title: "Hospital Management System",
      subtitle: "Healthcare operations console",
      year: "2026",
      description:
        "A dense React SPA for running a hospital day to day — records, staff, appointments, visits and e-prescriptions — where every screen has to respect who is signed in.",
      highlights: [
        "Role-aware navigation and screens across staff types",
        "Multi-step clinical forms: records, vital signs, e-prescriptions",
        "Reception workflows for booking and tracking visits",
        "JWT-authenticated React client on top of an ASP.NET Core API",
      ],
      tech: ["React", "SPA architecture", "JWT", "RBAC UI", "Complex forms"],
      image: "/projects/hms.png",
      demo: "https://hms-me.vercel.app/",
      featured: true,
    },
    {
      title: "Luxor Booking Tours",
      subtitle: "Tourism booking interface",
      year: "2025 — 2026",
      description:
        "The public face of a tour operator in Luxor: browse trips, check availability and complete a booking. I owned the React interface travellers use, not just the API behind it.",
      highlights: [
        "Responsive React front end for browsing and reserving tours",
        "Booking and availability flows wired to production APIs",
        "Ongoing UI maintenance, performance work and feature delivery",
      ],
      tech: ["React", "REST API", "Responsive UI"],
      featured: true,
    },
    {
      title: "Restaurant Management System",
      subtitle: "Staff-facing web UI",
      year: "2025",
      description:
        "Menu, orders, reservations and staff — a role-separated web interface for floor, kitchen and management, built as a conventional responsive site.",
      highlights: [],
      tech: ["Bootstrap", "Responsive web", "Role-based UI"],
    },
  ],
  timeline: [
    {
      kind: "work",
      role: "Full Stack Developer (.NET / React)",
      org: "Luxor Booking Tours",
      period: "Oct 2025 — Jun 2026",
      location: "Luxor, Egypt",
      description:
        "Owned the traveller-facing React interface of a live tour booking product, and the API conversations that feed it.",
      points: [
        "Built booking, availability and management flows in React",
        "Designed the screens around real roles, empty states and error paths",
        "Handled client-side authentication, protected routes and permissions",
        "Profiled and improved frontend performance on real devices",
      ],
    },
    {
      kind: "training",
      role: "Intensive Training Program — .NET Full Stack Web Development",
      org: "Information Technology Institute (ITI)",
      period: "Apr 2025 — Aug 2025",
      location: "Qena, Egypt",
      description:
        "Full-time track. The frontend half is what I still use every week: React, JavaScript and shipping UI in a team.",
      points: [
        "React, JavaScript and modern front-end tooling",
        "Component-driven UI and consuming ASP.NET Core Web APIs",
        "Next.js fundamentals on team projects",
        "Git-based collaboration, clean structure and code review",
      ],
    },
    {
      kind: "work",
      role: "IT Support Intern",
      org: "Agricultural Bank of Egypt — Luxor Branches",
      period: "Oct 2023",
      location: "Luxor Governorate, Egypt",
      description:
        "First-line support across branch machines — useful context for building software that non-engineers have to survive.",
      points: [
        "Watched how non-technical staff actually use software",
        "First-line troubleshooting when an interface got in the way",
        "Kept day-to-day systems available for branch teams",
      ],
    },
  ],
  learning: [
    {
      title: "React Native & Expo",
      note: "Taking the same component habits onto phones — Expo Router, native navigation, mobile-first patterns.",
      level: "Building with it",
    },
    {
      title: "Interface quality",
      note: "Accessibility, focus states and design-system thinking, so the next product is calmer than the last.",
      level: "Practising",
    },
    {
      title: "AI-assisted UI work",
      note: "Coding agents as a pair for composition and refactors — not as a substitute for taste.",
      level: "Exploring",
    },
    {
      title: "Shipping frontends",
      note: "Vercel, previews and the boring production checklist that keeps a release from surprising users.",
      level: "Practising",
    },
  ],
  documents: [
    {
      id: "fe-cv",
      title: "Curriculum Vitae",
      description:
        "Frontend Engineer CV — tailored for React and Next.js roles, with the interface work in front.",
      href: cvHref,
      filename: "Ezz-Abdelmoez-Frontend-Engineer-CV.pdf",
      kind: "cv",
      available: true,
    },
    {
      id: "fe-cover",
      title: "Cover letter",
      description:
        "A one-page letter written for Frontend Engineer applications. Swap in the company name when you send it.",
      href: coverHref,
      filename: "Ezz-Abdelmoez-Frontend-Engineer-Cover-Letter.pdf",
      kind: "cover-letter",
      available: true,
    },
  ],
  copy: {
    headerSubtitle: "React / Next.js",
    about: {
      index: "01",
      eyebrow: "About",
      titleBefore: "A frontend engineer who cares",
      titlePrefix: " how it ",
      titleAccent: "feels",
      titleAfter: ".",
      titleBreak: true,
    },
    skills: {
      index: "02",
      eyebrow: "Toolkit",
      titleBefore: "The stack I ",
      titleAccent: "actually",
      titleAfter: " ship with.",
      lead: "Frontend first — React, Next.js and the craft around them. I still understand the API on the other side of the request.",
    },
    work: {
      index: "03",
      eyebrow: "Selected work",
      titleBefore: "Interfaces people ",
      titleAccent: "finish",
      titleAfter: ".",
      lead: "Booking flows, calendars and operations consoles — the kind of UI with roles, empty states and a lot of edge cases.",
    },
    experience: {
      index: "04",
      eyebrow: "The path so far",
      titleBefore: "Experience & ",
      titleAccent: "education",
      lead: "From a Computer Science degree in Luxor, through ITI's React and Next.js work, to shipping production interfaces.",
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
      lead: "Role-specific PDFs for Frontend Engineer applications — a tailored CV and cover letter live here once they are uploaded.",
    },
    contact: {
      index: "07",
      eyebrow: "Contact",
      titleBefore: "Let's build something ",
      titleAccent: "people use",
      titleAfter: ".",
    },
    contactBody:
      "I'm looking for Frontend Engineer roles — React, Next.js, TypeScript — and I'm happy to talk about freelance UI work too. Tell me what you're building — I usually reply within a day.",
    formSubjectPrefix: "Frontend Engineer enquiry from",
    footerBlurb:
      "Frontend Engineer shipping React and Next.js interfaces — from Luxor, Egypt.",
  },
  seo: {
    title: "Frontend Engineer",
    description:
      "Frontend Engineer from Luxor, Egypt, shipping production interfaces with React, Next.js, TypeScript and Tailwind CSS.",
    keywords: [
      "Ezz Abdelmoez",
      "Frontend Engineer",
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "TypeScript",
      "Tailwind CSS",
      "React Egypt",
      "Luxor",
    ],
    jobTitle: "Frontend Engineer (React & Next.js)",
    knowsAbout: [
      "Frontend Engineering",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "REST APIs",
      "React Native",
    ],
  },
};
