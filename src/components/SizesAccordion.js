'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function SizesAccordion({ rimGroups, totalSizes }) {
  const [open, setOpen] = useState(null)

  const toggle = (rim) => setOpen((prev) => (prev === rim ? null : rim))

  return (
    <div className="space-y-3">
      {rimGroups.map(({ rim, items }) => {
        const isOpen = open === rim
        return (
          <div key={rim} className="border border-gray-200 overflow-hidden shadow-sm">

            {/* Accordion header */}
            <button
              onClick={() => toggle(rim)}
              className="w-full bg-toyo-blue px-6 py-4 flex items-center justify-between
                         hover:bg-blue-700 transition-colors duration-200 group"
            >
              <div className="flex items-center gap-4">
                <span className="font-display font-black text-white text-sm tracking-widest uppercase">
                  RIN {rim}&quot;
                </span>
                <span className="text-white/70 text-xs font-display font-semibold">
                  {items.length} {items.length === 1 ? 'medida' : 'medidas'}
                </span>
              </div>
              <ChevronDown
                size={18}
                className={`text-white/80 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Collapsible body */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden
                ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              {/* Table header */}
              <div className="grid grid-cols-2 bg-gray-100 border-b border-gray-200 px-6 py-2.5">
                <span className="text-xs font-display font-bold text-gray-500 uppercase tracking-wide">Medida</span>
                <span className="text-xs font-display font-bold text-gray-500 uppercase tracking-wide">Índice Carga / Velocidad</span>
              </div>

              {/* Rows */}
              {items.map(({ medida, carga }, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-2 px-6 py-3 border-b border-gray-100 last:border-0
                    ${idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
                >
                  <span className="text-sm font-display font-semibold text-gray-900">{medida}</span>
                  <span className="text-sm text-gray-600">{carga}</span>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
