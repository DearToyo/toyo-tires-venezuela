import Link from 'next/link'
import Image from 'next/image'
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
  { label: 'Distribuidores',       href: '/distribuidores' },
  { label: 'Embajadores',          href: '/embajadores' },
  { label: 'Nosotros',             href: '/nosotros' },
  { label: 'Contacto',             href: '/contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-toyo-black text-white">

      {/* Main footer body */}
      <div className="border-t border-toyo-border">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand column */}
            <div className="lg:col-span-1">
              <Image
                src="/images/logo_toyo.png"
                alt="Toyo Tires"
                width={130}
                height={52}
                className="h-11 w-auto object-contain brightness-0 invert mb-6"
              />
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Neumáticos de ingeniería japonesa, distribuidos con orgullo en Venezuela desde 1967.
              </p>
              <div className="mb-6">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                  Distribuidor oficial
                </p>
                <Image
                  src="/images/logo_dear.png"
                  alt="DEAR C.A."
                  width={90}
                  height={36}
                  className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition"
                />
              </div>
              <a
                href="https://instagram.com/toyotiresvzla"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition group"
              >
                <span className="p-2 border border-toyo-border group-hover:border-toyo-blue rounded-full transition">
                  <Instagram size={16} />
                </span>
                @toyotiresvzla
              </a>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-xs font-display font-bold tracking-superwide uppercase text-gray-500 mb-5">
                Productos
              </h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition flex items-center gap-1.5 group"
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
              <h4 className="text-xs font-display font-bold tracking-superwide uppercase text-gray-500 mb-5">
                Navegación
              </h4>
              <ul className="space-y-3">
                {siteLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition flex items-center gap-1.5 group"
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
              <h4 className="text-xs font-display font-bold tracking-superwide uppercase text-gray-500 mb-5">
                Contacto
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:02127513466"
                    className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition group"
                  >
                    <Phone size={16} className="mt-0.5 flex-shrink-0 text-toyo-blue" />
                    <span>0212-751 3466</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@dear.com.ve"
                    className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition"
                  >
                    <Mail size={16} className="mt-0.5 flex-shrink-0 text-toyo-blue" />
                    <span>info@dear.com.ve</span>
                  </a>
                </li>
                <li>
                  <span className="flex items-start gap-3 text-sm text-gray-400">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0 text-toyo-blue" />
                    <span>Caracas, Venezuela</span>
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                <Link href="/contacto" className="btn-outline-blue text-xs !px-5 !py-2.5">
                  Contáctanos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-toyo-border">
        <div className="container-custom py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} DEAR C.A. — Distribuidor Oficial Toyo Tires Venezuela.
          </p>
          <p className="text-gray-700">
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
