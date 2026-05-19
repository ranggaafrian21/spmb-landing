import { useState } from 'react'
import { FadeUp } from './AnimatedSection'

type PlanKey = '1' | '3' | '6' | '12'

const PRICING: Record<PlanKey, { price: string; note?: string }> = {
  '1':  { price: '500.000' },
  '3':  { price: '1.500.000'},
  '6':  { price: '2.700.000'},
  '12': { price: '4.800.000'},
}

const PLAN_LABELS: Record<PlanKey, string> = {
  '1': '1 Bulan', '3': '3 Bulan', '6': '6 Bulan', '12': '12 Bulan',
}

const FEATURES = [
  { text: 'Manajemen Pendaftaran Online',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg> },
  { text: 'Upload & Verifikasi Dokumen Digital',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg> },
  { text: 'Monitoring Pendaftaran Real-time',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { text: 'Laporan Otomatis Siap Cetak',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg> },
  { text: 'Notifikasi Email & SMS Otomatis',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg> },
  { text: 'Support & Update Gratis',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg> },
]

export default function PricingPackages() {
  const [plan, setPlan] = useState<PlanKey>('6')
  const current = PRICING[plan]

  return (
    <section id="harga" style={{ padding: '96px 0', background: '#fff', position: 'relative', overflow: 'hidden' }}>

      {/* Decorative blobs */}
      <div className="blob-deco a-blob"    style={{ width: 400, height: 400, top: -80,    right: -80,  background: 'rgba(29,184,142,.07)' }} />
      <div className="blob-deco a-blob d3" style={{ width: 360, height: 360, bottom: -80, left: -80,   background: 'rgba(29,184,142,.06)' }} />

      {/* Dot grid */}
      <div style={{ position: 'absolute', top: 40, left: 40, pointerEvents: 'none', opacity: .05 }}>
        <svg width="140" height="100" viewBox="0 0 140 100">
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 7 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="2" fill="#1DB88E" />
            ))
          )}
        </svg>
      </div>

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <FadeUp style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="badge">Harga</span>
          <h2 className="sec-title">Paket dan Harga</h2>
          <p className="sec-sub">Tingkatkan manajemen pendaftaran Anda dengan harga terbaik.</p>
        </FadeUp>

        {/* Plan toggle */}
        <FadeUp delay={100} style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{
            display: 'inline-flex', border: '2px solid #1DB88E',
            borderRadius: 12, overflow: 'hidden',
          }}>
            {(['1','3','6','12'] as PlanKey[]).map(p => (
              <button key={p} onClick={() => setPlan(p)} style={{
                padding: '10px 22px', fontSize: 14, fontWeight: 600,
                fontFamily: 'Inter, sans-serif', border: 'none', cursor: 'pointer',
                background: plan === p ? '#1DB88E' : 'transparent',
                color: plan === p ? '#fff' : '#1DB88E',
                transition: 'all .2s',
              }}>
                {PLAN_LABELS[p]}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Pricing card */}
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <FadeUp delay={150}>
            <div style={{
              background: '#F7FAFA',
              border: '2px solid #1DB88E',
              borderRadius: 24, padding: 36,
              boxShadow: '0 16px 48px rgba(29,184,142,.15)',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Card decoration */}
              <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(29,184,142,.08)', pointerEvents: 'none' }} />

              {/* Plan badge + note */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <span style={{
                  background: '#1DB88E', color: '#fff',
                  padding: '6px 16px', borderRadius: 8,
                  fontSize: 13, fontWeight: 700,
                }}>
                  {PLAN_LABELS[plan]}
                </span>
                {current.note && (
                  <span style={{
                    background: '#E8F8F3', color: '#0f7a5a',
                    border: '1px solid rgba(29,184,142,.3)',
                    padding: '5px 12px', borderRadius: 8,
                    fontSize: 12, fontWeight: 600,
                  }}>
                    {current.note}
                  </span>
                )}
              </div>

              {/* Price */}
              <p style={{ color: '#94A3B8', fontSize: 12, margin: '0 0 4px' }}>Mulai dari</p>
              <p style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 900, color: '#1DB88E', margin: '0 0 24px', letterSpacing: '-1px' }}>
                Rp <span style={{ color: '#1DB88E' }}>{current.price}</span>
              </p>

              {/* Features */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {FEATURES.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#374151' }}>
                    <span style={{
                      width: 24, height: 24, borderRadius: '50%',
                      background: '#E8F8F3', color: '#1DB88E',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      {f.icon}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://wa.me/628216195202?text=(Qrion%20spmb)%20Saya%20mau%20konsultasi"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', fontSize: 14, padding: '14px 24px' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.5.5 0 00.609.61l5.7-1.493A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.7-.504-5.25-1.385l-.376-.217-3.884 1.018 1.003-3.77-.232-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Pilih Paket — Hubungi Kami
              </a>

              {/* Guarantee note */}
              <p style={{ textAlign: 'center', color: '#94A3B8', fontSize: 12, marginTop: 14 }}>
                ✓ Tanpa kontrak jangka panjang &nbsp;·&nbsp; ✓ Bisa upgrade kapan saja
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
