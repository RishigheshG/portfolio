import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import heroCharacter from '../assets/hero-character.png'
import ScrollReveal from '../components/ScrollReveal'
import './Home.css'

const tools = [
  { icon: 'terminal',                label: 'Python'       },
  { icon: 'psychology',              label: 'PyTorch'      },
  { icon: 'model_training',          label: 'Scikit-learn' },
  { icon: 'hub',                     label: 'LangChain'    },
  { icon: 'database',                label: 'SQL / Pandas' },
  { icon: 'cloud',                   label: 'AWS / GCP'    },
  { icon: 'api',                     label: 'FastAPI'      },
  { icon: 'view_kanban',             label: 'Docker'       },
  { icon: 'bar_chart',               label: 'Power BI'     },
  { icon: 'smart_toy',               label: 'OpenAI API'   },
  { icon: 'precision_manufacturing', label: 'TensorFlow'   },
  { icon: 'stream',                  label: 'Streamlit'    },
]

export default function Home() {
  useEffect(() => {
    document.title = 'Rishighesh Gandhavadi — AI/ML Engineer'
  }, [])

  return (
    <div className="home">

      {/* ─── Hero ─── */}
      <header className="home__hero">
        <div className="home__glow home__glow--right" />
        <div className="home__glow home__glow--left" />

        <div className="home__hero-inner">
          <div className="home__hero-grid">

            {/* Left — text content */}
            <div className="home__hero-content">
              <div className="home__status">
                <div className="home__status-ping-wrap">
                  <div className="home__status-ping" />
                  <div className="home__status-dot" />
                </div>
                <span className="home__status-text">Open to opportunities — Germany</span>
              </div>

              <p className="home__signal-label">AI / ML ENGINEER</p>
              <h1 className="home__hero-title">
                Rishighesh<span className="home__title-dot">.</span>
              </h1>
              <h2 className="home__hero-subtitle">AI/ML Engineer &amp; Data Scientist</h2>
              <p className="home__hero-body">
                Building <strong>production-grade ML systems</strong>, intelligent agents,
                and end-to-end AI pipelines. Currently pursuing a{' '}
                <strong>Master's in Data Science at FAU Erlangen</strong>.
                Open to AI/ML and Working Student roles in Germany.
              </p>
              <div className="home__hero-actions">
                <Link to="/projects" className="btn-primary-hero">
                  View Projects
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                </Link>
                <Link to="/resume" className="btn-secondary-hero">
                  Resume
                </Link>
                <a
                  href="https://github.com/RishigheshG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Right — hero character */}
            <div className="home__hero-character-wrap">
              <div className="home__character-glow" />
              <div className="home__character-grid" />
              <img
                src={heroCharacter}
                alt="Rishighesh Gandhavadi — AI/ML Engineer"
                className="home__hero-character"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="home__scroll-indicator">
          <span className="home__scroll-label">Scroll to explore</span>
          <div className="home__scroll-line" />
        </div>
      </header>

      {/* ─── 01 Deployments — Bento Grid ─── */}
      <section className="home__section home__deployments">
        <div className="home__section-inner">

          <ScrollReveal direction="up">
            <div className="home__section-header">
              <p className="home__index-label">01 — DEPLOYMENTS</p>
              <h3 className="home__section-title">
                Real Systems, <span className="home__title-italic">Real Impact.</span>
              </h3>
            </div>
          </ScrollReveal>

          <div className="home__bento">
            {/* span 4 — Adaptive Learning AI */}
            <ScrollReveal direction="up" delay={0} style={{ gridColumn: 'span 4' }}>
              <div className="home__bento-card home__bento-card--lg" style={{ height: '100%' }}>
                <div className="home__bento-bg-img">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCEXnHfLeJwIQbmYe5araanVNG2kGdhadtDVSnFmqZNOBNzYPI1NHRvUsY0B79DFIjR7W_kxC_ZP6olBIWGNhbpAECH6by4D1mzkzY0a8ShcmMnkfygvNCCDT9ju7j63w7ZjF749SnWOQ5x6clvtzaWbMzRuUn4bg6Oq1W4HH0S0lSDod5n2ITfEjsdhvjQ-Ctr9LL5RS5B5v3MxljEJzgMpwVKkZkz04Oe1WEXVtBIuIysDDGXV6GzSbGIB0qMMXfL1Ph5WVEGam7" alt="ML System" />
                </div>
                <div className="home__bento-content">
                  <span className="home__bento-tag">AI/ML · Production</span>
                  <h4 className="home__bento-title">Adaptive Learning AI</h4>
                  <p className="home__bento-desc">
                    Production ML system for personalized learning path generation,
                    academic performance prediction, and intelligent course recommendations.
                  </p>
                </div>
                <div className="home__bento-stack">
                  <span>Python</span><span>•</span>
                  <span>PyTorch</span><span>•</span>
                  <span>FastAPI</span>
                </div>
              </div>
            </ScrollReveal>

            {/* span 2 — Financial Command Center */}
            <ScrollReveal direction="up" delay={80} style={{ gridColumn: 'span 2' }}>
              <div className="home__bento-card home__bento-card--sm" style={{ height: '100%' }}>
                <div className="home__bento-icon">
                  <span className="material-symbols-outlined">account_balance</span>
                </div>
                <div>
                  <h4 className="home__bento-title">Financial Command Center</h4>
                  <p className="home__bento-desc">
                    LLM + n8n agentic workflow for expense tracking, anomaly detection,
                    and intelligent financial reporting automation.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* span 3 — Baby Cry Classifier */}
            <ScrollReveal direction="up" delay={40} style={{ gridColumn: 'span 3' }}>
              <div className="home__bento-card home__bento-card--glass" style={{ height: '100%' }}>
                <div className="home__bento-thumb">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuAS6AlJNHIBbYeEQceEDKbsXhup3MYDmKqo5qyfPT_L5E47sjciXuDcy-lfrKRw1MxnUvSTbsNVoi7nZkGVitdHpwZNuP_MoQ-MyKPvXXw8mk9exnqKJ1bS9Itzscb0UkhDGXZf7jaOdsIeI52MD02qe5YaHAi10-oGcuiSWkvQWnwY5-1fylpqU1Il4Q29CcvDmfR5y7arbq3bRSQshJNB2n6N572Q-T3ECxjuqmeIgwlZSIrY0dLFOftimoB8-JeTXfpBChLwKg" alt="Audio Analysis" />
                </div>
                <div>
                  <h4 className="home__bento-title">Baby Cry Classifier</h4>
                  <p className="home__bento-desc">
                    Deep learning audio classification with Grad-CAM + SHAP explainability.
                    Multi-class infant distress state detection.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* span 3 — MealCraft */}
            <ScrollReveal direction="up" delay={120} style={{ gridColumn: 'span 3' }}>
              <div className="home__bento-card home__bento-card--border" style={{ height: '100%' }}>
                <div className="home__bento-card-top">
                  <h4 className="home__bento-title">MealCraft</h4>
                  <span className="material-symbols-outlined home__bento-security-icon">restaurant</span>
                </div>
                <p className="home__bento-desc">
                  Pantry-to-recipe intelligent system. Ingredient parsing → LLM-powered
                  recipe recommendations → meal planning automation.
                </p>
                <div className="home__bento-stack">
                  <span>Python</span><span>•</span>
                  <span>LangChain</span><span>•</span>
                  <span>FastAPI</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ─── 02 Tooling ─── */}
      <section className="home__tooling">
        <div className="home__section-inner">
          <ScrollReveal direction="up">
            <div className="home__tooling-header">
              <div>
                <p className="home__index-label">02 — TOOLING</p>
                <h3 className="home__section-title">
                  The Engineer's <span className="home__title-italic">Stack.</span>
                </h3>
              </div>
              <p className="home__tooling-desc">
                My production stack — tools I've shipped real systems with,
                not just listed on a resume.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <div className="home__tools-grid">
              {tools.map(({ icon, label }) => (
                <div key={label} className="home__tool-cell">
                  <span className="material-symbols-outlined home__tool-icon">{icon}</span>
                  <span className="home__tool-label">{label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 03 Timeline ─── */}
      <section className="home__section home__timeline-section">
        <div className="home__section-inner">
          <div className="home__timeline-grid">

            {/* Left — timeline */}
            <div>
              <ScrollReveal direction="up">
                <p className="home__index-label">03 — TIMELINE</p>
                <h3 className="home__section-title home__section-title--mb">
                  Academic <span className="home__title-italic">Foundation.</span>
                </h3>
              </ScrollReveal>

              <div className="home__timeline">
                <ScrollReveal direction="left" delay={50}>
                  <div className="home__timeline-item">
                    <div className="home__timeline-dot home__timeline-dot--active" />
                    <p className="home__timeline-period home__timeline-period--active">2024 — PRESENT</p>
                    <h4 className="home__timeline-role">M.Sc. Data Science</h4>
                    <p className="home__timeline-company">FAU Erlangen-Nürnberg</p>
                    <p className="home__timeline-desc">
                      Graduate research in machine learning, deep learning, NLP, and
                      statistical learning theory. Building thesis-level AI systems with
                      production-grade engineering practices.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={150}>
                  <div className="home__timeline-item">
                    <div className="home__timeline-dot" />
                    <p className="home__timeline-period">2020 — 2024</p>
                    <h4 className="home__timeline-role">B.Tech Computer Science &amp; Engineering</h4>
                    <p className="home__timeline-company">VIT Chennai</p>
                    <p className="home__timeline-desc">
                      4-year CS degree with strong focus on AI/ML and software engineering.
                      Completed multiple end-to-end ML projects. Foundation in algorithms,
                      data structures, and applied machine learning.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Right — quote card */}
            <ScrollReveal direction="right" delay={100}>
              <div className="home__quote-card-wrap">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPiSgESRe5GfoKwnKA5CCcYON5As7tWdfQXHbb8e5Xk_XFKWQK-Vl6UcbR3LOpkc5ZZ-URlX5Z1kgVWtOLVTWfFCC3b3eru99bCEkig-2DPwPc_42rj6iFY11MYsLBVStnx1ZW0nusPG3zeu4xU3K0N8I7apfvynHHUUHCk_EwX-SEGNw0Fy1vDXNsTKfGDv2ImT7Msf5JTzqUd7Ke82taUPGSHDIdUsVCazCNqD3Vu62uNplKn9tAd8mUokJTE7rCyeNbbN7Mm76_"
                  alt="Focused work"
                  className="home__quote-bg-img"
                />
                <div className="home__quote-overlay" />
                <div className="home__quote-box">
                  <span className="material-symbols-outlined home__quote-icon">format_quote</span>
                  <p className="home__quote-text">
                    "The best ML system isn't the one with the most parameters —
                    it's the one that solves a real problem reliably, at scale."
                  </p>
                  <p className="home__quote-attr">— ENGINEERING PHILOSOPHY</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

    </div>
  )
}
