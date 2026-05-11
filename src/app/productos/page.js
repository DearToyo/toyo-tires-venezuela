'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight } from 'lucide-react'
import tireDatabase from '@/data/tires'

/* ── Category labels & colors ──────────────────────── */
const categoryMeta = {
  'off-road':    { label: 'Off-Road',           color: 'bg-red-900/60    text-red-300  border-red-800/50' },
  'all-terrain': { label: 'Todo Terreno',        color: 'bg-amber-900/60  text-amber-300 border-amber-800/50' },
  'todo-año':    { label: 'Todo el Año',         color: 'bg-green-900/60  text-green-300 border-green-800/50' },
  'performance': { label: 'Alto Rendimiento',    color: 'bg-blue-900/60   text-blue-300  border-blue-800/50' },
  'competition': { label: 'Competición',         color: 'bg-purple-900/60 text-purple-300 border-purple-800/50' },
}

/* ── Tire card ─────────────────────────────────────── */
function TireCard({ model }) {
  const meta = categoryMeta[model.category] || { label: model.category, color: 'bg-gray-800 text-gray-300 border-gray-700' }

  return (
    <div className="group bg-toyo-surface border border-toyo-border
                    hover:border-toyo-blue transition-all duration-400
                    flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-dark-card">

      {/* Image area */}
      <div className="relative h-52 bg-gradient-to-br from-toyo-dark to-toyo-black flex items-center justify-center overflow-hidden">
        {model.image ? (
          <Image
            src={model.image}
            alt={model.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="text-center p-6">
            <div className="text-4xl font-display font-black text-white/10 leading-none">
              TOYO
            </div>
            <div className="text-xs text-gray-600 mt-2 font-display tracking-widest uppercase">
              {model.name}
            </div>
          </div>
        )}
        {/* Blue line accent on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-toyo-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-bold text-white text-base leading-tight">
            {model.name}
          </h3>
          <span className={`text-xs px-2 py-0.5 border flex-shrink-0 ${meta.color} font-display font-semibold`}>
            {meta.label}
          </span>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed">{model.description}</p>

        <ul className="space-y-1.5 mt-1">
          {model.features.slice(0, 3).map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
              <ChevronRight size={12} className="text-toyo-blue flex-shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 border-t border-toyo-border flex items-center justify-between">
          <span className="text-xs text-gray-500">
            <span className="text-white font-bold">{model.sizes.length}</span> medidas
          </span>
          <Link
            href={`/buscador?model=${encodeURIComponent(model.name)}`}
            className="text-xs font-display font-bold text-toyo-blue hover:text-toyo-blue-lt
                       transition-colors flex items-center gap-1"
          >
            Ver medidas
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  )
}

/* ── Page ──────────────────────────────────────────── */
export default function ProductosPage() {
  const [line, setLine] = useState('all')

  const openCountryModels = Object.values(tireDatabase.openCountry)
  const proxesModels      = Object.values(tireDatabase.proxes)

  const tabs = [
    { id: 'all',          label: 'Todos los modelos' },
    { id: 'open-country', label: 'Open Country' },
    { id: 'proxes',       label: 'Proxes' },
  ]

  return (
    <div className="min-h-screen bg-toyo-black">

      {/* Page hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container-custom relative z-10">
          <p className="label-tag animate-fade-in-up">Catálogo</p>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-none tracking-tight animate-fade-in-up-d1">
            Nuestros Productos
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-xl animate-fade-in-up-d2">
            11 modelos. 2 líneas. Toda Venezuela cubierta.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="container-custom py-16">

        {/* Filter tabs */}
        <div className="flex gap-2 mb-12 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setLine(t.id)}
              className={`
                px-6 py-2.5 text-sm font-display font-semibold tracking-wide
                transition-all duration-200
                ${line === t.id
                  ? 'bg-toyo-blue text-white'
                  : 'border border-toyo-border text-gray-400 hover:border-toyo-blue hover:text-white'
                }
              `}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Open Country */}
        {(line === 'all' || line === 'open-country') && (
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div>
                <p className="text-xs font-display font-bold tracking-superwide uppercase text-gray-500">Línea</p>
                <h2 className="font-display font-black text-3xl text-white">Open Country</h2>
              </div>
              <div className="flex-1 h-px bg-toyo-border" />
              <span className="text-sm text-gray-500">{openCountryModels.length} modelos</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {openCountryModels.map((m, i) => <TireCard key={i} model={m} />)}
            </div>
          </div>
        )}

        {/* Proxes */}
        {(line === 'all' || line === 'proxes') && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div>
                <p className="text-xs font-display font-bold tracking-superwide uppercase text-gray-500">Línea</p>
                <h2 className="font-display font-black text-3xl text-white">Proxes</h2>
              </div>
              <div className="flex-1 h-px bg-toyo-border" />
              <span className="text-sm text-gray-500">{proxesModels.length} modelos</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {proxesModels.map((m, i) => <TireCard key={i} model={m} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
