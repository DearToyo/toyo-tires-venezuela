import Image from 'next/image'
import Link from 'next/link'
import { Shield, Award, Users, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'

const milestones = [
  { year: '1967', event: 'Fundación de DEAR C.A.',             detail: 'Nace en Caracas la empresa que llevaría a Toyo Tires a Venezuela.' },
  { year: '1980', event: 'Expansión a nivel nacional',         detail: 'Apertura de distribución hacia los principales estados del país.' },
  { year: '1995', event: 'Distribución exclusiva Toyo Tires',  detail: 'DEAR C.A. se consolida como el único distribuidor oficial de Toyo en Venezuela.' },
  { year: '2010', event: 'Incorporación de la línea Proxes',   detail: 'Ampliación del portafolio con neumáticos de alto rendimiento para autos deportivos.' },
  { year: '2020', event: 'Nuevos modelos latinoamericanos',    detail: 'Incorporación de modelos exclusivos para la región: Proxes TM1, Vi-Mode II y Comfort.' },
  { year: '2024', event: 'Digitalización del catálogo',        detail: 'Lanzamiento del sitio web oficial con el catálogo completo de medidas disponibles en Venezuela.' },
]

const values = [
  { icon: Shield,    title: 'Confianza',   text: 'Más de cinco décadas acompañando a los venezolanos en cada kilómetro.' },
  { icon: Award,     title: 'Calidad',     text: 'Solo distribuimos productos premium que cumplen los más altos estándares internacionales.' },
  { icon: Users,     title: 'Servicio',    text: 'Atención personalizada y asesoría técnica experta en cada interacción.' },
  { icon: TrendingUp,title: 'Innovación',  text: 'Siempre a la vanguardia de la tecnología en neumáticos a nivel mundial.' },
]

const toyoFacts = [
  'Fundada en 1945 en Japón con más de 80 años de historia',
  'Presente en más de 100 países en los cinco continentes',
  'Líder en tecnología de neumáticos para uso en pista y carretera',
  'Patrocinador de eventos de motorsport de clase mundial',
  'Comprometida con el desarrollo sostenible y la innovación verde',
]

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container-custom relative z-10">
          <p className="label-tag animate-fade-in-up">La empresa</p>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-none tracking-tight animate-fade-in-up-d1">
            Sobre DEAR C.A.
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-xl animate-fade-in-up-d2">
            Más de 55 años distribuyendo confianza en Venezuela.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-tag">Nuestra historia</p>
              <h2 className="section-heading mb-6">
                Una alianza entre dos<br />legados de excelencia.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Fundada en <strong className="text-gray-900">1967</strong>, DEAR C.A. es una empresa venezolana
                dedicada a la distribución de neumáticos de alta calidad. Con más de cinco décadas de
                experiencia, nos hemos consolidado como el <strong className="text-gray-900">distribuidor oficial
                exclusivo</strong> de Toyo Tires en Venezuela.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Nuestra alianza con Toyo Tires representa la unión perfecta entre la tradición venezolana
                y la innovación japonesa. Cada llanta que distribuimos lleva el respaldo de dos legados
                de excelencia que trascienden fronteras.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Hoy, continuamos comprometidos con ofrecer productos premium, servicio excepcional y
                asesoría experta a nuestros clientes en todo el territorio nacional.
              </p>
            </div>

            {/* Stats column */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '+55',  l: 'Años de experiencia' },
                { n: '11',   l: 'Modelos disponibles' },
                { n: '100%', l: 'Calidad garantizada' },
                { n: '1',    l: 'Distribuidor oficial' },
              ].map(({ n, l }) => (
                <div key={l} className="bg-gray-50 border border-gray-200 p-6 text-center hover:border-toyo-blue hover:shadow-md transition-all duration-300">
                  <div className="font-display font-black text-4xl text-toyo-blue mb-1">{n}</div>
                  <div className="text-xs font-display font-semibold uppercase tracking-wide text-gray-500">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <p className="label-tag justify-center">Historia</p>
            <h2 className="section-heading">Hitos de nuestra trayectoria</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start group">
                  {/* Year bubble */}
                  <div className="relative flex-shrink-0 w-32 text-right hidden md:block">
                    <span className="font-display font-black text-2xl text-toyo-blue">{m.year}</span>
                    {/* Dot on line */}
                    <div className="absolute right-[-18px] top-2 w-3 h-3 rounded-full bg-toyo-blue border-2 border-gray-50" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white border border-gray-200 group-hover:border-toyo-blue
                                  p-5 transition-all duration-300 hover:shadow-md">
                    <div className="md:hidden font-display font-black text-lg text-toyo-blue mb-1">{m.year}</div>
                    <h3 className="font-display font-bold text-gray-900 text-base mb-1">{m.event}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="label-tag justify-center">Quiénes somos</p>
            <h2 className="section-heading">Nuestros valores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group bg-gray-50 border border-gray-200 p-6
                           hover:border-toyo-blue hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-blue-50 w-fit mb-4 group-hover:bg-toyo-blue transition-colors duration-300">
                  <Icon size={22} className="text-toyo-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-base mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Toyo */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-tag">La marca</p>
              <h2 className="section-heading mb-6">
                ¿Por qué elegimos<br />Toyo Tires?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Toyo Tires es un fabricante japonés con más de 80 años de historia, reconocido mundialmente
                por su innovación en ingeniería y diseño de neumáticos. Su compromiso con la calidad y el
                rendimiento se alinea perfectamente con los valores de DEAR.
              </p>
              <ul className="space-y-3">
                {toyoFacts.map((fact) => (
                  <li key={fact} className="flex items-start gap-3 text-sm text-gray-500">
                    <CheckCircle size={16} className="text-toyo-blue flex-shrink-0 mt-0.5" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Toyo logo display */}
            <div className="relative h-64 bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent" />
              <Image
                src="/images/logo_toyo.png"
                alt="Toyo Tires"
                width={280}
                height={112}
                className="h-28 w-auto object-contain relative z-10 opacity-20"
              />
              <div
                className="absolute inset-0 z-20"
                style={{
                  backgroundImage: 'radial-gradient(circle at center, rgba(0,98,176,0.08) 0%, transparent 70%)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-toyo-blue">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-black text-3xl text-white mb-1">
              ¿Listo para elegir tu llanta?
            </h2>
            <p className="text-white/80 text-sm">Encuentra la medida perfecta para tu vehículo.</p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link href="/productos" className="btn-outline-white">
              Ver productos
            </Link>
            <Link href="/buscador" className="btn-outline-white">
              Buscar llanta
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
