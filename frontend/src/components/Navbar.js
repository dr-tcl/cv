"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Consulting", href: "#consulting" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ shortName = "Matin Azimi" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060911]/85 backdrop-blur-xl border-b border-slate-800/70 shadow-lg shadow-black/25"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-slate-950 font-bold text-sm tracking-tight shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            MA
          </span>
          <span className="font-semibold text-slate-100 tracking-tight text-sm sm:text-base">
            {shortName}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-400 hover:text-sky-400 transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/api/resume/download"
            download="Mohammad-Matin-Azimi-CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/30 text-sky-300 text-sm font-medium transition-all hover:shadow-md hover:shadow-sky-500/10"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a0f1d]/95 backdrop-blur-xl border-b border-slate-800/80 px-4 pb-5 pt-2 space-y-2">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/api/resume/download"
            download="Mohammad-Matin-Azimi-CV.pdf"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-slate-950 font-semibold text-sm"
          >
            <Download className="w-4 h-4" />
            Download Resume (PDF)
          </a>
        </div>
      )}
    </header>
  );
}
