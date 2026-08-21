import { BarChart3, Database } from "lucide-react";

const projects = [
  { number: "01", title: "Ola Data Analysis", category: "DATA ANALYTICS / BUSINESS INTELLIGENCE", description: "Analyzed ride-booking data to identify booking trends, cancellation patterns, revenue performance, and customer behavior.", tools: ["SQL", "Power BI", "Excel"], work: ["SQL joins", "Aggregations", "Filtering", "Data validation", "KPI analysis", "Booking trends", "Revenue analysis", "Cancellation insights"], type: "ola" },
  { number: "02", title: "Smoking Health Risk Analysis", category: "HEALTHCARE DATA ANALYTICS", description: "Analyzed healthcare data covering smoking status, smoking duration, daily intake, age, gender, cholesterol, and hypertension risk.", tools: ["Power BI", "Excel", "Power Query", "DAX"], work: ["Data cleaning", "Power Query transformation", "DAX calculations", "KPI calculations", "Interactive slicers", "Filtering", "Health indicator visualization"], type: "health" },
];

function DashboardPreview({ type }: { type: string }) {
  if (type === "health") return (
    <div className="rounded-2xl border border-white/5 bg-[#050b16] p-4">
      <div className="flex items-center justify-between"><span className="font-mono text-[9px] text-slate-500">HEALTH ANALYTICS</span><BarChart3 size={15} className="text-violet-400" /></div>
      <div className="mt-4 grid grid-cols-3 gap-2">{["SMOKING", "DURATION", "RISK"].map((x) => <div key={x} className="rounded-lg border border-white/5 p-3"><div className="font-mono text-[7px] text-slate-600">{x}</div><div className="mt-2 h-2 rounded bg-violet-400/20"><div className="h-full w-2/3 rounded bg-violet-400/50" /></div></div>)}</div>
      <div className="mt-3 h-24 rounded-xl border border-white/5 p-3"><div className="flex h-full items-end gap-2">{[35,55,40,70,48,82,58,65].map((height, i) => <div key={i} className="flex-1 rounded-t bg-violet-400/30" style={{ height: `${height}%` }} />)}</div></div>
    </div>
  );
  return (
    <div className="rounded-2xl border border-white/5 bg-[#050b16] p-4">
      <div className="flex items-center justify-between"><span className="font-mono text-[9px] text-slate-500">POWER BI ANALYTICS</span><Database size={15} className="text-cyan-400" /></div>
      <div className="mt-4 grid grid-cols-3 gap-2">{["BOOKINGS", "REVENUE", "CANCELLATION"].map((x) => <div key={x} className="rounded-lg border border-white/5 p-3"><div className="font-mono text-[7px] text-slate-600">{x}</div><div className="mt-2 h-2 rounded bg-cyan-400/20"><div className="h-full w-3/5 rounded bg-cyan-400/50" /></div></div>)}</div>
      <div className="mt-3 h-24 rounded-xl border border-white/5 p-3"><svg viewBox="0 0 300 80" className="h-full w-full"><polyline points="0,65 40,55 80,58 120,35 160,45 200,25 240,32 300,15" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400/60" /></svg></div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14"><p className="font-mono text-xs text-cyan-400">04 — PROJECTS</p><h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Featured Analytics<br /><span className="text-slate-500">Projects</span></h2></div>
      <div className="space-y-5">
        {projects.map((project) => <article key={project.number} className="glow-card glass grid gap-8 rounded-3xl p-5 sm:p-7 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <span className="font-mono text-xs text-cyan-400">{project.number}</span>
            <p className="mt-10 font-mono text-[9px] tracking-wider text-slate-500">{project.category}</p>
            <h3 className="mt-3 font-display text-3xl font-bold">{project.title}</h3>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">{project.tools.map((tool) => <span key={tool} className="rounded-full border border-cyan-400/10 bg-cyan-400/5 px-3 py-1 font-mono text-[9px] text-cyan-300">{tool}</span>)}</div>
            <div className="mt-7"><p className="mb-3 font-mono text-[9px] text-slate-600">KEY ANALYTICAL WORK</p><div className="flex flex-wrap gap-2">{project.work.map((item) => <span key={item} className="rounded-lg border border-white/5 px-3 py-2 text-[10px] text-slate-500">{item}</span>)}</div></div>
          </div>
          <div className="self-center"><DashboardPreview type={project.type} /></div>
        </article>)}
      </div>
    </section>
  );
}
