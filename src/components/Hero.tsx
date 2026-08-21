import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin ,
  Database,
  BarChart3,
  FileSpreadsheet,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center pt-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10">

            <div className="hero-status">
              <span className="status-dot" />
              AVAILABLE FOR DATA ANALYST OPPORTUNITIES
            </div>

            <div className="hero-location">
              DATA ANALYST <span>/</span> PUNE, INDIA
            </div>

            <h1 className="hero-title">
              <span className="hero-name-white">Gaurav</span>
              <span className="hero-name-gradient">Patil</span>
            </h1>

            <h2 className="hero-heading">
              Data Analyst turning raw data into meaningful business insights.
            </h2>

            <p className="hero-description">
              Data Analyst with a strong foundation in SQL, Python, Excel,
              Power BI, and MySQL. Skilled in data cleaning, exploratory data
              analysis, data visualization, KPI reporting, and dashboard
              development to transform raw data into meaningful business
              insights.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="hero-primary-button">
                View Projects
                <ArrowUpRight size={19} />
              </a>

              <a
                href="/resume.pdf"
                download="Gaurav_Patil_Resume.pdf"
                className="hero-secondary-button"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/the-gaurav-patil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com/in/gauravpatil9075"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="hero-visual">

            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />

            {/* Floating technology badges */}

            <div className="tech-badge tech-sql">
              <Database size={16} />
              <span>SQL</span>
            </div>

            <div className="tech-badge tech-python">
              <span className="tech-python-icon">Py</span>
              <span>Python</span>
            </div>

            <div className="tech-badge tech-powerbi">
              <BarChart3 size={16} />
              <span>Power BI</span>
            </div>

            <div className="tech-badge tech-excel">
              <FileSpreadsheet size={16} />
              <span>Excel</span>
            </div>

            {/* Connecting dots */}

            <span className="connection-dot connection-one" />
            <span className="connection-dot connection-two" />
            <span className="connection-dot connection-three" />
            <span className="connection-dot connection-four" />

            {/* Main photo */}

            <div className="profile-glow">
              <div className="profile-ring">
                <div className="profile-inner">
                  <img
                    src="/gaurav-profile.png"
                    alt="Gaurav Patil - Data Analyst"
                    className="profile-image"
                  />
                </div>
              </div>
            </div>

            {/* Bottom analytics card */}

            <div className="mini-analytics-card">
              <div>
                <span className="mini-label">DATA ANALYST</span>
                <strong>Turning Data Into Insights</strong>
              </div>

              <div className="mini-bars">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="hero-bottom-glow" />
    </section>
  );
}