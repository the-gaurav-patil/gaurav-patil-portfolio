import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

const links = [
  ["About", "about"], ["Skills", "skills"], ["Projects", "projects"],
  ["Experience", "experience"], ["Certifications", "certifications"],
  ["Education", "education"], ["Contact", "contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed left-1/2 top-4 z-50 w-[94%] max-w-7xl -translate-x-1/2 rounded-2xl transition-all duration-300 ${scrolled ? "glass shadow-2xl" : "bg-transparent"}`}>
      <nav className="flex items-center justify-between px-5 py-4">
        <a href="#home" className="font-display text-sm font-bold tracking-[0.2em]">
          GAURAV<span className="text-cyan-400">.</span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-xs text-slate-400 transition hover:text-white">{label}</a>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="https://github.com/the-gaurav-patil" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"><Github size={17} /></a>
          <a href="https://linkedin.com/in/gauravpatil9075" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"><Linkedin size={17} /></a>
          <a href="/resume.pdf" download className="rounded-lg border border-cyan-400/30 px-4 py-2 text-xs font-medium text-cyan-300 transition hover:bg-cyan-400/10">Resume</a>
        </div>
        <button onClick={() => setMobile(!mobile)} className="rounded-lg p-2 lg:hidden" aria-label="Toggle navigation">
          {mobile ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {mobile && (
        <div className="glass border-t border-white/5 px-5 pb-5 lg:hidden">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMobile(false)} className="block border-b border-white/5 py-3 text-sm text-slate-400">{label}</a>
          ))}
        </div>
      )}
    </header>
  );
}
