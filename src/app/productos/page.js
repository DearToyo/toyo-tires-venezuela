'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { tireDatabase, keyToSlug } from '@/data/tires'

const categoryMeta = {
  'off-road':    { label: 'Off-Road',        color: 'bg-red-100    text-red-700  border-red-200' },
  'all-terrain': { label: 'Todo Terreno',    color: 'bg-amber-100  text-amber-700 border-amber-200' },
  'todo-año':    { label: 'Todo el Año',     color: 'bg-green-100  text-green-700 border-green-200' },
  'performance': { label: 'Alto Rendimiento',color: 'bg-blue-100   text-blue-700  border-blue-200' },
  'competition': { label: 'Competición',     color: 'bg-purple-100 text-purple-700 border-purple-200' },
}

function ModelLogo({ line, name }) {
  const variant = name.replace(line + ' ', '')
  return (
    <div className="flex flex-col leading-none">
      <span className="text-[9px] font-display font-bold tracking-[0.18em] uppercase text-gray-400">
        {line}
      </span>
      <div className="h-[2px] w-10 bg-toyo-blue my-1.5" />
      <span className="font-display font-black text-[22px] text-gray-900 leading-none tracking-tight">
        {variant}
      </span>
    </div>
  )
}

function TireCard({ model }) {
  const meta = categoryMeta[model.category] || { label: model.category, color: 'bg-gray-100 text-gray-700 border-gray-200' }
  const href = model.slug ? `/productos/${model.slug}` : `/buscador?model=${encodeURIComponent(model.name)}`

  return (
    <Link
      href={href}
      className="group bg-white border border-gray-200
                 hover:border-toyo-blue hover:shadow-lg transition-all duration-300
                 flex flex-col overflow-hidden hover:-translate-y-1"
    >
      <div className="relative h-52 bg-white flex items-center justify-center overflow-hidden border-b border-gray-100">
        {model.image ? (
          <Image
            src={model.image}
            alt={model.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
          />
        ) : (
          <div className="text-center p-6">
            <div className="text-4xl font-display font-black text-gray-200 leading-none">TOYO</div>
            <div className="text-xs text-gray-400 mt-2 font-display tracking-widest uppercase">{model.name}</div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-toyo-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>

      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <ModelLogo line={model.line} name={model.name} />
          <span className={`text-xs px-2 py-0.5 border flex-shrink-0 ${meta.color} font-display font-semibold`}>
            {meta.label}
          </span>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed">{model.description}</p>

        <ul className="space-y-1.5 mt-1">
          {model.features.slice(0, 3).map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
              <ChevronRight size={12} className="text-toyo-blue flex-shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-400">
            <span className="text-gray-900 font-bold">{model.sizes.length}</span> medidas
          </span>
          <span className="text-xs font-display font-bold text-toyo-blue flex items-center gap-1
                           group-hover:gap-2 transition-all duration-200">
            Ver detalles <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function ProductosPage() {
  const [line, setLine] = useState('all')

  const openCountryModels = Object.entries(tireDatabase.openCountry)
    .map(([key, m]) => ({ ...m, slug: keyToSlug[key] }))
  const proxesModels = Object.entries(tireDatabase.proxes)
    .map(([key, m]) => ({ ...m, slug: keyToSlug[key] }))

  const tabs = [
    { id: 'all',          label: 'Todos los modelos' },
    { id: 'open-country', label: 'Open Country' },
    { id: 'proxes',       label: 'Proxes' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
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

      <div className="container-custom py-16">
        <div className="flex gap-2 mb-12 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setLine(t.id)}
              className={`px-6 py-2.5 text-sm font-display font-semibold tracking-wide transition-all duration-200
                ${line === t.id
                  ? 'bg-toyo-blue text-white'
                  : 'border border-gray-300 text-gray-600 hover:border-toyo-blue hover:text-toyo-blue bg-white'
                }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {(line === 'all' || line === 'open-country') && (
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div>
                <p className="text-xs font-display font-bold tracking-superwide uppercase text-gray-400">Línea</p>
                <h2 className="font-display font-black text-3xl text-gray-900">Open Country</h2>
              </div>
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-400">{openCountryModels.length} modelos</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {openCountryModels.map((m, i) => <TireCard key={i} model={m} />)}
            </div>
          </div>
        )}

        {(line === 'all' || line === 'proxes') && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div>
                <p className="text-xs font-display font-bold tracking-superwide uppercase text-gray-400">Línea</p>
                <h2 className="font-display font-black text-3xl text-gray-900">Proxes</h2>
              </div>
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-400">{proxesModels.length} modelos</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {proxesModels.map((m, i) => <TireCard key={i} model={m} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
