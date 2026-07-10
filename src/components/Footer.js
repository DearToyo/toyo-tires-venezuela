import Link from 'next/link'
import { Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const productLinks = [
  { label: 'Open Country A/T III', href: '/productos' },
  { label: 'Open Country M/T',     href: '/productos' },
  { label: 'Open Country R/T',     href: '/productos' },
  { label: 'Proxes Sport 2',       href: '/productos' },
  { label: 'Proxes Comfort',       href: '/productos' },
  { label: 'Proxes R888R',         href: '/productos' },
]

const siteLinks = [
  { label: 'Buscador de Llantas',  href: '/buscador' },
  { label: 'Tiendas',              href: '/distribuidores' },
  { label: 'Embajadores',          href: '/embajadores' },
  { label: 'Nosotros',             href: '/nosotros' },
  { label: 'Contacto',             href: '/contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-toyo-blue text-white">

      {/* Main footer body */}
      <div className="border-t border-white/20">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand column */}
            <div className="lg:col-span-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo_toyo_clean.png"
                alt="Toyo Tires"
                className="h-10 w-auto mb-6"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <p className="text-sm text-white/75 leading-relaxed mb-6">
                Neumáticos de ingeniería japonesa, distribuidos con orgullo en Venezuela desde 1967.
              </p>
              <div className="mb-6">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-3">
                  Distribuidor oficial
                </p>
                <div className="inline-block bg-white/15 px-3 py-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/logo_dear.png"
                    alt="DEAR C.A."
                    className="h-7 w-auto opacity-80 hover:opacity-100 transition-opacity"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
              </div>
              <a
                href="https://instagram.com/toyotiresvzla"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-white transition group"
              >
                <span className="p-2 border border-white/30 group-hover:border-white rounded-full transition">
                  <Instagram size={16} />
                </span>
                @toyotiresvzla
              </a>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-xs font-display font-bold tracking-superwide uppercase text-white/50 mb-5">
                Productos
              </h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 hover:text-white transition flex items-center gap-1.5 group"
                    >
                      <ArrowRight
                        size={12}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Site */}
            <div>
              <h4 className="text-xs font-display font-bold tracking-superwide uppercase text-white/50 mb-5">
                Navegación
              </h4>
              <ul className="space-y-3">
                {siteLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 hover:text-white transition flex items-center gap-1.5 group"
                    >
                      <ArrowRight
                        size={12}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-display font-bold tracking-superwide uppercase text-white/50 mb-5">
                Contacto
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:02127513466"
                    className="flex items-start gap-3 text-sm text-white/75 hover:text-white transition"
                  >
                    <Phone size={16} className="mt-0.5 flex-shrink-0 text-white" />
                    <span>0212-751 3466</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@dear.com.ve"
                    className="flex items-start gap-3 text-sm text-white/75 hover:text-white transition"
                  >
                    <Mail size={16} className="mt-0.5 flex-shrink-0 text-white" />
                    <span>info@dear.com.ve</span>
                  </a>
                </li>
                <li>
                  <span className="flex items-start gap-3 text-sm text-white/75">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0 text-white" />
                    <span>Caracas, Venezuela</span>
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                <Link href="/contacto" className="btn-outline-white text-xs !px-5 !py-2.5">
                  Contáctanos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20">
        <div className="container-custom py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} DEAR C.A. — Distribuidor Oficial Toyo Tires Venezuela.
          </p>
          <p>
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
