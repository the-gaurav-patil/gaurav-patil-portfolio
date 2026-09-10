import {
  BarChart3,
  Database,
  FileSpreadsheet,
  TrendingUp,
} from "lucide-react";

type ProjectType = "ola" | "health" | "excel" | "retail";

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  work: string[];
  type: ProjectType;
}

const projects: Project[] = [
  {
    number: "01",
    title: "Ola Data Analysis",
    category: "DATA ANALYTICS / BUSINESS INTELLIGENCE",
    description:
      "Analyzed ride-booking data to identify booking trends, cancellation patterns, revenue performance, and customer behavior.",
    tools: ["SQL", "Power BI", "Excel"],
    work: [
      "SQL joins",
      "Aggregations",
      "Filtering",
      "Data validation",
      "KPI analysis",
      "Booking trends",
      "Revenue analysis",
      "Cancellation insights",
    ],
    type: "ola",
  },

  {
    number: "02",
    title: "Smoking Health Risk Analysis",
    category: "HEALTHCARE DATA ANALYTICS",
    description:
      "Analyzed healthcare data covering smoking status, smoking duration, daily intake, age, gender, cholesterol, and hypertension risk.",
    tools: ["Power BI", "Excel", "Power Query", "DAX"],
    work: [
      "Data cleaning",
      "Power Query transformation",
      "DAX calculations",
      "KPI calculations",
      "Interactive slicers",
      "Filtering",
      "Health indicator visualization",
    ],
    type: "health",
  },

  {
    number: "03",
    title: "MarketPulse Analytics Dashboard",
    category: "ADVANCED EXCEL / BUSINESS INTELLIGENCE",
    description:
      "Transformed raw business data into an interactive Excel dashboard designed to analyze performance, profitability, operations, customer segments, returns, and business trends.",
    tools: [
      "Microsoft Excel",
      "Advanced Excel",
      "Pivot Tables",
      "Pivot Charts",
      "Slicers",
    ],
    work: [
      "Data cleaning & processing",
      "KPI development",
      "Revenue analysis",
      "Profitability analysis",
      "Sales target analysis",
      "Category analysis",
      "Regional analysis",
      "Customer segmentation",
      "Return rate analysis",
      "Monthly & yearly trends",
      "Business insights",
    ],
    type: "excel",
  },

  {
    number: "04",
    title: "Retail Sales Analysis Dashboard",
    category: "POWER BI / BUSINESS INTELLIGENCE",
    description:
      "Analyzed retail transaction data using Power BI to identify product performance, sales trends, customer purchasing patterns, and seasonal business insights.",
    tools: ["Power BI", "Power Query", "DAX"],
    work: [
      "Data cleaning & transformation",
      "Product category analysis",
      "Revenue analysis",
      "Monthly trend analysis",
      "Quarterly trend analysis",
      "Customer demographic analysis",
      "Top customer analysis",
      "Sales performance analysis",
      "Business recommendations",
    ],
    type: "retail",
  },
];

