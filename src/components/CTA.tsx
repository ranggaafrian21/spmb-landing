import { useEffect, useRef } from 'react'
import { ArrowRightOutlined, MessageOutlined } from '@ant-design/icons'

const TRUST = [
  {
    text: 'Data Aman & Terenkripsi',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1DB88E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    text: 'Terakreditasi Resmi',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1DB88E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
  {
    text: 'Proses Instan',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1DB88E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
]

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting)
            e.target.querySelectorAll<HTMLElement>('.reveal')
              .forEach((r, i) => setTimeout(() => r.classList.add('in'), i * 130))
        })
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      style={{
        background: '#fff',
        position: 'relative',
        overflow: 'hidden',
        padding: '96px 0',
      }}
    >
      {/* Dot grid background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, #d1fae5 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        opacity: .5,
      }} />

      {/* Green blob top-right */}
      <div style={{
        position: 'absolute', top: -120, right: -120,
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(29,184,142,.14) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Green blob bottom-left */}
      <div style={{
        position: 'absolute', bottom: -100, left: -100,
        width: 360, height: 360, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(29,184,142,.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Decorative rings */}
      <div className="a-spin hide-sm" style={{
        position: 'absolute', bottom: 40, right: 80,
        width: 160, height: 160,
        border: '1.5px solid rgba(29,184,142,.15)', borderRadius: '50%',
      }} />
      <div className="a-spin hide-sm" style={{
        position: 'absolute', bottom: 60, right: 100,
        width: 100, height: 100,
        border: '1.5px solid rgba(29,184,142,.1)', borderRadius: '50%',
        animationDirection: 'reverse',
      }} />

      <div className="wrap" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>

        {/* Icon */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <div style={{
            width: 72, height: 72, borderRadius: 20,
            background: '#E8F8F3',
            border: '1px solid rgba(29,184,142,.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}>
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#1DB88E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            {/* Sparkle dots */}
            <div style={{ position: 'absolute', top: -6, right: -6, width: 12, height: 12, borderRadius: '50%', background: '#1DB88E', opacity: .5 }} />
            <div style={{ position: 'absolute', bottom: -4, left: -4, width: 8, height: 8, borderRadius: '50%', background: '#1DB88E', opacity: .35 }} />
          </div>
        </div>

        {/* Badge */}
        <div className="reveal" style={{ marginBottom: 20 }}>
          <span style={{
            display: 'inline-block',
            background: '#E8F8F3', border: '1px solid rgba(29,184,142,.3)',
            color: '#0f7a5a', fontSize: 13, fontWeight: 600,
            padding: '6px 16px', borderRadius: 999,
          }}>
            Siap Bergabung?
          </span>
        </div>

        {/* Heading */}
        <div className="reveal">
          <h2 style={{
            fontSize: 'clamp(26px,5vw,46px)', fontWeight: 900,
            color: '#0D1B2A', lineHeight: 1.15,
            marginBottom: 16, letterSpacing: '-1px',
          }}>
            Mulai SPMB Digital<br />
            <span style={{ color: '#1DB88E' }}>Sekolah Anda Hari Ini</span>
          </h2>

          <p style={{
            color: '#4A5568', fontSize: 16, lineHeight: 1.8,
            maxWidth: 500, margin: '0 auto 36px',
          }}>
            Jangan tunda lagi. Ratusan sekolah sudah beralih ke SPMB digital.
            Daftar sekarang dan kelola penerimaan siswa baru dengan lebih mudah dan transparan.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginBottom: 36 }}>
          <a
            href="https://wa.me/628216195202?text=(Qrion%20spmb)%20Saya%20mau%20coba gratis"
            className="btn btn-primary"
            style={{ fontSize: 15, padding: '14px 32px' }}
          >
            Coba Gratis Sekarang <ArrowRightOutlined />
          </a>
          <a
            href="https://wa.me/628216195202?text=(Qrion%20spmb)%20Saya%20mau%20konsultasi"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ fontSize: 15, padding: '14px 32px' }}
          >
            <MessageOutlined /> Hubungi Kami
          </a>
        </div>

        {/* Trust badges */}
        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
          {TRUST.map((b, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 7,
              background: '#F7FAFA', border: '1px solid #E2E8F0',
              borderRadius: 999, padding: '7px 16px',
              color: '#4A5568', fontSize: 13, fontWeight: 500,
            }}>
              {b.icon}
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
