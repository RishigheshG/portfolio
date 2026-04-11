import { useEffect, useRef } from 'react'
import './Cursor.css'

const TRAIL_COUNT  = 3
const TRAIL_LERP   = [0.16, 0.09, 0.055]
const TRAIL_SIZES  = [12, 8, 5]

const MAGNETIC_RADIUS    = 80
const MAGNETIC_MAX_PULL  = 0.28
const MAGNETIC_SELECTORS = 'a, button, [role="button"], .home__tool-cell, .proj-fab__btn, .mob-menu-bubble, .mob-contact-bubble'

const IDLE_THRESHOLD = 380

const INTERACTIVE = 'a, button, [role="button"]'

// Injected style — appended to <body> so it is the absolute LAST stylesheet
// in the cascade. Same specificity rules still apply but this wins tie-breaks.
const CURSOR_NONE_CSS = `
  *, *::before, *::after { cursor: none !important; }
  a, button, input, textarea, select, label, [role="button"] { cursor: none !important; }
`

function lerp(a, b, t) { return a + (b - a) * t }

function getMagnet(mx, my) {
  let nx = mx, ny = my
  document.querySelectorAll(MAGNETIC_SELECTORS).forEach(el => {
    const { left, top, width, height } = el.getBoundingClientRect()
    const cx   = left + width  / 2
    const cy   = top  + height / 2
    const dist = Math.hypot(mx - cx, my - cy)
    if (dist < MAGNETIC_RADIUS) {
      const t = (1 - dist / MAGNETIC_RADIUS) * MAGNETIC_MAX_PULL
      nx = lerp(nx, cx, t)
      ny = lerp(ny, cy, t)
    }
  })
  return { x: nx, y: ny }
}

export default function Cursor() {
  const dotRef    = useRef(null)
  const trailRefs = useRef([])

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    // ── Layer 1: inject a <style> appended LAST so it wins all cascade ties ──
    const styleEl = document.createElement('style')
    styleEl.id = 'cursor-override'
    styleEl.textContent = CURSOR_NONE_CSS
    document.body.appendChild(styleEl)           // ← appended to body end

    // ── Layer 2: also set inline on the root for any remaining edge cases ──
    const root = document.documentElement
    root.style.setProperty('cursor', 'none', 'important')
    document.body.style.setProperty('cursor', 'none', 'important')

    const mouse   = { x: -400, y: -400 }
    const display = { x: -400, y: -400 }
    const trail   = Array.from({ length: TRAIL_COUNT }, () => ({ x: -400, y: -400 }))

    let raf
    let lastMoveTime = 0
    let trailsVisible = true

    // ── Mouse tracking ──
    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      lastMoveTime = performance.now()
    }
    const onLeave = () => { mouse.x = -400; mouse.y = -400 }

    // ── Hover — use relatedTarget so moving within nested elements doesn't flicker ──
    const onOver = (e) => {
      // Are we entering an interactive element (and NOT from another interactive child)?
      if (e.target.closest(INTERACTIVE)) {
        dotRef.current?.classList.add('cursor-dot--hover')
      }
    }

    const onOut = (e) => {
      if (e.target.closest(INTERACTIVE)) {
        // Only remove hover if the element we're moving TO is NOT also interactive.
        // This prevents the flicker when moving between nested elements
        // (e.g., <button> → <span inside button>).
        if (!e.relatedTarget?.closest(INTERACTIVE)) {
          dotRef.current?.classList.remove('cursor-dot--hover')
        }
      }
    }

    // ── rAF animation loop ──
    const tick = () => {
      const { x: dx, y: dy } = getMagnet(mouse.x, mouse.y)
      display.x = dx
      display.y = dy

      if (dotRef.current) {
        // JS owns positioning — no CSS transition on transform
        dotRef.current.style.transform = `translate(${display.x - 5}px, ${display.y - 5}px)`
      }

      let px = display.x, py = display.y
      for (let i = 0; i < TRAIL_COUNT; i++) {
        trail[i].x = lerp(trail[i].x, px, TRAIL_LERP[i])
        trail[i].y = lerp(trail[i].y, py, TRAIL_LERP[i])
        px = trail[i].x
        py = trail[i].y
        const half = TRAIL_SIZES[i] / 2
        if (trailRefs.current[i]) {
          trailRefs.current[i].style.transform =
            `translate(${trail[i].x - half}px, ${trail[i].y - half}px)`
        }
      }

      // Idle → fade trails
      const idle = performance.now() - lastMoveTime
      const shouldShow = idle < IDLE_THRESHOLD
      if (shouldShow !== trailsVisible) {
        trailsVisible = shouldShow
        const op = trailsVisible ? '1' : '0'
        trailRefs.current.forEach(el => { if (el) el.style.opacity = op })
      }

      raf = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove',  onMove,  { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseover',  onOver)
    document.addEventListener('mouseout',   onOut)
    raf = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseover',  onOver)
      document.removeEventListener('mouseout',   onOut)
      cancelAnimationFrame(raf)
      document.body.removeChild(styleEl)
      root.style.removeProperty('cursor')
      document.body.style.removeProperty('cursor')
    }
  }, [])

  return (
    <>
      {Array.from({ length: TRAIL_COUNT }, (_, i) => (
        <div
          key={i}
          ref={el => { trailRefs.current[i] = el }}
          className={`cursor-trail cursor-trail--${i + 1}`}
        />
      ))}
      <div ref={dotRef} className="cursor-dot" />
    </>
  )
}
