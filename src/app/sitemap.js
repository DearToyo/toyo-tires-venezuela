export default function sitemap() {
  const base = 'https://toyotires.com.ve'
  const now  = new Date().toISOString()

  return [
    { url: base,                      lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/productos`,       lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/buscador`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/distribuidores`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/embajadores`,     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/nosotros`,        lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${base}/contacto`,        lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
  ]
}
