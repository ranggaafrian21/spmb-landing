import { useEffect, useRef } from 'react'

const STEPS = [
  {
    num: '01', title: 'Daftar & Setup',
    desc: 'Buat akun sekolah, atur tahun ajaran, kuota kelas, dan kriteria seleksi sesuai kebutuhan sekolah Anda.',
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="16" y1="11" x2="22" y2="11" /></svg>),
  },
  {
    num: '02', title: 'Bagikan Link SPMB',
    desc: 'Sebarkan link pendaftaran ke orang tua calon siswa melalui WhatsApp, media sosial, atau website sekolah.',
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>),
  },
  {
    num: '03', title: 'Orang Tua Mendaftar',
    desc: 'Orang tua mengisi formulir dan mengunggah berkas persyaratan secara online dari rumah, kapan saja.',
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="13" y2="16" /></svg>),
  },
  {
    num: '04', title: 'Panitia Verifikasi',
    desc: 'Panitia memverifikasi berkas dan melakukan seleksi langsung dari dashboard. Sistem menghitung nilai otomatis.',
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>),
  },
  {
    num: '05', title: 'Umumkan Hasil',
    desc: 'Publikasikan hasil seleksi secara online. Orang tua menerima notifikasi otomatis via email dan SMS.',
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>),
  },
]

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll<HTMLElement>('.reveal')
            .forEach((r, i) => setTimeout(() => r.classList.add('in'), i * 120))
      })
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref])
}

export default function Steps() {
  const ref = useRef<HTMLDivElement>(null)
  useReveal(ref)

  return (
    <section id="steps" ref={ref} style={{ padding: '96px 0', background: '#F7FAFA', position: 'relative', overflow: 'hidden' }}>

      <div style={{ position: 'absolute', top: -80, right: -80, pointerEvents: 'none', opacity: .05 }}>
        <svg width="360" height="360" viewBox="0 0 360 360">
          <circle cx="360" cy="0" r="260" fill="none" stroke="#1DB88E" strokeWidth="40" />
          <circle cx="360" cy="0" r="180" fill="none" stroke="#1DB88E" strokeWidth="30" />
        </svg>
      </div>
      <div style={{ position: 'absolute', bottom: 60, right: 40, pointerEvents: 'none', opacity: .07 }}>
        <svg width="160" height="120" viewBox="0 0 160 120">
          {Array.from({ length: 6 }).map((_, r) => Array.from({ length: 8 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="2" fill="#1DB88E" />
          )))}
        </svg>
      </div>

      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="badge">Cara Kerja</span>
          <h2 className="sec-title">SPMB Digital dalam 5 Langkah</h2>
          <p className="sec-sub">
            Mulai gunakan platform SPMB kami dalam hitungan menit. Tidak perlu keahlian teknis.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: 24, position: 'relative' }}>
          <div className="hide-sm" style={{
            position: 'absolute', top: 33, left: '10%', right: '10%', height: 2,
            background: 'linear-gradient(90deg,transparent,#1DB88E 20%,#1DB88E 80%,transparent)',
            opacity: 0.2, zIndex: 0,
          }} />

          {STEPS.map((s, i) => (
            <div key={i} className="reveal" style={{ textAlign: 'center', position: 'relative', zIndex: 1, transitionDelay: `${i * 110}ms` }}>
              <div style={{ display: 'inline-block', padding: 4, borderRadius: '50%', background: '#fff', boxShadow: '0 0 0 2px rgba(29,184,142,.2)', marginBottom: 18 }}>
                <div className="step-circle" style={{ margin: 0 }}>{s.icon}</div>
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#1DB88E', letterSpacing: '.5px', marginBottom: 6, textTransform: 'uppercase' }}>
                Langkah {s.num}
              </div>
              <h3 style={{ fontWeight: 700, color: '#0D1B2A', fontSize: 15, margin: '0 0 8px' }}>{s.title}</h3>
              <p style={{ color: '#4A5568', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal hide-sm" style={{ marginTop: 56, display: 'flex', justifyContent: 'center' }}>
          <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 16, padding: '20px 32px', display: 'flex', alignItems: 'center', gap: 24, boxShadow: '0 4px 20px rgba(0,0,0,.04)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB88E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            <span style={{ color: '#4A5568', fontSize: 14 }}>
              Setup awal selesai dalam:{' '}
              <strong style={{ color: '#0D1B2A' }}>kurang dari 5 menit</strong>
            </span>
            <div style={{ width: 1, height: 24, background: '#E2E8F0' }} />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB88E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span style={{ color: '#4A5568', fontSize: 14 }}>
              Tersedia <strong style={{ color: '#0D1B2A' }}>24 jam / 7 hari</strong>
            </span>
          </div>
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="https://ppdb.qrion.id/Login/register"
            className="btn btn-primary" style={{ fontSize: 14, padding: '13px 32px' }}>
            Mulai SPMB Digital Sekarang →
          </a>
        </div>
      </div>
    </section>
  )
}
