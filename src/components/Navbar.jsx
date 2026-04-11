import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/my-fabric', label: 'My Fabric', icon: 'style' },
  { to: '/projects', label: 'Projects', icon: 'rocket_launch' },
  { to: '/resume', label: 'Resume', icon: 'description' },
  { to: '/contact', label: 'Contact', icon: 'mail' },
]

const desktopLinks = navLinks.filter(l => l.to !== '/contact')

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const location                  = useLocation()
  const isContact                 = location.pathname === '/contact'

  /* Close menu on route change */
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ── Desktop pill ── */}
      <div className={`header-wrapper${scrolled ? ' scrolled' : ''}${isContact ? ' on-contact' : ''}`}>
        <nav className="nav-pill">
          <Link to="/" className="nav-brand">
            Rishighesh<span className="nav-brand-dot">.</span>
          </Link>

          <div className="nav-links">
            {desktopLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `nav-link-item${isActive ? ' active-link' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <Link to="/contact" className="nav-cta">Connect</Link>
        </nav>
      </div>

      {/* ── Mobile floating bubbles ── */}

      {/* Left — hamburger / menu */}
      <button
        className={`mob-menu-bubble${menuOpen ? ' mob-menu-bubble--open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined mob-bubble-icon">
          {menuOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Right — contact bubble */}
      {!isContact && (
        <Link to="/contact" className="mob-contact-bubble" aria-label="Contact">
          <span className="material-symbols-outlined mob-bubble-icon">mail</span>
        </Link>
      )}

      {/* Menu overlay */}
      <div className={`mob-menu-overlay${menuOpen ? ' mob-menu-overlay--open' : ''}`}>
        <div className="mob-menu-panel">

          {/* Brand */}
          <div className="mob-menu-brand">
            Rishighesh<span className="mob-menu-brand-dot">.</span>
          </div>

          {/* Nav links */}
          <nav className="mob-menu-links">
            {navLinks.map(({ to, label, icon }, i) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `mob-menu-link${isActive ? ' mob-menu-link--active' : ''}`
                }
                style={{ '--i': i }}
              >
                <span className={`material-symbols-outlined mob-menu-icon`}>{icon}</span>
                <span className="mob-menu-link-label">{label}</span>
                <span className="material-symbols-outlined mob-menu-arrow">arrow_forward</span>
              </NavLink>
            ))}
          </nav>

          {/* Footer hint */}
          <p className="mob-menu-hint">Precision Motion © 2025</p>
        </div>
      </div>
    </>
  )
}
