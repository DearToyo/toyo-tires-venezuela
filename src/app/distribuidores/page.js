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
  'CARACAS':                  [10.4806,  -66.9036],
  'SAN ANTONIO DE LOS ALTOS': [10.3742,  -67.0306],
  'CAUCAGUITA':               [10.4833,  -66.7167],
  'LOS TEQUES':               [10.3439,  -67.0408],
  'VALENCIA':                 [10.1765,  -67.9763],
  'NAGUANAGUA':               [10.2500,  -68.0000],
  'MARACAIBO':                [10.6306,  -71.6406],
  'BARQUISIMETO':             [10.0678,  -69.3467],
  'CARORA':                   [10.1667,  -70.0833],
  'ACARIGUA':                 [ 9.5600,  -69.2000],
  'BARINAS':                  [ 8.6235,  -70.2072],
  'MARACAY':                  [10.2389,  -67.5938],
  'TURMERO':                  [10.2294,  -67.4769],
  'SAN CRISTOBAL':            [ 7.7664,  -72.2253],
  'CORO':                     [11.3989,  -69.6722],
  'VALERA':                   [ 9.3167,  -70.6000],
  'CUMANA':                   [10.4503,  -64.1833],
  'BARCELONA':                [10.1308,  -64.6933],
  'PUERTO LA CRUZ':           [10.2119,  -64.6386],
  'SAN FELIX':                [ 8.3739,  -62.6636],
  'CIUDAD GUAYANA':           [ 8.3539,  -62.6558],
  'PUERTO ORDAZ':             [ 8.2949,  -62.7282],
  'CIUDAD BOLIVAR':           [ 8.1217,  -63.5497],
  'UPATA':                    [ 8.0142,  -62.3932],
}

function coords(city, index) {
  const base = CITY_COORDS[city.toUpperCase().trim()] || [8.0, -66.0]
  const offset = (n) => (n % 7 - 3) * 0.018
  return [base[0] + offset(index * 3), base[1] + offset(index * 5 + 1)]
}

