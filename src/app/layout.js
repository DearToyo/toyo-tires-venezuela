import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata = {
  title: 'Toyo Tires Venezuela | DEAR C.A. - Distribuidor Oficial',
  description: 'Distribuidor oficial de neumáticos Toyo Tires en Venezuela. Encuentra la llanta perfecta para tu vehículo con garantía y calidad japonesa.',
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
