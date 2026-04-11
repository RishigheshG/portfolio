import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import './Resume.css'

const FILL = { fontVariationSettings: "'FILL' 1" }

const techStack = [
  'TypeScript','React & Next.js','Node.js','Python',
  'PostgreSQL','AWS Cloud','Docker','Tailwind CSS','Figma',
]

const certifications = [
  { name: 'AWS Solutions Architect Pro',    issuer: 'Amazon Web Services', year: '2023' },
  { name: 'Google UX Design Certificate',   issuer: 'Google',              year: '2022' },
  { name: 'Certified Kubernetes Admin',     issuer: 'CNCF',                year: '2021' },
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
                <div className="cv__icon-btn"><span className="material-symbols-outlined">mail</span></div>
                <div className="cv__icon-btn"><span className="material-symbols-outlined">location_on</span></div>
                <div className="cv__icon-btn"><span className="material-symbols-outlined">link</span></div>
              </div>
              <button className="cv__download-btn">
                <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>download</span>
                DOWNLOAD PDF
              </button>
            </div>
          </header>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="cv__grid">

          {/* Left col */}
          <div className="cv__left">

            {/* Experience */}
            <ScrollReveal direction="up" delay={50}>
              <section className="cv__section">
                <div className="cv__section-heading">
                  <span className="material-symbols-outlined cv__section-icon" style={FILL}>work</span>
                  <h2 className="cv__section-title">Experience</h2>
                </div>
                <div className="cv__timeline">

                  <div className="cv__timeline-item">
                    <div className="cv__tl-dot cv__tl-dot--active" />
                    <div className="cv__tl-header">
                      <div>
                        <h3 className="cv__tl-role">Senior Kinetic Engineer</h3>
                        <p className="cv__tl-company">TechFlow Solutions</p>
                      </div>
                      <span className="cv__tl-period">2021 — Present</span>
                    </div>
                    <p className="cv__tl-desc">
                      Pioneered the development of responsive mechanical interfaces and adaptive system
                      architectures. Led a cross-functional team of 12 to deploy enterprise-grade
                      automation pipelines reducing latency by 40%.
                    </p>
                  </div>

                  <div className="cv__timeline-item">
                    <div className="cv__tl-dot" />
                    <div className="cv__tl-header">
                      <div>
                        <h3 className="cv__tl-role">Systems Architect</h3>
                        <p className="cv__tl-company">Quantum Dynamics</p>
                      </div>
                      <span className="cv__tl-period">2018 — 2021</span>
                    </div>
                    <p className="cv__tl-desc">
                      Orchestrated global infrastructure migrations for Fortune 500 clients. Specialized
                      in high-availability clusters and secure data fabric integration across hybrid cloud
                      environments.
                    </p>
                  </div>

                  <div className="cv__timeline-item">
                    <div className="cv__tl-dot" />
                    <div className="cv__tl-header">
                      <div>
                        <h3 className="cv__tl-role">Junior Developer</h3>
                        <p className="cv__tl-company">Foundry Labs</p>
                      </div>
                      <span className="cv__tl-period">2016 — 2018</span>
                    </div>
                    <p className="cv__tl-desc">
                      Developed core modules for real-time data visualization tools. Collaborated with UI
                      designers to implement pixel-perfect Material Design interfaces.
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
                    <h3 className="cv__edu-degree">M.S. in Robotics Engineering</h3>
                    <p className="cv__edu-school">Global Institute of Technology</p>
                    <p className="cv__edu-year">Graduated 2016</p>
                  </div>
                  <div className="cv__edu-card">
                    <h3 className="cv__edu-degree">B.E. in Computer Science</h3>
                    <p className="cv__edu-school">State Technical University</p>
                    <p className="cv__edu-year">Graduated 2014</p>
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
                  Expertise in building scalable systems with a focus on motion design and reactive
                  user experiences.
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
                  alt="Professional portrait"
                  className="cv__meta-img"
                />
                <div className="cv__meta-overlay" />
                <div className="cv__meta-text">
                  <p className="cv__meta-cta">Work with me</p>
                  <p className="cv__meta-location">Based in Bangalore, IN</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </main>
    </div>
  )
}
