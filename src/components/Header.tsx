import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { brand } from '../config/brand'

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#reservar', label: 'Reservar' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-neon/20 bg-dark/95 shadow-lg shadow-neon/5 backdrop-blur-md'
          : 'bg-dark/50 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-3" aria-label={`${brand.name} — Inicio`}>
          <img
            src={brand.logo}
            alt={`Logo ${brand.name} — ${brand.tagline}`}
            className="h-12 w-12 rounded-full object-cover neon-border"
            width={48}
            height={48}
          />
          <div className="hidden sm:block">
            <span className="font-script text-xl text-neon neon-glow">{brand.name}</span>
            <p className="text-[10px] font-semibold tracking-[0.3em] text-white/70 uppercase">
              {brand.tagline}
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/75 transition-colors hover:text-neon"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservar"
            className="btn-primary px-5 py-2.5 text-xs"
          >
            Reservar turno
          </a>
        </nav>

        <button
          type="button"
          className="text-white xl:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-neon/20 bg-dark px-6 py-4 xl:hidden"
          aria-label="Menú mobile"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservar"
              className="btn-primary text-center"
              onClick={() => setMenuOpen(false)}
            >
              Reservar turno
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
