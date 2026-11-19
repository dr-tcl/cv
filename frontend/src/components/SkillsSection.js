import { Award, GraduationCap, Wrench } from "lucide-react";

export default function SkillsSection({
  skills = [],
  education = [],
  certifications = [],
}) {
  return (
    <section id="skills" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
            04 / Capabilities &amp; Credentials
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Stack &amp; Education
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <Wrench className="w-4 h-4 text-sky-400" />
                  <h3 className="text-base font-semibold text-white">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-sky-400/40 text-xs sm:text-sm text-slate-300 font-mono transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Certifications */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="glass-card rounded-2xl p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-sky-500/15 border border-sky-400/25 flex items-center justify-center text-sky-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h4 className="font-semibold text-slate-100 text-sm sm:text-base">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono text-sky-400">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-slate-400">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 sm:p-7">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-400/25 flex items-center justify-center text-indigo-300">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Certifications
              </h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-center justify-between gap-3"
                >
                  <div>
                    <h4 className="font-semibold text-slate-100 text-sm sm:text-base">
                      {cert.name}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-400">
                      Issued by {cert.issuer}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-xs font-mono text-slate-300 shrink-0">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
