/**
 * Single source of truth for every piece of content on the site.
 * Edit this file to update the portfolio — no component changes needed.
 */

export const profile = {
  name: "Ezz Abdelmoez",
  fullName: "Ezz Abdelmoez Ahmed Mohamed",
  role: "Full Stack Developer",
  stack: ".NET & React",
  tagline: "Full Stack Developer — .NET & React",
  location: "Luxor, Egypt",
  timezone: "GMT+2",
  available: true,
  availabilityNote: "Open to remote & on-site roles",
  resume: "/Ezz_Abdelmoez_Ahmed_Mohamed.pdf",
  photo: "/me.jpeg",
  summary:
    "Full Stack .NET Developer with experience designing and developing scalable web applications using ASP.NET Core, React, Entity Framework Core and SQL Server. I build RESTful APIs, implement secure authentication and authorization, and craft responsive interfaces — with a bias toward clean architecture and code that stays readable six months later.",
  bio: [
    "I'm Ezz — a Computer Science graduate from Luxor University and a full stack developer working mainly across the .NET and React ecosystems. I like the whole path of a feature: modelling the data, shaping the API, then making the interface feel effortless.",
    "Most of my work so far has been booking platforms and management systems — real products with real users, roles, permissions and edge cases. I trained intensively on the .NET full stack track at ITI (Qena) and have been shipping ever since.",
    "Outside of client work I write and record programming lessons in Arabic under عالم البرمجة, explore React Native, and keep an eye on where AI tooling is taking our craft.",
  ],
} as const;

export const contactLinks = {
  email: "ezzabdelmoez@gmail.com",
  phone: "+201014080630",
  github: "https://github.com/ezz-abdelmoez",
  githubHandle: "github.com/ezz-abdelmoez",
  linkedin: "https://www.linkedin.com/in/ezz-abdelmoez",
  linkedinHandle: "linkedin.com/in/ezz-abdelmoez",
} as const;

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Path", href: "#experience" },
  { name: "Teaching", href: "#teaching" },
  { name: "Contact", href: "#contact" },
] as const;

/** Short, high-signal facts rendered under the hero. */
export const heroStats = [
  { value: "1+", label: "year building\nproduction apps" },
  { value: "4", label: "full stack platforms\nshipped" },
  { value: "B.Sc.", label: "Computer Science\nLuxor University" },
  { value: "ITI", label: ".NET full stack\ntrack graduate" },
] as const;

export const quickFacts = [
  { label: "Based in", value: "Luxor, Egypt (GMT+2)" },
  { label: "Focus", value: "ASP.NET Core · React · SQL Server" },
  { label: "Education", value: "B.Sc. Computer Science, Luxor University" },
  { label: "Training", value: "ITI — .NET Full Stack Web Development" },
  { label: "Languages", value: "Arabic (native) · English (very good) · German (A1)" },
  { label: "Status", value: "Open to remote & on-site roles" },
] as const;

/** The stack shown in the hero marquee — only the things I reach for daily. */
export const coreStack = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "Entity Framework Core",
  "SQL Server",
  "REST APIs",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Git",
] as const;

export type SkillGroup = {
  title: string;
  blurb: string;
  icon: "server" | "layout" | "database" | "smartphone" | "wrench";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    blurb: "Where I'm strongest — APIs, data and access control.",
    icon: "server",
    skills: [
      "C# / OOP",
      "ASP.NET Core (Web API & MVC)",
      "RESTful API design",
      "Entity Framework Core",
      "LINQ",
      "JWT authentication",
      "Role-based access control",
      "Dependency injection",
    ],
  },
  {
    title: "Frontend",
    blurb: "Component-driven interfaces that stay responsive and readable.",
    icon: "layout",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Responsive & accessible UI",
      "Component architecture",
    ],
  },
  {
    title: "Data",
    blurb: "Schema design first, queries second, indexes when they earn it.",
    icon: "database",
    skills: [
      "Microsoft SQL Server",
      "Relational database design",
      "Relationships & constraints",
      "CRUD & stored procedures",
      "EF Core migrations",
      "Query optimisation basics",
    ],
  },
  {
    title: "Mobile & Desktop",
    blurb: "Same C#/React muscles, different surface.",
    icon: "smartphone",
    skills: [
      "React Native",
      "Expo & Expo Router",
      "Mobile navigation patterns",
      "WPF",
      "MVVM pattern",
      "Windows desktop apps",
    ],
  },
  {
    title: "Tools & Practice",
    blurb: "How the work actually gets shipped.",
    icon: "wrench",
    skills: [
      "Git & GitHub",
      "Agile / Scrum",
      "Clean architecture",
      "SOLID principles",
      "Repository pattern",
      "Vercel deployment",
      "VPS basics (Hetzner, Coolify)",
      "Networking fundamentals (CCNAv7)",
    ],
  },
];

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