/* ── Dealer data from Excel ────────────────────────────── */
const rawDealers = [
  // ── CARACAS / Distrito Capital ──────────────────────────────
  { name: 'NEUMASTER 28 C.A.',                                          city: 'CARACAS', state: 'Miranda',          direccion: 'Av. Ppal. Colinas de Bello Monte con Av. Leonardo Da Vinci S/N, Sector Est. de Servicios' },
  { name: 'MULTISERVICIOS CICLON LOS CHAGUARAMOS C.A.',                 city: 'CARACAS', state: 'Distrito Capital', direccion: 'Calle Bellas Artes entre Av. Ciencias y El Estadium, Qta. Susana' },
  { name: 'ROYAL AUTORAMA C.A.',                                        city: 'CARACAS', state: 'Distrito Capital', direccion: 'Avda. Tamanaco N° 9, El Rosal' },
  { name: 'GRUPO TIRES GUNS 401, CA',                                   city: 'CARACAS', state: 'Distrito Capital', direccion: 'Av. Páez, Edif. Saumell Palace, PB, Local A, Urb. El Paraíso' },
  { name: 'SERVIEXPRESS PASEO LA CASTELLANA 19, CA',                    city: 'CARACAS', state: 'Distrito Capital', direccion: 'Calle José Félix Ribas con Av. Ppal. La Castellana, Local 10, Urb. La Castellana' },
  { name: 'INVERSIONES HFJ 4X4 RUSTICARS, CA',                          city: 'CARACAS', state: 'Distrito Capital', direccion: 'Calle Primera c/c Transversal Izquierda, Edif. Yanucci, PB, Local LCPB-A, Urb. Boleíta' },
  { name: 'CAUCHOS LOS TAVARES C.A',                                    city: 'CARACAS', state: 'Distrito Capital', direccion: '1era Transv. c/c La Línea, Los Dos Caminos' },
  { name: 'SKY TIRES 7, CA',                                            city: 'CARACAS', state: 'Miranda',          direccion: 'Calle Sanatorio del Ávila entre Calle Vargas y Av. Ppal. Boleíta Norte, Edif. Comercial PB' },
  { name: 'NUEVA CARACAS CAUCHOS 2021, CA',                             city: 'CARACAS', state: 'Distrito Capital', direccion: 'Av. Las Ciencias y Calle Razzeti, Local S/N, Sector Casco Central, Santa Mónica' },
  { name: 'SPEED RACING C.A.',                                          city: 'CARACAS', state: 'Distrito Capital', direccion: 'Av. El Estadium entre Calle Sanz y Risquez, Los Chaguaramos' },
  { name: 'IMPORTACIONES Y EXPORTACIONES EQUIMAR, CA',                  city: 'CARACAS', state: 'Distrito Capital', direccion: 'Av. El Estadium con Calle Sanz, Qta. Belén, Sector III, Urb. Los Chaguaramos' },
  { name: 'RACING RUEDAS 99 C.A',                                       city: 'CARACAS', state: 'Distrito Capital', direccion: 'Av. Sucre, Galpón N° 38, Local D, Los Dos Caminos' },
  { name: 'CORPORACION EXIAUTO CA',                                     city: 'CARACAS', state: 'Distrito Capital', direccion: 'Av. Principal de Los Ruices, Edif. Exiauto, Local Exiauto Toyota, Urb. Los Ruices' },
  { name: 'INVERSIONES SARAY CRJ C.A.',                                 city: 'CARACAS', state: 'Distrito Capital', direccion: 'Calle Stadium con Alma Mater, Qta. Santa Eduvigis, Los Chaguaramos' },
  { name: 'CORPORACION ROCO 4WD PERFORMANCE, CA',                       city: 'CARACAS', state: 'Distrito Capital', direccion: 'Av. Libertador c/Calle El Muñeco, Local N° 27, Urb. Chacao' },
  { name: 'AUTOSERVICIOS Y CAUCHOS AVILA, CA',                          city: 'CARACAS', state: 'Miranda',          direccion: 'Av. Libertador esq. Calle José Félix Sosa, Local N° 10-11, Urb. Bello Campo, Chacao' },
  { name: 'RADIAL SUPER GOMA. C.A.',                                    city: 'CARACAS', state: 'Distrito Capital', direccion: 'Av. Simón Planas, Qta. Guaricavila, Santa Mónica' },
  { name: 'MULTISERVICIOS DAKAR C.A.',                                  city: 'CARACAS', state: 'Distrito Capital', direccion: 'Primera Avenida Sur, Altamira, Edif. 2015-222, Piso Mezz.' },
  { name: 'MULTISERVICIOS LUCENYEPEZ 4X4 CA',                           city: 'CARACAS', state: 'Distrito Capital', direccion: 'Calle Real Prados de María, Est. de Serv. PDV N° 1-2, Urb. Prados de María' },
  { name: 'NOMAD 4WD CA',                                               city: 'CARACAS', state: 'Distrito Capital', direccion: 'Calle San Ignacio de Loyola, Qta. Italmueble, Piso 1, Urb. Chacao' },

  // ── MIRANDA ─────────────────────────────────────────────────
  { name: 'CAUCHOS ACCESORIOS TOÑO WHEELS 028 CA',                      city: 'SAN ANTONIO DE LOS ALTOS', state: 'Miranda', direccion: 'Ctra. Panamericana Km 13, CC Capo di Monte, Nivel PB, Locales PB1 y PB2' },
  { name: 'CAUCHOS Y ACCESORIOS PARA AUTOS LA RECTA DE LAS MINAS 2120', city: 'SAN ANTONIO DE LOS ALTOS', state: 'Miranda', direccion: 'Ctra. Panamericana, CC Club de Campo, Nivel PS, Local S2-1, Las Minas Km 16' },
  { name: 'INVERSIONES JFDG 4X4, CA',                                   city: 'CAUCAGUITA',               state: 'Miranda', direccion: 'Calle Principal, Sector Parque Kaiza, Edif. Les Suites, Piso 1, Of. 1-4, Urb. Miravila' },
  { name: 'MULTISERVICIOS JEMA EL TAMBOR C.A.',                         city: 'LOS TEQUES',               state: 'Miranda', direccion: 'Av. Pedro Russo Ferrer, Local N° 4, Galpón S/N, Urb. El Tambor' },

  // ── CARABOBO ────────────────────────────────────────────────
  { name: 'LLANTAS J.M. 2018, C.A',                                     city: 'VALENCIA',   state: 'Carabobo', direccion: 'Calle 91 Michelena N° Cívico 86-19, Local S/N, Urb. La Michelena' },
  { name: 'HM LLANTAS VALENCIA, C.A',                                   city: 'VALENCIA',   state: 'Carabobo', direccion: 'Calle 1, Parcela Integrada, Local N° F2-B, Urb. Industrial La Caracarita, Güigüe' },
  { name: 'EXPOTIRES, C.A',                                             city: 'VALENCIA',   state: 'Carabobo', direccion: 'Calle 123, Local 103-18, Zona Primera Sección, Urb. San Gerardo' },
  { name: 'TOYOVAL C.A',                                                city: 'VALENCIA',   state: 'Carabobo', direccion: 'Av. Bolívar Norte, Local N° 108-118, Sector San José' },
  { name: 'SPEED SHOP 01 C.A.',                                         city: 'VALENCIA',   state: 'Carabobo', direccion: 'Av. Bolívar Norte a 100 mts. Redoma de Guaparo' },
  { name: 'PROTIRES LOS COLEGIOS, C.A',                                 city: 'VALENCIA',   state: 'Carabobo', direccion: 'Av. 101, Casa Parcela N° 11, Urb. Guaparo, Manzana 14, N° 155-91' },
  { name: 'LLANTAVAL C.A.',                                             city: 'VALENCIA',   state: 'Carabobo', direccion: 'Av. 68, Local Parcela N° 155, Zona Parque Industrial La Quizanda' },
  { name: 'TIRESPEED VALENCIA CA.',                                     city: 'VALENCIA',   state: 'Carabobo', direccion: 'Av. Montes de Oca cruce con Rojas Queipo, Edif. Gardilin, Of. 0102' },
  { name: 'TECNOCAUCHOS EL VIÑEDO C.A.',                                city: 'VALENCIA',   state: 'Carabobo', direccion: 'Av. Carlos Sanda, Local N° 105-67, Urb. Viñedo' },
  { name: 'RUEDAS + C.A.',                                              city: 'NAGUANAGUA', state: 'Carabobo', direccion: 'Av. Universidad N° 102 con Calle 187, Local N° 187-7' },
  { name: 'AUTO BOOM SERVICES, C.A',                                    city: 'NAGUANAGUA', state: 'Carabobo', direccion: 'Calle Naguanagua N° Cívico 184-69, Local N/I' },
  { name: 'SUSPENSION Y ACCESORIOS NAGUANAGUA 4X4 C.A.',                city: 'NAGUANAGUA', state: 'Carabobo', direccion: 'Calle Hermogenes López c/Av. Universidad, Local N° 180-153, Barrio Nueva Esparta' },

  // ── ZULIA ───────────────────────────────────────────────────
  { name: 'RUEDAS DARIO, C.A.',                                         city: 'MARACAIBO', state: 'Zulia', direccion: 'Av. 60 entre Calle 68 y 68A, Local N° 68-30, Urb. Los Olivos' },
  { name: 'ZU CAUCHO EXPRESS, C.A',                                     city: 'MARACAIBO', state: 'Zulia', direccion: 'Calle 67 (Cecilio Acosta), Local N° 3H-12' },
  { name: 'MULTICAUCHO LA LIMPIA, C.A',                                 city: 'MARACAIBO', state: 'Zulia', direccion: 'Av. La Limpia, Calle 70, Local N° 85-91, Sector Ayacucho' },

  // ── LARA ────────────────────────────────────────────────────
  { name: 'RALI CAUCHOS C.A',                                           city: 'BARQUISIMETO', state: 'Lara', direccion: 'Av. Libertador con Av. Morán y Vereda 2, Casa N° 2A, Urb. Bararida' },
  { name: 'TIRES SHOP, C.A',                                            city: 'BARQUISIMETO', state: 'Lara', direccion: 'Cr. 19 esq. Calle 12, Local N° 1, Sector Centro' },
  { name: 'OFFROAD 4WD, C.A',                                           city: 'BARQUISIMETO', state: 'Lara', direccion: 'Cr. 25 entre Calles 27 y 28, Local N° 27-62, Sector Centro' },
  { name: 'SUPER CAUCHOS MERCABAR, S.A',                                city: 'BARQUISIMETO', state: 'Lara', direccion: 'Av. Moyetones con Calle D, Local S/N, Zonal Industrial III' },
  { name: 'RESERCAUCHOS CHURUN CA.',                                    city: 'BARQUISIMETO', state: 'Lara', direccion: 'Av. Lara, Carrera 1 con Calle 8, CC Churún Merún, Nivel B, Local D-06, Urb. Nueva Segovia' },
  { name: 'TOYOSOL, C.A',                                               city: 'CARORA',       state: 'Lara', direccion: 'Av. Francisco de Miranda cruce con Calle 32, Local Toyosol, Urb. Santa Rita' },

  // ── PORTUGUESA ──────────────────────────────────────────────
  { name: 'AMERICAN CAUCHOS C.A',                                       city: 'ACARIGUA', state: 'Portuguesa', direccion: 'Calle 32 entre Av. 25 y 26, Local N° 01, Sector Prolongación' },

  // ── BARINAS ─────────────────────────────────────────────────
  { name: 'SUPER CAUCHOS LOS LLANOS C.A.',                              city: 'BARINAS', state: 'Barinas', direccion: 'Av. Agustín Codazzi N° 6, Sector Vista Hermosa' },

  // ── ARAGUA ──────────────────────────────────────────────────
  { name: 'CAUCHOS UNIVERSAL D.C.S. C.A.',                              city: 'MARACAY', state: 'Aragua', direccion: 'Av. Los Cedros con Calle El Canal, Edif. Rosa María, PB' },
  { name: 'EUROCAUCHOS MILENIUM C.A.',                                  city: 'MARACAY', state: 'Aragua', direccion: 'Av. Intercomunal Santiago Mariño con Calle Las Industrias' },
  { name: 'CAUCHOS CAMPO ELIAS C.A.',                                   city: 'MARACAY', state: 'Aragua', direccion: 'Calle Campo Elias, Casa Galpón N° 13, Sector La Romana' },
  { name: 'QUIK SERVICE ELITE, C.A',                                    city: 'MARACAY', state: 'Aragua', direccion: 'Av. Sucre cruce con Calle Tercera, Local N° A-1, Urb. La Soledad' },
  { name: 'G.P TIRES LA ENCRUCIJADA, C.A',                             city: 'TURMERO', state: 'Aragua', direccion: 'Av. Intercomunal Santiago Mariño, Local Fundo La Purica N° A32, La Encrucijada' },
  { name: 'G & D CAR´S SHOP, C.A',                                     city: 'TURMERO', state: 'Aragua', direccion: 'Av. Intercomunal Maracay-Turmero, CC Empresarial y de Servicios Villas del Este, PB, Local N° 19' },

  // ── TÁCHIRA ─────────────────────────────────────────────────
  { name: 'ENRIQUE JAVIER BORRAS SEPULVEDA',                            city: 'SAN CRISTOBAL', state: 'Táchira', direccion: 'Carrera 19 con Calle 13 Victoria, PB, Local 1, Barrio Obrero' },
  { name: 'JHONATHAN ENRIQUE CASTAÑEDA S.',                             city: 'SAN CRISTOBAL', state: 'Táchira', direccion: 'Carrera 9, Sector La Concordia, Casa N° 4-134' },
  { name: 'CENTER CAUCHOS PUEBLO NUEVO C.A.',                           city: 'SAN CRISTOBAL', state: 'Táchira', direccion: 'Av. Principal de Pueblo Nuevo N° 18-49, Sector La Popita' },

  // ── FALCÓN ──────────────────────────────────────────────────
  { name: 'TODO CAUCHOS CORO C.A.',                                     city: 'CORO', state: 'Falcón', direccion: 'Av. Ramón Antonio Medina con Calle Las Brisas, Casa S/N, San José' },

  // ── TRUJILLO ────────────────────────────────────────────────
  { name: 'TECNI CAUCHOS VALERA, C.A',                                  city: 'VALERA', state: 'Trujillo', direccion: 'Calle 8 con Calle Maya, Local Galpones G.B Inca, Sector La Plata' },

  // ── SUCRE ───────────────────────────────────────────────────
  { name: 'CENTRO DEL CAUCHO C.A',                                      city: 'CUMANA', state: 'Sucre', direccion: 'Av. Gómez Rubio, frente al Parque Cumaná' },

  // ── ANZOÁTEGUI ──────────────────────────────────────────────
  { name: 'NASCAR TYRE CENTER CA',                                      city: 'PUERTO LA CRUZ', state: 'Anzoátegui', direccion: 'Av. Nueva Esparta, Local S/N, Sector Venecia' },
  { name: 'NEUMATICOS AQUI VC, CA',                                     city: 'BARCELONA',      state: 'Anzoátegui', direccion: 'Av. Jorge Rodríguez, Edif. 4-7, Piso 1, Local 1, Sector Las Colinas del Neverí' },

  // ── BOLÍVAR ─────────────────────────────────────────────────
  { name: 'TECNI CAUCHOS CHIRICA C.A.',                                 city: 'SAN FELIX',      state: 'Bolívar', direccion: 'Av. Antonio Cisneros S/N, Zona Industrial Chirica, frente Estación Chirica' },
  { name: 'SUPER CAUCHOS LA VICTORIA, CA',                              city: 'UPATA',          state: 'Bolívar', direccion: 'Ctra. Nacional Upata–San Félix, Local Galpón N° 1, Sector Santo Domingo' },
  { name: 'MULTICAUCHOS LA UNIDAD C.A.',                                city: 'SAN FELIX',      state: 'Bolívar', direccion: 'Av. Manuel Piar, Sector La Unidad, frente Plaza Las Batallas' },
  { name: 'MULTISERVICIOS Y CAUCHERA LOS GOCHOS CA',                    city: 'SAN FELIX',      state: 'Bolívar', direccion: 'Av. Gerónimo Ortal cruce con Calle 4 (Calle Ramírez), Local S/N, Sector Centro' },
  { name: 'RADI-CAR CENTER COMPAÑIA ANONIMA',                           city: 'PUERTO ORDAZ',   state: 'Bolívar', direccion: 'Av. Guayana, CC Ciudad Alta Vista, Local N° 30, Urb. Alta Vista Sur' },
  { name: 'CAUCHOS PORRUA C.A.',                                        city: 'PUERTO ORDAZ',   state: 'Bolívar', direccion: 'Calle Oriente S/N, Sector Castillito' },
  { name: 'RADICAR MULTISERVICIOS & ACCESORIOS 4X4, C.A',              city: 'CIUDAD GUAYANA', state: 'Bolívar', direccion: 'Av. Guayana, CC Ciudad Alta Vista I, Nivel Piso 2, Locales 25, 26 y 27, Sector Alta Vista' },
  { name: 'GRUPO MM4WD, CA',                                            city: 'CIUDAD GUAYANA', state: 'Bolívar', direccion: 'Calle Manzana 02, Parcela N° 01, Local N° 06, Urb. Los Samanes' },
  { name: 'MULTICAUCHOS EL POLACO, CA',                                 city: 'CIUDAD BOLIVAR', state: 'Bolívar', direccion: 'Av. Raúl Leoni, Edif. Rossi, PB, Local N° 1, Urb. Bicentenario' },
  { name: '4WHEELS, CA',                                                city: 'CIUDAD BOLIVAR', state: 'Bolívar', direccion: 'Av. República c/c Calle Vidal, Local N° 81, Sector República, Parroquia Catedral' },
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
        {dealer.state} · {dealer.city}
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
