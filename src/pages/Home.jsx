import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import heroCharacter from '../assets/hero-character.png'
import ScrollReveal from '../components/ScrollReveal'
import './Home.css'

const tools = [
  { icon: 'terminal',                  label: 'Python'     },
  { icon: 'database',                  label: 'PostgreSQL' },
  { icon: 'cloud',                     label: 'AWS / GCP'  },
  { icon: 'precision_manufacturing',   label: 'TensorFlow' },
  { icon: 'view_kanban',               label: 'Docker'     },
  { icon: 'architecture',              label: 'Kubernetes' },
]

export default function Home() {
  useEffect(() => {
    document.title = 'Rishighesh Gandhavadi — AI & Data Engineer'
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
              {/* Open-to-work status badge */}
              <div className="home__status">
                <div className="home__status-ping-wrap">
                  <div className="home__status-ping" />
                  <div className="home__status-dot" />
                </div>
                <span className="home__status-text">Open to opportunities</span>
              </div>

              <p className="home__signal-label">SIGNAL DETECTED</p>
              <h1 className="home__hero-title">
                Rishighesh<span className="home__title-dot">.</span>
              </h1>
              <h2 className="home__hero-subtitle">AI &amp; Data Engineer</h2>
              <p className="home__hero-body">
                Architecting robust <strong>data pipelines</strong> and deploying
                scalable <strong>machine learning models</strong>. Bridging the gap
                between raw intelligence and industrial execution.
              </p>
              <div className="home__hero-actions">
                <Link to="/projects" className="btn-primary-hero">
                  View Laboratory
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                </Link>
                <Link to="/resume" className="btn-secondary-hero">
                  Technical Resume
                </Link>
              </div>
            </div>

            {/* Right — hero character */}
            <div className="home__hero-character-wrap">
              <div className="home__character-glow" />
              <div className="home__character-grid" />
              <img
                src={heroCharacter}
                alt="Rishighesh — Kinetic Engineer"
                className="home__hero-character"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="home__scroll-indicator">
          <span className="home__scroll-label">Initialize Scroll</span>
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
                Engineering <span className="home__title-italic">The Future.</span>
              </h3>
            </div>
          </ScrollReveal>

          <div className="home__bento">
            {/* span 4 — must be on the ScrollReveal wrapper, which IS the grid child */}
            <ScrollReveal direction="up" delay={0} style={{ gridColumn: 'span 4' }}>
              <div className="home__bento-card home__bento-card--lg" style={{ height: '100%' }}>
                <div className="home__bento-bg-img">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCEXnHfLeJwIQbmYe5araanVNG2kGdhadtDVSnFmqZNOBNzYPI1NHRvUsY0B79DFIjR7W_kxC_ZP6olBIWGNhbpAECH6by4D1mzkzY0a8ShcmMnkfygvNCCDT9ju7j63w7ZjF749SnWOQ5x6clvtzaWbMzRuUn4bg6Oq1W4HH0S0lSDod5n2ITfEjsdhvjQ-Ctr9LL5RS5B5v3MxljEJzgMpwVKkZkz04Oe1WEXVtBIuIysDDGXV6GzSbGIB0qMMXfL1Ph5WVEGam7" alt="Code Grid" />
                </div>
                <div className="home__bento-content">
                  <span className="home__bento-tag">Scalability Protocol</span>
                  <h4 className="home__bento-title">Nebula Data Hub</h4>
                  <p className="home__bento-desc">
                    A distributed architecture processing 50TB+ of streaming data per
                    hour with sub-millisecond latency. Built for industrial-grade resilience.
                  </p>
                </div>
                <div className="home__bento-stack">
                  <span>Python</span><span>•</span>
                  <span>Spark</span><span>•</span>
                  <span>AWS Kinesis</span>
                </div>
              </div>
            </ScrollReveal>

            {/* span 2 */}
            <ScrollReveal direction="up" delay={80} style={{ gridColumn: 'span 2' }}>
              <div className="home__bento-card home__bento-card--sm" style={{ height: '100%' }}>
                <div className="home__bento-icon">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <div>
                  <h4 className="home__bento-title">Cognitive Core</h4>
                  <p className="home__bento-desc">
                    Self-optimizing machine learning models that evolve with real-world feedback loops.
                  </p>
                </div>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhMLckJjd2_NYgT_DyVP9BgB6EJ4ZlscRbROK6xyZSSSnnv0GtsPnTy16r0rk96bQP5AVKxR3AYMoggiD1fltJvTNTx9ttgyl__WkJbzUopIooF-wpUx5KgP7fZaTjgmBGPu70RyRxZkbtx_2WFiQJJCwW-WdpBrj7Q1YzBoOHT05zZck2cRnIwYkb5yh8Xr3CE-nZwRVqBFUGj7sR0OXenZTYR4UEPBNJvsNuiqhZAfzDq0cCUv9BfQPRbNNOZ3I7tpQdOqN6Zk34" alt="AI Nodes" className="home__bento-img-sm" />
              </div>
            </ScrollReveal>

            {/* span 3 */}
            <ScrollReveal direction="up" delay={40} style={{ gridColumn: 'span 3' }}>
              <div className="home__bento-card home__bento-card--glass" style={{ height: '100%' }}>
                <div className="home__bento-thumb">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuAS6AlJNHIBbYeEQceEDKbsXhup3MYDmKqo5qyfPT_L5E47sjciXuDcy-lfrKRw1MxnUvSTbsNVoi7nZkGVitdHpwZNuP_MoQ-MyKPvXXw8mk9exnqKJ1bS9Itzscb0UkhDGXZf7jaOdsIeI52MD02qe5YaHAi10-oGcuiSWkvQWnwY5-1fylpqU1Il4Q29CcvDmfR5y7arbq3bRSQshJNB2n6N572Q-T3ECxjuqmeIgwlZSIrY0dLFOftimoB8-JeTXfpBChLwKg" alt="Hardware" />
                </div>
                <div>
                  <h4 className="home__bento-title">Hardware Integration</h4>
                  <p className="home__bento-desc">
                    Edge computing solutions for real-time telemetry and industrial sensor arrays.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* span 3 */}
            <ScrollReveal direction="up" delay={120} style={{ gridColumn: 'span 3' }}>
              <div className="home__bento-card home__bento-card--border" style={{ height: '100%' }}>
                <div className="home__bento-card-top">
                  <h4 className="home__bento-title">Security Layer</h4>
                  <span className="material-symbols-outlined home__bento-security-icon">verified_user</span>
                </div>
                <p className="home__bento-desc">
                  Automated threat detection pipelines using graph-based anomaly detection algorithms.
                </p>
                <div className="home__bento-avatars">
                  <div className="home__avatar" style={{ background: '#3f3f46' }} />
                  <div className="home__avatar" style={{ background: '#52525b' }} />
                  <div className="home__avatar" style={{ background: '#71717a' }} />
                  <div className="home__avatar home__avatar--count">+12</div>
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
                  The Engineer's <span className="home__title-italic">Inventory.</span>
                </h3>
              </div>
              <p className="home__tooling-desc">
                My workspace is built on modern, scalable technologies that favor
                performance and maintainability.
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
                  Professional <span className="home__title-italic">Vector.</span>
                </h3>
              </ScrollReveal>

              <div className="home__timeline">
                <ScrollReveal direction="left" delay={50}>
                  <div className="home__timeline-item">
                    <div className="home__timeline-dot home__timeline-dot--active" />
                    <p className="home__timeline-period home__timeline-period--active">2022 — PRESENT</p>
                    <h4 className="home__timeline-role">Senior Data Architect</h4>
                    <p className="home__timeline-company">Industrial Intelligence Corp</p>
                    <p className="home__timeline-desc">
                      Leading the migration of legacy data lakes to real-time lakehouse
                      architectures. Managing a team of 12 engineers across 3 timezones.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={150}>
                  <div className="home__timeline-item">
                    <div className="home__timeline-dot" />
                    <p className="home__timeline-period">2019 — 2022</p>
                    <h4 className="home__timeline-role">ML Infrastructure Engineer</h4>
                    <p className="home__timeline-company">Synthetix Labs</p>
                    <p className="home__timeline-desc">
                      Developed internal MLOps platforms that reduced model deployment
                      cycles from weeks to hours.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Right — quote card over image */}
            <ScrollReveal direction="right" delay={100}>
              <div className="home__quote-card-wrap">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPiSgESRe5GfoKwnKA5CCcYON5As7tWdfQXHbb8e5Xk_XFKWQK-Vl6UcbR3LOpkc5ZZ-URlX5Z1kgVWtOLVTWfFCC3b3eru99bCEkig-2DPwPc_42rj6iFY11MYsLBVStnx1ZW0nusPG3zeu4xU3K0N8I7apfvynHHUUHCk_EwX-SEGNw0Fy1vDXNsTKfGDv2ImT7Msf5JTzqUd7Ke82taUPGSHDIdUsVCazCNqD3Vu62uNplKn9tAd8mUokJTE7rCyeNbbN7Mm76_"
                  alt="Office"
                  className="home__quote-bg-img"
                />
                <div className="home__quote-overlay" />
                <div className="home__quote-box">
                  <span className="material-symbols-outlined home__quote-icon">format_quote</span>
                  <p className="home__quote-text">
                    "Engineering is not just about solving problems; it's about
                    building systems that prevent them from existing."
                  </p>
                  <p className="home__quote-attr">— PROJECT PHILOSOPHY 004</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

    </div>
  )
}
