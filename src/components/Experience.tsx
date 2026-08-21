export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14"><p className="font-mono text-xs text-cyan-400">03 — EXPERIENCE</p><h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Professional<br /><span className="text-slate-500">Experience</span></h2></div>
      <div className="relative border-l border-white/10 pl-7">
        <div className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,.8)]" />
        <div className="glass rounded-3xl p-7 sm:p-9">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div><p className="font-mono text-[10px] text-cyan-400">JANUARY 2026 — JULY 2026</p><h3 className="mt-3 font-display text-2xl font-bold">Data Analyst Intern</h3><p className="mt-1 text-sm text-slate-500">Yess Infotech Pvt. Ltd. · On-site</p></div>
            <div className="flex flex-wrap gap-2">{["Excel", "SQL", "Power BI"].map((x) => <span key={x} className="h-fit rounded-full border border-white/10 px-3 py-1 font-mono text-[9px] text-slate-400">{x}</span>)}</div>
          </div>
          <div className="mt-8 space-y-4 text-sm leading-7 text-slate-400">
            <p>• Processed and standardized a dataset of over 1,00,000 rows from multiple regions to support weekly analytics and enable business teams to track KPIs across geography and time.</p>
            <p>• Designed Excel templates using lookup functions and Pivot Tables, reducing reporting time by 40% across 4 departments.</p>
            <p>• Developed and maintained Power BI dashboards to visualize revenue trends, customer mix, and monthly performance for business reporting.</p>
            <p>• Supported weekly review activities involving 6 business measures and performed structured data validation and output checks to improve reporting accuracy.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">{[["100K+", "ROWS"], ["40%", "FASTER"], ["4", "DEPARTMENTS"], ["6", "MEASURES"]].map(([number, label]) => <div key={label} className="rounded-xl border border-white/5 bg-white/[0.02] p-4"><div className="font-display text-xl font-bold">{number}</div><div className="mt-1 font-mono text-[8px] text-slate-600">{label}</div></div>)}</div>
        </div>
      </div>
    </section>
  );
}
