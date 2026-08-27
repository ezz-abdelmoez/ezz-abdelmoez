/**
 * Backend Engineer track — same design system as /, reframed for ASP.NET Core roles.
 *
 * Upload the tailored PDFs here (availability is detected automatically):
 *   public/backend-engineer/Ezz-Abdelmoez-Backend-Engineer-CV.pdf
 *   public/backend-engineer/Ezz-Abdelmoez-Backend-Engineer-Cover-Letter.pdf
 */

import { site } from "@/lib/site-data";
import type { SiteContent } from "@/lib/site-types";

const cvHref = "/backend-engineer/Ezz-Abdelmoez-Backend-Engineer-CV.pdf";
const coverHref = "/backend-engineer/Ezz-Abdelmoez-Backend-Engineer-Cover-Letter.pdf";

export const backendEngineerSite: SiteContent = {
  ...site,
  slug: "backend-engineer",
  basePath: "/backend-engineer",
  profile: {
    ...site.profile,
    role: "Backend Engineer",
    stack: "ASP.NET Core",
    tagline: "Backend Engineer — ASP.NET Core",
    resume: cvHref,
    availabilityNote: "Open to Backend Engineer roles",
    summary:
      "Backend Engineer designing and shipping ASP.NET Core Web APIs, SQL Server models and the access control around them. I start with the data and the rules — bookings, records, permissions — then expose a REST surface that a React client can trust, with JWT, role-based access and code that stays readable six months later.",
    bio: [
      "I'm Ezz — a Computer Science graduate from Luxor University. The work I care about most sits under the interface: C#, ASP.NET Core, Entity Framework Core and SQL Server. Modelling a booking so two people cannot take the same slot, or a hospital record so the wrong staff type cannot see it, is the kind of problem I like.",
      "The APIs I have shipped back real products — a hospital platform, a wedding-hall booking system, a tour operator in Luxor, a restaurant, a retail shop. Roles, permissions, schedules and money. I trained on the .NET full stack track at ITI (Qena), which is why I still understand the client that consumes the API; I just prefer to own the contract.",
      "Outside of client work I teach programming in Arabic under عالم البرمجة, and I keep an eye on the boring production work — VPS, databases, the checklist that keeps an API from surprising anyone at 2 a.m.",
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
    rotatingWords: ["hold", "last", "scale", "ship"],
    headlineLine1: "APIs",
    headlineLine2Before: "that",
    availabilityLabel: "Available for work",
    trackBadge: "Backend Engineer track",
    introBeforeName: "I'm",
    introAfterName: ", a backend engineer in Luxor, Egypt. I design and ship",
    introHighlight1: "ASP.NET Core",
    introMid: " Web APIs and",
    introHighlight2: "SQL Server",
    introAfter: " models — with JWT, roles, and the edge cases a booking always finds.",
    primaryCta: { label: "View selected work", href: "#work" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
    chips: [
      { kicker: "api", label: "ASP.NET Core" },
      { kicker: "data", label: "SQL Server · EF Core" },
    ],
  },
  heroStats: [
    { value: "4", label: "production APIs\nbehind live products" },
    { value: "1+", label: "year shipping\n.NET backends" },
    { value: "B.Sc.", label: "Computer Science\nLuxor University" },
    { value: "ITI", label: ".NET track — Web API\n& SQL Server" },
  ],
  quickFacts: [
    { label: "Based in", value: "Luxor, Egypt (GMT+2)" },
    { label: "Focus", value: "ASP.NET Core · C# · EF Core · SQL Server" },
    { label: "Education", value: "B.Sc. Computer Science, Luxor University" },
    { label: "Training", value: "ITI — .NET Full Stack (Web API & SQL Server)" },
    { label: "Languages", value: "Arabic (native) · English (very good) · German (A1)" },
    { label: "Status", value: "Open to Backend Engineer roles — remote & on-site" },
  ],
  coreStack: [
    "C#",
    ".NET",
    "ASP.NET Core",
    "Web API",
    "Entity Framework Core",
    "SQL Server",
    "LINQ",
    "REST APIs",
    "JWT",
    "RBAC",
    "Clean architecture",
    "Git",
  ],
  skillGroups: [
    {
      title: "ASP.NET Core",
      blurb: "Where a feature becomes a contract other clients can call.",
      icon: "server",
      skills: [
        "C# / OOP",
        "ASP.NET Core Web API",
        "ASP.NET Core MVC",
        "RESTful API design",
        "Dependency injection",
        "LINQ",
      ],
    },
    {
      title: "Data",
      blurb: "Schema first, queries second, indexes when they earn it.",
      icon: "database",
      skills: [
        "Microsoft SQL Server",
        "Entity Framework Core",
        "EF Core migrations",
        "Relational design",
        "Constraints & relationships",
        "CRUD & stored procedures",
      ],
    },
    {
      title: "Access control",
      blurb: "Who can see a record is part of the product.",
      icon: "shield",
      skills: [
        "JWT authentication",
        "Role-based access control",
        "Authorisation policies",
        "Audit-friendly design",
      ],
    },
    {
      title: "Shape of the code",
      blurb: "So the next booking rule does not wreck the last one.",
      icon: "wrench",
      skills: [
        "Clean architecture",
        "SOLID principles",
        "Repository pattern",
        "Layered .NET solutions",
      ],
    },
    {
      title: "How I ship",
      blurb: "The practice around the API.",
      icon: "layout",
      skills: [
        "Git & GitHub",
        "Agile / Scrum",
        "Clear API contracts",
        "Talking to the client that consumes the API",
        "VPS & database basics",
      ],
    },
  ],
  projects: [
    {
      title: "Hospital Management System",
      subtitle: "Healthcare operations API",
      year: "2026",
      description:
        "The ASP.NET Core Web API under a hospital product: patients, staff, appointments, visits and e-prescriptions — with JWT and role-based permissions so each staff type only reaches what they should.",
      highlights: [
        "JWT-secured ASP.NET Core Web API consumed by a React SPA",
        "Role-based access control across staff types, plus audit logs",
        "Domain for medical records, vital signs and e-prescriptions",
        "Appointment and visit workflows modelled in SQL Server via EF Core",
      ],
      tech: [
        "ASP.NET Core Web API",
        "C#",
        "Entity Framework Core",
        "SQL Server",
        "JWT",
        "RBAC",
      ],
      image: "/projects/hms.png",
      demo: "https://hms-me.vercel.app/",
      featured: true,
    },
    {
      title: "Farhetak",
      subtitle: "Wedding hall booking API",
      year: "2026",
      description:
        "The backend of a venue booking product: halls, real availability, reservations that must not collide, and a customer record after the fact.",
      highlights: [
        "Availability and reservation flow with conflict handling",
        "REST APIs for catalogue, booking and customer dashboards",
        "JWT-authenticated ASP.NET Core Web API over SQL Server",
        "Domain rules that a calendar UI can trust",
      ],
      tech: [
        "ASP.NET Core Web API",
        "C#",
        "Entity Framework Core",
        "SQL Server",
        "JWT",
        "REST APIs",
      ],
      image: "/projects/farhetak.png",
      demo: "https://farhetak.vercel.app/",
      featured: true,
    },
    {
      title: "Luxor Booking Tours",
      subtitle: "Tourism booking APIs",
      year: "2025 — 2026",
      description:
        "Production ASP.NET Core APIs for a Luxor tour operator — tours, availability and bookings — the contract the React interface actually calls.",
      highlights: [
        "ASP.NET Core Web APIs backed by SQL Server and EF Core",
        "Booking and availability flows with authentication and roles",
        "Ongoing maintenance, performance work and feature delivery",
      ],
      tech: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework Core", "REST API"],
      featured: true,
    },
    {
      title: "Restaurant Management System",
      subtitle: "Web API & data layer",
      year: "2025",
      description:
        "Menu, orders, reservations and staff behind role-based access — floor, kitchen and management hitting the same ASP.NET Core and SQL Server backend.",
      highlights: [],
      tech: ["ASP.NET Core", "Entity Framework", "SQL Server", "RBAC"],
    },
    {
      title: "Mobile Store Management System",
      subtitle: "SQL Server data layer",
      year: "2025",
      description:
        "The data model under a Windows retail client: inventory, sales, repairs, warranties and reporting on SQL Server via Entity Framework.",
      highlights: [],
      tech: ["C#", "Entity Framework", "SQL Server"],
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
        "Owned the ASP.NET Core APIs and SQL Server models of a live tour booking product, and the permissions around them.",
      points: [
        "Built and maintained ASP.NET Core Web APIs backed by SQL Server and EF Core",
        "Modelled booking, availability and management data so conflicts stay out of the calendar",
        "Implemented authentication, authorisation and role-based permissions",
        "Profiled and improved API and query performance in production",
      ],
    },
    {
      kind: "training",
      role: "Intensive Training Program — .NET Full Stack Web Development",
      org: "Information Technology Institute (ITI)",
      period: "Apr 2025 — Aug 2025",
      location: "Qena, Egypt",
      description:
        "Full-time .NET track. The half I still use every week: Web API, C#, EF Core and SQL Server, shipped in a team.",
      points: [
        "ASP.NET Core MVC and Web API, C# and OOP in depth",
        "Entity Framework Core, LINQ and SQL Server database design",
        "Clean architecture, SOLID, DI and the repository pattern",
        "Git-based collaboration and code review",
      ],
    },
    {
      kind: "work",
      role: "IT Support Intern",
      org: "Agricultural Bank of Egypt — Luxor Branches",
      period: "Oct 2023",
      location: "Luxor Governorate, Egypt",
      description:
        "Kept branch systems available. Useful context for writing APIs that cannot afford a casual outage.",
      points: [
        "Saw what happens when software is down during a working day",
        "First-line troubleshooting across branch machines",
        "Reliability as a habit, not a slide",
      ],
    },
  ],
  learning: [
    {
      title: "Query & API performance",
      note: "Indexes when they earn it, and the habit of measuring before guessing.",
      level: "Practising",
    },
    {
      title: "Deployment & databases",
      note: "VPS hosting, Coolify, PostgreSQL and domain setup — so an API can live somewhere I control.",
      level: "Practising",
    },
    {
      title: "AI-assisted C#",
      note: "Agents for the boring refactors, not for the booking rules.",
      level: "Exploring",
    },
    {
      title: "Hardening the contract",
      note: "Clearer validation, consistent errors, and API docs a frontend can actually use.",
      level: "Practising",
    },
  ],
  documents: [
    {
      id: "be-cv",
      title: "Curriculum Vitae",
      description:
        "Backend Engineer CV — tailored for ASP.NET Core and SQL Server roles, with the API work in front.",
      href: cvHref,
      filename: "Ezz-Abdelmoez-Backend-Engineer-CV.pdf",
      kind: "cv",
      available: false,
    },
    {
      id: "be-cover",
      title: "Cover letter",
      description:
        "A one-page letter written for Backend Engineer applications. Swap in the company name when you send it.",
      href: coverHref,
      filename: "Ezz-Abdelmoez-Backend-Engineer-Cover-Letter.pdf",
      kind: "cover-letter",
      available: false,
    },
  ],
  copy: {
    headerSubtitle: "ASP.NET Core",
    about: {
      index: "01",
      eyebrow: "About",
      titleBefore: "An engineer who starts",
      titlePrefix: " with the ",
      titleAccent: "data",
      titleAfter: ".",
      titleBreak: true,
    },
    skills: {
      index: "02",
      eyebrow: "Toolkit",
      titleBefore: "The stack I ",
      titleAccent: "actually",
      titleAfter: " ship behind the UI.",
      lead: "ASP.NET Core, SQL Server and the access control around them — the tools I have used on real booking and operations products.",
    },
    work: {
      index: "03",
      eyebrow: "Selected work",
      titleBefore: "APIs other clients ",
      titleAccent: "trust",
      titleAfter: ".",
      lead: "Booking, records and permissions — REST surfaces with JWT, roles, and the edge cases a calendar always finds.",
    },
    experience: {
      index: "04",
      eyebrow: "The path so far",
      titleBefore: "Experience & ",
      titleAccent: "education",
      lead: "From a Computer Science degree in Luxor, through ITI's Web API and SQL Server work, to production ASP.NET Core.",
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
      lead: "Role-specific PDFs for Backend Engineer applications — a tailored CV and cover letter live here once they are uploaded.",
    },
    contact: {
      index: "07",
      eyebrow: "Contact",
      titleBefore: "Let's build something that ",
      titleAccent: "holds",
      titleAfter: ".",
    },
    contactBody:
      "I'm looking for Backend Engineer roles — ASP.NET Core, C#, SQL Server — and I'm happy to talk about freelance API work too. Tell me what has to sit under the UI — I usually reply within a day.",
    formSubjectPrefix: "Backend Engineer enquiry from",
    footerBlurb:
      "Backend Engineer shipping ASP.NET Core APIs and SQL Server models — from Luxor, Egypt.",
  },
  seo: {
    title: "Backend Engineer",
    description:
      "Backend Engineer from Luxor, Egypt, designing and shipping ASP.NET Core Web APIs, Entity Framework Core and SQL Server — with JWT and role-based access.",
    keywords: [
      "Ezz Abdelmoez",
      "Backend Engineer",
      "Backend Developer",
      ".NET Backend",
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "Entity Framework Core",
      "REST API",
      "Egypt",
      "Luxor",
    ],
    jobTitle: "Backend Engineer (ASP.NET Core)",
    knowsAbout: [
      "Backend Engineering",
      "C#",
      ".NET",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "REST APIs",
      "JWT",
      "RBAC",
      "Clean architecture",
    ],
  },
};
