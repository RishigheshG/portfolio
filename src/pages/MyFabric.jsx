import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import './MyFabric.css'

const FILL = { fontVariationSettings: "'FILL' 1" }

export default function MyFabric() {
  useEffect(() => {
    document.title = 'My Fabric | Rishighesh Gandhavadi'
  }, [])

  return (
    <div className="fabric">
      <main className="fabric__main">

        {/* Header */}
        <ScrollReveal direction="up">
          <header className="fabric__header">
            <h1 className="fabric__title">My Fabric</h1>
            <p className="fabric__subtitle">
              The systems, habits, and interests that shape how I think and build.
            </p>
          </header>
        </ScrollReveal>

        {/* Quote */}
        <ScrollReveal direction="up" delay={80}>
          <section className="fabric__quote-section">
            <div className="fabric__quote-card">
              <span className="material-symbols-outlined fabric__quote-bg-icon" style={FILL}>format_quote</span>
              <blockquote className="fabric__quote-inner">
                <p className="fabric__quote-text">
                  "The quality of your output is a lagging indicator of the curiosity and
                  discipline you weave into your daily fabric."
                </p>
                <footer className="fabric__quote-footer">
                  <span className="fabric__quote-line" />
                  Personal Philosophy
                  <span className="fabric__quote-line" />
                </footer>
              </blockquote>
            </div>
          </section>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="fabric__grid">

          {/* My Life — col-span-8 */}
          <ScrollReveal direction="up" delay={0} className="fabric__card fabric__card--life" as="div">
            <div className="fabric__card-top">
              <div className="fabric__icon-wrap">
                <span className="material-symbols-outlined fabric__icon" style={FILL}>auto_awesome</span>
              </div>
              <span className="fabric__card-label">Foundation</span>
            </div>
            <h3 className="fabric__card-title">My Life</h3>
            <p className="fabric__card-body">
              Based in a constant state of iteration. I focus on high-agency living,
              continuous learning, and building systems that allow for deep creative focus.
            </p>
            <div className="fabric__tags">
              <span className="fabric__tag">Early Riser</span>
              <span className="fabric__tag">Meditation</span>
              <span className="fabric__tag">Deep Work</span>
            </div>
            <div className="fabric__life-bg">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy-fJb7Nbtb8ADKntC3uHPs0HvYbkpKriYwQsghiT5M_5lIPEiheZAWurervTCo5qDLPsfGl57wRe0o2v3UMJC4c0M7-6VHSyGyc8N76kw71qJ2bZeJxBRceltYom5TMlxUnWwCeR_HjWdTCqruBJ9GrT2TItfBkbkmwvuWr5RSpF6lCPSgN8BQ82L9uSEPqLpii045SpP517k11P4tR73iGvpX6YDir39uw-aRrr40Ou-Jr476Vbj0UMEeiEJF2z-4CCFwnr20621" alt="Abstract geometric landscape" />
            </div>
          </ScrollReveal>

          {/* Photography — col-span-4 */}
          <ScrollReveal direction="up" delay={80} className="fabric__card fabric__card--photo" as="div">
            <div className="fabric__icon-wrap">
              <span className="material-symbols-outlined fabric__icon" style={FILL}>photo_camera</span>
            </div>
            <h3 className="fabric__card-title">Photography</h3>
            <p className="fabric__card-body fabric__card-body--sm">
              Capturing the interplay of light and shadow in urban landscapes.
              Street photography as a practice of observation.
            </p>
            <div className="fabric__photo-img">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjhNHB4QwB_SyfKDWjoh6qzac97gvFGvVQR_g4JmENOHePP27Thckuo9lbMWzLHFwLznHy5ICmX7lOPQ619eOzN8daw_MuVcpP4DHxsDb9ZFc9_M1BTpKgPD0j5sEZ0SAmDjDjGXcGXcr58WRNQNDVFGHQSf3sHWEdMLk7Y1XWk-8idEXQg0glwLnxhp_O2LB0LKcelM1wOkcKU-bfwuqvgfl29I8z6hdZujItctbvqRM6VDLwqMXIQTME4r_35CQYqSa5W7P2qtjW" alt="Street photography" />
            </div>
          </ScrollReveal>

          {/* Books — col-span-4 */}
          <ScrollReveal direction="up" delay={40} className="fabric__card" as="div">
            <div className="fabric__icon-wrap">
              <span className="material-symbols-outlined fabric__icon" style={FILL}>auto_stories</span>
            </div>
            <h3 className="fabric__card-title">Books</h3>
            <ul className="fabric__book-list">
              <li><span className="fabric__dot" />Philosophy &amp; Stoicism</li>
              <li><span className="fabric__dot" />Systems Thinking</li>
              <li><span className="fabric__dot" />Hard Sci-Fi</li>
            </ul>
          </ScrollReveal>

          {/* Cooking — col-span-8 */}
          <ScrollReveal direction="up" delay={120} className="fabric__card fabric__card--cooking" as="div">
            <div className="fabric__card-content-z">
              <div className="fabric__icon-wrap">
                <span className="material-symbols-outlined fabric__icon" style={FILL}>skillet</span>
              </div>
              <h3 className="fabric__card-title">Cooking</h3>
              <p className="fabric__card-body" style={{ maxWidth: '22rem' }}>
                Experimenting with molecular gastronomy and traditional Indian spices.
                Cooking is my meditation outside of the digital realm.
              </p>
            </div>
            <div className="fabric__cooking-bg">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX-TtlU5ZrdNSu6z9IuhlZVXsFw1-WeedKUxtzYscscV5F4uLMCrzD93T2KNUhUvJvlGTp20C9OYZ4inYEUuziXtJpcUrw2DV0xPdAAP8mWPA3XdE-P2mjO6CJeDkKoxs4afawd67G9-wEHQyZT3UF6PWBIzQ5gH3I5eLmQPk8-_N2uyrxHGhzGiCEiPP5PWwIRSXknXCVFdKFO4XRo5Y8Qhh2_vlGARMPs2_Se2qQ-sDoR8VSRfMfirYmzuyn2D88jYH_1TBx-1dZ" alt="Aromatic spices" />
            </div>
          </ScrollReveal>

          {/* Sports — col-span-4 */}
          <ScrollReveal direction="up" delay={60} className="fabric__card" as="div">
            <div className="fabric__icon-wrap">
              <span className="material-symbols-outlined fabric__icon" style={FILL}>fitness_center</span>
            </div>
            <h3 className="fabric__card-title">Sports</h3>
            <p className="fabric__card-body fabric__card-body--sm">
              Strength training and endurance cycling. Pushing physical limits to expand mental capacity.
            </p>
          </ScrollReveal>

          {/* Games — col-span-4 */}
          <ScrollReveal direction="up" delay={120} className="fabric__card" as="div">
            <div className="fabric__icon-wrap">
              <span className="material-symbols-outlined fabric__icon" style={FILL}>sports_esports</span>
            </div>
            <h3 className="fabric__card-title">Games</h3>
            <p className="fabric__card-body fabric__card-body--sm">
              Strategy and puzzle games that challenge conventional logic. Fan of complex world-building.
            </p>
          </ScrollReveal>

          {/* Values — col-span-4 */}
          <ScrollReveal direction="up" delay={180} className="fabric__card" as="div">
            <div className="fabric__icon-wrap">
              <span className="material-symbols-outlined fabric__icon" style={FILL}>verified</span>
            </div>
            <h3 className="fabric__card-title">Values</h3>
            <div className="fabric__values">
              <div className="fabric__value-row">
                <span className="fabric__value-name">Radical Candor</span>
                <span className="fabric__value-num">01</span>
              </div>
              <div className="fabric__value-divider" />
              <div className="fabric__value-row">
                <span className="fabric__value-name">Entropy Reduction</span>
                <span className="fabric__value-num">02</span>
              </div>
              <div className="fabric__value-divider" />
              <div className="fabric__value-row">
                <span className="fabric__value-name">Long-term Thinking</span>
                <span className="fabric__value-num">03</span>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </main>
    </div>
  )
}
