import { useEffect, useRef } from 'react'
import './ScrollReveal.css'

/**
 * ScrollReveal — fades + slides children into view when they enter the viewport.
 * Props:
 *   direction — 'up' (default) | 'down' | 'left' | 'right' | 'scale' | 'none'
 *   delay     — ms offset before transition starts (for stagger effects)
 *   threshold — 0–1, how much of the element must be visible before triggering
 *   as        — HTML tag to render (default: 'div')
 *   className — extra classes
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  threshold = 0.12,
  as: Tag = 'div',
  className = '',
  style = {},
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('sr--visible')
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <Tag
      ref={ref}
      className={`sr sr--${direction} ${className}`}
      style={{ '--sr-delay': `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  )
}
