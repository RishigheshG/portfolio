import { useState, useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import './Contact.css'

// ─────────────────────────────────────────────
// To enable email submission, create a free account at https://formspree.io
// then replace YOUR_FORM_ID below with your form's ID (e.g. "xpzgkdvw")
// ─────────────────────────────────────────────
const FORMSPREE_ID = 'YOUR_FORM_ID'

const INITIAL = { name: '', email: '', subject: 'project', message: '' }

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL)
  const [status, setStatus]     = useState('idle') // idle | loading | success | error

  useEffect(() => {
    document.title = 'Contact | Rishighesh Gandhavadi'
  }, [])

  const handleChange = e =>
    setFormData(s => ({ ...s, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    // If Formspree is not set up yet, fall back to mailto:
    if (FORMSPREE_ID === 'YOUR_FORM_ID') {
      const { name, email, subject, message } = formData
      const sub  = encodeURIComponent(`[${subject}] Inquiry from ${name}`)
      const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)
      window.location.href = `mailto:rishigheshg@gmail.com?subject=${sub}&body=${body}`
      setStatus('idle')
      return
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData(INITIAL)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact-page">
      <main className="contact-main">

        {/* Header */}
        <ScrollReveal direction="up">
          <div className="contact-header">
            <h1 className="contact-title">
              Let's <span className="contact-title-accent">Build</span> the Future
            </h1>
            <p className="contact-subtitle">
              Whether it's an architectural challenge, a system optimization, or a visionary
              collaboration, I'm ready to engineer the next kinetic leap.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="contact-grid">

          {/* Form card */}
          <ScrollReveal direction="up" delay={60}>
            <div className="contact-form-card">
              <div className="contact-form-heading">
                <h2 className="contact-form-title">Transmission Protocol</h2>
                <p className="contact-form-sub">
                  Send your project specs or inquiries directly to my core node.
                </p>
              </div>

              {/* SUCCESS STATE */}
              {status === 'success' ? (
                <div className="contact-success">
                  <div className="contact-success-icon">
                    <span className="material-symbols-outlined">check_circle</span>
                  </div>
                  <h3 className="contact-success-title">Transmission Received</h3>
                  <p className="contact-success-body">
                    Your message has been locked in. I'll respond within 24–48 hours.
                  </p>
                  <button
                    className="contact-submit"
                    style={{ marginTop: '1rem' }}
                    onClick={() => setStatus('idle')}
                  >
                    Send Another
                    <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>refresh</span>
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label className="contact-label" htmlFor="c-name">Your Name</label>
                      <input id="c-name" name="name" type="text" placeholder="John Doe"
                        className="contact-input" value={formData.name}
                        onChange={handleChange} required />
                    </div>
                    <div className="contact-field">
                      <label className="contact-label" htmlFor="c-email">Email Address</label>
                      <input id="c-email" name="email" type="email" placeholder="john@example.com"
                        className="contact-input" value={formData.email}
                        onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="contact-field">
                    <label className="contact-label" htmlFor="c-subject">Inquiry Type</label>
                    <div className="contact-select-wrap">
                      <select id="c-subject" name="subject"
                        className="contact-input contact-select"
                        value={formData.subject} onChange={handleChange}>
                        <option value="project">Project Collaboration</option>
                        <option value="consulting">Engineering Consulting</option>
                        <option value="other">General Inquiry</option>
                      </select>
                      <span className="material-symbols-outlined contact-select-icon">expand_more</span>
                    </div>
                  </div>

                  <div className="contact-field">
                    <label className="contact-label" htmlFor="c-message">Transmission Details</label>
                    <textarea id="c-message" name="message" rows="6"
                      placeholder="Tell me about your project..."
                      className="contact-input contact-textarea"
                      value={formData.message} onChange={handleChange} required />
                  </div>

                  {status === 'error' && (
                    <p className="contact-error">
                      Transmission failed. Please try again or email me directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="contact-submit"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending…' : 'Send Data'}
                    <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>
                      {status === 'loading' ? 'hourglass_top' : 'send'}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Side info */}
          <div className="contact-side">

            {/* Primary Node card */}
            <ScrollReveal direction="left" delay={100}>
              <div className="contact-node-card">
                <div className="contact-node-glow" />
                <div>
                  <div className="contact-node-label">
                    <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>hub</span>
                    <span className="contact-node-label-text">Primary Node</span>
                  </div>
                  <h3 className="contact-node-name">Rishighesh Gandhavadi</h3>
                </div>
                <div className="contact-node-info">
                  <div className="contact-info-row contact-info-row--hover">
                    <div className="contact-info-icon">
                      <span className="material-symbols-outlined">alternate_email</span>
                    </div>
                    <div>
                      <p className="contact-info-label">Digital Contact</p>
                      <p className="contact-info-value">rishigheshg@gmail.com</p>
                    </div>
                  </div>
                  <div className="contact-info-row">
                    <div className="contact-info-icon">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <p className="contact-info-label">Location Node</p>
                      <p className="contact-info-value">Bangalore, IN / Remote</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Social links */}
            <ScrollReveal direction="left" delay={160}>
              <div className="contact-socials-card">
                <h4 className="contact-socials-heading">External Links</h4>
                <div className="contact-socials-list">
                  <a href="https://github.com/RishigheshG" target="_blank" rel="noopener noreferrer" className="contact-social-row">
                    <div className="contact-social-left">
                      <span className="material-symbols-outlined contact-social-icon">terminal</span>
                      <span className="contact-social-name">GitHub</span>
                    </div>
                    <span className="material-symbols-outlined contact-social-arrow">arrow_outward</span>
                  </a>
                  <a href="https://www.linkedin.com/in/rishigheshg/" target="_blank" rel="noopener noreferrer" className="contact-social-row">
                    <div className="contact-social-left">
                      <span className="material-symbols-outlined contact-social-icon">corporate_fare</span>
                      <span className="contact-social-name">LinkedIn</span>
                    </div>
                    <span className="material-symbols-outlined contact-social-arrow">arrow_outward</span>
                  </a>
                  <a href="https://www.instagram.com/the_dawn_breaker/?hl=en" target="_blank" rel="noopener noreferrer" className="contact-social-row">
                    <div className="contact-social-left">
                      <span className="material-symbols-outlined contact-social-icon">photo_camera</span>
                      <span className="contact-social-name">Instagram</span>
                    </div>
                    <span className="material-symbols-outlined contact-social-arrow">arrow_outward</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Visual accent */}
            <ScrollReveal direction="left" delay={220}>
              <div className="contact-visual">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeF77M2YgSOoiUY9XSga5eqpEGNJdq9CAmC3of2luhT_YgIETPAcS9poIdIILAgQaGtaUyFTfVJIgyY-kfPB5bK8YvcR5UOPrmFX1He22XkqgF44HKCNF8dxjZxnxFMeoYcwdjx0gJ1UWd_e7qhxFCydtrHIFNt5NCRY_zbgfV92DixN9rvZ04hDFpoYpLnSJPaXvukT7xe44lOQeEtAYTrp--RdAvOpwrolHVCYDBMvcFjVuhVcs8UjrmDMK2c33Dlng65ZzMByBJ"
                  alt="Architectural blueprint"
                  className="contact-visual-img"
                />
                <div className="contact-visual-overlay" />
                <div className="contact-visual-status">
                  <div className="contact-ping-wrap">
                    <div className="contact-ping" />
                    <div className="contact-ping-dot" />
                  </div>
                  <span className="contact-status-text">Systems Active</span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </main>
    </div>
  )
}
