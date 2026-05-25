import { useState, useEffect } from 'react'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import logoImg from '../assets/qrion spmb 1.png'

const NAV_LINKS = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Fitur', href: '#features' },
  { label: 'Cara Kerja', href: '#steps' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Harga', href: '#harga' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#hero')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn); fn()
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.replace('#', ''))
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveHref(`#${e.target.id}`) }),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: 'rgba(255,255,255,.97)',
      borderBottom: `1px solid ${scrolled ? '#E2E8F0' : 'transparent'}`,
      backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
      boxShadow: scrolled ? '0 1px 16px rgba(0,0,0,.06)' : 'none',
      transition: 'border-color .3s, box-shadow .3s',
      fontFamily: 'Inter, sans-serif',
    }}>
      <div className="wrap">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? 62 : 72, transition: 'height .3s' }}>

          {/* Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <img src={logoImg} alt="Qrion SPMB" style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          </a>

          {/* Desktop nav */}
          <nav className="hide-sm" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {NAV_LINKS.map(l => {
              const active = activeHref === l.href
              return (
                <a key={l.label} href={l.href} style={{
                  fontSize: 14, fontWeight: active ? 600 : 500,
                  textDecoration: 'none', padding: '6px 12px', borderRadius: 8,
                  color: active ? '#1DB88E' : '#4A5568',
                  background: active ? '#E8F8F3' : 'transparent',
                  transition: 'color .2s, background .2s',
                }}
                  onMouseEnter={e => { if (!active) { e.currentTarget.style.color = '#1DB88E'; e.currentTarget.style.background = '#F7FAFA' } }}
                  onMouseLeave={e => { if (!active) { e.currentTarget.style.color = '#4A5568'; e.currentTarget.style.background = 'transparent' } }}
                >{l.label}</a>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hide-sm" style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <a href="https://spmb.qrion.id/Login"
              target="_blank" rel="noopener noreferrer"
              style={{
                fontSize: 14, fontWeight: 600, textDecoration: 'none',
                color: '#4A5568', padding: '8px 14px', borderRadius: 8, transition: 'color .2s, background .2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#1DB88E'; e.currentTarget.style.background = '#F7FAFA' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#4A5568'; e.currentTarget.style.background = 'transparent' }}
            >Login</a>
            <a href="https://spmb.qrion.id/Login/register"
              className="btn btn-primary" style={{ padding: '9px 20px', fontSize: 13, borderRadius: 9 }}>
              Register
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="show-sm" onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 18, color: '#0D1B2A', padding: 6, borderRadius: 8,
          }}>
            {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #E2E8F0', padding: '8px 24px 20px', boxShadow: '0 8px 24px rgba(0,0,0,.08)' }}>
          {NAV_LINKS.map(l => {
            const active = activeHref === l.href
            return (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '13px 0', fontSize: 15, fontWeight: active ? 600 : 500,
                color: active ? '#1DB88E' : '#374151',
                textDecoration: 'none', borderBottom: '1px solid #F1F5F9',
              }}>
                {l.label}
                {active && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1DB88E' }} />}
              </a>
            )
          })}
          <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
            <a href="https://spmb.qrion.id/Login"
              target="_blank" rel="noopener noreferrer"
              style={{
                flex: 1, textAlign: 'center', padding: '11px 0',
                fontSize: 14, fontWeight: 600, color: '#1DB88E',
                border: '1.5px solid #1DB88E', borderRadius: 9, textDecoration: 'none',
              }}>Masuk</a>
            <a href="https://spmb.qrion.id/Login/register"
              className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', borderRadius: 9 }}>
              Coba Gratis
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
