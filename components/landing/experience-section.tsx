"use client";

const experience = [
  {
    role: "Full Stack Developer (.NET / React)",
    company: "Luxor Booking Tours",
    period: "Oct 2025 – Present",
    description: "Developing and maintaining a full-stack tour booking platform using ASP.NET Core, C#, React, and SQL Server. Implementing secure payment integrations and optimizing application performance.",
    highlights: [
      "Built scalable APIs using ASP.NET Core",
      "Created responsive UI with React",
      "Implemented payment integration",
      "Optimized application performance"
    ]
  },
  {
    role: "Full Stack Web Development Trainee",
    company: "Information Technology Institute (ITI)",
    period: "Apr 2025 – Aug 2025",
    description: "Intensive training in .NET Full Stack Web Development covering advanced concepts in backend and frontend development.",
    highlights: [
      "Mastered ASP.NET Core MVC & Web API",
      "Advanced React and Next.js patterns",
      "Database design and optimization",
      "Clean architecture principles"
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Luxor University",
    period: "Sep 2019 – Sep 2023",
    gpa: "3.5/4.0"
  }
];

const certifications = [
  {
    name: "ITI Full Stack Web Development Using .NET Track",
    date: "Aug 2025"
  },
  {
    name: "Google IT Automation with Python",
    date: "Dec 2022"
  },
  {
    name: "CCNAv7",
    date: "Oct 2021"
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 lg:py-32 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section title */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-display text-white mb-8">Experience & Education</h2>
          <div className="h-px bg-gradient-to-r from-white/20 via-white/30 to-transparent w-24" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-display text-white mb-8">Work Experience</h3>
            <div className="space-y-6">
              {experience.map((job, idx) => (
                <div 
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-display text-white">{job.role}</h4>
                      <p className="text-white/60">{job.company}</p>
                    </div>
                    <span className="text-sm text-white/50 whitespace-nowrap ml-4">{job.period}</span>
                  </div>
                  
                  <p className="text-white/70 mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                        <span className="text-white/40 mt-1">→</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display text-white mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
                  >
                    <h4 className="font-display text-white mb-2">{edu.degree}</h4>
                    <p className="text-white/60 text-sm mb-2">{edu.school}</p>
                    <p className="text-white/50 text-xs">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-display text-white mb-4">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div 
                    key={idx}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
                  >
                    <p className="text-white/80 text-sm font-medium">{cert.name}</p>
                    <p className="text-white/50 text-xs mt-1">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
