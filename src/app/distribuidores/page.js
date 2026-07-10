'use client'
import { useState, useMemo, useRef } from 'react'
import dynamic from 'next/dynamic'
import { MapPin, Search, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const DistribuidoresMap = dynamic(
  () => import('@/components/DistribuidoresMap'),
  { ssr: false, loading: () => <div className="w-full h-full bg-gray-100 flex items-center justify-center"><span className="text-gray-400 text-sm">Cargando mapa...</span></div> }
)

/* ── City base coordinates ─────────────────────────────── */
const CITY_COORDS = {
  'CARACAS':        [10.4806, -66.9036],
  'SAN ANTONIO':    [10.3742, -67.0306],
  'GUANTA':         [10.2333, -64.5833],
  'PTO LA CRUZ':    [10.1422, -64.6872],
  'MATURIN':        [9.7456,  -63.1864],
  'PTO ORDAZ':      [8.2949,  -62.7282],
  'SAN FELIX':      [8.3739,  -62.6636],
  'MARACAY':        [10.2389, -67.5938],
  'TURMERO':        [10.2294, -67.4769],
  'PALO NEGRO':     [10.1736, -67.5372],
  'VALLE LA PASCUA':[9.2228,  -66.0006],
  'CALABOZO':       [8.9246,  -67.4297],
  'VALENCIA':       [10.1765, -67.9763],
  'TOCUYITO':       [10.1667, -68.0667],
  'SAN DIEGO':      [10.2500, -67.9167],
  'NAGUANAGUA':     [10.2500, -68.0000],
  'SAN FRANCISCO':  [10.6068, -71.6411],
  'BARQUISIMETO':   [10.0678, -69.3467],
  'ACARIGUA':       [9.5600,  -69.2000],
  'GUANARE':        [9.0422,  -69.7453],
}

function coords(city, index) {
  const base = CITY_COORDS[city.toUpperCase().trim()] || [8.0, -66.0]
  const offset = (n) => (n % 7 - 3) * 0.018
  return [base[0] + offset(index * 3), base[1] + offset(index * 5 + 1)]
}

/* ── Raw dealer data from Excel ────────────────────────── */
const rawDealers = [
  { name: 'SERVIEXPRESS PASEO LA CASTELLANA 19, CA',    city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Calle José Félix Ribas con Av. Ppal. La Castellana, Local 10, Urb. La Castellana' },
  { name: 'CAUCHOS Y ACCESORIOS JRC C.A.',              city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Av. Las Palmas entre 3era y 4ta Transversal, Boleíta Sur' },
  { name: 'CAUCHOS LOS TAVARES C.A',                    city: 'CARACAS',        state: 'Distrito Capital', direccion: '1era Transv. c/c La Línea, Los Dos Caminos' },
  { name: 'AUTOSERVICIOS Y CAUCHOS AVILA, CA',          city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Av. Libertador esq. Calle José Félix Sosa, Local 10-11, Urb. Bello Campo' },
  { name: 'AUTOSERVICIOS JA KETER 222, CA',             city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Calle Veracruz esq. c/c La Guairita, Local Tamanco Express, Urb. Las Mercedes' },
  { name: 'CORPORACION EXIAUTO CA',                     city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Av. Principal de Los Ruices, Edif. Exiauto, Local Exiauto Toyota, Urb. Los Ruices' },
  { name: 'INVERSIONES HFJ 4X4 RUSTICARS, CA',          city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Calle Primera c/c Transversal Izquierda, Edif. Yanucci, Local LCPB-A, Urb. Boleíta' },
  { name: 'RUEDAS LA CARLOTA C.A.',                     city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Calle Guanchez entre Fco. de Miranda y Rómulo Gallegos' },
  { name: 'TIRE CENTER LA CASTELLANA II C.A.',          city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Av. Principal La Castellana con José Ángel Lamas, Edif. Tire Center La Castellana' },
  { name: 'NOMAD 4WD CA',                               city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Calle San Ignacio de Loyola, Qta. Italmueble, Piso 1, Urb. Chacao' },
  { name: 'CORPORACION ROCO 4WD PERFORMANCE, CA',       city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Av. Libertador c/Calle El Muñeco, Local 27, Urb. Chacao' },
  { name: 'TRUCK STORE CA',                             city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Av. Principal de La Guairita, Local Galpón, Urb. El Hatillo' },
  { name: 'CORPORACION NEUMATICOS TOP 3000, CA',        city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Av. Rómulo Gallegos, Casa S/N, Urb. Sebucán' },
  { name: 'TALLER VAG PERFORMANCE, CA',                 city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Av. Principal, Galpón Industrial G-44, Boleíta Sur, entre 3era y 4ta Transversal' },
  { name: 'TOÑO TIRES GARAGE, CA',                      city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Av. Victoria con Gran Colombia, Local 108, Urb. Las Acacias' },
  { name: 'TALLERES LEO 245, CA',                       city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Av. El Cuartel Urdaneta, Est. Servicio Brasil, Urb. Nueva Caracas' },
  { name: 'CAUCHOS ACCESORIOS TOÑO WHEELS 028 CA',      city: 'SAN ANTONIO',    state: 'Miranda',          direccion: 'Ctra. Panamericana Km 13, CC Capo di Monte, Nivel PB, Local PB1 y PB2, San Antonio de los Altos' },
  { name: 'ROYAL AUTORAMA C.A.',                        city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Avda. Tamanaco N° 9, El Rosal' },
  { name: 'RADIAL SUPER GOMA. C.A.',                    city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Av. Simón Planas, Qta. Guaricavila, Santa Mónica' },
  { name: 'MULTISERVICIOS TODO 4X4 CA',                 city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Av. América, Edif. Jardín América II, Piso 1, Apt 11, Urb. Las Acacias' },
  { name: 'MULTISERVICIOS CICLON LOS CHAGUARAMOS C.A.', city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Calle Bellas Artes entre Av. Ciencias y El Estadium, Qta. Susana' },
  { name: 'SPEED RACING C.A.',                          city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Av. El Estadium entre Calle Sanz y Risquez, Los Chaguaramos' },
  { name: 'INVERSIONES SARAY CRJ C.A.',                 city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Calle Stadium con Alma Mater, Qta. Santa Eduvigis, Los Chaguaramos' },
  { name: 'RACING RUEDAS 99 C.A',                       city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Av. Sucre, Galpón N° 38, Local D, Los Dos Caminos' },
  { name: 'CAUCHOS Y ACCESORIOS LEMANS, CA',            city: 'CARACAS',        state: 'Distrito Capital', direccion: 'Calle Don Bosco, Edif. Lepanto, PB, Local 3, Urb. Colinas de Bello Monte' },
  { name: 'D´TAPICO OILCA',                             city: 'GUANTA',         state: 'Anzoátegui',       direccion: 'Calle Principal, Casa Las Palmas N° 10, Sector Las Palmas, Guanta' },
  { name: 'AUTO ACCESORIOS 1000 MILLAS  S.A.',          city: 'PTO LA CRUZ',    state: 'Anzoátegui',       direccion: 'Av. Bolívar, Local N° 311, Urb. Bella Vista, Puerto La Cruz' },
  { name: 'SUPERCAUCHOS LIBERTADOR S.A.',                city: 'MATURIN',        state: 'Monagas',          direccion: 'Av. Libertador cruce con Bicentario, Final Av. Vargas, Maturín' },
  { name: 'CAUCHOS PORRUA C.A.',                        city: 'PTO ORDAZ',      state: 'Bolívar',          direccion: 'Calle Oriente S/N, Sector Castillito, Pto. Ordaz' },
  { name: 'MULTICAUCHOS LA UNIDAD C.A.',                city: 'SAN FELIX',      state: 'Bolívar',          direccion: 'Av. Manuel Piar, Sector La Unidad, Fte. Plaza Las Batallas, San Félix' },
  { name: 'EUROCAUCHOS MILENIUM C.A.',                  city: 'MARACAY',        state: 'Aragua',           direccion: 'Av. Intercomunal Santiago Mariño con Calle Las Industrias, Maracay' },
  { name: 'AUTO SPORT, S.A',                            city: 'TURMERO',        state: 'Aragua',           direccion: 'Calle Atanacio, Casa N° 13, Urb. Sorocaima II, Turmero' },
  { name: 'AVIADORES CARS CENTER, C.A',                 city: 'PALO NEGRO',     state: 'Aragua',           direccion: 'Av. Autopista Los Aviadores, CC Parque Los Aviadores, Nivel Estacionamiento' },
  { name: 'GRUPO LA RUEDA C.A',                         city: 'TURMERO',        state: 'Aragua',           direccion: 'Av. Intercomunal Santiago Mariño, Parcela S/N, Sector La Julia, Turmero' },
  { name: 'CAUCHOS CAMPO ELIAS C.A.',                   city: 'MARACAY',        state: 'Aragua',           direccion: 'Calle Campo Elias, Casa Galpón N° 13, Sector La Romana, Maracay' },
  { name: 'CAUCHOS UNIVERSAL D.C.S. C.A.',              city: 'MARACAY',        state: 'Aragua',           direccion: 'Av. Los Cedros con Calle El Canal, Edif. Rosa María, PB, Maracay' },
  { name: 'G.P TIRES LA ENCRUCIJADA, C.A',             city: 'TURMERO',        state: 'Aragua',           direccion: 'Av. Intercomunal Santiago Mariño, Local Fundo La Purica N° A32, La Encrucijada, Turmero' },
  { name: 'G & D CAR´S SHOP, C.A',                     city: 'TURMERO',        state: 'Aragua',           direccion: 'Turmero, Aragua' },
  { name: 'AUTO K, C.A',                                city: 'VALLE LA PASCUA', state: 'Guárico',         direccion: 'Calle Real, Salida a Tucupido, Edif. Auto K, PB, Local 132, Sector Morichal' },
  { name: 'SERVICAUCHOS ELOY C.A.',                     city: 'CALABOZO',       state: 'Guárico',          direccion: 'Cr. 14 al Final, Casa S/N, Sector Zona Comercial, Calabozo' },
  { name: 'LLANTAS J.M. 2018,C.A',                      city: 'VALENCIA',       state: 'Carabobo',         direccion: 'Calle 91, Michelena N° Cívico 86-19, Local S/N, Urb. La Michelena' },
  { name: 'PROTIRES LOS COLEGIOS, C.A',                 city: 'VALENCIA',       state: 'Carabobo',         direccion: 'Av. 101, Casa Parcela N° 11, Urb. Guaparo, Manzana 14, N° 155-91' },
  { name: 'EXPOTIRES, C.A',                             city: 'VALENCIA',       state: 'Carabobo',         direccion: 'Calle 123, Local 103-18, Zona Primera Sección, Urb. San Gerardo' },
  { name: 'TIRESPEED VALENCIA CA.',                     city: 'VALENCIA',       state: 'Carabobo',         direccion: 'Av. Montes de Oca cruce con Rojas Queipo, Edif. Gardilin, Of. 0102' },
  { name: 'CAR\'S BOUTIQUE C.A.',                       city: 'VALENCIA',       state: 'Carabobo',         direccion: 'Av. Carlos Sanda, Edif. Capriso, PB, Local R, Urb. El Viñedo' },
  { name: 'CORPORACION RIMO CAUCHOS C.A.',              city: 'VALENCIA',       state: 'Carabobo',         direccion: 'Av. Sesquicentenario, Local N° 92-201, Sector Antonio José de Sucre' },
  { name: 'TOYOVAL C.A',                                city: 'VALENCIA',       state: 'Carabobo',         direccion: 'Av. Bolívar Norte, Local N° 108-118, Sector San José' },
  { name: 'TIRE GOLD ONE, C.A',                        city: 'TOCUYITO',       state: 'Carabobo',         direccion: 'Av. La Cruz cruce con Vía de Servicio, Casa Lote N° 2, Urb. Pocaterra, Tocuyito' },
  { name: 'NEUMATICO EXPRESS C.A.',                     city: 'SAN DIEGO',      state: 'Carabobo',         direccion: 'Av. 73, Carretera Vía San Diego N° 300, Local Complejos de Oficina N° 11, Urb. Industrial San Diego' },
  { name: 'TALLER HIGH PERFORMANCE 4X4, C.A',           city: 'VALENCIA',       state: 'Carabobo',         direccion: 'Calle Colombia cruce con Av. Paseo Cabriales, Galpón N° 92-42, Sector San Blas' },
  { name: 'AUTO BOOM SERVICES, C.A',                    city: 'NAGUANAGUA',     state: 'Carabobo',         direccion: 'Calle Naguanagua N° Cívico 184-69, Local N/I, Sector N/I' },
  { name: 'SERVICAUCHOS EL ROMANCE C.A',                city: 'VALENCIA',       state: 'Carabobo',         direccion: 'Av. Enrique Tejera, Sector C, Entrada a Bloque 3, Local N° 2, Urb. El Palotal' },
  { name: 'ARSENAL 4WD C.A',                            city: 'VALENCIA',       state: 'Carabobo',         direccion: 'Av. 106, Casa 47C, N° 130, Urb. Prebo' },
  { name: 'INVERSIONES GLIA C.A.',                      city: 'VALENCIA',       state: 'Carabobo',         direccion: 'Av. Isabelica, Local N° 92-201, Local 2, Sector Plaza de Toros' },
  { name: 'TECNOCAUCHOS EL VIÑEDO C.A.',                city: 'VALENCIA',       state: 'Carabobo',         direccion: 'Av. Carlos Sanda, Local N° 105-67, Urb. Viñedo' },
  { name: 'NEUMATICOS REP, C.A',                        city: 'VALENCIA',       state: 'Carabobo',         direccion: 'Callejón Mujica, Edif. Frameca C, Piso 10, Apt. 10-D, Urb. Agua Blanca' },
  { name: 'RUEDAS DARIO. C.A.',                         city: 'SAN FRANCISCO',  state: 'Zulia',            direccion: 'Prolongación Circunvalación N° 2, Av. 60, Sector Los Olivos N° 68-42, Maracaibo' },
  { name: 'BEST IMPORT CARS`S 75 C.A.',                 city: 'BARQUISIMETO',   state: 'Lara',             direccion: 'Cr. 24 entre Calles 17 y 18, Local 17-43, Sector Centro, Barquisimeto' },
  { name: 'TIRES SHOP, C.A',                            city: 'BARQUISIMETO',   state: 'Lara',             direccion: 'Cr. 19 esq. Calle 12, Local N° 1, Sector Centro' },
  { name: 'CE236',                                      city: 'ACARIGUA',       state: 'Lara',             direccion: 'Calle 32 entre Av. 25 y 26, Local N° 01, Sector Prolongación, Acarigua' },
  { name: 'CAUCHOS TRIPLE A, C.A',                      city: 'BARQUISIMETO',   state: 'Lara',             direccion: 'Cr. 1 con Calles 22 y 23, Local N° 1, Zona Industrial III' },
  { name: 'IMPORTADORA Y SUMINISTROS ACARIGUA C.A',     city: 'ACARIGUA',       state: 'Portuguesa',       direccion: 'Av. Circunvalación Sur con Av. 2, Galpón S/N, Sector Barrio Bolívar' },
  { name: 'COMERCIALIZADORA VALSOF TIRES, C.A',         city: 'GUANARE',        state: 'Portuguesa',       direccion: 'Av. Simón Bolívar, Entrada a la Av. Principal del Barrio La Importancia, Local N° 2' },
  { name: 'MANUEL ANTONIO MARQUEZ BAIDEZ',              city: 'GUANARE',        state: 'Portuguesa',       direccion: 'Av. Simón Bolívar, CC Bitondo, Nivel PB, Local 3, Sector La Pastora' },
]

const dealers = rawDealers.map((d, i) => {
  const [lat, lng] = coords(d.city, i)
  return { ...d, id: i + 1, lat, lng }
})

const ALL_STATES = ['Todos', ...Array.from(new Set(dealers.map(d => d.state))).sort()]

/* ── Dealer Card ───────────────────────────────────────── */
function DealerCard({ dealer, highlighted, cardRef }) {
  return (
    <div
      ref={cardRef}
      className={`group bg-white border transition-all duration-300 p-5
        ${highlighted ? 'border-toyo-blue shadow-md' : 'border-gray-200 hover:border-toyo-blue hover:-translate-y-0.5 hover:shadow-md'}`}
    >
      <div className="h-0.5 w-8 bg-toyo-blue mb-4 group-hover:w-full transition-all duration-500" />
      <p className="text-xs font-display font-bold text-toyo-blue uppercase tracking-wider mb-1">
        {dealer.state}
      </p>
      <h3 className="font-display font-bold text-gray-900 text-sm leading-tight mb-2">
        {dealer.name}
      </h3>
      <p className="text-xs text-gray-500 flex items-start gap-1.5">
        <MapPin size={11} className="text-toyo-blue flex-shrink-0 mt-0.5" />
        {dealer.direccion}
      </p>
    </div>
  )
}

/* ── Page ──────────────────────────────────────────────── */
export default function DistribuidoresPage() {
  const [stateFilter, setStateFilter] = useState('Todos')
  const [query,       setQuery]       = useState('')
  const [selected,    setSelected]    = useState(null)
  const cardRefs = useRef({})

  const filtered = useMemo(() => dealers.filter((d) => {
    const matchState = stateFilter === 'Todos' || d.state === stateFilter
    const matchQuery = !query ||
      d.name.toLowerCase().includes(query.toLowerCase()) ||
      d.city.toLowerCase().includes(query.toLowerCase()) ||
      d.state.toLowerCase().includes(query.toLowerCase())
    return matchState && matchQuery
  }), [stateFilter, query])

  function handleMarkerClick(id) {
    setSelected(id)
    setTimeout(() => {
      cardRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container-custom relative z-10">
          <p className="label-tag animate-fade-in-up">Red de tiendas autorizadas</p>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-none tracking-tight animate-fade-in-up-d1">
            Tiendas
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-xl animate-fade-in-up-d2">
            {dealers.length} puntos de venta autorizados en todo el territorio venezolano.
          </p>
        </div>
      </section>

      <div className="container-custom py-16">

        {/* Map */}
        <div className="mb-12 border border-gray-200 overflow-hidden shadow-sm" style={{ height: 420 }}>
          <DistribuidoresMap dealers={dealers} onSelect={handleMarkerClick} />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar por nombre, ciudad o estado..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white border border-gray-300 text-gray-900
                         pl-10 pr-4 py-2.5 text-sm
                         focus:outline-none focus:border-toyo-blue transition"
            />
          </div>
          <select
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
            className="bg-white border border-gray-300 text-gray-700
                       px-4 py-2.5 text-sm focus:outline-none focus:border-toyo-blue transition min-w-44"
          >
            {ALL_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <p className="text-xs text-gray-500 mb-6 font-display font-semibold">
          {filtered.length} distribuidor{filtered.length !== 1 ? 'es' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {filtered.map((d) => (
              <DealerCard
                key={d.id}
                dealer={d}
                highlighted={selected === d.id}
                cardRef={(el) => { cardRefs.current[d.id] = el }}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 p-12 text-center mb-16">
            <MapPin size={36} className="mx-auto mb-4 text-gray-300" />
            <p className="text-gray-500 font-display font-semibold">
              No hay tiendas para ese filtro
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="border border-gray-200 bg-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-gray-900 text-lg mb-1">
              ¿No encuentras un distribuidor cerca?
            </h3>
            <p className="text-sm text-gray-500">
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
