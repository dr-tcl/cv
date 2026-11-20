import { Download, Mail, MapPin, ArrowUpRight, Terminal } from "lucide-react";
import { InstagramIcon, LinkedInIcon, TelegramIcon } from "./SocialIcons";

export default function Hero({ profile, highlights = [], socials = {} }) {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: socials.linkedin,
      icon: <LinkedInIcon className="w-4 h-4" />,
    },
    {
      name: "Telegram",
      href: socials.telegram,
      icon: <TelegramIcon className="w-4 h-4" />,
    },
    {
      name: "Instagram",
      href: socials.instagram,
      icon: <InstagramIcon className="w-4 h-4" />,
    },
  ].filter((item) => Boolean(item.href));

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[480px] h-[480px] rounded-full bg-sky-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-24 right-1/6 w-[380px] h-[380px] rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/25 text-sky-300 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {profile.availability || "Senior Backend Engineer"}
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-white leading-[1.12]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-medium">
                {profile.title}
              </p>
            </div>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {profile.tagline}
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <a
                href="/Mohammad-Matin-Azimi-CV.pdf"
                download="Mohammad-Matin-Azimi-CV.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-300 hover:to-indigo-400 text-slate-950 font-semibold text-sm sm:text-base shadow-lg shadow-sky-500/20 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Download Resume (PDF)
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-sky-400/40 text-slate-100 font-medium text-sm sm:text-base transition-all"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                Let&apos;s Talk
              </a>
            </div>

            {/* Meta + Socials */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800/80">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {profile.location}
              </span>

              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 hover:bg-slate-800 border border-slate-800/80 hover:border-sky-400/40 text-slate-300 hover:text-sky-300 transition-colors"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Framed Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 lg:w-[340px]">
              {/* Decorative gradient frame glow */}
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-tr from-sky-500/40 via-indigo-500/20 to-cyan-400/35 blur-md opacity-75" />

              <div className="relative rounded-[26px] p-2 bg-[#0c1222] border border-slate-700/60 shadow-2xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-slate-900">
                  <img
                    src="/images/matin-portrait.jpg"
                    alt="Mohammad Matin Azimi"
                    className="w-full h-full object-cover object-top scale-[1.01]"
                  />
                  {/* Subtle bottom vignette for badge legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060911]/90 via-[#060911]/40 to-transparent" />

                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-[#0b1120]/85 backdrop-blur-md border border-slate-700/60">
                    <div className="flex items-center gap-2 min-w-0">
                      <Terminal className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="text-xs font-mono text-slate-200 truncate">
                        Python • Go • Kafka
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 shrink-0">
                      8+ yrs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Strip */}
        {highlights.length > 0 && (
          <div className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-2xl p-5 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent">
                  {item.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-200">
                  {item.label}
                </div>
                <div className="mt-0.5 text-xs text-slate-400">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