export const projects: Project[] = [
  {
    title: "Hospital Management System",
    subtitle: "Healthcare operations platform",
    year: "2026",
    description:
      "A comprehensive platform for running a hospital day to day: patient records, doctors and nurses, appointments, visits and e-prescriptions — all behind granular role-based permissions.",
    highlights: [
      "Electronic medical records, vital signs and e-prescriptions",
      "Appointment booking, visit tracking and reception workflows",
      "Role-based access control across staff types, plus audit logs",
      "JWT-secured ASP.NET Core Web API consumed by a React SPA",
    ],
    tech: [
      "ASP.NET Core Web API",
      "C#",
      "React",
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
    subtitle: "Wedding hall booking platform",
    year: "2026",
    description:
      "A booking product for wedding venues — browse halls, check real availability, reserve a date and manage the booking afterwards, on any screen size.",
    highlights: [
      "Venue catalogue with search, filtering and photo galleries",
      "Availability calendar and reservation flow with conflict handling",
      "Customer dashboard for managing and reviewing bookings",
      "Responsive, mobile-first interface built in React",
    ],
    tech: [
      "ASP.NET Core Web API",
      "C#",
      "React.js",
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
    subtitle: "Tourism booking platform",
    year: "2025 — 2026",
    description:
      "A full stack tour booking platform for the Luxor tourism market, where I owned features end to end — from the SQL Server schema through the API to the React interface travellers actually use.",
    highlights: [
      "Scalable ASP.NET Core APIs backing tour, availability and booking flows",
      "Responsive React front end for browsing and reserving tours",
      "Ongoing maintenance, performance work and feature delivery",
    ],
    tech: ["ASP.NET Core", "C#", "React", "SQL Server", "Entity Framework Core", "REST API"],
    featured: true,
  },
  {
    title: "Mobile Store Management System",
    subtitle: "Retail desktop application",
    year: "2025",
    description:
      "A Windows desktop app for a phone retail shop: inventory, sales, repairs, warranties and financial reporting, with a fully right-to-left Arabic interface.",
    highlights: [],
    tech: ["C#", "WPF", "MVVM", "Entity Framework", "SQL Server"],
  },
  {
    title: "Restaurant Management System",
    subtitle: "Web application",
    year: "2025",
    description:
      "Menu, order, reservation and staff management for a restaurant, with role-based access separating floor staff, kitchen and management.",
    highlights: [],
    tech: ["ASP.NET Core", "Entity Framework", "Bootstrap", "SQL Server"],
  },
];

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

export const timeline: TimelineItem[] = [
  {
    kind: "work",
    role: "Full Stack Developer (.NET / React)",
    org: "Luxor Booking Tours",
    period: "Oct 2025 — Jun 2026",
    location: "Luxor, Egypt",
    description:
      "Developed and maintained a full stack tour booking platform, building scalable APIs and the responsive interfaces on top of them.",
    points: [
      "Built and maintained ASP.NET Core Web APIs backed by SQL Server and EF Core",
      "Implemented booking, availability and management flows in React",
      "Handled authentication, authorisation and role-based permissions",
      "Profiled and improved application performance across the stack",
    ],
  },
  {
    kind: "training",
    role: "Intensive Training Program — .NET Full Stack Web Development",
    org: "Information Technology Institute (ITI)",
    period: "Apr 2025 — Aug 2025",
    location: "Qena, Egypt",
    description:
      "Full-time, hands-on training track covering the .NET web stack end to end, delivered through team projects.",
    points: [
      "ASP.NET Core MVC and Web API, C# and OOP in depth",
      "Entity Framework Core, LINQ and SQL Server database design",
      "React, JavaScript and modern front-end tooling",
      "Clean architecture, SOLID and Git-based team workflow",
    ],
  },
  {
    kind: "work",
    role: "IT Support Intern",
    org: "Agricultural Bank of Egypt — Luxor Branches",
    period: "Oct 2023",
    location: "Luxor Governorate, Egypt",
    description:
      "Supported banking systems across multiple branches in Luxor Governorate, keeping day-to-day operations running.",
    points: [
      "System maintenance and software updates across branch machines",
      "First-line technical support and issue troubleshooting",
      "Helped ensure reliable system availability for branch staff",
    ],
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science",
    school: "Luxor University",
    period: "Sep 2019 — Sep 2023",
    location: "Luxor, Egypt",
  },
] as const;

export const certifications = [
  {
    name: "ITI — .NET Full Stack Web Development",
    issuer: "Information Technology Institute",
    date: "Aug 2025",
  },
  {
    name: "CCNAv7",
    issuer: "Cisco Networking Academy",
    date: "Oct 2021",
  },
] as const;

export const learning = [
  {
    title: "React Native & Expo",
    note: "Taking my web products to mobile — Expo Router, native components and mobile-first patterns.",
    level: "Building with it",
  },
  {
    title: "AI-assisted development",
    note: "Local LLMs with Ollama, and coding agents as part of a real workflow rather than a demo.",
    level: "Exploring",
  },
  {
    title: "Web3 & blockchain",
    note: "Working through the fundamentals first — consensus, wallets, smart contracts — before I claim it.",
    level: "Learning",
  },
  {
    title: "Deployment & infrastructure",
    note: "VPS hosting, Coolify, PostgreSQL and domain setup, so I can ship without waiting on anyone.",
    level: "Practising",
  },
] as const;

export const teaching = {
  brand: "عالم البرمجة",
  brandLatin: "Programming World",
  intro:
    "I write and record programming lessons in Arabic, aimed at learners who are starting from zero. Explaining a concept until a beginner genuinely gets it is the fastest way I know to understand it properly myself.",
  topics: [
    "Programming fundamentals",
    "How computers work",
    "Binary & data representation",
    "CPU, RAM & cache memory",
    "C++",
    "Python",
    "JavaScript",
    "React Native",
    "Web development",
    "Intro to AI",
  ],
  curricula: [
    "منهج البرمجة للصف الأول الثانوي — first-year secondary programming curriculum",
    "مادة البرمجة – 2 بكالوريا — second-year baccalaureate programming material",
  ],
} as const;

export const languages = [
  { name: "Arabic", level: "Native", score: 5 },
  { name: "English", level: "Very good", score: 4 },
  { name: "German", level: "A1 — in progress", score: 1 },
] as const;

export const beyondCode = [
  {
    title: "Chess",
    note: "The good kind of hard problem — no framework, no docs, just the position in front of you.",
  },
  {
    title: "Teaching",
    note: "Building Arabic programming courses under عالم البرمجة for learners starting from zero.",
  },
  {
    title: "Languages",
    note: "Working through German at A1, and sharpening English for technical conversation.",
  },
] as const;
