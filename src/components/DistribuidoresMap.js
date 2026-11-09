'use client'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function DistribuidoresMap({ dealers, onSelect }) {
  return (
    <MapContainer
      center={[8.5, -66.5]}
      zoom={6}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />
      {dealers.map((d) => (
        <CircleMarker
          key={d.id}
          center={[d.lat, d.lng]}
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
              {d.approx && (
                <p style={{ color: '#888', fontSize: 10, lineHeight: 1.4, margin: '6px 0 0', fontStyle: 'italic' }}>
                  Ubicación aproximada en el mapa
                </p>
              )}
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  )
}
