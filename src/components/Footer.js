import { Download } from "lucide-react";

export default function Footer({ name = "Mohammad Matin Azimi" }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/70 bg-[#05070e] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-slate-500 text-center sm:text-left">
          &copy; {year} {name}. Built with Next.js &amp; Node.js.
        </p>

        <a
          href="/Mohammad-Matin-Azimi-CV.pdf"
          download="Mohammad-Matin-Azimi-CV.pdf"
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-sky-400 transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          Download Resume PDF
        </a>
      </div>
    </footer>
  );
}
