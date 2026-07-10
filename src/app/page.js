import Link from 'next/link'
import Image from 'next/image'
import { Search, MapPin, ArrowRight, Shield, Award, Zap, Globe } from 'lucide-react'

/* ── Static data ──────────────────────────────────────── */
const stats = [
  { value: '+55',  label: 'Años de experiencia' },
  { value: '11',   label: 'Modelos disponibles' },
  { value: '2',    label: 'Líneas de producto' },
  { value: '100%', label: 'Origen japonés' },
]

const reasons = [
  {
    icon: Shield,
    title: 'Ingeniería japonesa',
    text:  'Más de 80 años de investigación y desarrollo en tecnología de neumáticos.',
  },
  {
    icon: Award,
    title: 'Distribuidor exclusivo',
    text:  'DEAR C.A. es el único distribuidor autorizado de Toyo Tires en Venezuela desde 1967.',
  },
  {
    icon: Zap,
    title: 'Rendimiento comprobado',
    text:  'Presencia en competiciones de alto nivel y uso cotidiano en los cinco continentes.',
  },
  {
    icon: Globe,
    title: 'Red nacional',
    text:  'Puntos de venta en todo el territorio venezolano para tu comodidad.',
  },
]

const productLines = [
  {
    name:        'Open Country',
    tagline:     'Domina cualquier terreno',
    description: 'Diseñada para camionetas y SUVs que no conocen límites. Desde carretera hasta los senderos más exigentes.',
    href:        '/productos?line=open-country',
    image:       '/images/productos/open-country-rt-trail/OPRT_Trail_35x12_50R17_Right.png',
    models:      ['A/T III', 'M/T', 'R/T', 'R/T Trail', 'H/T II'],
  },
  {
    name:        'Proxes',
    tagline:     'Rendimiento sin concesiones',
    description: 'Tecnología de alto rendimiento para autos y SUVs deportivos que exigen precisión, agarre y velocidad.',
    href:        '/productos?line=proxes',
    image:       '/images/productos/proxes-sport-2/20211128_PXSP2_migi.jpg',
    models:      ['Sport 2', 'R888R', 'Comfort', 'TM1', 'ST III', 'Vi-Mode II'],
  },
]

