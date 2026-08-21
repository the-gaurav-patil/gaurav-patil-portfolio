import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-8 sm:flex-row sm:items-center">
        <div><p className="font-display font-semibold">Gaurav Patil</p><p className="mt-1 text-xs text-slate-600">Data Analyst | SQL • Python • Power BI • Excel</p></div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/the-gaurav-patil" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-600 transition hover:text-white"><Github size={16} /></a>
          <a href="https://linkedin.com/in/gauravpatil9075" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-600 transition hover:text-white"><Linkedin size={16} /></a>
          <a href="mailto:gauravpatil907540@gmail.com" aria-label="Email" className="text-slate-600 transition hover:text-white"><Mail size={16} /></a>
          <span className="ml-2 font-mono text-[9px] text-slate-700">© 2026 Gaurav Patil</span>
        </div>
      </div>
    </footer>
  );
}
