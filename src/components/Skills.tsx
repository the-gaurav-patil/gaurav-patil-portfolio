import { BarChart3, Database, FileSpreadsheet, GitBranch, LineChart, Terminal } from "lucide-react";

const groups = [
  { title: "Programming & Querying", icon: Terminal, items: ["SQL", "Python"] },
  { title: "Data Visualization", icon: BarChart3, items: ["Power BI", "Microsoft Excel", "Tableau"] },
  { title: "Database", icon: Database, items: ["MySQL"] },
  { title: "Python Libraries", icon: LineChart, items: ["Pandas", "NumPy"] },
  { title: "Analytics", icon: FileSpreadsheet, items: ["Data Cleaning", "Exploratory Data Analysis", "Data Visualization", "Dashboard Development", "KPI Reporting", "Descriptive Statistics", "Insight Generation"] },
  { title: "Tools", icon: GitBranch, items: ["VS Code", "Git", "GitHub"] },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14"><p className="font-mono text-xs text-cyan-400">02 — SKILLS</p><h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Technical<br /><span className="text-slate-500">Toolkit</span></h2></div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => { const Icon = group.icon; return <div key={group.title} className="glow-card glass rounded-2xl p-6"><Icon size={20} className="text-cyan-400" /><h3 className="mt-5 font-display font-semibold">{group.title}</h3><div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 font-mono text-[10px] text-slate-400">{item}</span>)}</div></div>; })}
      </div>
    </section>
  );
}
