// Tire database — Toyo Tires Venezuela / DEAR C.A. (lista de precios Noviembre 2026)

export const tireDatabase = {
  openCountry: {
    at3: {
      name:         "Open Country A/T III",
      line:         "Open Country",
      category:     "all-terrain",
      vehicleTypes: ["camioneta", "suv"],
      image:        "/images/productos/open-country-at3/frontal.png",
      description:  "El neumático todoterreno más versátil para uso diario y aventuras fuera de la carretera.",
      features: [
        "Equilibrio perfecto on-road / off-road",
        "Kilometraje extendido hasta 65,000 millas",
        "Excelente tracción en mojado",
        "Marcha silenciosa en carretera",
      ],
      sizes: [
        "255/70 R16 115T L.B.",
        "LT 265/75 R16 123/120R 10PR L.B.",
        "LT 285/75 R16 126/123R 10PR L.B.",
        "LT 295/75 R16 128/125R 10PR",
        "LT 315/75 R16 127/124R 10PR",
        "33X12.50 R17 124S 12PR",
        "245/65 R17 111T XL L.B.",
        "265/65 R17 116T",
        "275/65 R17 115T",
        "LT 265/70 R17 121/118S 10PR L.B.",
        "LT 275/70 R17 124/121T 10PR",
        "LT 285/70 R17 121/118S 10PR L.B.",
        "LT 315/70 R17 121/118S 8PR",
        "LT 265/60 R18 119/116S",
        "285/60 R18 120S",
        "265/65 R18 114T",
        "LT 275/65 R18 113/110T 6PR L.B.",
        "275/65 R18 116T",
        "LT 285/65 R18 125/122S 10PR",
        "265/70 R18 116T",
        "LT 275/70 R18 125/122S 10PR L.B.",
        "LT 285/70 R18 127/124S 10PR",
        "LT 285/75 R18 129/126S 10PR",
        "LT 255/55 R19 115/112S 10PR",
        "35X11.50 R20 LT 124R 10PR",
        "285/50 R20 116T",
        "275/55 R20 117T",
        "LT 285/55 R20 122/119T 10PR",
        "LT 305/55 R20 121/118S 10PR",
        "275/60 R20 115T",
        "285/60 R20 116T",
        "285/45 R22 114H",
        "305/45 R22 118S",
      ],
    },

    mt: {
      name:         "Open Country M/T",
      line:         "Open Country",
      category:     "off-road",
      vehicleTypes: ["camioneta", "suv"],
      image:        "/images/productos/open-country-mt/frontal.png",
      description:  "Neumático de lodo extremo para aventuras todoterreno intensas y caminos más exigentes.",
      features: [
        "Tracción superior en lodo y rocas",
        "Diseño agresivo de bloques",
        "Construcción robusta de 3 capas",
        "Flancos reforzados",
      ],
      sizes: [
        "LT 305/70 R16 124/121P 10PR",
        "LT 265/75 R16 123/120P 10PR",
        "LT 285/75 R16 126P 10PR",
        "LT 315/75 R16 121P 8PR",
        "LT 255/85 R16 123/120P 10PR",
        "35X12.50 R17 LT 125Q 10PR",
        "37X13.50 R17 LT 131Q 10PR",
        "40X13.50 LT R17 121Q",
        "LT 265/70 R17 121/118P 10PR",
        "LT 285/70 R17 121/118P 10PR",
        "LT 295/70 R17 128P 10PR",
        "LT 315/70 R17 121Q",
        "33X12.50 R18 LT 118Q 10PR",
        "35X12.50 R18 LT 123Q 10PR",
        "37X13.50 R18 LT 124Q 8PR",
        "38X13.50 R18 LT 126Q 8PR",
        "LT 275/70 R18 125/122P 10PR",
        "LT 285/75 R18 129/126P 10PR",
        "33X12.50 LT R20 114Q",
        "35X12.50 R20 LT 121Q 10PR",
        "37X13.50 R20 LT 127Q 10PR",
        "38X13.50 R20 LT 124Q 8PR",
      ],
    },

    rt: {
      name:         "Open Country R/T",
      line:         "Open Country",
      category:     "all-terrain",
      vehicleTypes: ["camioneta", "suv"],
      image:        "/images/productos/open-country-rt/frontal.png",
      description:  "Híbrido robusto que combina capacidad todoterreno con confort en carretera.",
      features: [
        "Diseño híbrido A/T y M/T",
        "Letras blancas en relieve",
        "Tracción agresiva off-road",
        "Rodamiento suave on-road",
      ],
      sizes: [
        "LT 265/75 R16 112/109Q 6PR L.B. REL",
        "35X12.50 R17 LT 121Q 10PR",
        "LT 265/70 R17 112/109Q 6PR L.B. REL",
        "LT 285/70 R17 116/113Q 6PR L.B. REL",
        "LT 275/55 R20 115/112Q 8PR L.B. REL",
        "LT 305/55 R20 115/112Q 8PR L.B. REL",
      ],
    },

    rtTrail: {
      name:         "Open Country R/T Trail",
      line:         "Open Country",
      category:     "all-terrain",
      vehicleTypes: ["camioneta", "suv"],
      image:        "/images/productos/open-country-rt-trail/frontal.png",
      description:  "Diseñado para aventureros que buscan más capacidad off-road sin sacrificar confort.",
      features: [
        "Mayor tracción todoterreno que A/T tradicional",
        "Menos ruido que neumáticos M/T dedicados",
        "Excelente en arena, lodo y nieve profunda",
        "Construcción duradera para los caminos más difíciles",
      ],
      sizes: [
        "LT 265/75 R16 123Q",
        "LT 285/75 R16 126/123Q",
        "35X12.50 R17 LT 125Q",
        "37X12.50 R17 LT 128S",
        "LT 265/70 R17 123Q",
        "LT 275/70 R17 124/121S 10PR",
        "LT 285/70 R17 126/123Q",
        "LT 295/70 R17 128/125Q 10PR",
        "LT 315/70 R17 121Q",
        "LT 285/75 R17 128/125Q",
        "33X12.50 R18 LT 118Q 12PR",
        "35X12.50 R18 LT 128Q 12PR",
        "LT 285/65 R18 125/122S 10PR",
        "LT 275/70 R18 125/122Q 10PR",
        "LT 285/75 R18 129/126R 10PR",
        "33X12.50 R20 LT 114Q 10PR",
        "35X12.50 LT R20 125Q",
        "275/55 R20 117T XL",
        "LT 285/55 R20 122/119Q 10PR",
        "LT 285/60 R20 125R",
        "LT 295/60 R20 126Q",
        "285/45 R22 114T",
      ],
    },

  },

  proxes: {
    sport2: {
      name:         "Proxes Sport 2",
      line:         "Proxes",
      category:     "performance",
      vehicleTypes: ["auto", "suv"],
      image:        "/images/productos/proxes-sport-2/frontal.png",
      description:  "Neumático de alto rendimiento para manejo preciso y agarre excepcional en seco y mojado.",
      features: [
        "Manejo preciso en curvas cerradas",
        "Agarre excepcional mojado y seco",
        "Estabilidad mejorada en alta velocidad",
        "Garantía de 25,000 millas",
      ],
      sizes: [
        "215/45 ZR17 91W",
        "225/45 ZR17 94Y",
        "245/45 ZR17 99Y",
        "215/50 ZR17 95W",
        "225/50 ZR17 98Y",
        "235/55 R18 100V",
        "285/30 ZR20 99Y XL",
        "255/35 ZR20 97Y",
      ],
    },

    st3: {
      name:         "Proxes ST III",
      line:         "Proxes",
      category:     "performance",
      vehicleTypes: ["suv"],
      image:        "/images/productos/proxes-st3/frontal.png",
      description:  "Neumático de alto rendimiento diseñado específicamente para SUVs deportivos exigentes.",
      features: [
        "Optimizado para SUVs de alto rendimiento",
        "Excelente estabilidad en curvas",
        "Tracción superior en condiciones húmedas",
        "Diseño deportivo agresivo",
      ],
      sizes: [
        "215/60 R17 100V",
        "275/60 R17 110V",
        "225/65 R17 106V XL",
        "255/55 R18 109V",
        "255/50 R19 107V XL",
        "225/55 R19 99V",
        "255/55 R19 111V XL",
        "295/45 R20 114V XL",
        "255/50 R20 109V XL",
        "265/50 R20 111V XL",
        "285/50 R20 116V",
        "305/50 R20 120V XL",
        "275/55 R20 117V XL",
        "275/50 R21 113V",
      ],
    },

    r888r: {
      name:         "Proxes R888R",
      line:         "Proxes",
      category:     "competition",
      vehicleTypes: ["auto"],
      image:        "/images/productos/proxes-r888r/frontal.png",
      description:  "Neumático de competición DOT para pista, autocross y uso en calle de alto rendimiento.",
      features: [
        "Diseñado para uso en pista",
        "Compuesto de alta adherencia",
        "Respuesta instantánea al volante",
        "Aprobado DOT para uso en calle",
      ],
      sizes: [
        "345/30 ZR19 105Y",
        "255/35 ZR20 93Y",
      ],
    },

    comfort: {
      name:         "Proxes Comfort",
      line:         "Proxes",
      category:     "todo-año",
      vehicleTypes: ["auto", "suv"],
      image:        "/images/productos/proxes-comfort/frontal.png",
      description:  "Neumático premium enfocado en comodidad, conducción silenciosa y larga duración.",
      features: [
        "Experiencia de conducción ultra silenciosa",
        "Excelente estabilidad a alta velocidad",
        "Frenado superior en mojado y seco",
        "Calificado altamente por ADAC y ÖAMTC",
      ],
      sizes: [
        "205/65 R16 95W",
        "225/45 R17 94V",
        "225/50 R17 98W",
        "235/55 R17 99V",
        "245/45 R18 100W",
        "225/50 R18 95W",
        "235/55 R18 100V",
      ],
    },

    tm1: {
      name:         "Proxes TM1",
      line:         "Proxes",
      category:     "todo-año",
      vehicleTypes: ["auto"],
      image:        "/images/productos/proxes-tm1/frontal.png",
      description:  "Neumático deportivo touring con excelente equilibrio de rendimiento y bajo nivel de ruido.",
      features: [
        "Diseño direccional en V atractivo",
        "Excelente control en seco y mojado",
        "Bajo nivel de ruido",
        "Logo Toyo Tires grabado en banda central",
      ],
      sizes: [
        "195/50 R15 86V",
        "205/50 R15 89V",
        "205/55 R16 94V",
        "215/55 R16 97V",
        "205/45 R17 88W",
        "225/45 R17 94W",
        "205/50 R17 93V",
        "215/50 ZR17 95W",
        "225/50 ZR17 98W",
        "215/55 R17 98V",
        "225/55 R17 101V",
        "225/40 ZR18 92W",
        "225/45 R18 95W",
        "235/50 R18 101W",
      ],
    },


    vimode2: {
      name:         "Proxes Vi-Mode II",
      line:         "Proxes",
      category:     "performance",
      vehicleTypes: ["auto"],
      image:        "/images/productos/proxes-vi-mode-2/frontal.png",
      description:  "Neumático deportivo moderno con diseño único Falcon Wing y compuesto de sílice avanzado.",
      features: [
        "Diseño moderno Falcon Wing Block",
        "Compuesto de sílice avanzado",
        "Excelente frenado en húmedo y seco",
        "Reducción significativa de ruido",
      ],
      sizes: [
        "185/65 R14 86H",
        "195/60 R15 88H",
      ],
    },
  },
}

