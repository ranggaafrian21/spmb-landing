import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 500,  suffix: '+',   label: 'Sekolah Aktif',    desc: 'Menggunakan platform kami',
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1DB88E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>) },
  { value: 50,   suffix: 'K+',  label: 'Siswa Terdaftar',  desc: 'Melalui platform kami',
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1DB88E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>) },
  { value: 98,   suffix: '%',   label: 'Kepuasan Sekolah', desc: 'Rating dari pengguna',
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1DB88E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>) },
  { value: 5,    suffix: ' Mnt',label: 'Waktu Setup',      desc: 'Langsung bisa digunakan',
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1DB88E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>) },
]

function useCountUp(target: number, dur = 1800, active = false) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!active) return
    let t0: number | null = null
    const tick = (ts: number) => {
      if (!t0) t0 = ts
      const p = Math.min((ts - t0) / dur, 1)
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, dur, active])
  return n
}

function StatCard({ s, i, active }: { s: typeof STATS[0]; i: number; active: boolean }) {
  const n = useCountUp(s.value, 1800, active)
  return (
    <div className="reveal stat-card" style={{ transitionDelay: `${i * 90}ms` }}>
      <div style={{ marginBottom: 14, display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
      <div style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, color: '#0D1B2A', lineHeight: 1, letterSpacing: '-1px' }}>
        {n}<span style={{ color: '#1DB88E' }}>{s.suffix}</span>
      </div>
      <div style={{ fontWeight: 600, color: '#0D1B2A', fontSize: 15, marginTop: 8 }}>{s.label}</div>
      <div style={{ color: '#94A3B8', fontSize: 13, marginTop: 4 }}>{s.desc}</div>
    </div>
  )
}

function useReveal(ref: React.RefObject<HTMLElement | null>, cb?: () => void) {
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          cb?.()
          e.target.querySelectorAll<HTMLElement>('.reveal')
            .forEach((r, i) => setTimeout(() => r.classList.add('in'), i * 90))
        }
      })
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, cb])
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  useReveal(ref, () => setActive(true))

  return (
    <section id="stats" ref={ref} style={{ padding: '96px 0', background: '#fff', position: 'relative', overflow: 'hidden' }}>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, pointerEvents: 'none', opacity: .04 }}>
        <svg viewBox="0 0 1440 200" fill="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0 100C240 0 480 200 720 100C960 0 1200 200 1440 100V200H0Z" fill="#1DB88E"/>
        </svg>
      </div>
      <div style={{ position: 'absolute', top: 40, left: 40, pointerEvents: 'none', opacity: .06 }}>
        <svg width="140" height="100" viewBox="0 0 140 100">
          {Array.from({ length: 5 }).map((_, r) => Array.from({ length: 7 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="2" fill="#1DB88E" />
          )))}
        </svg>
      </div>

      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="badge">Angka yang Bicara</span>
          <h2 className="sec-title">Dipercaya Ratusan Sekolah</h2>
          <p className="sec-sub">
            Bergabunglah dengan ratusan sekolah yang telah menjalankan SPMB digital bersama kami.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 18 }}>
          {STATS.map((s, i) => <StatCard key={i} s={s} i={i} active={active} />)}
        </div>

        {/* Testimonial */}
        <div className="reveal" style={{ marginTop: 52 }}>
          <div style={{
            background: '#F7FAFA', border: '1px solid #E2E8F0', borderRadius: 20,
            padding: '36px 32px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 28,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', right: 24, top: 12, fontSize: 120, lineHeight: 1, color: '#1DB88E', opacity: .06, fontFamily: 'Georgia, serif', pointerEvents: 'none', userSelect: 'none' }}>"</div>

            <div style={{ flex: 1, minWidth: 260, position: 'relative', zIndex: 1 }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#1DB88E" style={{ marginBottom: 14, opacity: .8 }}>
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
              </svg>
              <blockquote style={{ color: '#374151', fontSize: 16, fontStyle: 'italic', lineHeight: 1.8, margin: '0 0 16px' }}>
                Sejak menggunakan platform SPMB ini, proses penerimaan siswa baru di sekolah kami jauh lebih
                rapi dan efisien. Orang tua pun sangat puas karena bisa mendaftar dari rumah.
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,#1DB88E,#17A07A)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#0D1B2A', fontSize: 14 }}>Budi Santoso, S.Pd</div>
                  <div style={{ color: '#1DB88E', fontSize: 13 }}>Kepala Sekolah SMP Negeri 3 Pekanbaru</div>
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#1DB88E">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
