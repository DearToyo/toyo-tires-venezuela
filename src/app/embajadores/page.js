import { Instagram, ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const ambassadors = [
  {
    name:     'Ecolanding Venezuela',
    handle:   'ecolandingvzla',
    url:      'https://instagram.com/ecolandingvzla',
    tagline:  'Aventura & Naturaleza',
    bio:      'Exploradores del territorio venezolano. Cada expedición es una historia de perseverancia, naturaleza y llantas que no se rinden.',
    specialty:['Rutas 4x4', 'Fotografía de naturaleza', 'Expediciones extremas'],
    tires:    'Open Country A/T III',
  },
  {
    name:     'Viajero 4WD',
    handle:   'viajero4wd',
    url:      'https://instagram.com/viajero4wd',
    tagline:  'Off-Road & Expedición',
    bio:      'Recorriendo Venezuela de sur a norte sobre cuatro ruedas. La confianza en el equipo lo es todo cuando el camino se acaba.',
    specialty:['Off-road técnico', 'Camping extremo', 'Guías de ruta'],
    tires:    'Open Country M/T',
  },
  {
    name:     'Discoverland 4WD',
    handle:   'discoverland4wd',
    url:      'https://instagram.com/discoverland4wd',
    tagline:  'Descubriendo Venezuela',
    bio:      'Comunidad apasionada por descubrir los rincones más remotos de Venezuela. Porque hay caminos que solo se hacen con las llantas correctas.',
    specialty:['Rutas desconocidas', 'Comunidad 4x4', 'Contenido educativo'],
    tires:    'Open Country R/T Trail',
  },
]

function AmbassadorCard({ amb, index }) {
  const isEven = index % 2 === 0
  return (
    <div className={`
      group border border-toyo-border hover:border-toyo-blue
      bg-toyo-surface transition-all duration-400
      hover:-translate-y-1 hover:shadow-dark-card
    `}>
      {/* Top accent bar */}
      <div className="h-0.5 bg-gradient-to-r from-toyo-blue via-toyo-blue-lt to-transparent" />

      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            {/* Avatar placeholder */}
            <div className="w-14 h-14 rounded-full bg-toyo-blue/10 border border-toyo-blue/30
                            flex items-center justify-center flex-shrink-0
                            group-hover:bg-toyo-blue/20 transition-colors">
              <span className="text-toyo-blue font-black text-xl">@</span>
            </div>
            <div>
              <h3 className="font-display font-black text-white text-lg leading-tight">
                {amb.name}
              </h3>
              <p className="text-xs text-toyo-blue font-display font-semibold mt-0.5">
                {amb.tagline}
              </p>
            </div>
          </div>
          <a
            href={amb.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition
                       border border-toyo-border hover:border-toyo-blue px-3 py-1.5 flex-shrink-0"
          >
            <Instagram size={13} />
            @{amb.handle}
          </a>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed mb-6">{amb.bio}</p>

        {/* Specialties */}
        <div className="mb-6">
          <p className="text-xs font-display font-bold tracking-wider uppercase text-gray-600 mb-2.5">
            Especialidades
          </p>
          <div className="flex flex-wrap gap-2">
            {amb.specialty.map((s) => (
              <span key={s} className="text-xs px-2.5 py-1 border border-toyo-border text-gray-400 font-display">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Tire used */}
        <div className="flex items-center justify-between pt-5 border-t border-toyo-border">
          <div>
            <p className="text-xs text-gray-600 font-display font-semibold uppercase tracking-wider mb-0.5">
              Llanta de elección
            </p>
            <p className="text-sm text-white font-display font-bold">{amb.tires}</p>
          </div>
          <a
            href={amb.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-blue !text-xs !px-4 !py-2"
          >
            <ExternalLink size={12} />
            Seguir
          </a>
        </div>
      </div>
    </div>
  )
}

export default function EmbajadoresPage() {
  return (
    <div className="min-h-screen bg-toyo-black">

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container-custom relative z-10">
          <p className="label-tag animate-fade-in-up">Comunidad</p>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-none tracking-tight animate-fade-in-up-d1">
            Embajadores de Marca
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-xl animate-fade-in-up-d2">
            Venezolanos que confían en Toyo Tires para llevar su pasión al límite.
            Exploradores, conductores, creadores de comunidad.
          </p>
        </div>
      </section>

      <div className="container-custom py-16">

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {ambassadors.map((amb, i) => (
            <AmbassadorCard key={amb.handle} amb={amb} index={i} />
          ))}
        </div>

        {/* CTA join */}
        <div className="border border-toyo-border bg-toyo-surface p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="label-tag">¿Eres piloto o creador?</p>
            <h2 className="font-display font-black text-2xl text-white mb-2">
              Únete al programa de embajadores
            </h2>
            <p className="text-sm text-gray-400 max-w-lg">
              Si compites profesionalmente, haces contenido de off-road o tienes una comunidad 4x4 activa
              en Venezuela, queremos saber de ti.
            </p>
          </div>
          <Link href="/contacto" className="btn-primary flex-shrink-0">
            Contáctanos
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  )
}
