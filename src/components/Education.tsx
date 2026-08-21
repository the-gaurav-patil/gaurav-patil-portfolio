import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14"><p className="font-mono text-xs text-cyan-400">06 — EDUCATION</p><h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Academic<br /><span className="text-slate-500">Background</span></h2></div>
      <div className="glass rounded-3xl p-7 sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/5"><GraduationCap className="text-cyan-400" size={25} /></div>
          <div className="flex-1">
            <div className="flex flex-col justify-between gap-3 md:flex-row"><div><h3 className="font-display text-2xl font-bold">Bachelor of Computer Applications (BCA)</h3><p className="mt-2 text-sm text-slate-500">MGSMS College, Chopda</p></div><span className="font-mono text-[10px] text-slate-600">2022 — 2025</span></div>
            <p className="mt-6 text-sm text-slate-500">Affiliated to North Maharashtra University, Jalgaon</p>
            <div className="mt-7 inline-block rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-4"><p className="font-mono text-[9px] text-cyan-400">CGPA</p><p className="mt-1 font-display text-2xl font-bold">8.17 / 10</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