function DashboardPreview({ type }: { type: ProjectType }) {
  /* =========================
     HEALTHCARE DASHBOARD
  ========================== */
  if (type === "health") {
    return (
      <div className="rounded-2xl border border-white/5 bg-[#050b16] p-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] text-slate-500">
            HEALTH ANALYTICS
          </span>

          <BarChart3 size={15} className="text-violet-400" />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {["SMOKING", "DURATION", "RISK"].map((x) => (
            <div
              key={x}
              className="rounded-lg border border-white/5 p-3"
            >
              <div className="font-mono text-[7px] text-slate-600">
                {x}
              </div>

              <div className="mt-2 h-2 rounded bg-violet-400/20">
                <div className="h-full w-2/3 rounded bg-violet-400/50" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 h-24 rounded-xl border border-white/5 p-3">
          <div className="flex h-full items-end gap-2">
            {[35, 55, 40, 70, 48, 82, 58, 65].map(
              (height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-violet-400/30"
                  style={{ height: `${height}%` }}
                />
              )
            )}
          </div>
        </div>
      </div>
    );
  }

  /* =========================
     EXCEL DASHBOARD
  ========================== */
  if (type === "excel") {
    return (
      <div className="rounded-2xl border border-white/5 bg-[#050b16] p-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] text-slate-500">
            EXCEL BUSINESS ANALYTICS
          </span>

          <FileSpreadsheet
            size={15}
            className="text-emerald-400"
          />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {["REVENUE", "PROFIT", "TARGET"].map((x) => (
            <div
              key={x}
              className="rounded-lg border border-white/5 p-3"
            >
              <div className="font-mono text-[7px] text-slate-600">
                {x}
              </div>

              <div className="mt-2 h-2 rounded bg-emerald-400/20">
                <div className="h-full w-3/5 rounded bg-emerald-400/50" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 h-24 rounded-xl border border-white/5 p-3">
          <div className="flex h-full items-end gap-2">
            {[45, 65, 50, 78, 60, 85, 70, 90].map(
              (height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-emerald-400/30"
                  style={{ height: `${height}%` }}
                />
              )
            )}
          </div>
        </div>
      </div>
    );
  }

  /* =========================
     RETAIL SALES DASHBOARD
  ========================== */
  if (type === "retail") {
    return (
      <div className="rounded-2xl border border-white/5 bg-[#050b16] p-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] text-slate-500">
            RETAIL SALES ANALYTICS
          </span>

          <TrendingUp
            size={15}
            className="text-blue-400"
          />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {["SALES", "CATEGORY", "CUSTOMERS"].map((x) => (
            <div
              key={x}
              className="rounded-lg border border-white/5 p-3"
            >
              <div className="font-mono text-[7px] text-slate-600">
                {x}
              </div>

              <div className="mt-2 h-2 rounded bg-blue-400/20">
                <div className="h-full w-4/5 rounded bg-blue-400/50" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 h-24 rounded-xl border border-white/5 p-3">
          <svg
            viewBox="0 0 300 80"
            className="h-full w-full"
          >
            <polyline
              points="0,65 40,58 80,60 120,42 160,48 200,25 240,32 300,18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-400/60"
            />
          </svg>
        </div>
      </div>
    );
  }

  /* =========================
     OLA DASHBOARD
  ========================== */
  return (
    <div className="rounded-2xl border border-white/5 bg-[#050b16] p-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] text-slate-500">
          POWER BI ANALYTICS
        </span>

        <Database
          size={15}
          className="text-cyan-400"
        />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {["BOOKINGS", "REVENUE", "CANCELLATION"].map(
          (x) => (
            <div
              key={x}
              className="rounded-lg border border-white/5 p-3"
            >
              <div className="font-mono text-[7px] text-slate-600">
                {x}
              </div>

              <div className="mt-2 h-2 rounded bg-cyan-400/20">
                <div className="h-full w-3/5 rounded bg-cyan-400/50" />
              </div>
            </div>
          )
        )}
      </div>

      <div className="mt-3 h-24 rounded-xl border border-white/5 p-3">
        <svg
          viewBox="0 0 300 80"
          className="h-full w-full"
        >
          <polyline
            points="0,65 40,55 80,58 120,35 160,45 200,25 240,32 300,15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-cyan-400/60"
          />
        </svg>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      {/* SECTION HEADER */}
      <div className="mb-14">
        <p className="font-mono text-xs text-cyan-400">
         PROJECTS
        </p>

        <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
          Featured Analytics
          <br />
          <span className="text-slate-500">
            Projects
          </span>
        </h2>
      </div>

      {/* PROJECT LIST */}
      <div className="space-y-5">
        {projects.map((project) => (
          <article
            key={project.number}
            className="glow-card glass grid gap-8 rounded-3xl p-5 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 sm:p-7 lg:grid-cols-[1fr_0.85fr]"
          >
            {/* LEFT SIDE */}
            <div>
              <span className="font-mono text-xs text-cyan-400">
                {project.number}
              </span>

              <p className="mt-10 font-mono text-[9px] tracking-wider text-slate-500">
                {project.category}
              </p>

              <h3 className="mt-3 font-display text-3xl font-bold">
                {project.title}
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              {/* TOOLS */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-cyan-400/10 bg-cyan-400/5 px-3 py-1 font-mono text-[9px] text-cyan-300 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* KEY WORK */}
              <div className="mt-7">
                <p className="mb-3 font-mono text-[9px] text-slate-600">
                  KEY ANALYTICAL WORK
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.work.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/5 px-3 py-2 text-[10px] text-slate-500 transition-colors duration-300 hover:border-white/10 hover:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="self-center">
              <DashboardPreview
                type={project.type}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
