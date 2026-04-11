import { Link } from 'react-router-dom'
import profileImg from '../assets/profile.png'
import './Footer.css'

const menuLinks = [
  { to: '/',          label: 'Home'      },
  { to: '/my-fabric', label: 'My Fabric' },
  { to: '/projects',  label: 'Projects'  },
  { to: '/resume',    label: 'Resume'    },
]

const socialLinks = [
  { href: 'https://www.instagram.com/the_dawn_breaker/?hl=en', label: 'Instagram' },
  { href: 'https://github.com/RishigheshG',                    label: 'GitHub'    },
  { href: 'https://www.linkedin.com/in/rishigheshg/',          label: 'LinkedIn'  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Section 1 — Left 70%: name/copyright + profile photo */}
        <div className="footer__left">
          <div className="footer__left-text">
            <span className="footer__name">RISHIGHESH GANDHAVADI</span>
            <p className="footer__copy">
              © {year} RISHIGHESH GANDHAVADI. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="footer__photo-wrap">
            <img
              src={profileImg}
              alt="Rishighesh Gandhavadi"
              className="footer__photo"
            />
          </div>
        </div>

        {/* Section 2 — Right 30%: menu + socials */}
        <div className="footer__right">
          <div className="footer__links-inner">

            {/* Navigation */}
            <nav className="footer__link-group">
              <span className="footer__group-label">Menu</span>
              {menuLinks.map(({ to, label }) => (
                <Link key={to} to={to} className="footer__menu-link">
                  {label}
                </Link>
              ))}
            </nav>

            {/* Socials */}
            <div className="footer__link-group">
              <span className="footer__group-label">Socials</span>
              {socialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                >
                  {label}
                </a>
              ))}
            </div>

          </div>
        </div>

      </div>
    </footer>
  )
}
