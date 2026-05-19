import { useEffect, useRef } from 'react'

const FEATURES = [
  {
    title: 'Formulir Pendaftaran Online',
    desc: 'Orang tua mengisi formulir SPMB dari rumah kapan saja. Tidak perlu datang ke sekolah, tidak perlu antri.',
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB88E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>),
    color: '#F7FAFA',
  },
  {
    title: 'Upload Berkas Digital',
    desc: 'Calon siswa mengunggah dokumen persyaratan secara digital. Panitia verifikasi langsung dari dashboard.',
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB88E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>),
    color: '#E8F8F3',
  },
  {
    title: 'Seleksi & Penilaian Otomatis',
    desc: 'Sistem menghitung nilai dan peringkat calon siswa secara otomatis sesuai kriteria yang Anda tentukan.',
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB88E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>),
    color: '#F7FAFA',
  },
  {
    title: 'Monitoring Real-time',
    desc: 'Pantau jumlah pendaftar, status verifikasi, dan kuota tersisa secara langsung dari dashboard panitia.',
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB88E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>),
    color: '#E8F8F3',
  },
  {
    title: 'Notifikasi Otomatis',
    desc: 'Orang tua menerima notifikasi status pendaftaran, jadwal tes, dan pengumuman hasil via email & SMS.',
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB88E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><circle cx="18" cy="5" r="3" fill="#1DB88E" stroke="none"/></svg>),
    color: '#F7FAFA',
  },
  {
    title: 'Laporan & Rekap Otomatis',
    desc: 'Laporan data pendaftar, hasil seleksi, dan statistik SPMB tersedia otomatis dan siap dicetak kapan saja.',
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB88E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>),
    color: '#E8F8F3',
  },
]

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll<HTMLElement>('.reveal')
            .forEach((r, i) => setTimeout(() => r.classList.add('in'), i * 80))
      })
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref])
}

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  useReveal(ref)

  return (
    <section id="features" ref={ref} style={{ padding: '96px 0', background: '#fff', position: 'relative', overflow: 'hidden' }}>

      <div style={{ position: 'absolute', top: -120, left: -120, pointerEvents: 'none', opacity: .04 }}>
        <svg width="400" height="400" viewBox="0 0 400 400"><circle cx="200" cy="200" r="200" fill="#1DB88E"/></svg>
      </div>
      <div style={{ position: 'absolute', top: 40, right: 40, pointerEvents: 'none', opacity: .06 }}>
        <svg width="180" height="140" viewBox="0 0 180 140">
          {Array.from({ length: 7 }).map((_, r) => Array.from({ length: 9 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="2" fill="#1DB88E" />
          )))}
        </svg>
      </div>

      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', marginBottom: 52, gap: 32 }} className="features-header">
          <div className="reveal">
            <span className="badge">Fitur Unggulan</span>
            <h2 className="sec-title" style={{ margin: 0 }}>Semua yang Dibutuhkan untuk SPMB Digital</h2>
            <p className="sec-sub" style={{ margin: '12px 0 0', textAlign: 'left' }}>
              Satu platform lengkap untuk mengelola seluruh proses penerimaan peserta didik baru
              sekolah Anda — dari awal hingga pengumuman.
            </p>
          </div>

          {/* Dashboard illustration */}
          <div className="reveal hide-sm" style={{ flexShrink: 0 }}>
            <svg width="180" height="120" viewBox="0 0 180 120" fill="none">
              <rect x="0" y="0" width="180" height="120" rx="10" fill="#F7FAFA" stroke="#E2E8F0" strokeWidth="1.5"/>
              <rect x="0" y="0" width="180" height="28" rx="10" fill="#E8F8F3"/>
              <rect x="10" y="10" width="8" height="8" rx="4" fill="#1DB88E"/>
              <rect x="24" y="10" width="8" height="8" rx="4" fill="#86efac"/>
              <rect x="38" y="10" width="8" height="8" rx="4" fill="#bbf7d0"/>
              <rect x="56" y="8" width="80" height="12" rx="6" fill="rgba(29,184,142,.15)"/>
              <rect x="12" y="38" width="50" height="7" rx="3" fill="#E2E8F0"/>
              <rect x="12" y="51" width="90" height="5" rx="2.5" fill="#F1F5F9"/>
              <rect x="12" y="62" width="70" height="5" rx="2.5" fill="#F1F5F9"/>
              <rect x="12" y="78" width="156" height="6" rx="3" fill="#E2E8F0"/>
              <rect x="12" y="78" width="120" height="6" rx="3" fill="#1DB88E"/>
              <circle cx="155" cy="50" r="14" fill="#E8F8F3"/>
              <polyline points="149,50 153,54 161,46" stroke="#1DB88E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18 }}>
          {FEATURES.map((f, i) => (
            <div key={i} className="reveal card" style={{ padding: 26, transitionDelay: `${i * 70}ms`, cursor: 'default', background: f.color }}>
              <div className="icon-box" style={{ marginBottom: 18 }}>{f.icon}</div>
              <h3 style={{ fontWeight: 700, color: '#0D1B2A', fontSize: 16, margin: '0 0 8px' }}>{f.title}</h3>
              <p style={{ color: '#4A5568', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:768px){ .features-header { grid-template-columns:1fr !important } }`}</style>
    </section>
  )
}
