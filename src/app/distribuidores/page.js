'use client'
import { useState } from 'react'
import { MapPin, Phone, Mail, Search, ArrowRight } from 'lucide-react'
import Link from 'next/link'

/* Placeholder dealer data — replace with real list when available */
const dealers = [
  { id: 1, name: 'DEAR C.A. — Oficina Central', city: 'Caracas',   state: 'Distrito Capital', phone: '0212-751 3466', email: 'info@dear.com.ve' },
  { id: 2, name: 'Distribuidor Autorizado',       city: 'Valencia',  state: 'Carabobo',         phone: '0212-751 3466', email: 'info@dear.com.ve' },
  { id: 3, name: 'Distribuidor Autorizado',       city: 'Maracaibo', state: 'Zulia',             phone: '0212-751 3466', email: 'info@dear.com.ve' },
  { id: 4, name: 'Distribuidor Autorizado',       city: 'Barquisimeto', state: 'Lara',           phone: '0212-751 3466', email: 'info@dear.com.ve' },
  { id: 5, name: 'Distribuidor Autorizado',       city: 'Maracay',   state: 'Aragua',            phone: '0212-751 3466', email: 'info@dear.com.ve' },
  { id: 6, name: 'Distribuidor Autorizado',       city: 'Puerto Ordaz', state: 'Bolívar',        phone: '0212-751 3466', email: 'info@dear.com.ve' },
]

const states = ['Todos', ...Array.from(new Set(dealers.map(d => d.state))).sort()]

function DealerCard({ dealer }) {
  return (
    <div className="group bg-toyo-surface border border-toyo-border hover:border-toyo-blue
                    transition-all duration-300 hover:-translate-y-0.5 hover:shadow-dark-card p-6">
      {/* Top accent */}
      <div className="h-0.5 w-8 bg-toyo-blue mb-5 group-hover:w-full transition-all duration-500" />

      <div className="mb-1">
        <span className="text-xs font-display font-bold text-toyo-blue uppercase tracking-wider">
          {dealer.state}
        </span>
      </div>
      <h3 className="font-display font-bold text-white text-base mb-1">{dealer.name}</h3>
      <p className="text-sm text-gray-500 flex items-center gap-1.5 mb-5">
        <MapPin size={13} className="text-toyo-blue flex-shrink-0" />
        {dealer.city}, {dealer.state}
      </p>

      <ul className="space-y-2.5 mb-6">
        <li>
          <a
            href={`tel:${dealer.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition"
          >
            <Phone size={14} className="text-toyo-blue flex-shrink-0" />
            {dealer.phone}
          </a>
        </li>
        <li>
          <a
            href={`mailto:${dealer.email}`}
            className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition"
          >
            <Mail size={14} className="text-toyo-blue flex-shrink-0" />
            {dealer.email}
          </a>
        </li>
      </ul>

      <a
        href={`mailto:${dealer.email}`}
        className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-toyo-blue
                   hover:text-toyo-blue-lt transition-colors"
      >
        Contactar este distribuidor
        <ArrowRight size={12} />
      </a>
    </div>
  )
}

export default function DistribuidoresPage() {
  const [stateFilter, setStateFilter] = useState('Todos')
  const [query,       setQuery]       = useState('')

  const filtered = dealers.filter((d) => {
    const matchState = stateFilter === 'Todos' || d.state === stateFilter
    const matchQuery = !query || d.city.toLowerCase().includes(query.toLowerCase()) || d.state.toLowerCase().includes(query.toLowerCase())
    return matchState && matchQuery
  })

  return (
    <div className="min-h-screen bg-toyo-black">

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container-custom relative z-10">
          <p className="label-tag animate-fade-in-up">Red de distribución</p>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-none tracking-tight animate-fade-in-up-d1">
            Distribuidores
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-xl animate-fade-in-up-d2">
            Encuentra el punto de venta de Toyo Tires más cercano a ti en todo el territorio venezolano.
          </p>
        </div>
      </section>

      <div className="container-custom py-16">

        {/* Map placeholder */}
        <div className="relative mb-12 bg-toyo-surface border border-toyo-border overflow-hidden h-72 flex items-center justify-center">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle, #0062B0 1px, transparent 1px)',
              backgroundSize:  '32px 32px',
            }}
          />
          <div className="text-center relative z-10">
            <MapPin size={40} className="mx-auto mb-3 text-toyo-blue opacity-60" />
            <p className="text-gray-500 font-display font-semibold">Mapa interactivo próximamente</p>
            <p className="text-xs text-gray-600 mt-1">
              Mientras tanto, usa la lista de abajo para encontrar tu distribuidor
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar por ciudad o estado..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-toyo-surface border border-toyo-border text-white
                         pl-10 pr-4 py-2.5 text-sm
                         focus:outline-none focus:border-toyo-blue transition"
            />
          </div>
          <select
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
            className="bg-toyo-surface border border-toyo-border text-gray-300
                       px-4 py-2.5 text-sm
                       focus:outline-none focus:border-toyo-blue transition min-w-40"
          >
            {states.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* Results count */}
        <p className="text-xs text-gray-600 mb-6 font-display font-semibold">
          {filtered.length} distribuidor{filtered.length !== 1 ? 'es' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {filtered.map((d) => <DealerCard key={d.id} dealer={d} />)}
          </div>
        ) : (
          <div className="bg-toyo-surface border border-toyo-border p-12 text-center mb-16">
            <MapPin size={36} className="mx-auto mb-4 text-gray-700" />
            <p className="text-gray-400 font-display font-semibold">
              No hay distribuidores para ese filtro
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="border border-toyo-border bg-toyo-surface p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-white text-lg mb-1">
              ¿No encuentras un distribuidor cerca?
            </h3>
            <p className="text-sm text-gray-400">
              Contáctanos directamente y te orientamos sobre la opción más conveniente para ti.
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
