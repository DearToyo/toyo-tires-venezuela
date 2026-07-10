import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowLeft, ChevronRight } from 'lucide-react'
import { tireDatabase, slugToEntry } from '@/data/tires'
import { tireDetails } from '@/data/tireDetails'
import SizesAccordion from '@/components/SizesAccordion'

function groupSizesByRim(sizes) {
  const groups = {}
  for (const size of sizes) {
    const m = size.match(/\bR(\d{2})\b/)
    if (!m) continue
    const rim = parseInt(m[1])
    if (!groups[rim]) groups[rim] = []
    const rimStr = 'R' + rim
    const idx = size.indexOf(rimStr)
    const medida = size.substring(0, idx + rimStr.length).trim()
    const carga  = size.substring(idx + rimStr.length).trim()
    groups[rim].push({ medida, carga })
  }
  return Object.entries(groups)
    .sort(([a], [b]) => parseInt(a) - parseInt(b))
    .map(([rim, items]) => ({ rim: parseInt(rim), items }))
}

export function generateStaticParams() {
  return Object.keys(slugToEntry).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const entry = slugToEntry[params.slug]
  if (!entry) return {}
  const tire = tireDatabase[entry.line]?.[entry.key]
  return {
    title: `${tire?.name ?? 'Llanta'} | Toyo Tires Venezuela`,
    description: tire?.description,
  }
}

