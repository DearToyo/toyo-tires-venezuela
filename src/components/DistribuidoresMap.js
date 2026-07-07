'use client'
import { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const CACHE_KEY = 'toyo_geo_v2'

async function geocode(dealer) {
  const queries = [
    `${dealer.direccion}, Venezuela`,
    `${dealer.city}, ${dealer.state}, Venezuela`,
  ]
  for (const q of queries) {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=1&countrycodes=ve`,
        { headers: { 'User-Agent': 'ToyoTiresVenezuela/1.0 (toyotires.com.ve)' } }
      )
      const data = await res.json()
      if (data.length > 0) return [parseFloat(data[0].lat), parseFloat(data[0].lon)]
    } catch {}
  }
  return null
}

function GeocoderEffect({ dealers, onUpdate }) {
  const didRun = useRef(false)

  useEffect(() => {
    if (didRun.current) return
    didRun.current = true

    ;(async () => {
      let cache = {}
      try { cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}') } catch {}

      const missing = dealers.filter(d => !cache[d.id])
      if (missing.length === 0) return

      for (const dealer of missing) {
        await new Promise(r => setTimeout(r, 1150))
        const coords = await geocode(dealer)
        if (coords) {
          cache[dealer.id] = coords
          try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)) } catch {}
          onUpdate({ ...cache })
        }
      }
    })()
  }, [dealers, onUpdate])

  return null
}

export default function DistribuidoresMap({ dealers, onSelect }) {
  const [geoCache, setGeoCache] = useState(() => {
    try { return JSON.parse(localStorage.getItem(CACHE_KEY) || '{}') } catch { return {} }
  })

  function getCoords(d) {
    return geoCache[d.id] || [d.lat, d.lng]
  }

  return (
    <MapContainer
      center={[8.5, -66.5]}
      zoom={6}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <GeocoderEffect dealers={dealers} onUpdate={setGeoCache} />
      {dealers.map((d) => (
        <CircleMarker
          key={d.id}
          center={getCoords(d)}
          radius={7}
          pathOptions={{
            color: '#004a8a',
            fillColor: '#0062B0',
            fillOpacity: 0.9,
            weight: 2,
          }}
          eventHandlers={{ click: () => onSelect?.(d.id) }}
        >
          <Popup>
            <div style={{ fontFamily: 'sans-serif', minWidth: 190, padding: '2px 0' }}>
              <p style={{ fontWeight: 700, color: '#0062B0', fontSize: 11, marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {d.state}
              </p>
              <p style={{ fontWeight: 700, color: '#111', fontSize: 13, marginBottom: 5, lineHeight: 1.3 }}>
                {d.name}
              </p>
              <p style={{ color: '#555', fontSize: 11, lineHeight: 1.5, margin: 0 }}>
                {d.direccion}
              </p>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  )
}
