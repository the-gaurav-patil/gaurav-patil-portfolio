const stats = [
  ["100K+", "Rows Processed"],
  ["40%", "Reporting Time Reduced"],
  ["4", "Departments Supported"],
  ["8.17/10", "BCA CGPA"],
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14"><p className="font-mono text-xs text-cyan-400">ABOUT</p><h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Turning Data Into<br /><span className="text-slate-500">Decisions</span></h2></div>
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6 text-sm leading-8 text-slate-400">
          <p>I'm a Data Analyst passionate about transforming raw data into meaningful business insights. I work with SQL, Python, Excel, Power BI, and MySQL to clean, analyze, visualize, and communicate data effectively.</p>
          <p>My experience includes working with large datasets, developing dashboards, creating reporting solutions, validating analytical outputs, and supporting data-driven business decisions.</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {stats.map(([number, label]) => <div key={label} className="glow-card glass rounded-2xl p-6"><div className="font-display text-3xl font-bold text-white">{number}</div><div className="mt-2 font-mono text-[9px] uppercase tracking-wider text-slate-500">{label}</div></div>)}
        </div>
      </div>
    </section>
  );
}
