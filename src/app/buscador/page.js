'use client'
import { useState, useMemo } from 'react'
import { Search, RotateCcw, ChevronRight, Info } from 'lucide-react'
import { tireDatabase, getRimSizes } from '@/data/tires'
import Image from 'next/image'
import Link from 'next/link'

/* ── Result card ───────────────────────────────────── */
function ResultCard({ model, matchedSizes }) {
  const [expanded, setExpanded] = useState(false)
  const shown = expanded ? matchedSizes : matchedSizes.slice(0, 6)

  return (
    <div className="bg-toyo-surface border border-toyo-border hover:border-toyo-blue/50 transition-colors">
      <div className="flex items-start gap-4 p-5">
        {model.image && (
          <div className="relative w-20 h-20 flex-shrink-0 bg-toyo-black">
            <Image src={model.image} alt={model.name} fill className="object-contain p-1" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-display font-bold text-white text-sm">{model.name}</h3>
            <span className="text-xs text-toyo-blue font-display font-semibold flex-shrink-0">
              {matchedSizes.length} medida{matchedSizes.length !== 1 ? 's' : ''}
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-3">{model.line}</p>
          <div className="flex flex-wrap gap-1.5">
            {shown.map((s, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 border border-toyo-border text-gray-300 font-mono hover:border-toyo-blue transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
          {matchedSizes.length > 6 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 text-xs text-toyo-blue hover:text-toyo-blue-lt transition-colors font-display font-semibold"
            >
              {expanded ? 'Ver menos' : `+${matchedSizes.length - 6} más`}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Page ──────────────────────────────────────────── */
export default function BuscadorPage() {
  const [tab,        setTab]        = useState('size')
  const [sizeQuery,  setSizeQuery]  = useState('')
  const [rimQuery,   setRimQuery]   = useState('')
  const [searched,   setSearched]   = useState(false)

  const rimSizes = getRimSizes()
  const allModels = useMemo(() => [
    ...Object.values(tireDatabase.openCountry),
    ...Object.values(tireDatabase.proxes),
  ], [])

  const results = useMemo(() => {
    if (!searched) return []
    const q = tab === 'size' ? sizeQuery.trim().toLowerCase().replace(/\s/g, '') : rimQuery

    return allModels
      .map((model) => {
        const matched = model.sizes.filter((s) => {
          if (tab === 'size') {
            return s.toLowerCase().replace(/\s/g, '').includes(q)
          } else {
            const rimMatch = s.match(/R(\d+)/)
            return rimMatch && rimMatch[1] === q
          }
        })
        return matched.length > 0 ? { model, matchedSizes: matched } : null
      })
      .filter(Boolean)
  }, [searched, sizeQuery, rimQuery, tab, allModels])

  const handleSearch = () => {
    if (tab === 'size' && !sizeQuery.trim()) return
    if (tab === 'rim'  && !rimQuery) return
    setSearched(true)
  }

  const handleReset = () => {
    setSizeQuery('')
    setRimQuery('')
    setSearched(false)
  }

  const handleKeyDown = (e) => { if (e.key === 'Enter') handleSearch() }

  return (
    <div className="min-h-screen bg-toyo-black">

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container-custom relative z-10">
          <p className="label-tag animate-fade-in-up">Buscador</p>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-none tracking-tight animate-fade-in-up-d1">
            Encuentra tu llanta
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-xl animate-fade-in-up-d2">
            Busca por la medida exacta de tu neumático o por el diámetro de tu rin.
          </p>
        </div>
      </section>

      <div className="container-narrow py-16">

        {/* Search card */}
        <div className="bg-toyo-surface border border-toyo-border p-8 mb-8">

          {/* Tabs */}
          <div className="flex mb-8">
            {[
              { id: 'size', label: 'Por Medida' },
              { id: 'rim',  label: 'Por Rin / Diámetro' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => { setTab(t.id); setSearched(false) }}
                className={`
                  flex-1 py-3 text-sm font-display font-bold tracking-wide
                  transition-all duration-200 border-b-2
                  ${tab === t.id
                    ? 'border-toyo-blue text-white'
                    : 'border-toyo-border text-gray-500 hover:text-gray-300'
                  }
                `}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Size search */}
          {tab === 'size' && (
            <div>
              <label className="block text-xs font-display font-bold tracking-wider uppercase text-gray-400 mb-2">
                Medida del neumático
              </label>
              <p className="text-xs text-gray-600 mb-4 flex items-center gap-1.5">
                <Info size={12} className="text-toyo-blue" />
                Ejemplo: 265/70R17 · 195/65R15 · LT285/75R16
              </p>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={sizeQuery}
                  onChange={(e) => { setSizeQuery(e.target.value); setSearched(false) }}
                  onKeyDown={handleKeyDown}
                  placeholder="265/70R17"
                  className="flex-1 bg-toyo-black border border-toyo-border text-white
                             px-4 py-3 text-sm font-mono
                             focus:outline-none focus:border-toyo-blue
                             placeholder:text-gray-700 transition"
                />
                <button
                  onClick={handleSearch}
                  className="btn-primary !py-3"
                >
                  <Search size={16} />
                  Buscar
                </button>
              </div>
            </div>
          )}

          {/* Rim search */}
          {tab === 'rim' && (
            <div>
              <label className="block text-xs font-display font-bold tracking-wider uppercase text-gray-400 mb-2">
                Diámetro del rin (pulgadas)
              </label>
              <p className="text-xs text-gray-600 mb-4 flex items-center gap-1.5">
                <Info size={12} className="text-toyo-blue" />
                Selecciona el diámetro de tu rin para ver llantas compatibles
              </p>
              <div className="flex gap-3 flex-wrap">
                <select
                  value={rimQuery}
                  onChange={(e) => { setRimQuery(e.target.value); setSearched(false) }}
                  className="flex-1 min-w-48 bg-toyo-black border border-toyo-border text-white
                             px-4 py-3 text-sm
                             focus:outline-none focus:border-toyo-blue transition"
                >
                  <option value="">Selecciona un diámetro...</option>
                  {rimSizes.map((s) => (
                    <option key={s} value={String(s)}>Rin {s}"</option>
                  ))}
                </select>
                <button
                  onClick={handleSearch}
                  className="btn-primary !py-3"
                >
                  <Search size={16} />
                  Ver opciones
                </button>
              </div>
              {/* Quick buttons */}
              <div className="flex flex-wrap gap-2 mt-4">
                {rimSizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setRimQuery(String(s)); setSearched(false) }}
                    className={`
                      px-3 py-1.5 text-xs font-display font-semibold border transition
                      ${rimQuery === String(s)
                        ? 'border-toyo-blue bg-toyo-blue text-white'
                        : 'border-toyo-border text-gray-400 hover:border-toyo-blue hover:text-white'
                      }
                    `}
                  >
                    {s}"
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {searched && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-display font-bold text-white text-xl">
                  {results.length > 0
                    ? `${results.length} modelo${results.length !== 1 ? 's' : ''} encontrado${results.length !== 1 ? 's' : ''}`
                    : 'Sin resultados'}
                </h2>
                {tab === 'size' && sizeQuery && (
                  <p className="text-xs text-gray-500 mt-0.5">
                    Búsqueda: <span className="text-gray-300 font-mono">{sizeQuery}</span>
                  </p>
                )}
                {tab === 'rim' && rimQuery && (
                  <p className="text-xs text-gray-500 mt-0.5">
                    Rin: <span className="text-gray-300">{rimQuery}"</span>
                  </p>
                )}
              </div>
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition"
              >
                <RotateCcw size={12} />
                Nueva búsqueda
              </button>
            </div>

            {results.length === 0 ? (
              <div className="bg-toyo-surface border border-toyo-border p-12 text-center">
                <Search size={40} className="mx-auto mb-4 text-gray-700" />
                <p className="text-gray-400 font-display font-semibold mb-2">
                  No encontramos llantas con esa medida
                </p>
                <p className="text-sm text-gray-600">
                  Intenta con una medida parcial (ej. "70R17") o{' '}
                  <Link href="/contacto" className="text-toyo-blue hover:underline">
                    contáctanos
                  </Link>
                  {' '}para asesoría.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {results.map(({ model, matchedSizes }, i) => (
                  <ResultCard key={i} model={model} matchedSizes={matchedSizes} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Help */}
        {!searched && (
          <div className="border border-toyo-border p-6 flex gap-4 items-start">
            <Info size={20} className="text-toyo-blue flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display font-bold text-white text-sm mb-1">
                ¿Dónde encuentro la medida de mi llanta?
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                La medida está impresa en el flanco lateral del neumático actual.
                Busca una secuencia como <span className="text-white font-mono">265/70R17</span>.
                Si no puedes leerla, revisa el manual del vehículo o{' '}
                <Link href="/distribuidores" className="text-toyo-blue hover:underline">
                  visita un distribuidor
                </Link>
                .
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
