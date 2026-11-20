import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function ExperienceSection({ experience = [] }) {
  return (
    <section id="experience" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
            02 / Work Experience
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Career Timeline
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            From payment gateways and telecom automation to high-throughput
            stock market credit engines and AI streaming pipelines.
          </p>
        </div>

        <div className="mt-12 relative space-y-8 before:absolute before:left-4 sm:before:left-6 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-sky-500/60 before:via-indigo-500/30 before:to-transparent">
          {experience.map((job, idx) => (
            <div
              key={`${job.company}-${job.period}`}
              className="relative pl-11 sm:pl-16"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-[9px] sm:left-[17px] top-6 w-3.5 h-3.5 rounded-full border-2 ${
                  idx === 0
                    ? "bg-sky-400 border-sky-200 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                    : "bg-slate-900 border-sky-500/60"
                }`}
              />

              <div className="glass-card rounded-2xl p-6 sm:p-7 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl font-bold text-white">
                        {job.company}
                      </h3>
                      {job.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-500/10 border border-sky-400/25 text-sky-300">
                          {job.badge}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-slate-300 font-medium text-sm sm:text-base">
                      <Briefcase className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>{job.role}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    {job.period}
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.achievements.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-2.5 text-sm sm:text-[15px] text-slate-300/90 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400/80 shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
