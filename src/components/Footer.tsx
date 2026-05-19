import logoImg from '../assets/qrion spmb 1.png'

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-emerald-50 text-gray-600">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-4">
              <img
                src={logoImg}
                alt="Qrion SPMB"
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-xs sm:max-w-[220px]">
              Platform SPMB terpadu yang mempermudah pendaftaran, verifikasi berkas, dan seluruh administrasi penerimaan mahasiswa baru.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Hubungi Kami */}
          <div>
            <h4 className="text-gray-900 font-semibold text-sm mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 mb-5">
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 text-emerald-500 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a href="mailto:office@qrion.id" className="text-gray-500 hover:text-emerald-600 text-sm transition-colors">
                  office@qrion.id
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 text-emerald-500 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </span>
                <a href="tel:+6282161952020" className="text-gray-500 hover:text-emerald-600 text-sm transition-colors">
                  +62 821-6195-202
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-5 h-5 text-emerald-500 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-gray-500 text-sm">Pekanbaru, Indonesia</span>
              </li>
            </ul>

            <a
              href="https://wa.me/628216195202?text=(Qrion%20spmb)%20Saya%20mau%20konsultasi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm py-2.5 px-4 rounded-lg transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Konsultasi Gratis
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-emerald-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-400 text-xs">© 2025 QRION. All rights reserved.</p>
          <p className="text-gray-400 text-xs">
            Powered by{' '}
            <span className="text-emerald-600 font-semibold">QRION</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
