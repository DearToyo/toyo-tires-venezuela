import Link from 'next/link'
import Image from 'next/image'
import { Search, MapPin, ArrowRight, Shield, Award, Zap, Globe } from 'lucide-react'
import HeroVideo from '@/components/HeroVideo'

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
    bgColor:     'from-stone-900 via-stone-800 to-stone-900',
    accent:      'text-amber-400',
    models:      ['A/T III', 'M/T', 'R/T', 'R/T Trail', 'H/T II'],
  },
  {
    name:        'Proxes',
    tagline:     'Rendimiento sin concesiones',
    description: 'Tecnología de alto rendimiento para autos y SUVs deportivos que exigen precisión, agarre y velocidad.',
    href:        '/productos?line=proxes',
    image:       '/images/productos/proxes-sport-2/20211128_PXSP2_migi.jpg',
    bgColor:     'from-slate-900 via-toyo-blue/20 to-slate-900',
    accent:      'text-toyo-blue-lt',
    models:      ['Sport 2', 'R888R', 'Comfort', 'TM1', 'ST III', 'Vi-Mode II'],
  },
]

/* ── Component ────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-toyo-black overflow-hidden flex items-center">

        {/* Background video — 4:00 to 6:24 clip */}
        <HeroVideo />

        {/* Dark overlays for text readability */}
        <div className="absolute inset-0 bg-toyo-black/40 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.2) 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 40%)',
          }}
        />

        {/* Blue accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-toyo-blue pointer-events-none" />

        {/* Content */}
        <div className="relative container-custom pt-32 pb-24 z-10">
          <div className="max-w-2xl">

            <p className="label-tag animate-fade-in-up text-toyo-blue">
              Distribuidor Oficial · Venezuela
            </p>

            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white leading-none tracking-tight mb-6 animate-fade-in-up-d1">
              Llantas que<br />
              <span className="text-gradient-blue">van más lejos.</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-lg animate-fade-in-up-d2">
              Toyo Tires Venezuela — calidad japonesa de primer nivel, distribuida
              por DEAR&nbsp;C.A. desde 1967. Para tu camioneta, SUV o auto deportivo.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up-d3">
              <Link href="/productos" className="btn-primary">
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

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-toyo-black to-transparent pointer-events-none" />
      </section>

      {/* ── STATS STRIP ──────────────────────────────────── */}
      <section className="bg-toyo-blue">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {stats.map((s) => (
              <div key={s.label} className="py-8 px-6 text-center text-white">
                <div className="font-display font-black text-4xl md:text-5xl mb-1">
                  {s.value}
                </div>
                <div className="text-xs font-display font-semibold tracking-wide uppercase opacity-80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK FINDER ─────────────────────────────────── */}
      <section className="bg-toyo-lightgray py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white shadow-card p-10">
            <p className="label-tag">Encuentra tu llanta</p>
            <h2 className="section-heading text-toyo-black mb-8">
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
                             hover:border-toyo-blue hover:bg-blue-50/40
                             transition-all duration-300"
                >
                  <span className="p-3 bg-toyo-blue/10 w-fit">
                    <Icon size={22} className="text-toyo-blue" />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-base text-toyo-black group-hover:text-toyo-blue transition">
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
      <section className="bg-toyo-black py-24">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="label-tag justify-center">Nuestras líneas</p>
            <h2 className="section-heading text-white">
              Dos líneas. Un solo estándar.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {productLines.map((line) => (
              <div
                key={line.name}
                className={`relative overflow-hidden bg-gradient-to-br ${line.bgColor} group min-h-[480px] flex flex-col justify-end`}
              >
                {/* Tire image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700">
                    <Image
                      src={line.image}
                      alt={line.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain object-center"
                    />
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative p-8 z-10">
                  <p className={`text-xs font-display font-bold tracking-superwide uppercase ${line.accent} mb-2`}>
                    {line.tagline}
                  </p>
                  <h3 className="font-display font-black text-4xl text-white mb-3">
                    {line.name}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-5 max-w-sm">
                    {line.description}
                  </p>

                  {/* Models */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {line.models.map((m) => (
                      <span
                        key={m}
                        className="text-xs px-2.5 py-1 border border-white/20 text-gray-300 font-display"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={line.href}
                    className="inline-flex items-center gap-2 text-sm font-display font-bold text-white
                               border-b border-white/40 pb-0.5
                               hover:border-toyo-blue hover:text-toyo-blue-lt transition-colors"
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
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left text */}
            <div>
              <p className="label-tag">Por qué elegirnos</p>
              <h2 className="section-heading text-toyo-black mb-6">
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
                  className="p-6 border border-gray-100 hover:border-toyo-blue/40
                             hover:shadow-card transition-all duration-300 group"
                >
                  <div className="p-2.5 bg-toyo-blue/10 w-fit mb-4 group-hover:bg-toyo-blue transition-colors">
                    <Icon size={20} className="text-toyo-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-toyo-black mb-2">
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
      <section className="bg-toyo-dark py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
            <div>
              <p className="label-tag">Comunidad</p>
              <h2 className="section-heading text-white">
                Embajadores de Marca
              </h2>
            </div>
            <Link
              href="/embajadores"
              className="inline-flex items-center gap-2 text-sm font-display font-bold text-toyo-blue
                         hover:text-toyo-blue-lt transition-colors flex-shrink-0"
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
                className="group flex flex-col gap-4 p-6 border border-toyo-border
                           hover:border-toyo-blue bg-toyo-surface
                           transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-toyo-blue/15 border border-toyo-blue/30
                               flex items-center justify-center
                               group-hover:bg-toyo-blue transition-colors">
                  <span className="text-toyo-blue group-hover:text-white font-bold text-lg transition-colors">@</span>
                </div>
                <div>
                  <div className="font-display font-bold text-white text-sm">{name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">@{handle}</div>
                  <div className="text-xs text-gray-400 mt-2">{desc}</div>
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
            <Link href="/distribuidores" className="btn-outline-white">
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
