import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react'

interface FadeUpProps {
  children: ReactNode
  className?: string
  delay?: number
  style?: CSSProperties
}

export function FadeUp({ children, className = '', delay = 0, style }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity .55s ease ${delay}ms, transform .55s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
