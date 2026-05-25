import { useEffect, useRef } from 'react'
import { CheckCircleOutlined } from '@ant-design/icons'

const PROBLEMS = [
  {
    title: 'Antri Panjang & Melelahkan',
    desc: 'Orang tua harus datang langsung ke sekolah, antri berjam-jam hanya untuk mengambil dan mengisi formulir pendaftaran.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="2" /><circle cx="15" cy="7" r="2" />
        <path d="M5 21v-2a4 4 0 0 1 4-4h2" /><path d="M13 15h2a4 4 0 0 1 4 4v2" />
        <line x1="12" y1="12" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    title: 'Berkas Fisik Sering Hilang',
    desc: 'Dokumen pendaftaran fisik mudah hilang, rusak, atau tidak lengkap sehingga proses seleksi terhambat.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="11" x2="12" y2="15" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: 'Rekap Data Memakan Waktu',
    desc: 'Panitia SPMB harus merekap data pendaftar secara manual, rawan kesalahan dan membutuhkan waktu berhari-hari.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    title: 'Informasi Tidak Transparan',
    desc: 'Orang tua tidak bisa memantau status pendaftaran anaknya secara real-time, menimbulkan kekhawatiran dan banyak pertanyaan.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
  },
]

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll<HTMLElement>('.reveal')
            .forEach((r, i) => setTimeout(() => r.classList.add('in'), i * 100))
      })
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref])
}

export default function Problems() {
  const ref = useRef<HTMLDivElement>(null)
  useReveal(ref)

  return (
    <section id="problems" ref={ref} style={{ padding: '96px 0', background: '#F7FAFA', position: 'relative', overflow: 'hidden' }}>

      <div style={{ position: 'absolute', top: 0, right: 0, pointerEvents: 'none', opacity: .05 }}>
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
          <circle cx="320" cy="0" r="200" fill="#EF4444" />
          <circle cx="320" cy="0" r="130" fill="#EF4444" />
          <circle cx="320" cy="0" r="70" fill="#EF4444" />
        </svg>
      </div>
      <div style={{ position: 'absolute', bottom: 40, left: 20, pointerEvents: 'none', opacity: .06 }}>
        <svg width="160" height="120" viewBox="0 0 160 120">
          {Array.from({ length: 6 }).map((_, r) => Array.from({ length: 8 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="2" fill="#1DB88E" />
          )))}
        </svg>
      </div>

      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="badge" style={{ background: '#FEE2E2', color: '#B91C1C' }}>
            Masalah SPMB Konvensional
          </span>
          <h2 className="sec-title">Kenapa SPMB Manual Menyulitkan?</h2>
          <p className="sec-sub">
            Sistem SPMB konvensional penuh hambatan yang membuang waktu panitia dan membuat orang tua frustrasi.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 18 }}>
          {PROBLEMS.map((p, i) => (
            <div key={i} className="reveal card" style={{ padding: 26, transitionDelay: `${i * 80}ms` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ width: 48, height: 48, background: '#FEF2F2', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {p.icon}
                </div>
                <span style={{ fontSize: 32, fontWeight: 900, color: '#FEE2E2', lineHeight: 1, letterSpacing: '-2px' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 style={{ fontWeight: 700, color: '#0D1B2A', fontSize: 15, margin: '0 0 8px', lineHeight: 1.4 }}>{p.title}</h3>
              <p style={{ color: '#4A5568', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: 44 }}>
          <div style={{
            background: '#1DB88E', borderRadius: 20, padding: '40px 36px',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24,
            boxShadow: '0 16px 48px rgba(29,184,142,.25)', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', right: -40, top: -40, opacity: .12, pointerEvents: 'none' }}>
              <svg width="200" height="200" viewBox="0 0 200 200"><circle cx="200" cy="0" r="120" fill="#fff" /><circle cx="200" cy="0" r="80" fill="#fff" /></svg>
            </div>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <CheckCircleOutlined style={{ fontSize: 28, color: '#fff' }} />
            </div>
            <div style={{ flex: 1, minWidth: 240, position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', margin: '0 0 8px' }}>
                Platform SPMB Kami Hadir Sebagai Solusi
              </h3>
              <p style={{ color: 'rgba(255,255,255,.82)', fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 560 }}>
                Kelola seluruh proses SPMB sekolah Anda secara digital — dari pendaftaran online, seleksi,
                hingga pengumuman — dalam satu platform yang mudah digunakan.
              </p>
            </div>
            <a href="https://spmb.qrion.id/Login/register"
              target="_blank" rel="noopener noreferrer"
              className="btn" style={{ background: '#fff', color: '#1DB88E', padding: '12px 24px', flexShrink: 0, fontWeight: 700, position: 'relative', zIndex: 1 }}>
              Mulai Sekarang →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
