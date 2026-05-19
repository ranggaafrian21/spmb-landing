import { useEffect, useState } from 'react'
import { FadeUp } from './AnimatedSection'

// Import semua logo dari src/assets/school/ menggunakan Vite glob import
const logoModules = import.meta.glob('../assets/school/*.png', { eager: true, as: 'url' })

// Urutkan berdasarkan nama file (43.png, 44.png, dst)
const allLogos: string[] = Object.keys(logoModules)
  .sort((a, b) => {
    const numA = parseInt(a.match(/(\d+)\.png$/)?.[1] ?? '0')
    const numB = parseInt(b.match(/(\d+)\.png$/)?.[1] ?? '0')
    return numA - numB
  })
  .map(key => logoModules[key] as string)

const row1 = allLogos.slice(0, Math.ceil(allLogos.length / 2))
const row2 = allLogos.slice(Math.ceil(allLogos.length / 2))

function MarqueeRow({ logos, reverse = false }: { logos: string[]; reverse?: boolean }) {
  // Duplikat untuk seamless loop
  const items = [...logos, ...logos, ...logos]

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div style={{
        display: 'flex',
        gap: 16,
        width: 'max-content',
        animation: `${reverse ? 'marqueeReverse' : 'marquee'} 30s linear infinite`,
      }}>
        {items.map((src, i) => (
          <div key={i} style={{
            width: 80,
            height: 80,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff',
            borderRadius: 14,
            border: '1px solid #E2E8F0',
            padding: 10,
            boxShadow: '0 2px 8px rgba(0,0,0,.04)',
            transition: 'box-shadow .2s, transform .2s',
          }}>
            <img
              src={src}
              alt={`Logo mitra ${i + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TrustedSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded || allLogos.length === 0) return null

  return (
    <section id="mitra" style={{ padding: '80px 0', background: '#F7FAFA', overflow: 'hidden', position: 'relative' }}>

      {/* Dot grid decoration */}
      <div style={{ position: 'absolute', top: 20, right: 40, pointerEvents: 'none', opacity: .05 }}>
        <svg width="140" height="100" viewBox="0 0 140 100">
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 7 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="2" fill="#1DB88E" />
            ))
          )}
        </svg>
      </div>

      {/* Header */}
      <div className="wrap">
        <FadeUp style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="badge">Mitra Kami</span>
          <h2 className="sec-title">Dipercaya Sekolah di Seluruh Indonesia</h2>
          <p className="sec-sub">
            Dari sekolah dasar hingga yayasan, SPMB Online telah membantu manajemen
            pendaftaran bekerja lebih efisien dan transparan.
          </p>
        </FadeUp>
      </div>

      {/* Marquee rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* Row 1 — kiri ke kanan */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, zIndex: 10, pointerEvents: 'none', background: 'linear-gradient(to right, #F7FAFA, transparent)' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, zIndex: 10, pointerEvents: 'none', background: 'linear-gradient(to left, #F7FAFA, transparent)' }} />
          <MarqueeRow logos={row1} />
        </div>

        {/* Row 2 — kanan ke kiri */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, zIndex: 10, pointerEvents: 'none', background: 'linear-gradient(to right, #F7FAFA, transparent)' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, zIndex: 10, pointerEvents: 'none', background: 'linear-gradient(to left, #F7FAFA, transparent)' }} />
          <MarqueeRow logos={row2} reverse />
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0) }
          to   { transform: translateX(calc(-100% / 3)) }
        }
        @keyframes marqueeReverse {
          from { transform: translateX(calc(-100% / 3)) }
          to   { transform: translateX(0) }
        }
      `}</style>
    </section>
  )
}
