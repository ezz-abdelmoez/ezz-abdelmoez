"use client";

const skillCategories = [
  {
    category: "Backend",
    skills: [
      "C# / .NET Core",
      "ASP.NET Core (MVC / Web API)",
      "Entity Framework Core",
      "LINQ",
      "JWT / OAuth2",
      "RESTful API Development",
      "SQL Server / T-SQL",
      "MongoDB"
    ]
  },
  {
    category: "Frontend",
    skills: [
      "React / Next.js",
      "TypeScript / JavaScript (ES6+)",
      "React Query / Zustand",
      "Redux Toolkit",
      "HTML5 / CSS3",
      "TailwindCSS",
      "Bootstrap",
      "Responsive Design"
    ]
  },
  {
    category: "Architecture & DevOps",
    skills: [
      "Clean Architecture",
      "Onion Architecture",
      "SOLID Principles",
      "Repository Pattern",
      "Dependency Injection",
      "Git / GitHub",
      "Agile Development",
      "REST API Best Practices"
    ]
  },
  {
    category: "Desktop Development",
    skills: [
      "WPF",
      "WinForms",
      "MVVM Pattern",
      "ADO.NET",
      "Entity Framework",
      "Windows Applications"
    ]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 lg:py-32 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section title */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-display text-white mb-8">Technical Skills</h2>
          <div className="h-px bg-gradient-to-r from-white/20 via-white/30 to-transparent w-24" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-xl font-display text-white mb-6">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <span className="text-white/40">▸</span>
                    <span className="text-white/80 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-display text-white mb-8">Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h4 className="text-lg font-display text-white mb-4">Arabic</h4>
              <div className="flex items-center gap-4">
                <span className="text-white/60">Native Speaker</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-2 h-8 bg-white/30 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h4 className="text-lg font-display text-white mb-4">English</h4>
              <div className="flex items-center gap-4">
                <span className="text-white/60">Very Good</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-2 h-8 bg-white/30 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
