import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import './Resume.css'

const FILL = { fontVariationSettings: "'FILL' 1" }

const techStack = [
  'Python', 'PyTorch', 'TensorFlow', 'Scikit-learn',
  'Pandas', 'NumPy', 'SQL', 'FastAPI', 'Docker',
  'LangChain', 'LangGraph', 'OpenAI API', 'n8n',
  'Streamlit', 'Power BI', 'AWS', 'GCP', 'Supabase',
  'YOLO', 'Hugging Face', 'Git',
]

const certifications = [
  { name: 'Deep Learning Specialization',      issuer: 'Coursera / Andrew Ng',  year: '2023' },
  { name: 'Machine Learning Specialization',   issuer: 'Coursera / Stanford',   year: '2022' },
]

export default function Resume() {
  useEffect(() => {
    document.title = 'Resume | Rishighesh Gandhavadi'
  }, [])

  return (
    <div className="cv">
      <main className="cv__main">

        {/* Header */}
        <ScrollReveal direction="up">
          <header className="cv__header">
            <div className="cv__header-left">
              <span className="cv__name-label">Rishighesh Gandhavadi</span>
              <h1 className="cv__title">Curriculum<br />Vitae</h1>
            </div>
            <div className="cv__header-right">
              <div className="cv__icon-row">
                <a href="mailto:rishigheshg@gmail.com" className="cv__icon-btn" aria-label="Email">
                  <span className="material-symbols-outlined">mail</span>
                </a>
                <div className="cv__icon-btn" aria-label="Location">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <a href="https://www.linkedin.com/in/rishigheshg/" target="_blank" rel="noopener noreferrer" className="cv__icon-btn" aria-label="LinkedIn">
                  <span className="material-symbols-outlined">link</span>
                </a>
              </div>
              <a
                href="/resume.pdf"
                download="Rishighesh_Gandhavadi_Resume.pdf"
                className="cv__download-btn"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>download</span>
                DOWNLOAD PDF
              </a>
            </div>
          </header>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="cv__grid">

          {/* Left col */}
          <div className="cv__left">

            {/* Experience / Background */}
            <ScrollReveal direction="up" delay={50}>
              <section className="cv__section">
                <div className="cv__section-heading">
                  <span className="material-symbols-outlined cv__section-icon" style={FILL}>work</span>
                  <h2 className="cv__section-title">Background</h2>
                </div>
                <div className="cv__timeline">

                  <div className="cv__timeline-item">
                    <div className="cv__tl-dot cv__tl-dot--active" />
                    <div className="cv__tl-header">
                      <div>
                        <h3 className="cv__tl-role">M.Sc. Data Science</h3>
                        <p className="cv__tl-company">FAU Erlangen-Nürnberg</p>
                      </div>
                      <span className="cv__tl-period">2024 — Present</span>
                    </div>
                    <p className="cv__tl-desc">
                      Graduate research in machine learning, deep learning, NLP, and statistical
                      learning theory. Building thesis-level AI systems with production-grade
                      engineering practices. Coursework spanning advanced ML, computer vision,
                      and agentic AI systems.
                    </p>
                  </div>

                  <div className="cv__timeline-item">
                    <div className="cv__tl-dot" />
                    <div className="cv__tl-header">
                      <div>
                        <h3 className="cv__tl-role">AI Engineer — Independent Projects</h3>
                        <p className="cv__tl-company">Self-directed</p>
                      </div>
                      <span className="cv__tl-period">2023 — 2024</span>
                    </div>
                    <p className="cv__tl-desc">
                      Designed and shipped 5+ end-to-end ML systems: classification pipelines,
                      recommendation engines, LLM agents, and agentic workflow automation using
                      LangChain, n8n, and OpenAI APIs. Each project built with production intent.
                    </p>
                  </div>

                  <div className="cv__timeline-item">
                    <div className="cv__tl-dot" />
                    <div className="cv__tl-header">
                      <div>
                        <h3 className="cv__tl-role">B.Tech Computer Science &amp; Engineering</h3>
                        <p className="cv__tl-company">VIT Chennai</p>
                      </div>
                      <span className="cv__tl-period">2020 — 2024</span>
                    </div>
                    <p className="cv__tl-desc">
                      4-year CS degree with focus on AI/ML and software engineering.
                      Strong foundation in algorithms, data structures, and applied machine
                      learning. Active in research projects and competitive programming.
                    </p>
                  </div>

                </div>
              </section>
            </ScrollReveal>

            {/* Education */}
            <ScrollReveal direction="up" delay={100}>
              <section className="cv__section">
                <div className="cv__section-heading">
                  <span className="material-symbols-outlined cv__section-icon" style={FILL}>school</span>
                  <h2 className="cv__section-title">Education</h2>
                </div>
                <div className="cv__edu-grid">
                  <div className="cv__edu-card">
                    <h3 className="cv__edu-degree">M.Sc. Data Science</h3>
                    <p className="cv__edu-school">FAU Erlangen-Nürnberg</p>
                    <p className="cv__edu-year">Expected 2026</p>
                  </div>
                  <div className="cv__edu-card">
                    <h3 className="cv__edu-degree">B.Tech Computer Science</h3>
                    <p className="cv__edu-school">VIT Chennai</p>
                    <p className="cv__edu-year">Graduated 2024</p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

          </div>

          {/* Right col */}
          <div className="cv__right">

            {/* Technical Stack */}
            <ScrollReveal direction="left" delay={80}>
              <section className="cv__stack">
                <div className="cv__section-heading">
                  <span className="material-symbols-outlined cv__section-icon">terminal</span>
                  <h2 className="cv__section-title">Technical Stack</h2>
                </div>
                <div className="cv__stack-chips">
                  {techStack.map((item) => (
                    <span key={item} className="cv__chip">{item}</span>
                  ))}
                </div>
                <div className="cv__stack-note">
                  Focused on AI/ML engineering, LLM systems, and end-to-end data-driven products.
                </div>
              </section>
            </ScrollReveal>

            {/* Certifications */}
            <ScrollReveal direction="left" delay={140}>
              <section className="cv__section cv__section--certs">
                <div className="cv__section-heading">
                  <span className="material-symbols-outlined cv__section-icon" style={FILL}>verified</span>
                  <h2 className="cv__section-title">Certifications</h2>
                </div>
                <ul className="cv__certs">
                  {certifications.map((cert) => (
                    <li key={cert.name} className="cv__cert-item">
                      <div className="cv__cert-dash" />
                      <div>
                        <h4 className="cv__cert-name">{cert.name}</h4>
                        <p className="cv__cert-meta">{cert.issuer} • {cert.year}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* Profile meta card */}
            <ScrollReveal direction="left" delay={200}>
              <div className="cv__meta-card">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj7AGI159Rfyg4Wlx1LSczYHrSK_5ac407YJJeWvEJYDBRVy1IQLihG54Hk0wwaAZpPenzmjowAKOKyekZyjD0bhF0qbZDSckf8ubAxWpeD2R3gTfKFafMwHEGo6fTXts28uVNT4bsWNbrlUlh5wRPvzBkfsXbnmsW4_66raJY3_dWonC9FJnygj-GSW2qjwz2fQ8pghm2ryGQswA6ti5C3mz1Gp97vjNQfUKST5J9WQZFkz-fhvHO9lSOX423AtKp3Eqi1GzxzwA4"
                  alt="Rishighesh Gandhavadi"
                  className="cv__meta-img"
                />
                <div className="cv__meta-overlay" />
                <div className="cv__meta-text">
                  <p className="cv__meta-cta">Open to AI/ML &amp; Working Student Roles</p>
                  <p className="cv__meta-location">Erlangen, Germany</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </main>
    </div>
  )
}
