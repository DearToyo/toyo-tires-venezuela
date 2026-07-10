'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Search } from 'lucide-react'

const navLinks = [
  { href: '/',              label: 'Inicio' },
  { href: '/productos',     label: 'Productos' },
  { href: '/buscador',      label: 'Buscador' },
  { href: '/embajadores',   label: 'Embajadores' },
  { href: '/distribuidores',label: 'Tiendas' },
  { href: '/nosotros',      label: 'Nosotros' },
  { href: '/contacto',      label: 'Contacto' },
]

export default function Navigation() {
  const [isOpen,    setIsOpen]    = useState(false)
  const [scrolled,  setScrolled]  = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [pathname])

  const isHome = pathname === '/'

  const navBg = scrolled
    ? 'bg-white shadow-md'
    : isHome
    ? 'bg-transparent'
    : 'bg-white shadow-sm'

  const textColor = scrolled || !isHome ? 'text-gray-800' : 'text-white'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        {/* Top bar — only on non-home or scrolled */}
        {(!isHome || scrolled) && (
          <div className="hidden lg:block bg-toyo-black text-white text-xs">
            <div className="container-custom flex justify-between items-center h-8">
              <span className="text-toyo-gray-lt tracking-wide">
                Distribuidor Oficial Toyo Tires en Venezuela
              </span>
              <div className="flex items-center gap-6 text-toyo-gray-lt">
                <a href="tel:02127513466" className="hover:text-white transition">
                  0212-751 3466
                </a>
                <a href="mailto:info@dear.com.ve" className="hover:text-white transition">
                  info@dear.com.ve
                </a>
                <a
                  href="https://instagram.com/toyotiresvzla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-toyo-blue transition font-semibold"
                >
                  @toyotiresvzla
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Main nav */}
        <div className="container-custom">
          <div className="flex justify-between items-center h-28">

            {/* Logo — transparent SVG: white on dark hero, blue on white nav */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo_toyo_clean.png"
                alt="Toyo Tires"
                className="h-14 w-auto object-contain transition-all duration-500"
                style={{
                  filter: (scrolled || !isHome)
                    ? 'none'
                    : 'brightness(0) invert(1)',
                }}
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
                    className={`
                      relative px-4 py-2 text-base font-display font-bold tracking-wide
                      transition-colors duration-200
                      ${textColor}
                      group
                    `}
                  >
                    {link.label}
                    <span
                      className={`
                        absolute bottom-0 left-4 right-4 h-0.5 bg-toyo-blue
                        transition-transform duration-300 origin-left
                        ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                      `}
                    />
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/buscador"
                className="flex items-center gap-2 px-5 py-2 bg-toyo-blue text-white
                           text-sm font-display font-semibold tracking-wide uppercase
                           transition-all duration-300 hover:bg-toyo-blue-mid hover:shadow-blue-glow"
              >
                <Search size={15} />
                Buscar Llanta
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 ${textColor} transition-colors`}
              aria-label="Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-400
            ${isOpen ? 'max-h-screen' : 'max-h-0'}
            bg-toyo-dark border-t border-toyo-border
          `}
        >
          <div className="container-custom py-4 space-y-1">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    block py-3 px-4 text-sm font-display font-semibold tracking-wide
                    border-l-2 transition-all duration-200
                    ${active
                      ? 'border-toyo-blue text-white bg-white/5'
                      : 'border-transparent text-gray-400 hover:border-toyo-blue hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-3 pb-1">
              <Link href="/buscador" className="btn-primary w-full text-center">
                <Search size={15} />
                Buscar Llanta
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
