'use client'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function DistribuidoresMap({ dealers, onSelect }) {
  return (
    <MapContainer
      center={[8.5, -66.5]}
      zoom={6}
      style={{ height: '100%', width: '100%', background: '#111' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {dealers.map((d) => (
        <CircleMarker
          key={d.id}
          center={[d.lat, d.lng]}
          radius={7}
          pathOptions={{
            color: '#0062B0',
            fillColor: '#0062B0',
            fillOpacity: 0.85,
            weight: 2,
          }}
          eventHandlers={{ click: () => onSelect && onSelect(d.id) }}
        >
          <Popup className="toyo-popup">
            <div style={{ fontFamily: 'sans-serif', minWidth: 180 }}>
              <p style={{ fontWeight: 700, color: '#0062B0', marginBottom: 2, fontSize: 12 }}>
                {d.state.toUpperCase()}
              </p>
              <p style={{ fontWeight: 700, color: '#111', marginBottom: 4, fontSize: 13, lineHeight: 1.3 }}>
                {d.name}
              </p>
              <p style={{ color: '#555', fontSize: 11, lineHeight: 1.4 }}>
                {d.direccion}
              </p>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  )
}
