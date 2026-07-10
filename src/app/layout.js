import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata = {
  title: {
    default:  'Toyo Tires Venezuela | Distribuidor Oficial — DEAR C.A.',
    template: '%s | Toyo Tires Venezuela',
  },
  description:
    'Distribuidor oficial de llantas Toyo Tires en Venezuela desde 1967. Amplio catálogo de neumáticos para camionetas, SUVs y autos deportivos. Encuentra tu tienda más cercana.',
  keywords: [
    'Toyo Tires Venezuela',
    'llantas Venezuela',
    'neumáticos Venezuela',
    'Toyo Tires',
    'distribuidor Toyo Venezuela',
    'cauchos Venezuela',
    'llantas Caracas',
    'Open Country Venezuela',
    'Proxes Venezuela',
    'DEAR CA Venezuela',
  ],
  authors: [{ name: 'DEAR C.A.' }],
  creator: 'DEAR C.A.',
  metadataBase: new URL('https://toyotires.com.ve'),
  alternates: { canonical: '/' },
  openGraph: {
    type:        'website',
    locale:      'es_VE',
    url:         'https://toyotires.com.ve',
    siteName:    'Toyo Tires Venezuela',
    title:       'Toyo Tires Venezuela | Distribuidor Oficial — DEAR C.A.',
    description: 'Distribuidor oficial de llantas Toyo Tires en Venezuela desde 1967. Open Country, Proxes y más.',
    images: [{
      url:    '/images/og-image.jpg',
      width:  1200,
      height: 630,
      alt:    'Toyo Tires Venezuela',
    }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Toyo Tires Venezuela | Distribuidor Oficial',
    description: 'Llantas Toyo Tires en Venezuela — calidad japonesa desde 1967.',
    images:      ['/images/og-image.jpg'],
  },
  robots: {
    index:          true,
    follow:         true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-snippet':       -1,
      'max-image-preview': 'large',
    },
  },
  verification: {
    google: 'BZOONLEPbNVCucGtDI5h_fl0ZL2bRAfF_Jq_JTTHS7w',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
