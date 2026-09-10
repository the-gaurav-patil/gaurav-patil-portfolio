import { Award } from "lucide-react";

const certificates = [
  ["Deloitte Data Analytics Virtual Experience", "Forage"],
  ["HP LIFE Data Analytics Certificate", "HP Foundation"],
];

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14"><p className="font-mono text-xs text-cyan-400">CERTIFICATIONS</p><h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Certifications &<br /><span className="text-slate-500">Learning</span></h2></div>
      <div className="grid gap-4 md:grid-cols-2">
        {certificates.map(([title, provider]) => <div key={title} className="glow-card glass flex gap-5 rounded-2xl p-7"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/5"><Award className="text-cyan-400" size={22} /></div><div><h3 className="font-display font-semibold">{title}</h3><p className="mt-2 text-sm text-slate-500">{provider}</p><p className="mt-4 font-mono text-[9px] text-slate-600">2026</p></div></div>)}
      </div>
    </section>
  );
}
