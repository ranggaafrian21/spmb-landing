import { useState, useEffect } from 'react'
import { FadeUp } from './AnimatedSection'

/* ── YouTube helpers ── */
const getYtId  = (url: string) => url.match(/(?:v=|\.be\/)([A-Za-z0-9_-]{11})/)?.[1] ?? null
const getEmbed = (url: string, autoplay = false) => {
  const id = getYtId(url)
  if (!id) return ''
  return autoplay
    ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`
    : `https://www.youtube-nocookie.com/embed/${id}?rel=0&mute=1&controls=0&modestbranding=1&loop=1&playlist=${id}`
}

/* Thumbnail: coba maxresdefault → hqdefault → mqdefault */
function YtThumb({ url, alt, style }: { url: string; alt: string; style?: React.CSSProperties }) {
  const id = getYtId(url)
  const [src, setSrc] = useState(id ? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg` : '')

  const fallbacks = id ? [
    `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/sddefault.jpg`,
  ] : []
  const [fbIdx, setFbIdx] = useState(0)

  const handleError = () => {
    if (fbIdx < fallbacks.length) {
      setSrc(fallbacks[fbIdx])
      setFbIdx(i => i + 1)
    }
  }

  if (!id) return <div style={{ ...style, background: '#E2E8F0' }} />

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      referrerPolicy="no-referrer"
      crossOrigin="anonymous"
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', ...style }}
    />
  )
}

const TESTIMONIALS = [
  { title: 'Digitalisasi Pendaftaran yang Lebih Efisien',  desc: 'Proses pendaftaran kini beralih ke format digital yang lebih praktis dan transparan.',             duration: '1:20', videoUrl: 'https://youtu.be/NlU_hVsmBek' },
  { title: 'Laporan Pendaftaran Otomatis Setiap Periode',  desc: 'Tidak perlu lagi membuat laporan manual — sistem menyiapkan semuanya secara otomatis.',            duration: '1:20', videoUrl: 'https://youtu.be/laW5bMPIlhY' },
  { title: 'Transparansi Data Pendaftar Lebih Mudah',      desc: 'Panitia dan pimpinan dapat memantau data pendaftar secara real-time.',                             duration: '1:20', videoUrl: 'https://youtu.be/_V9-UtVLWus' },
  { title: 'Pengelolaan Berkas Digital Lebih Rapi',        desc: 'Semua berkas tersimpan digital dan dapat diakses kapan saja tanpa risiko hilang.',                 duration: '1:20', videoUrl: 'https://youtu.be/fFs9Hc7ttQg' },
  { title: 'Verifikasi Dokumen Jadi Lebih Mudah',          desc: 'Setiap dokumen tersimpan dalam sistem yang aman dan mudah diverifikasi.',                          duration: '1:20', videoUrl: 'https://youtu.be/VCV6DLLUvtM' },
  { title: 'Monitoring Pendaftaran dari Mana Saja',        desc: 'Panitia bisa memantau kondisi pendaftaran kapan saja lewat dashboard.',                            duration: '1:20', videoUrl: 'https://youtu.be/jwZSBUKVPaQ' },
]

const featured = TESTIMONIALS[0]

/* ── Play button ── */
function PlayBtn({ size = 60 }: { size?: number }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
      <div style={{
        width: size, height: size, borderRadius: '50%',
        background: 'rgba(255,255,255,.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,.25)',
      }}>
        <svg viewBox="0 0 24 24" fill="#1DB88E" width={size * 0.43} height={size * 0.43} style={{ marginLeft: 3 }}>
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>
    </div>
  )
}

/* ── Thumbnail card wrapper ── */
function ThumbCard({
  item, onClick, height = 'auto', showHoverPlay = false,
}: {
  item: typeof TESTIMONIALS[0]
  onClick: () => void
  height?: number | string
  showHoverPlay?: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', borderRadius: 16, overflow: 'hidden',
        cursor: 'pointer', aspectRatio: '16/9',
        height: height !== 'auto' ? height : undefined,
        boxShadow: hovered ? '0 20px 48px rgba(0,0,0,.18)' : '0 8px 24px rgba(0,0,0,.1)',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'transform .25s ease, box-shadow .25s ease',
      }}
    >
      <YtThumb url={item.videoUrl} alt={item.title} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,.55) 0%, transparent 55%)' }} />
      {showHoverPlay
        ? <div style={{ opacity: hovered ? 1 : 0, transition: 'opacity .2s', position: 'absolute', inset: 0 }}><PlayBtn size={44} /></div>
        : <PlayBtn size={60} />
      }
      <span style={{
        position: 'absolute', bottom: 10, right: 10,
        background: 'rgba(0,0,0,.72)', color: '#fff',
        fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 999,
      }}>{item.duration}</span>
    </div>
  )
}

export default function Testimoni() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [slide, setSlide]             = useState(0)
  const [cols, setCols]               = useState(3)

  useEffect(() => {
    const upd = () => setCols(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)
    upd()
    window.addEventListener('resize', upd)
    return () => window.removeEventListener('resize', upd)
  }, [])

  const rest     = TESTIMONIALS.slice(1)
  const maxSlide = Math.max(0, rest.length - cols)

  return (
    <>
      <section id="testimoni" style={{ padding: '96px 0', background: '#F7FAFA', position: 'relative', overflow: 'hidden' }}>

        {/* Blobs */}
        <div className="blob-deco a-blob"    style={{ width: 400, height: 400, top: -100,  right: -100, background: 'rgba(29,184,142,.07)' }} />
        <div className="blob-deco a-blob d3" style={{ width: 320, height: 320, bottom: -80, left: -80,  background: 'rgba(29,184,142,.06)' }} />

        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>

          {/* Header */}
          <FadeUp style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="badge">Testimoni</span>
            <h2 className="sec-title">Apa Kata Mereka?</h2>
            <p className="sec-sub">Dipercaya berbagai sekolah &amp; yayasan di seluruh Indonesia.</p>
          </FadeUp>

          {/* Featured */}
          <FadeUp delay={100} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', marginBottom: 52 }}
            className="testi-featured">

            <ThumbCard item={featured} onClick={() => setActiveVideo(featured.videoUrl)} />

            <div>
              <span className="badge">Video Unggulan</span>
              <h3 style={{ fontSize: 'clamp(20px,3vw,26px)', fontWeight: 800, color: '#0D1B2A', lineHeight: 1.3, margin: '0 0 14px' }}>
                {featured.title}
              </h3>
              <p style={{ color: '#4A5568', fontSize: 15, lineHeight: 1.75, marginBottom: 24 }}>
                Dengan SPMB Online, sistem pendaftaran kini beralih ke format digital yang lebih praktis,
                transparan, dan mudah dipertanggungjawabkan kepada seluruh pemangku kepentingan.
              </p>
              <button onClick={() => setActiveVideo(featured.videoUrl)} className="btn btn-primary" style={{ fontSize: 14, padding: '12px 24px' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M8 5v14l11-7z"/></svg>
                Tonton Sekarang
              </button>
            </div>
          </FadeUp>

          {/* Carousel */}
          <div style={{ position: 'relative' }}>
            <div style={{ overflow: 'hidden' }}>
              <div style={{
                display: 'flex', gap: 18,
                transform: `translateX(calc(-${slide * (100 / cols)}% - ${slide * 18 / cols}px))`,
                transition: 'transform .4s cubic-bezier(.22,1,.36,1)',
              }}>
                {rest.map((item, i) => (
                  <div key={i} style={{
                    flexShrink: 0,
                    width: `calc(${100 / cols}% - ${18 * (cols - 1) / cols}px)`,
                  }}>
                    <ThumbCard item={item} onClick={() => setActiveVideo(item.videoUrl)} showHoverPlay />
                    <h4 style={{ fontWeight: 700, color: '#0D1B2A', fontSize: 14, margin: '12px 0 6px', lineHeight: 1.4 }}>{item.title}</h4>
                    <p style={{ color: '#64748B', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next */}
            {([{ dir: -1, disabled: slide === 0 }, { dir: 1, disabled: slide === maxSlide }] as const).map(({ dir, disabled }) => (
              <button key={dir}
                onClick={() => setSlide(s => Math.max(0, Math.min(maxSlide, s + dir)))}
                disabled={disabled}
                className="hide-sm"
                style={{
                  position: 'absolute', top: '35%', transform: 'translateY(-50%)',
                  ...(dir === -1 ? { left: -20 } : { right: -20 }),
                  width: 36, height: 36, borderRadius: '50%',
                  background: '#fff', border: '1px solid #E2E8F0',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: disabled ? 'not-allowed' : 'pointer',
                  opacity: disabled ? .3 : 1,
                  boxShadow: '0 2px 8px rgba(0,0,0,.08)',
                  fontSize: 14, color: '#4A5568', transition: 'all .2s',
                }}>
                {dir === -1 ? '←' : '→'}
              </button>
            ))}
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 20 }}>
            {Array.from({ length: maxSlide + 1 }).map((_, i) => (
              <button key={i} onClick={() => setSlide(i)} style={{
                width: i === slide ? 24 : 8, height: 8, borderRadius: 999,
                background: i === slide ? '#1DB88E' : '#CBD5E1',
                border: 'none', cursor: 'pointer', transition: 'all .3s',
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* Video modal */}
      {activeVideo && (
        <div onClick={() => setActiveVideo(null)} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,.8)',
          backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', zIndex: 1000, padding: 16,
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: '#000', borderRadius: 20, overflow: 'hidden',
            maxWidth: 860, width: '100%', position: 'relative',
            boxShadow: '0 40px 100px rgba(0,0,0,.6)',
          }}>
            <button onClick={() => setActiveVideo(null)} style={{
              position: 'absolute', top: 12, right: 12, zIndex: 10,
              width: 32, height: 32, borderRadius: '50%',
              background: 'rgba(255,255,255,.15)', border: 'none',
              color: '#fff', cursor: 'pointer', fontSize: 16,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>✕</button>
            <div style={{ aspectRatio: '16/9', width: '100%' }}>
              <iframe
                width="100%" height="100%"
                src={getEmbed(activeVideo, true)}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: 'block', border: 'none', width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media(max-width:768px){ .testi-featured { grid-template-columns:1fr !important } }
      `}</style>
    </>
  )
}
