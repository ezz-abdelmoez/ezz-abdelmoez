"use client";

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 lg:py-32 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section title */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-display text-white mb-8">About Me</h2>
          <div className="h-px bg-gradient-to-r from-white/20 via-white/30 to-transparent w-24" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Main text */}
          <div className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed">
              I&apos;m a passionate Full Stack Developer specializing in building scalable web applications using .NET Core, C#, and React. With expertise in modern JavaScript, TypeScript, and a strong foundation in clean architecture principles, I craft high-performance solutions that deliver seamless user experiences.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              My journey in software development has equipped me with the skills to develop enterprise-level solutions, optimize performance, and write maintainable code. I&apos;m proficient in REST APIs, Entity Framework Core, SQL Server, and follow Agile development practices.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              When I&apos;m not coding, I&apos;m exploring new technologies, contributing to open-source projects, and solving real-world problems through innovative solutions. I&apos;m currently available for remote and on-site opportunities.
            </p>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="text-4xl font-display text-white mb-2">4+</div>
              <p className="text-sm text-white/60">Years Experience</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="text-4xl font-display text-white mb-2">15+</div>
              <p className="text-sm text-white/60">Projects Completed</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="text-2xl font-display text-white mb-2">B.Sc</div>
              <p className="text-sm text-white/60">Computer Science</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="text-2xl font-display text-white mb-2">Full Stack</div>
              <p className="text-sm text-white/60">.NET & React</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