/* ── Component ────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative bg-toyo-blue overflow-hidden flex items-center" style={{ minHeight: '88vh' }}>

        {/* Background tire image (faint) */}
        <div className="absolute right-[-5%] top-0 bottom-0 w-[55%] pointer-events-none">
          <Image
            src="/images/productos/open-country-rt-trail/OPRT_Trail_35x12_50R17_Right.png"
            alt=""
            fill
            className="object-contain object-right opacity-10"
            priority
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(0,98,176,1) 30%, rgba(0,98,176,0.7) 70%, rgba(0,98,176,0.3) 100%)' }}
        />
        <div className="absolute inset-0 pointer-events-none bg-grid-pattern" />

        {/* Content */}
        <div className="relative container-custom pt-12 pb-24 z-10">
          <div className="max-w-2xl">

            <p className="inline-flex items-center gap-2 text-white/70 text-xs font-display font-bold tracking-superwide uppercase mb-6 animate-fade-in-up">
              <span className="block w-6 h-px bg-white/70" />
              Distribuidor Oficial · Venezuela
            </p>

            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white leading-none tracking-tight mb-6 animate-fade-in-up-d1">
              Llantas que<br />
              <span className="text-white/90">van más lejos.</span>
            </h1>

            <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg animate-fade-in-up-d2">
              Toyo Tires Venezuela — calidad japonesa de primer nivel, distribuida
              por DEAR&nbsp;C.A. desde 1967. Para tu camioneta, SUV o auto deportivo.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up-d3">
              <Link
                href="/productos"
                className="inline-flex items-center gap-2 bg-white text-toyo-blue px-7 py-3.5
                           font-display font-bold text-sm uppercase tracking-wide
                           transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5"
              >
                Ver Productos
                <ArrowRight size={16} />
              </Link>
              <Link href="/buscador" className="btn-outline-white">
                <Search size={16} />
                Buscar por Medida
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ── STATS STRIP ──────────────────────────────────── */}
      <section className="bg-white border-y border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {stats.map((s) => (
              <div key={s.label} className="py-8 px-6 text-center">
                <div className="font-display font-black text-4xl md:text-5xl mb-1 text-toyo-blue">
                  {s.value}
                </div>
                <div className="text-xs font-display font-semibold tracking-wide uppercase text-gray-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK FINDER ─────────────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-sm p-10">
            <p className="label-tag">Encuentra tu llanta</p>
            <h2 className="section-heading mb-8">
              ¿Cómo quieres buscar?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Search,
                  title: 'Por Medida',
                  desc:  'Ingresa el tamaño exacto de tu llanta (ej. 265/70R17)',
                  href:  '/buscador?type=size',
                },
                {
                  icon: Award,
                  title: 'Por Rin',
                  desc:  'Selecciona el diámetro de tu rin para ver opciones compatibles',
                  href:  '/buscador?type=rim',
                },
                {
                  icon: MapPin,
                  title: 'Tiendas',
                  desc:  'Encuentra el punto de venta Toyo más cercano a ti',
                  href:  '/distribuidores',
                },
              ].map(({ icon: Icon, title, desc, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex flex-col gap-3 p-6 border border-gray-200
                             hover:border-toyo-blue hover:shadow-md
                             transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="p-3 bg-blue-50 w-fit group-hover:bg-toyo-blue transition-colors duration-300">
                    <Icon size={22} className="text-toyo-blue group-hover:text-white transition-colors duration-300" />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-base text-gray-900 group-hover:text-toyo-blue transition">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">{desc}</p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-toyo-blue opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all mt-auto"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT LINES ────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="label-tag justify-center">Nuestras líneas</p>
            <h2 className="section-heading">
              Dos líneas. Un solo estándar.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {productLines.map((line) => (
              <div
                key={line.name}
                className="group bg-white border border-gray-200 hover:border-toyo-blue hover:shadow-lg
                           transition-all duration-300 overflow-hidden"
              >
                {/* Blue top accent */}
                <div className="h-1 bg-toyo-blue" />

                {/* Tire image */}
                <div className="relative h-64 bg-gray-50 flex items-center justify-center overflow-hidden border-b border-gray-100">
                  <Image
                    src={line.image}
                    alt={line.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-xs font-display font-bold tracking-superwide uppercase text-toyo-blue mb-2">
                    {line.tagline}
                  </p>
                  <h3 className="font-display font-black text-3xl text-gray-900 mb-3">
                    {line.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    {line.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {line.models.map((m) => (
                      <span key={m} className="text-xs px-2.5 py-1 border border-gray-200 text-gray-500 font-display bg-gray-50">
                        {m}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={line.href}
                    className="inline-flex items-center gap-2 text-sm font-display font-bold text-toyo-blue
                               border-b border-toyo-blue/30 pb-0.5
                               hover:border-toyo-blue transition-colors"
                  >
                    Explorar {line.name}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TOYO ─────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left text */}
            <div>
              <p className="label-tag">Por qué elegirnos</p>
              <h2 className="section-heading mb-6">
                Toyo Tires.<br />La diferencia es real.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
                Con más de ocho décadas de innovación japonesa, Toyo Tires combina
                rendimiento, durabilidad y seguridad en cada neumático. En Venezuela,
                DEAR C.A. respalda cada producto con servicio de primer nivel.
              </p>
              <Link href="/nosotros" className="btn-outline-blue">
                Conoce nuestra historia
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="p-6 bg-white border border-gray-200 hover:border-toyo-blue
                             hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-2.5 bg-blue-50 w-fit mb-4 group-hover:bg-toyo-blue transition-colors duration-300">
                    <Icon size={20} className="text-toyo-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AMBASSADORS TEASER ───────────────────────────── */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
            <div>
              <p className="label-tag">Comunidad</p>
              <h2 className="section-heading">
                Embajadores de Marca
              </h2>
            </div>
            <Link
              href="/embajadores"
              className="inline-flex items-center gap-2 text-sm font-display font-bold text-toyo-blue
                         hover:text-toyo-blue-mid transition-colors flex-shrink-0"
            >
              Ver todos
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { handle: 'ecolandingvzla',  name: 'Ecolanding Venezuela', desc: 'Aventura todoterreno' },
              { handle: 'viajero4wd',       name: 'Viajero 4WD',          desc: 'Expediciones off-road' },
              { handle: 'discoverland4wd',  name: 'Discoverland 4WD',     desc: 'Descubriendo Venezuela' },
            ].map(({ handle, name, desc }) => (
              <a
                key={handle}
                href={`https://instagram.com/${handle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 p-6 border border-gray-200
                           hover:border-toyo-blue bg-white hover:shadow-md
                           transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100
                               flex items-center justify-center
                               group-hover:bg-toyo-blue transition-colors duration-300">
                  <span className="text-toyo-blue group-hover:text-white font-bold text-lg transition-colors duration-300">@</span>
                </div>
                <div>
                  <div className="font-display font-bold text-gray-900 text-sm">{name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">@{handle}</div>
                  <div className="text-xs text-gray-500 mt-2">{desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="relative bg-toyo-blue py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 80% 50%, white 0%, transparent 60%)',
          }}
        />
        <div className="container-custom text-center relative z-10">
          <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-4 tracking-tight">
            Encuentra tu distribuidor
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Toda Venezuela tiene acceso a las mejores llantas del mercado.
            Localiza el punto de venta más cercano a ti.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/distribuidores"
              className="inline-flex items-center gap-2 bg-white text-toyo-blue px-7 py-3.5
                         font-display font-bold text-sm uppercase tracking-wide
                         transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5"
            >
              <MapPin size={16} />
              Ver Tiendas
            </Link>
            <Link href="/contacto" className="btn-outline-white">
              Contáctanos
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
