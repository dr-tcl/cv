import { Compass, Sparkles } from "lucide-react";

export default function ConsultingSection({ consulting = [] }) {
  if (!consulting.length) return null;

  return (
    <section id="consulting" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
            03 / Independent Projects &amp; Consulting
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Leadership &amp; Digital Transformation
          </h2>
        </div>

        <div className="mt-10 space-y-6">
          {consulting.map((project) => (
            <div
              key={project.title}
              className="relative rounded-3xl p-[1px] bg-gradient-to-br from-sky-500/40 via-indigo-500/20 to-slate-800/40"
            >
              <div className="rounded-[23px] bg-[#0a0f1c]/95 p-6 sm:p-9">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-sky-300 font-medium">
                        {project.role}
                      </p>
                    </div>
                  </div>
                  <span className="self-start px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/25 text-emerald-300 text-xs font-mono">
                    {project.period}
                  </span>
                </div>

                <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.summary}
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {project.outcomes.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 text-sm text-slate-300 leading-relaxed"
                    >
                      <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
