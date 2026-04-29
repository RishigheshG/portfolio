import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import './Projects.css'

const FILL = { fontVariationSettings: "'FILL' 1" }
const GH = 'https://github.com/RishigheshG'

export default function Projects() {
  useEffect(() => {
    document.title = 'Projects | Rishighesh Gandhavadi'
  }, [])

  return (
    <div className="projects">
      <main className="projects__main">

        {/* Header */}
        <ScrollReveal direction="up">
          <header className="projects__header">
            <div className="projects__header-label">
              <span className="projects__header-line" />
              <span className="projects__header-text">Selected Work</span>
            </div>
            <h1 className="projects__title">AI / ML Projects</h1>
            <p className="projects__subtitle">
              End-to-end systems built with production intent — each one starts
              with a real problem and ends with a working, defensible solution.
            </p>
          </header>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="projects__grid">

          {/* ── Project 1: Baby Cry Classification — hero (col-span-8) ── */}
          <ScrollReveal direction="up" delay={0} className="proj-card proj-card--hero" as="div">
            <div className="proj-card__bg-img">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuABf3TR56mCjxMmHgrDLdMCsu3Y9q9YjJ5RAjbykPkYQ_HLaU1ad6hqyO5ie9Tk-9aZTYGTnQvLUkVjgO3sjbk5Hy1fh8K3dl-7lWln4L4zb_THdgfVEUqWKpXK0FaJNGGevxWsCbMq14JiT7aB8w_mH2kyux2GUBT-ZSwFcnJrO5qjUdztqj1Za6ueT1PYam_bZJNiF06n44AZIN0woFh2AznpFFoEwncwZ2P_4hcoFq7rvAr693YIEgyRFmrtSpRsCkGJ086nADAQ" alt="Baby Cry Classification" />
            </div>
            <div className="proj-card__gradient" />
            <div className="proj-card__content">
              <div className="proj-card__tags">
                <span className="proj-tag">Python</span>
                <span className="proj-tag">PyTorch</span>
                <span className="proj-tag">Grad-CAM</span>
                <span className="proj-tag">SHAP</span>
                <span className="proj-tag">Deep Learning</span>
              </div>
              <h3 className="proj-card__title">BABY-CRY-CLASSIFIER</h3>
              <p className="proj-card__desc">
                <strong>Problem:</strong> Infant distress states are hard to interpret consistently, creating gaps in
                pediatric monitoring.<br />
                <strong>Solution:</strong> Multi-class deep learning audio classification pipeline with a full
                explainability layer — Grad-CAM + SHAP — so model decisions are auditable,
                not just accurate. Built for real-world pediatric monitoring deployment.
              </p>
              <div className="proj-card__actions">
                <a href={GH} target="_blank" rel="noopener noreferrer" className="proj-btn-white">
                  GitHub
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Project 2: MealCraft — small (col-span-4) ── */}
          <ScrollReveal direction="up" delay={80} className="proj-card proj-card--sm" as="div">
            <div className="proj-card__sm-inner">
              <div className="proj-card__sm-icon">
                <span className="material-symbols-outlined" style={FILL}>restaurant</span>
              </div>
              <div className="proj-card__tags" style={{ marginBottom: '1rem' }}>
                <span className="proj-tag">Python</span>
                <span className="proj-tag">LangChain</span>
                <span className="proj-tag">FastAPI</span>
              </div>
              <h3 className="proj-card__title">MEALCRAFT</h3>
              <p className="proj-card__desc">
                Pantry-to-recipe intelligent system. Ingredient parsing → LLM-powered
                recipe recommendations → automated meal planning. Solves the everyday
                problem of food waste and decision fatigue around cooking.
              </p>
            </div>
            <a href={GH} target="_blank" rel="noopener noreferrer" className="proj-btn-outline">
              GitHub
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
          </ScrollReveal>

          {/* ── Project 3: Movie Recommendation E2E — image-top (col-span-6) ── */}
          <ScrollReveal direction="up" delay={40} className="proj-card proj-card--image-top" as="div">
            <div className="proj-card__image-top">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNicExBD_Qm8zWA67-QVrC4yejfpxNt28T_9m41mdQeth_ibGoHSwyPGEVTcxsWswSQ0nHPSIoFUxf7shTFbcectqKDU9Rm8mUT1B4cIrF9lFe6qEYgYreR2MOE2y6FvuoKrU2odkwt9W59pyutZ5Z7rwLNcbTWPZ3Y6nbcCf-LNNnbdt7aHUJxI3YWko_T8uXCV6dYC9Rwgy6EFxx9dJhfbwaX2D1lUS90WlrSbnVliJTim9ISvw04hdVcgE3ERe40q7JGTpVhwis" alt="Recommendation System" />
              <div className="proj-card__image-gradient" />
            </div>
            <div className="proj-card__body">
              <div className="proj-card__tags">
                <span className="proj-tag">Python</span>
                <span className="proj-tag">Scikit-learn</span>
                <span className="proj-tag">Pandas</span>
                <span className="proj-tag">Collaborative Filtering</span>
              </div>
              <h3 className="proj-card__title">MOVIE-RECOMMEND-E2E</h3>
              <p className="proj-card__desc">
                End-to-end recommendation pipeline — data ingestion, feature engineering,
                collaborative filtering, and served predictions. Built as a full ML
                architecture with evaluation metrics, not just a notebook experiment.
              </p>
              <a href={GH} target="_blank" rel="noopener noreferrer" className="proj-link">
                View on GitHub
                <span className="material-symbols-outlined">north_east</span>
              </a>
            </div>
          </ScrollReveal>

          {/* ── Project 4: Financial Command Center Agent — image-top (col-span-6) ── */}
          <ScrollReveal direction="up" delay={120} className="proj-card proj-card--image-top" as="div">
            <div className="proj-card__image-top">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGHbQMCuDilKfjYuD05UlRK7o8n37xEKI3VpYzXdJggSMNtVr2WiLgeJJwU6B0wfbnpj5G1bBRE-bOwaCZ2Z4D02LP_H4R70iEY9wHPFmPmct2Q4MtS-G5HCP7_dTmxZkUt_C4u8Alx46oDvK8FzYb1e3hH1NsfYDHjh_niT-CsGy9FwCQ4LuMyPPVSzBk5hrnasm1PknmW86ubUskCpe6ns7zNVioV4_y0U9KE8g00f-v0BAuTYTglQrWtJYB1N4GOaVZeapSYJ79" alt="Financial Agent" />
              <div className="proj-card__image-gradient" />
            </div>
            <div className="proj-card__body">
              <div className="proj-card__tags">
                <span className="proj-tag">LangChain</span>
                <span className="proj-tag">n8n</span>
                <span className="proj-tag">OpenAI API</span>
                <span className="proj-tag">Agentic AI</span>
              </div>
              <h3 className="proj-card__title">FINANCIAL-CMD-AGENT</h3>
              <p className="proj-card__desc">
                LLM + n8n agentic workflow for financial intelligence: automated expense
                tracking, anomaly detection, report generation, and spend recommendations.
                Designed to replace manual financial monitoring with an always-on AI system.
              </p>
              <a href={GH} target="_blank" rel="noopener noreferrer" className="proj-link">
                View on GitHub
                <span className="material-symbols-outlined">north_east</span>
              </a>
            </div>
          </ScrollReveal>

          {/* ── Project 5: Adaptive Learning AI — full width (col-span-12) ── */}
          <ScrollReveal direction="up" delay={60} className="proj-card proj-card--full" as="div">
            <div className="proj-card__full-inner">
              <div className="proj-card__full-left">
                <div className="proj-card__tags">
                  <span className="proj-tag">PyTorch</span>
                  <span className="proj-tag">FastAPI</span>
                  <span className="proj-tag">Python</span>
                  <span className="proj-tag">Scikit-learn</span>
                  <span className="proj-tag">Production ML</span>
                </div>
                <h3 className="proj-card__title proj-card__title--full">ADAPTIVE-LEARNING-AI</h3>
                <p className="proj-card__desc proj-card__desc--full">
                  <strong>Problem:</strong> Generic learning platforms fail to adapt to individual student ability,
                  leading to poor engagement and low completion rates.<br /><br />
                  <strong>Solution:</strong> Production-grade ML system that models each learner's performance trajectory,
                  predicts academic risk, and generates personalized learning paths in real time.
                  Built with a modular architecture — inference engine, recommendation layer,
                  and REST API — designed for integration into real learning management systems.
                </p>
              </div>
              <div className="proj-card__full-right">
                <div className="proj-card__full-metric">
                  <span className="proj-card__metric-value">Real-time</span>
                  <span className="proj-card__metric-label">Inference Engine</span>
                </div>
                <div className="proj-card__full-metric">
                  <span className="proj-card__metric-value">Personalized</span>
                  <span className="proj-card__metric-label">Learning Paths</span>
                </div>
                <div className="proj-card__full-metric">
                  <span className="proj-card__metric-value">REST API</span>
                  <span className="proj-card__metric-label">Production Interface</span>
                </div>
                <a href={GH} target="_blank" rel="noopener noreferrer" className="proj-btn-white">
                  GitHub
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </main>

      {/* Floating Action — GitHub link */}
      <div className="proj-fab">
        <a
          href={GH}
          target="_blank"
          rel="noopener noreferrer"
          className="proj-fab__btn"
          aria-label="All projects on GitHub"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '1.875rem' }}>open_in_new</span>
          <div className="proj-fab__tooltip">All Projects on GitHub</div>
        </a>
      </div>
    </div>
  )
}
