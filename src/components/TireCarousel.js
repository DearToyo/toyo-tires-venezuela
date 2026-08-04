'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function TireCarousel({ images, name }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))

  if (!images || images.length === 0) return null

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto bg-gray-50 flex items-center justify-center select-none">

      {/* Image */}
      <div className="relative w-full h-full">
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-400
              ${i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <Image
              src={src}
              alt={`${name} — vista ${i + 1}`}
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-contain p-10"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          onClick={prev}
          aria-label="Imagen anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                     w-9 h-9 flex items-center justify-center
                     bg-white border border-gray-200 shadow-sm
                     hover:border-toyo-blue hover:shadow-md
                     transition-all duration-200 group"
        >
          <ChevronLeft size={18} className="text-gray-500 group-hover:text-toyo-blue transition-colors" />
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={next}
          aria-label="Imagen siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                     w-9 h-9 flex items-center justify-center
                     bg-white border border-gray-200 shadow-sm
                     hover:border-toyo-blue hover:shadow-md
                     transition-all duration-200 group"
        >
          <ChevronRight size={18} className="text-gray-500 group-hover:text-toyo-blue transition-colors" />
        </button>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ver imagen ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300
                ${i === current
                  ? 'w-5 bg-toyo-blue'
                  : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
