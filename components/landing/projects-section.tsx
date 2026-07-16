"use client";

import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Mobile Store Management System",
    description: "Desktop application for retail operations managing inventory, sales, repairs, warranties, and financial analytics with RTL Arabic localization.",
    technologies: ["C#", "WPF", "Entity Framework", "SQL Server", "MVVM"],
    links: {
      github: "https://github.com/ezz-abdelmoez"
    }
  },
  {
    title: "Restaurant Management System",
    description: "Web-based application supporting menu management, orders, reservations, and staff management with role-based access control.",
    technologies: ["ASP.NET Core", "Entity Framework", "Bootstrap", "SQL Server"],
    links: {
      github: "https://github.com/ezz-abdelmoez"
    }
  },
  // {
  //   title: "Postan Chat Bot Manager",
  //   description: "Full-stack chatbot platform with visual flow builder and drag-and-drop interface for creating and deploying conversational bots.",
  //   technologies: ["NestJS", "Next.js", "React", "Prisma", "MongoDB", "Socket.IO"],
  //   links: {
  //     demo: "https://example.com"
  //   },
  //   featured: true
  // },
  {
    title: "Hospital Management System (HMS)",
    description: "Built a comprehensive hospital management platform with patient records, appointments, e-prescriptions, vital signs, staff management, RBAC, visitor management, and audit logs for efficient healthcare operations.",
    technologies: ["ASP.NET Core", "React", "SQL Server", "C#", "Entity Framework Core", "JWT Authentication", "RBAC"],
    image: "/projects/hms.png",
    links: {
      // github: "https://github.com/ezz-abdelmoez",
      demo: "https://hms-me.vercel.app/"
    },
    featured: true
  },
  {
    title: "Farhetak – Wedding Hall Booking Platform",
    description: "Developed a full-stack wedding hall booking platform that enables users to browse venues, check availability, make reservations, and manage bookings through a responsive and user-friendly interface.",
    technologies: ["C#", "ASP.NET Core Web API", "React.js", "Entity Framework Core", "SQL Server", "JWT Authentication", "RESTful APIs"],
    image: "/projects/farhetak.png",
    links: {
      // github: "https://github.com/ezz-abdelmoez",
      demo: "https://farhetak.vercel.app/"
    },
    featured: true
  },
  // {
  //   title: "Adidas E-Commerce Platform",
  //   description: "Full-stack e-commerce platform with JWT authentication, shopping cart, and order processing. Built with modern architecture and mobile-first responsive design.",
  //   technologies: ["ASP.NET Core", "Entity Framework", "Angular", "TailwindCSS", "SQL Server"],
  //   links: {
  //     github: "https://github.com/ezz-abdelmoez",
  //     demo: "https://example.com"
  //   },
  //   featured: true
  // },
];

export function ProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="relative py-20 lg:py-32 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section title */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-display text-white mb-8">Featured Projects</h2>
          <div className="h-px bg-gradient-to-r from-white/20 via-white/30 to-transparent w-24" />
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-display text-white mb-4 group-hover:text-white/90 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80 hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="space-y-4">
          <h3 className="text-xl font-display text-white/80 mb-6">Other Projects</h3>
          {otherProjects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-lg font-display text-white mb-2 group-hover:text-white/90 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-white/60 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-full text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4 text-white/50 hover:text-white" />
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-white/50 hover:text-white" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
