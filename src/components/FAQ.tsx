import { useState, useEffect, useRef } from 'react'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'

const FAQS = [
  { q: 'Apakah platform ini cocok untuk semua jenjang sekolah?',
    a: 'Ya, platform SPMB kami cocok untuk SD, SMP, SMA, dan SMK. Anda bisa menyesuaikan formulir, kriteria seleksi, dan alur pendaftaran sesuai kebutuhan masing-masing jenjang.' },
  { q: 'Berapa lama proses setup hingga siap digunakan?',
    a: 'Setup awal hanya membutuhkan waktu kurang dari 5 menit. Anda cukup membuat akun, mengisi data sekolah, mengatur kuota kelas, dan platform langsung siap digunakan.' },
  { q: 'Apakah orang tua perlu menginstal aplikasi?',
    a: 'Tidak perlu. Orang tua cukup mengakses link pendaftaran melalui browser di smartphone atau komputer. Tidak ada aplikasi yang perlu diunduh.' },
  { q: 'Bagaimana sistem seleksi bekerja?',
    a: 'Anda bisa mengatur kriteria seleksi seperti nilai rapor, usia, jarak domisili, atau tes tertulis. Sistem akan menghitung dan meranking calon siswa secara otomatis sesuai kriteria yang Anda tentukan.' },
  { q: 'Apakah data pendaftar aman?',
    a: 'Ya, semua data tersimpan dengan enkripsi SSL 256-bit di server yang aman. Hanya panitia SPMB yang berwenang yang dapat mengakses data pendaftar.' },
  { q: 'Bagaimana jika sekolah kami butuh fitur khusus?',
    a: 'Kami menyediakan layanan kustomisasi untuk kebutuhan khusus sekolah. Hubungi tim kami melalui WhatsApp dan kami akan membantu menyesuaikan platform sesuai kebutuhan Anda.' },
]

function FAQItem({ faq, visible }: { faq: typeof FAQS[0]; visible: boolean }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      border: `1px solid ${open ? '#1DB88E' : '#E2E8F0'}`,
      borderRadius: 12, background: '#fff', overflow: 'hidden',
      boxShadow: open ? '0 4px 20px rgba(29,184,142,.1)' : 'none',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity .45s ease, transform .45s ease, border-color .25s, box-shadow .25s',
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: 16,
        padding: '20px 24px', background: 'none', border: 'none',
        cursor: 'pointer', textAlign: 'left', fontFamily: 'Inter, sans-serif',
      }}>
        <span style={{ fontWeight: 600, fontSize: 15, color: open ? '#1DB88E' : '#0D1B2A', flex: 1, lineHeight: 1.5, transition: 'color .2s' }}>
          {faq.q}
        </span>
        <span style={{ width: 30, height: 30, borderRadius: '50%', flexShrink: 0, background: open ? '#1DB88E' : '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s' }}>
          {open ? <MinusOutlined style={{ fontSize: 11, color: '#fff' }} /> : <PlusOutlined style={{ fontSize: 11, color: '#64748B' }} />}
        </span>
      </button>
      <div style={{ maxHeight: open ? 300 : 0, overflow: 'hidden', transition: 'max-height .35s ease' }}>
        <p style={{ margin: 0, padding: '0 24px 22px', color: '#4A5568', fontSize: 14, lineHeight: 1.8 }}>{faq.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(FAQS.length).fill(false))

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          FAQS.forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems(prev => { const n = [...prev]; n[i] = true; return n })
            }, 100 + i * 80)
          })
          obs.disconnect()
        }
      })
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="faq" ref={ref} style={{ padding: '96px 0', background: '#F7FAFA', position: 'relative', overflow: 'hidden' }}>

      <div style={{ position: 'absolute', left: -60, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', opacity: .05 }}>
        <svg width="240" height="240" viewBox="0 0 240 240">
          <circle cx="120" cy="120" r="110" fill="none" stroke="#1DB88E" strokeWidth="20"/>
          <circle cx="120" cy="120" r="70"  fill="none" stroke="#1DB88E" strokeWidth="14"/>
          <circle cx="120" cy="120" r="30"  fill="#1DB88E"/>
        </svg>
      </div>
      <div style={{ position: 'absolute', top: 40, right: 40, pointerEvents: 'none', opacity: .06 }}>
        <svg width="140" height="100" viewBox="0 0 140 100">
          {Array.from({ length: 5 }).map((_, r) => Array.from({ length: 7 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="2" fill="#1DB88E" />
          )))}
        </svg>
      </div>

      <div className="wrap" style={{ maxWidth: 760 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', marginBottom: 44, gap: 24 }} className="faq-header-grid">
          <div>
            <span className="badge">FAQ</span>
            <h2 className="sec-title" style={{ margin: 0 }}>Pertanyaan yang Sering Ditanyakan</h2>
            <p className="sec-sub" style={{ margin: '12px 0 0', textAlign: 'left', maxWidth: 400 }}>
              Temukan jawaban atas pertanyaan umum seputar platform SPMB digital kami.
            </p>
          </div>
          <div className="hide-sm">
            <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
              <rect x="0" y="10" width="80" height="44" rx="10" fill="#E8F8F3"/>
              <path d="M10 54 L20 66 L30 54" fill="#E8F8F3"/>
              <rect x="4" y="22" width="40" height="6" rx="3" fill="#1DB88E" opacity=".5"/>
              <rect x="4" y="34" width="60" height="6" rx="3" fill="#1DB88E" opacity=".3"/>
              <rect x="30" y="46" width="80" height="40" rx="10" fill="#1DB88E" opacity=".12"/>
              <path d="M100 86 L90 98 L80 86" fill="#1DB88E" opacity=".12"/>
              <rect x="36" y="56" width="50" height="6" rx="3" fill="#1DB88E" opacity=".4"/>
              <rect x="36" y="68" width="36" height="6" rx="3" fill="#1DB88E" opacity=".25"/>
              <circle cx="100" cy="20" r="18" fill="#1DB88E"/>
              <text x="100" y="27" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="700" fontFamily="Inter,sans-serif">?</text>
            </svg>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {FAQS.map((f, i) => <FAQItem key={i} faq={f} visible={visibleItems[i]} />)}
        </div>

        <div style={{ marginTop: 36 }}>
          <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 14, padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: '#E8F8F3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB88E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, color: '#0D1B2A', fontSize: 14 }}>Masih ada pertanyaan lain?</div>
              <div style={{ color: '#94A3B8', fontSize: 13 }}>Tim kami siap membantu Anda 24/7</div>
            </div>
            <a href="https://wa.me/628216195202?text=(Qrion%20spmb)%20Saya%20mau%20konsultasi"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#1DB88E', fontWeight: 600, textDecoration: 'none', fontSize: 14, background: '#E8F8F3', padding: '8px 16px', borderRadius: 8 }}>
              Hubungi Kami →
            </a>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:640px){ .faq-header-grid { grid-template-columns:1fr !important } }`}</style>
    </section>
  )
}