export default function TireProductPage({ params }) {
  const { slug } = params
  const entry = slugToEntry[slug]
  if (!entry) notFound()

  const tire    = tireDatabase[entry.line]?.[entry.key]
  const details = tireDetails[slug]
  if (!tire || !details) notFound()

  const rimGroups = groupSizesByRim(tire.sizes)

  return (
    <div className="min-h-screen">

      {/* ── HEADER ────────────────────────────────────── */}
      <section className="bg-toyo-blue py-12">
        <div className="container-custom">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-xs font-display mb-8">
            <Link href="/productos" className="hover:text-white transition flex items-center gap-1">
              <ArrowLeft size={11} />
              Productos
            </Link>
            <span>/</span>
            <span className="text-white/70">{tire.line}</span>
            <span>/</span>
            <span className="text-white">{tire.name.replace(tire.line + ' ', '')}</span>
          </nav>

          <p className="text-white/60 text-xs font-display font-bold tracking-superwide uppercase mb-2">
            {tire.line}
          </p>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white leading-none tracking-tight">
            {tire.name.replace(tire.line + ' ', '')}
          </h1>
          <p className="text-white/70 mt-3 text-sm max-w-lg leading-relaxed">
            {details.heroTagline}
          </p>
        </div>
      </section>

      {/* ── PRODUCT OVERVIEW ──────────────────────────── */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Tire image */}
            <div className="relative aspect-square max-w-md mx-auto w-full bg-gray-50 flex items-center justify-center">
              {tire.image ? (
                <Image
                  src={tire.image}
                  alt={tire.name}
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-contain p-10 mix-blend-multiply"
                  priority
                />
              ) : (
                <span className="text-6xl font-display font-black text-gray-200">TOYO</span>
              )}
            </div>

            {/* Info */}
            <div>
              <p className="text-xs font-display font-bold tracking-superwide uppercase text-toyo-blue mb-2">
                {tire.line}
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 leading-none mb-2">
                {tire.name.replace(tire.line + ' ', '')}
              </h2>
              <p className="text-xs font-display font-bold tracking-superwide uppercase text-gray-400 mb-8">
                {details.subtitle}
              </p>

              <div className="space-y-3 mb-8">
                {details.longDescription.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed text-sm">
                    {para}
                  </p>
                ))}
              </div>

              {/* Vehicle labels */}
              <div className="flex flex-wrap gap-2 mb-8">
                {details.vehicleLabels.map((label) => (
                  <span
                    key={label}
                    className="px-3 py-1.5 bg-blue-50 border border-blue-100 text-toyo-blue
                               text-xs font-display font-bold uppercase tracking-wide"
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link href="/distribuidores" className="btn-primary">
                  <MapPin size={15} />
                  Encontrar Distribuidor
                </Link>
                <a href="#medidas" className="btn-outline-blue">
                  Ver Medidas
                  <ChevronRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE RATINGS ───────────────────────── */}
      <section className="bg-gray-50 py-16 border-b border-gray-100">
        <div className="container-custom">
          <p className="label-tag mb-2">Desempeño</p>
          <h2 className="section-heading mb-12">Calificaciones de Desempeño</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 max-w-4xl">
            {details.performanceRatings.map((rating) => (
              <div key={rating.label}>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-sm text-gray-700 font-display font-semibold">
                    {rating.label}
                  </span>
                  <span className="text-base font-display font-black text-toyo-blue ml-4 flex-shrink-0">
                    {rating.value.toFixed(1)}
                  </span>
                </div>
                <div className="h-2.5 bg-gray-200 overflow-hidden">
                  <div
                    className="h-full bg-toyo-blue transition-all"
                    style={{ width: `${(rating.value / 5) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between mt-1.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      className={`text-xs font-bold ${n <= Math.round(rating.value) ? 'text-toyo-blue' : 'text-gray-300'}`}
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES & BENEFITS ───────────────────────── */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="container-custom">
          <p className="label-tag mb-2">Tecnología</p>
          <h2 className="section-heading mb-12">Características y Beneficios</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Feature groups */}
            <div className="space-y-8">
              {details.featuresDetailed.map((group, i) => (
                <div key={i} className="border-l-2 border-toyo-blue pl-5">
                  <h3 className="font-display font-bold text-gray-900 text-base mb-3">
                    {group.title}
                  </h3>
                  <ul className="space-y-2">
                    {group.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                        <ChevronRight size={13} className="text-toyo-blue flex-shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Tire image */}
            <div className="relative aspect-square max-w-sm mx-auto w-full bg-gray-50 lg:sticky lg:top-28">
              {tire.image && (
                <Image
                  src={tire.image}
                  alt={tire.name}
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-contain p-10 mix-blend-multiply"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── SIZES TABLE ───────────────────────────────── */}
      <section id="medidas" className="bg-gray-50 py-16">
        <div className="container-custom">
          <p className="label-tag mb-2">Disponibilidad</p>
          <h2 className="section-heading mb-3">Tamaños y Especificaciones</h2>
          <p className="text-sm text-gray-500 mb-10">
            {tire.sizes.length > 0
              ? `${tire.sizes.length} medidas disponibles en ${rimGroups.length} tamaño${rimGroups.length === 1 ? '' : 's'} de rin.`
              : 'Consulta disponibilidad de medidas con tu distribuidor.'}
          </p>

          {rimGroups.length > 0 ? (
            <SizesAccordion rimGroups={rimGroups} totalSizes={tire.sizes.length} />
          ) : (
            <div className="bg-white border border-gray-200 p-12 text-center">
              <p className="text-gray-400 text-sm font-display mb-6">
                Próximamente — consulta con tu distribuidor Toyo más cercano.
              </p>
              <Link href="/distribuidores" className="btn-primary inline-flex">
                <MapPin size={15} />
                Ver Distribuidores
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── FOOTER CTA ────────────────────────────────── */}
      <section className="bg-toyo-blue py-16">
        <div className="container-custom text-center">
          <h2 className="font-display font-black text-3xl text-white mb-3">
            ¿Listo para equiparte?
          </h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Encuentra el distribuidor Toyo Tires más cercano y adquiere tu {tire.name}.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/distribuidores"
              className="inline-flex items-center gap-2 bg-white text-toyo-blue px-7 py-3.5
                         font-display font-bold text-sm uppercase tracking-wide
                         hover:bg-gray-100 transition"
            >
              <MapPin size={15} />
              Encontrar Distribuidor
            </Link>
            <Link href="/productos" className="btn-outline-white">
              <ArrowLeft size={15} />
              Ver todos los modelos
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
