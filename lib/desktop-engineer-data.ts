/**
 * Desktop Engineer track — same design system as /, reframed for WPF / WinForms roles.
 *
 * Upload the tailored PDFs here (availability is detected automatically):
 *   public/desktop-engineer/Ezz-Abdelmoez-Desktop-Engineer-CV.pdf
 *   public/desktop-engineer/Ezz-Abdelmoez-Desktop-Engineer-Cover-Letter.pdf
 */

import { site } from "@/lib/site-data";
import type { SiteContent } from "@/lib/site-types";

const cvHref = "/desktop-engineer/Ezz-Abdelmoez-Desktop-Engineer-CV.pdf";
const coverHref = "/desktop-engineer/Ezz-Abdelmoez-Desktop-Engineer-Cover-Letter.pdf";

export const desktopEngineerSite: SiteContent = {
  ...site,
  slug: "desktop-engineer",
  basePath: "/desktop-engineer",
  profile: {
    ...site.profile,
    role: "Desktop Engineer",
    stack: "WPF & WinForms",
    tagline: "Desktop Engineer — WPF & WinForms",
    resume: cvHref,
    availabilityNote: "Open to Desktop Engineer roles",
    summary:
      "Desktop Engineer building Windows line-of-business apps with C#, WPF, Windows Forms, MVVM and SQL Server. I design the screens people sit in front of all day — inventory, sales, repairs, reporting — including fully right-to-left Arabic interfaces that have to survive a real shop floor.",
    bio: [
      "I'm Ezz — a Computer Science graduate from Luxor University. A lot of the software that still runs Egypt's shops and clinics is a window on a desk, not a tab in a browser. That is the work I take seriously: C# clients, clear MVVM structure, and data that does not get lost at the end of a shift.",
      "The flagship desktop product I have shipped is a mobile-store management system — stock, sales, repairs, warranties and finance — with a fully RTL Arabic UI on WPF. The same C# and SQL Server habits show up in my web work; the difference here is the surface: a Windows application that has to feel native and stay usable offline-adjacent, next to a cash drawer.",
      "I also build with Windows Forms when the honest tool is a simpler screen. Outside of client work I teach programming in Arabic under عالم البرمجة, which is useful practice for writing software non-engineers can actually finish.",
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
    rotatingWords: ["last", "run", "hold", "fit"],
    headlineLine1: "Desktops",
    headlineLine2Before: "that",
    availabilityLabel: "Available for work",
    trackBadge: "Desktop Engineer track",
    introBeforeName: "I'm",
    introAfterName:
      ", a desktop engineer in Luxor, Egypt. I build Windows line-of-business apps —",
    introHighlight1: "WPF & WinForms",
    introMid: " in C#, talking to",
    introHighlight2: "SQL Server",
    introAfter: " underneath, including RTL Arabic UIs.",
    primaryCta: { label: "View selected work", href: "#work" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
    chips: [
      { kicker: "ui", label: "WPF · MVVM" },
      { kicker: "also", label: "WinForms · C#" },
    ],
  },
  heroStats: [
    { value: "1", label: "Windows product\nin daily shop use" },
    { value: "RTL", label: "Arabic-first\ndesktop interface" },
    { value: "B.Sc.", label: "Computer Science\nLuxor University" },
    { value: "C#", label: "WPF · WinForms\n· SQL Server" },
  ],
  quickFacts: [
    { label: "Based in", value: "Luxor, Egypt (GMT+2)" },
    { label: "Focus", value: "WPF · WinForms · C# · MVVM · SQL Server" },
    { label: "Education", value: "B.Sc. Computer Science, Luxor University" },
    { label: "Training", value: "ITI — .NET (C#, OOP, SQL Server)" },
    { label: "Languages", value: "Arabic (native) · English (very good) · German (A1)" },
    { label: "Status", value: "Open to Desktop Engineer roles — remote & on-site" },
  ],
  coreStack: [
    "C#",
    ".NET",
    "WPF",
    "Windows Forms",
    "MVVM",
    "XAML",
    "Entity Framework",
    "ADO.NET",
    "SQL Server",
    "LINQ",
    "RTL / Arabic UI",
    "Git",
  ],
  skillGroups: [
    {
      title: "Windows desktop",
      blurb: "The surface I ship on — windows, not tabs.",
      icon: "monitor",
      skills: [
        "WPF",
        "Windows Forms",
        "XAML",
        "C# / .NET",
        "Desktop navigation & windows",
        "Line-of-business UI",
      ],
    },
    {
      title: "Structure",
      blurb: "So a shop app is still readable a year later.",
      icon: "wrench",
      skills: [
        "MVVM pattern",
        "OOP in C#",
        "SOLID principles",
        "Separation of UI and logic",
        "Repository-style data access",
      ],
    },
    {
      title: "Data on the machine",
      blurb: "Stock counts and invoices have to be right.",
      icon: "database",
      skills: [
        "Microsoft SQL Server",
        "Entity Framework",
        "ADO.NET",
        "LINQ",
        "CRUD & reporting queries",
        "Relational design",
      ],
    },
    {
      title: "Arabic-first UI",
      blurb: "Not an afterthought locale — the interface direction.",
      icon: "palette",
      skills: [
        "Right-to-left layouts",
        "Arabic typography in desktop UI",
        "Forms staff can finish under pressure",
        "Validation & error states",
      ],
    },
    {
      title: "How I ship",
      blurb: "The practice around the .exe.",
      icon: "server",
      skills: [
        "Git & GitHub",
        "Debugging on real PCs",
        "Working with non-technical users",
        "Agile / Scrum",
        "Same C# habits as my web work",
      ],
    },
  ],
  projects: [
    {
      title: "Mobile Store Management System",
      subtitle: "Windows retail application",
      year: "2025",
      description:
        "A WPF desktop app for a phone shop that has to run the whole counter: stock, sales, repairs, warranties and money — in a fully right-to-left Arabic interface, on a Windows PC next to the drawer.",
      highlights: [
        "Inventory, sales, repair tickets and warranty tracking in one Windows client",
        "Financial reporting for a shop that cannot wait on a browser tab",
        "Fully RTL Arabic interface designed for staff, not for a demo reel",
        "WPF + MVVM over Entity Framework and SQL Server",
      ],
      tech: ["C#", "WPF", "MVVM", "Entity Framework", "SQL Server", "RTL Arabic"],
      featured: true,
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
        "Shipped production software in C# and SQL Server. Different surface from WPF — same language, same data discipline, same habit of owning a feature until it holds.",
      points: [
        "Daily C# and SQL Server work on a live product",
        "Modelled data and permissions that have to be correct, not just pretty",
        "Worked with real users and the edge cases they invent",
        "Carried the same .NET habits I use in desktop clients",
      ],
    },
    {
      kind: "training",
      role: "Intensive Training Program — .NET Full Stack Web Development",
      org: "Information Technology Institute (ITI)",
      period: "Apr 2025 — Aug 2025",
      location: "Qena, Egypt",
      description:
        "Full-time .NET track. The C#, OOP and SQL Server half is the foundation under every desktop app I write.",
      points: [
        "C# and object-oriented design in depth",
        "Entity Framework, LINQ and SQL Server",
        "Clean architecture, SOLID and Git-based team workflow",
        "The same modelling skills I apply in WPF and WinForms",
      ],
    },
    {
      kind: "work",
      role: "IT Support Intern",
      org: "Agricultural Bank of Egypt — Luxor Branches",
      period: "Oct 2023",
      location: "Luxor Governorate, Egypt",
      description:
        "Supported Windows machines across bank branches — useful context for writing desktop software that has to survive a real PC, a real printer, and a person who is not an engineer.",
      points: [
        "Lived with the Windows desktops staff actually use",
        "First-line troubleshooting when software got in the way of the job",
        "Kept branch systems available — the bar my own apps have to clear",
      ],
    },
  ],
  learning: [
    {
      title: "Desktop UX",
      note: "Calmer WPF screens — validation, busy states, and layouts that survive a long shift at the counter.",
      level: "Practising",
    },
    {
      title: "WPF ↔ WinForms judgement",
      note: "When a simple Forms screen is the honest tool, and when MVVM earns the extra structure.",
      level: "Practising",
    },
    {
      title: "Shipping Windows apps",
      note: "The last mile: updates, other people's machines, and installs that do not need me in the room.",
      level: "Learning",
    },
    {
      title: "AI-assisted C#",
      note: "Agents for the boring refactors — not for the domain rules a shop runs on.",
      level: "Exploring",
    },
  ],
  documents: [
    {
      id: "de-cv",
      title: "Curriculum Vitae",
      description:
        "Desktop Engineer CV — tailored for WPF and Windows Forms roles, with the shop-floor Windows work in front.",
      href: cvHref,
      filename: "Ezz-Abdelmoez-Desktop-Engineer-CV.pdf",
      kind: "cv",
      available: true,
    },
    {
      id: "de-cover",
      title: "Cover letter",
      description:
        "A one-page letter written for Desktop Engineer applications. Swap in the company name when you send it.",
      href: coverHref,
      filename: "Ezz-Abdelmoez-Desktop-Engineer-Cover-Letter.pdf",
      kind: "cover-letter",
      available: true,
    },
  ],
  copy: {
    headerSubtitle: "WPF / WinForms",
    about: {
      index: "01",
      eyebrow: "About",
      titleBefore: "Software that lives",
      titlePrefix: " on the ",
      titleAccent: "desk",
      titleAfter: ".",
      titleBreak: true,
    },
    skills: {
      index: "02",
      eyebrow: "Toolkit",
      titleBefore: "The stack I ",
      titleAccent: "actually",
      titleAfter: " ship on Windows.",
      lead: "WPF when the app needs structure. WinForms when a simpler screen is the honest answer. SQL Server either way.",
    },
    work: {
      index: "03",
      eyebrow: "Selected work",
      titleBefore: "A Windows app a shop ",
      titleAccent: "runs on",
      titleAfter: ".",
      lead: "Not a demo window — a retail client with stock, repairs, warranties and money, in RTL Arabic.",
    },
    experience: {
      index: "04",
      eyebrow: "The path so far",
      titleBefore: "Experience & ",
      titleAccent: "education",
      lead: "C# and SQL Server from ITI and production .NET work, applied to Windows clients that have to survive a real PC.",
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
      lead: "Role-specific PDFs for Desktop Engineer applications — a tailored CV and cover letter live here once they are uploaded.",
    },
    contact: {
      index: "07",
      eyebrow: "Contact",
      titleBefore: "Let's build something ",
      titleAccent: "staff can finish",
      titleAfter: ".",
    },
    contactBody:
      "I'm looking for Desktop Engineer roles — WPF, Windows Forms, C# — and I'm happy to talk about a shop, clinic or office Windows client. Tell me what has to run on the desk — I usually reply within a day.",
    formSubjectPrefix: "Desktop Engineer enquiry from",
    footerBlurb:
      "Desktop Engineer building WPF and WinForms line-of-business apps — from Luxor, Egypt.",
  },
  seo: {
    title: "Desktop Engineer",
    description:
      "Desktop Engineer from Luxor, Egypt, building Windows line-of-business apps with C#, WPF, Windows Forms, MVVM and SQL Server — including RTL Arabic interfaces.",
    keywords: [
      "Ezz Abdelmoez",
      "Desktop Engineer",
      "Desktop Developer",
      "WPF Developer",
      "WinForms",
      "Windows Forms",
      "C#",
      "MVVM",
      "SQL Server",
      "Egypt",
      "Luxor",
    ],
    jobTitle: "Desktop Engineer (WPF & WinForms)",
    knowsAbout: [
      "Desktop Engineering",
      "WPF",
      "Windows Forms",
      "C#",
      ".NET",
      "MVVM",
      "XAML",
      "Entity Framework",
      "ADO.NET",
      "SQL Server",
      "RTL user interfaces",
    ],
  },
};
