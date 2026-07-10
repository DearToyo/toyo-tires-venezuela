'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, MapPin } from 'lucide-react'

const navLinks = [
  { href: '/',            label: 'Inicio' },
  { href: '/productos',   label: 'Productos' },
  { href: '/embajadores', label: 'Embajadores' },
  { href: '/nosotros',    label: 'Nosotros' },
  { href: '/contacto',    label: 'Contacto' },
]

export default function Navigation() {
  const [isOpen,   setIsOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [pathname])

  const isHome = pathname === '/'

  const navBg = (!isHome || scrolled)
    ? 'bg-toyo-black shadow-lg'
    : 'bg-transparent'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>

        {/* Top utility bar */}
        {(!isHome || scrolled) && (
          <div className="hidden lg:block bg-toyo-blue text-white text-xs">
            <div className="container-custom flex justify-between items-center h-8">
              <span className="tracking-wide opacity-90">
                Distribuidor Oficial Toyo Tires en Venezuela
              </span>
              <div className="flex items-center gap-6 opacity-90">
                <a href="tel:02127513466" className="hover:opacity-100 transition">0212-751 3466</a>
                <a href="mailto:info@dear.com.ve" className="hover:opacity-100 transition">info@dear.com.ve</a>
                <a href="https://instagram.com/toyotiresvzla" target="_blank" rel="noopener noreferrer"
                   className="hover:opacity-100 transition font-semibold">@toyotiresvzla</a>
              </div>
            </div>
          </div>
        )}

        {/* Main nav */}
        <div className="container-custom">
          <div className="flex justify-between items-center h-28">

            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo_toyo_clean.png"
                alt="Toyo Tires"
                className="h-14 w-auto object-contain transition-all duration-500"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 text-base font-display font-bold tracking-wide
                               text-white transition-colors duration-200 group"
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-white
                      transition-transform duration-300 origin-left
                      ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                    />
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/buscador"
                className="flex items-center gap-2 px-5 py-2.5 border border-white/60 text-white
                           text-sm font-display font-bold tracking-wide uppercase
                           transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                <Search size={14} />
                Buscar Llanta
              </Link>
              <Link
                href="/distribuidores"
                className="flex items-center gap-2 px-5 py-2.5 bg-toyo-blue text-white
                           text-sm font-display font-bold tracking-wide uppercase
                           transition-all duration-300 hover:bg-toyo-blue-mid hover:shadow-blue-glow"
              >
                <MapPin size={14} />
                Encontrar Tienda
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-400
          ${isOpen ? 'max-h-screen' : 'max-h-0'}
          bg-toyo-black border-t border-white/10`}
        >
          <div className="container-custom py-4 space-y-1">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 px-4 text-sm font-display font-bold tracking-wide
                    border-l-2 transition-all duration-200
                    ${active
                      ? 'border-white text-white bg-white/5'
                      : 'border-transparent text-gray-400 hover:border-white hover:text-white hover:bg-white/5'
                    }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-3 pb-1 flex flex-col gap-2">
              <Link href="/buscador" className="btn-outline-white text-center">
                <Search size={14} /> Buscar Llanta
              </Link>
              <Link href="/distribuidores" className="btn-primary text-center">
                <MapPin size={14} /> Encontrar Tienda
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for non-home pages */}
      {!isHome && <div className="h-28" />}
    </>
  )
}
