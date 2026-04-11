import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import './Projects.css'

const FILL = { fontVariationSettings: "'FILL' 1" }

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
              <span className="projects__header-text">Engineering Portfolio</span>
            </div>
            <h1 className="projects__title">Selected Systems</h1>
            <p className="projects__subtitle">
              Exploring the intersection of high-performance computing, low-latency streaming,
              and autonomous intelligence. Built for scale.
            </p>
          </header>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="projects__grid">

          {/* Project 1 — Large hero card (col-span-8) */}
          <ScrollReveal direction="up" delay={0} className="proj-card proj-card--hero" as="div">
            <div className="proj-card__bg-img">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuABf3TR56mCjxMmHgrDLdMCsu3Y9q9YjJ5RAjbykPkYQ_HLaU1ad6hqyO5ie9Tk-9aZTYGTnQvLUkVjgO3sjbk5Hy1fh8K3dl-7lWln4L4zb_THdgfVEUqWKpXK0FaJNGGevxWsCbMq14JiT7aB8w_mH2kyux2GUBT-ZSwFcnJrO5qjUdztqj1Za6ueT1PYam_bZJNiF06n44AZIN0woFh2AznpFFoEwncwZ2P_4hcoFq7rvAr693YIEgyRFmrtSpRsCkGJ086nADAQ" alt="Surveillance interface" />
            </div>
            <div className="proj-card__gradient" />
            <div className="proj-card__content">
              <div className="proj-card__tags">
                <span className="proj-tag">C++</span>
                <span className="proj-tag">CUDA</span>
                <span className="proj-tag">TensorRT</span>
              </div>
              <h3 className="proj-card__title">KINETIC-SURVEILLANCE-V4</h3>
              <p className="proj-card__desc">
                A real-time edge intelligence platform for multi-agent tracking and threat
                detection in complex urban environments.
              </p>
              <div className="proj-card__actions">
                <button className="proj-btn-white">
                  Architecture
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Project 2 — Small card (col-span-4) */}
          <ScrollReveal direction="up" delay={80} className="proj-card proj-card--sm" as="div">
            <div className="proj-card__sm-inner">
              <div className="proj-card__sm-icon">
                <span className="material-symbols-outlined" style={FILL}>stream</span>
              </div>
              <div className="proj-card__tags" style={{ marginBottom: '1rem' }}>
                <span className="proj-tag">Rust</span>
                <span className="proj-tag">Kafka</span>
              </div>
              <h3 className="proj-card__title">LOG-STREAM-ENGINE</h3>
              <p className="proj-card__desc">
                High-throughput ingestion engine processing 1M+ events per second with sub-10ms latency.
              </p>
            </div>
            <button className="proj-btn-outline">
              Source
              <span className="material-symbols-outlined">code</span>
            </button>
          </ScrollReveal>

          {/* Project 3 — Half card with image top (col-span-6) */}
          <ScrollReveal direction="up" delay={40} className="proj-card proj-card--image-top" as="div">
            <div className="proj-card__image-top">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNicExBD_Qm8zWA67-QVrC4yejfpxNt28T_9m41mdQeth_ibGoHSwyPGEVTcxsWswSQ0nHPSIoFUxf7shTFbcectqKDU9Rm8mUT1B4cIrF9lFe6qEYgYreR2MOE2y6FvuoKrU2odkwt9W59pyutZ5Z7rwLNcbTWPZ3Y6nbcCf-LNNnbdt7aHUJxI3YWko_T8uXCV6dYC9Rwgy6EFxx9dJhfbwaX2D1lUS90WlrSbnVliJTim9ISvw04hdVcgE3ERe40q7JGTpVhwis" alt="Source code" />
              <div className="proj-card__image-gradient" />
            </div>
            <div className="proj-card__body">
              <div className="proj-card__tags">
                <span className="proj-tag">Python</span>
                <span className="proj-tag">PyTorch</span>
              </div>
              <h3 className="proj-card__title">SYNTH-AUTO-CODE</h3>
              <p className="proj-card__desc">
                LLM-powered automation framework for generating performance-critical system components.
              </p>
              <a href="#" className="proj-link">
                View Notebook
                <span className="material-symbols-outlined">north_east</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Project 4 — Half card with image top (col-span-6) */}
          <ScrollReveal direction="up" delay={120} className="proj-card proj-card--image-top" as="div">
            <div className="proj-card__image-top">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGHbQMCuDilKfjYuD05UlRK7o8n37xEKI3VpYzXdJggSMNtVr2WiLgeJJwU6B0wfbnpj5G1bBRE-bOwaCZ2Z4D02LP_H4R70iEY9wHPFmPmct2Q4MtS-G5HCP7_dTmxZkUt_C4u8Alx46oDvK8FzYb1e3hH1NsfYDHjh_niT-CsGy9FwCQ4LuMyPPVSzBk5hrnasm1PknmW86ubUskCpe6ns7zNVioV4_y0U9KE8g00f-v0BAuTYTglQrWtJYB1N4GOaVZeapSYJ79" alt="Data network" />
              <div className="proj-card__image-gradient" />
            </div>
            <div className="proj-card__body">
              <div className="proj-card__tags">
                <span className="proj-tag">Go</span>
                <span className="proj-tag">gRPC</span>
              </div>
              <h3 className="proj-card__title">ORBITAL-DATA-MESH</h3>
              <p className="proj-card__desc">
                Distributed ledger for satellite telemetry data with Byzantine Fault Tolerance and rapid consensus.
              </p>
              <a href="#" className="proj-link">
                Documentation
                <span className="material-symbols-outlined">north_east</span>
              </a>
            </div>
          </ScrollReveal>

        </div>
      </main>

      {/* Floating Action Button */}
      <div className="proj-fab">
        <button className="proj-fab__btn">
          <span className="material-symbols-outlined" style={{ fontSize: '1.875rem' }}>add</span>
          <div className="proj-fab__tooltip">New Project Request</div>
        </button>
      </div>
    </div>
  )
}
