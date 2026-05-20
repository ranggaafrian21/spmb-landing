import { ArrowRightOutlined } from '@ant-design/icons'

// Ambil beberapa logo sekolah untuk social proof
const logoModules = import.meta.glob<string>('../assets/school/*.png', { eager: true, import: 'default' })
const schoolLogos: string[] = Object.keys(logoModules)
  .sort((a, b) => {
    const n = (s: string) => parseInt(s.match(/(\d+)\.png$/)?.[1] ?? '0')
    return n(a) - n(b)
  })
  .slice(0, 5)
  .map(k => logoModules[k])

const BADGES = [
  { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, text: 'Setup dalam 5 Menit' },
  { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, text: 'Data Aman & Terenkripsi' },
]

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      background: '#ffffff', position: 'relative', overflow: 'hidden',
    }}>
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, #d1fae5 1px, transparent 1px)',
        backgroundSize: '28px 28px', opacity: .4,
      }} />
      {/* Blobs */}
      <div style={{ position: 'absolute', top: -160, right: -160, width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,184,142,.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -120, left: -120, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,184,142,.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      {/* Rings */}
      <div className="a-spin hide-sm" style={{ position: 'absolute', top: 80, right: 60, width: 180, height: 180, border: '1.5px solid rgba(29,184,142,.15)', borderRadius: '50%' }} />
      <div className="a-spin hide-sm" style={{ position: 'absolute', top: 105, right: 85, width: 110, height: 110, border: '1.5px solid rgba(29,184,142,.08)', borderRadius: '50%', animationDirection: 'reverse' }} />

      <div className="wrap" style={{ paddingTop: 120, paddingBottom: 96, position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="hero-grid">

          {/* LEFT */}
          <div>
            {/* Pill */}
            <div className="a-up" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#E8F8F3', border: '1px solid rgba(29,184,142,.3)',
              borderRadius: 999, padding: '7px 16px', marginBottom: 24,
            }}>
              <span style={{ width: 7, height: 7, background: '#1DB88E', borderRadius: '50%', animation: 'ping 1.6s ease-out infinite' }} />
              <span style={{ color: '#0f7a5a', fontSize: 13, fontWeight: 600 }}>
                Sistem SPMB Online untuk Sekolah
              </span>
            </div>

            {/* Heading */}
            <h1 className="a-up d1" style={{
              fontSize: 'clamp(28px,4.5vw,38px)', fontWeight: 900,
              color: '#0D1B2A', lineHeight: 1.1, marginBottom: 20, letterSpacing: '-1.5px',
            }}>
              Kelola Seluruh Proses{' '}
              <span style={{ color: '#000000ff' }}>Penerimaan Siswa Baru</span><br />
            Dalam <span style={{ color: '#1DB88E' }}>Satu Sistem Digital Yang Rapi</span>
            </h1>

            {/* Sub */}
            <p className="a-up d2" style={{ color: '#4A5568', fontSize: 16, lineHeight: 1.8, marginBottom: 28, maxWidth: 460 }}>
              Platform SPMB digital yang membantu sekolah mengelola pendaftaran siswa baru secara online —
              dari formulir, seleksi, hingga pengumuman.
            </p>

            {/* Badges */}
            <div className="a-up d3" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
              {BADGES.map(b => (
                <span key={b.text} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: '#F7FAFA', color: '#374151',
                  fontSize: 13, fontWeight: 500, padding: '7px 14px',
                  borderRadius: 999, border: '1px solid #E2E8F0',
                }}>
                  <span style={{ color: '#1DB88E' }}>{b.icon}</span>
                  {b.text}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="a-up d4" style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a href="https://wa.me/628216195202?text=(Qrion%20spmb)%20Saya%20mau%20coba gratis"
                className="btn btn-primary" style={{ fontSize: 15, padding: '14px 32px' }}>
                Coba Gratis Sekarang <ArrowRightOutlined />
              </a>
              <a href="#features" className="btn btn-outline" style={{ fontSize: 15, padding: '14px 32px' }}>
                Lihat Fitur
              </a>
            </div>

            {/* Social proof */}
            <div className="a-up d5" style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 36 }}>
              {/* Logo sekolah overlapping */}
              <div style={{ display: 'flex' }}>
                {schoolLogos.map((logo, i) => (
                  <div key={i} style={{
                    width: 36, height: 36, borderRadius: '50%',
                    border: '2.5px solid #fff',
                    background: '#F7FAFA',
                    overflow: 'hidden',
                    marginLeft: i === 0 ? 0 : -10,
                    position: 'relative', zIndex: 5 - i,
                    boxShadow: '0 2px 6px rgba(0,0,0,.1)',
                    flexShrink: 0,
                  }}>
                    <img
                      src={logo}
                      alt={`Sekolah ${i + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 4 }}
                    />
                  </div>
                ))}
              </div>
              <div>
                <div style={{ color: '#0D1B2A', fontWeight: 700, fontSize: 14 }}>Dipercaya beberapa sekolah</div>
                <div style={{ color: '#94A3B8', fontSize: 12 }}>di seluruh Indonesia</div>
              </div>
            </div>
          </div>

          {/* RIGHT — SPMB Dashboard mockup */}
          <div className="hero-card-col a-float" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', minHeight: 480 }}>

            {/* ── Glow behind card ── */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 50%, rgba(29,184,142,.13) 0%, transparent 70%)', pointerEvents: 'none' }} />

            {/* ══════════════════════════════
                MAIN DASHBOARD CARD
            ══════════════════════════════ */}
            <div style={{
              background: '#fff',
              border: '1px solid #E2E8F0',
              borderRadius: 24, padding: '20px 20px 16px',
              width: 360,
              boxShadow: '0 32px 80px rgba(0,0,0,.1), 0 0 0 1px rgba(29,184,142,.06)',
              position: 'relative', zIndex: 2,
            }}>

              {/* ── Top bar ── */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: '#1DB88E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#0D1B2A', lineHeight: 1.2 }}>Dashboard SPMB</div>
                    <div style={{ fontSize: 10, color: '#94A3B8' }}>TA 2025/2026</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#E8F8F3', borderRadius: 999, padding: '4px 10px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1DB88E', animation: 'ping 1.6s ease-out infinite', display: 'inline-block' }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#0f7a5a' }}>Live</span>
                </div>
              </div>

              {/* ── Stat row ── */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 16 }}>
                {[
                  { label: 'Pendaftar', value: '248', delta: '+12', up: true,  color: '#1DB88E' },
                  { label: 'Diterima',  value: '120', delta: '48%', up: true,  color: '#0D1B2A' },
                  { label: 'Ditolak',   value: '18',  delta: '7%',  up: false, color: '#EF4444' },
                ].map((s, i) => (
                  <div key={i} style={{ background: '#F7FAFA', borderRadius: 12, padding: '10px 10px 8px', textAlign: 'center' }}>
                    <div style={{ fontSize: 18, fontWeight: 800, color: s.color, lineHeight: 1, letterSpacing: '-0.5px' }}>{s.value}</div>
                    <div style={{ fontSize: 10, color: '#94A3B8', marginTop: 2 }}>{s.label}</div>
                    <div style={{
                      fontSize: 10, fontWeight: 600, marginTop: 4,
                      color: s.up ? '#1DB88E' : '#EF4444',
                      background: s.up ? '#E8F8F3' : '#FEF2F2',
                      borderRadius: 4, padding: '1px 5px', display: 'inline-block',
                    }}>{s.delta}</div>
                  </div>
                ))}
              </div>

              {/* ── Mini bar chart ── */}
              <div style={{ background: '#F7FAFA', borderRadius: 14, padding: '12px 14px', marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#0D1B2A' }}>Pendaftar per Hari</span>
                  <span style={{ fontSize: 10, color: '#94A3B8' }}>7 hari terakhir</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 44 }}>
                  {[28, 42, 35, 58, 48, 72, 65].map((h, i) => {
                    const isLast = i === 6
                    return (
                      <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                        <div style={{
                          width: '100%',
                          height: `${(h / 72) * 36}px`,
                          background: isLast ? '#1DB88E' : 'rgba(29,184,142,.2)',
                          borderRadius: '4px 4px 2px 2px',
                          transition: 'height .3s',
                          position: 'relative',
                        }}>
                          {isLast && (
                            <div style={{
                              position: 'absolute', top: -18, left: '50%', transform: 'translateX(-50%)',
                              background: '#1DB88E', color: '#fff', fontSize: 9, fontWeight: 700,
                              padding: '2px 5px', borderRadius: 4, whiteSpace: 'nowrap',
                            }}>65</div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}>
                  {['Sen','Sel','Rab','Kam','Jum','Sab','Min'].map(d => (
                    <span key={d} style={{ flex: 1, textAlign: 'center', fontSize: 9, color: '#CBD5E1' }}>{d}</span>
                  ))}
                </div>
              </div>

              {/* ── Recent applicants ── */}
              <div style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#0D1B2A', marginBottom: 8 }}>Pendaftar Terbaru</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {[
                    { name: 'Ahmad Fauzi',    school: 'SD Negeri 01',  status: 'Diverifikasi', color: '#1DB88E', bg: '#E8F8F3' },
                    { name: 'Siti Rahayu',    school: 'MI Al-Ikhlas',  status: 'Menunggu',     color: '#F59E0B', bg: '#FEF3C7' },
                    { name: 'Budi Santoso',   school: 'SD Swasta Maju',status: 'Diverifikasi', color: '#1DB88E', bg: '#E8F8F3' },
                  ].map((a, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '7px 10px', background: '#F7FAFA', borderRadius: 10 }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                        background: `hsl(${160 + i * 20}, 50%, ${40 + i * 5}%)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, fontWeight: 700, color: '#fff',
                      }}>
                        {a.name[0]}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 12, fontWeight: 600, color: '#0D1B2A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.name}</div>
                        <div style={{ fontSize: 10, color: '#94A3B8' }}>{a.school}</div>
                      </div>
                      <span style={{ fontSize: 10, fontWeight: 600, color: a.color, background: a.bg, padding: '3px 8px', borderRadius: 6, flexShrink: 0 }}>
                        {a.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Progress bar ── */}
              <div style={{ background: '#F7FAFA', borderRadius: 12, padding: '10px 12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 6 }}>
                  <span style={{ fontWeight: 600, color: '#0D1B2A' }}>Kuota Terisi</span>
                  <span style={{ fontWeight: 700, color: '#1DB88E' }}>120 / 160</span>
                </div>
                <div style={{ height: 6, background: '#E2E8F0', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '75%', background: 'linear-gradient(90deg,#1DB88E,#0fe8b0)', borderRadius: 4 }} />
                </div>
                <div style={{ fontSize: 10, color: '#94A3B8', marginTop: 5 }}>40 kursi tersisa · Batas: 30 Juni 2025</div>
              </div>
            </div>

            {/* ══════════════════════════════
                FLOATING CARD — top right
            ══════════════════════════════ */}
            <div className="a-right d4" style={{
              position: 'absolute', top: 10, right: -20, zIndex: 4,
              background: '#fff', borderRadius: 16, padding: '12px 16px',
              boxShadow: '0 12px 36px rgba(0,0,0,.1)', border: '1px solid #E2E8F0',
              display: 'flex', alignItems: 'center', gap: 10, minWidth: 160,
            }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#E8F8F3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1DB88E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 10, color: '#94A3B8', fontWeight: 500 }}>Pendaftar Hari Ini</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#0D1B2A', lineHeight: 1.2 }}>
                  +65 <span style={{ fontSize: 11, color: '#1DB88E', fontWeight: 600 }}>↑ 12%</span>
                </div>
              </div>
            </div>

            {/* ══════════════════════════════
                FLOATING CARD — bottom left
            ══════════════════════════════ */}
            <div className="a-left d5" style={{
              position: 'absolute', bottom: 10, left: -20, zIndex: 4,
              background: '#1DB88E', borderRadius: 16, padding: '12px 16px',
              boxShadow: '0 12px 36px rgba(29,184,142,.35)',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, background: 'rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.75)', fontWeight: 500 }}>Pengumuman</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Siap Dipublikasi</div>
              </div>
            </div>

            {/* ══════════════════════════════
                FLOATING CARD — left middle
            ══════════════════════════════ */}
            <div className="a-left d3" style={{
              position: 'absolute', top: '38%', left: -24, zIndex: 4,
              background: '#fff', borderRadius: 14, padding: '10px 14px',
              boxShadow: '0 8px 24px rgba(0,0,0,.09)', border: '1px solid #E2E8F0',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 10, color: '#94A3B8' }}>Notifikasi</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#0D1B2A' }}>3 berkas baru</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, transparent, #1DB88E 30%, #1DB88E 70%, transparent)', opacity: .3 }} />

      <style>{`
        @media(max-width:900px){
          .hero-grid { grid-template-columns:1fr !important }
          .hero-card-col { display:none !important }
        }
      `}</style>
    </section>
  )
}
