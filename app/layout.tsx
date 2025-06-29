import './globals.css'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import { ReactNode } from 'react'

export const metadata = {
  title: 'AQUAZONE Waterpark',
  description: 'Parques acuáticos modulares flotantes y urbanos móviles',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
