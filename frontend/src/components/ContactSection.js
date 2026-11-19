"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  Download,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { InstagramIcon, LinkedInIcon, TelegramIcon } from "./SocialIcons";

export default function ContactSection({ profile, socials = {} }) {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const email = profile?.email || "m.matinazimii@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored if clipboard unavailable
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", text: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus({
          type: "error",
          text: data.error || "Something went wrong. Please try again.",
        });
        return;
      }

      setStatus({
        type: "success",
        text: data.message || "Message sent successfully!",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        text: "Network error. Please email me directly at " + email,
      });
    }
  };

  const socialItems = [
    {
      name: "LinkedIn",
      href: socials.linkedin,
      icon: <LinkedInIcon className="w-5 h-5" />,
      color: "hover:border-sky-400/50 hover:text-sky-300",
    },
    {
      name: "Telegram",
      href: socials.telegram,
      icon: <TelegramIcon className="w-5 h-5" />,
      color: "hover:border-cyan-400/50 hover:text-cyan-300",
    },
    {
      name: "Instagram",
      href: socials.instagram,
      icon: <InstagramIcon className="w-5 h-5" />,
      color: "hover:border-pink-400/50 hover:text-pink-300",
    },
  ].filter((item) => Boolean(item.href));

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
            05 / Get In Touch
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Let&apos;s Build Something Scalable
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Available for senior backend roles, distributed systems consulting,
            and technical leadership opportunities.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card rounded-2xl p-6 space-y-5">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Email
                </span>
                <div className="mt-1.5 flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 text-slate-100 hover:text-sky-400 font-medium text-sm sm:text-base break-all transition-colors"
                  >
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    {email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email"
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-400/40 text-slate-300 hover:text-sky-300 transition-colors shrink-0"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {profile?.phone && (
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Phone
                  </span>
                  <div className="mt-1.5">
                    <a
                      href={`tel:${profile.phone}`}
                      className="inline-flex items-center gap-2 text-slate-200 hover:text-sky-400 text-sm sm:text-base transition-colors"
                    >
                      <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                      {profile.phone}
                    </a>
                  </div>
                </div>
              )}

              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Location
                </span>
                <div className="mt-1.5 flex items-center gap-2 text-slate-200 text-sm sm:text-base">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                  {profile?.location || "Tehran, Iran"}
                </div>
              </div>

              {socialItems.length > 0 && (
                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Socials
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {socialItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-sm font-medium transition-all ${item.color}`}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Download Resume Card */}
            <div className="glass-card rounded-2xl p-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-white text-base">
                  Prefer a PDF copy?
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  Download my complete CV in one click.
                </p>
              </div>
              <a
                href="/api/resume/download"
                download="Mohammad-Matin-Azimi-CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/35 text-sky-300 text-sm font-semibold shrink-0 transition-all"
              >
                <Download className="w-4 h-4" />
                CV PDF
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-sky-400 focus:outline-none text-slate-100 placeholder:text-slate-600 text-sm transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-sky-400 focus:outline-none text-slate-100 placeholder:text-slate-600 text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, subject: e.target.value }))
                  }
                  placeholder="Backend Architecture / Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-sky-400 focus:outline-none text-slate-100 placeholder:text-slate-600 text-sm transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, message: e.target.value }))
                  }
                  placeholder="Tell me about your project or role..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-sky-400 focus:outline-none text-slate-100 placeholder:text-slate-600 text-sm transition-colors resize-none"
                />
              </div>

              {status.type !== "idle" && status.text && (
                <div
                  className={`px-4 py-3 rounded-xl text-sm border ${
                    status.type === "success"
                      ? "bg-emerald-500/10 border-emerald-400/30 text-emerald-300"
                      : "bg-rose-500/10 border-rose-400/30 text-rose-300"
                  }`}
                >
                  {status.text}
                </div>
              )}

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-300 hover:to-indigo-400 disabled:opacity-60 text-slate-950 font-semibold text-sm transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