/* ── Helpers ─────────────────────────────────────── */

export function filterTires({ vehicleType, productLine, tireUse, tireName } = {}) {
  const lineData = productLine === 'Open Country'
    ? tireDatabase.openCountry
    : productLine === 'Proxes'
    ? tireDatabase.proxes
    : { ...tireDatabase.openCountry, ...tireDatabase.proxes }

  return Object.values(lineData).filter((model) => {
    if (vehicleType && !model.vehicleTypes.includes(vehicleType)) return false
    if (tireUse     && model.category !== tireUse)                 return false
    if (tireName    && model.name     !== tireName)                 return false
    return true
  })
}

export function getRimSizes() {
  const sizes = new Set()
  const all = { ...tireDatabase.openCountry, ...tireDatabase.proxes }
  Object.values(all).forEach((model) => {
    model.sizes.forEach((size) => {
      const m = size.match(/R(\d+)/)
      if (m) sizes.add(parseInt(m[1]))
    })
  })
  return Array.from(sizes).sort((a, b) => a - b)
}

/* ── Slug map (key → URL slug) ───────────────────── */

export const keyToSlug = {
  at3:     'open-country-at3',
  mt:      'open-country-mt',
  rt:      'open-country-rt',
  rtTrail: 'open-country-rt-trail',
  sport2:  'proxes-sport-2',
  st3:     'proxes-st3',
  r888r:   'proxes-r888r',
  comfort: 'proxes-comfort',
  tm1:     'proxes-tm1',
  vimode2: 'proxes-vi-mode-2',
}

export const slugToEntry = {
  'open-country-at3':      { line: 'openCountry', key: 'at3' },
  'open-country-mt':       { line: 'openCountry', key: 'mt' },
  'open-country-rt':       { line: 'openCountry', key: 'rt' },
  'open-country-rt-trail': { line: 'openCountry', key: 'rtTrail' },
  'proxes-sport-2':        { line: 'proxes',      key: 'sport2' },
  'proxes-st3':            { line: 'proxes',      key: 'st3' },
  'proxes-r888r':          { line: 'proxes',      key: 'r888r' },
  'proxes-comfort':        { line: 'proxes',      key: 'comfort' },
  'proxes-tm1':            { line: 'proxes',      key: 'tm1' },
  'proxes-vi-mode-2':      { line: 'proxes',      key: 'vimode2' },
}

export function getTireBySlug(slug) {
  const entry = slugToEntry[slug]
  if (!entry) return null
  return tireDatabase[entry.line]?.[entry.key] ?? null
}

export default tireDatabase
