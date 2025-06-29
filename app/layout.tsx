import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AQUAZONE Water Park | Parques Acuáticos Inmersivos 2030',
  description: 'Parques acuáticos flotantes y urbanos de última generación. Tecnología del futuro disponible hoy. Vive AQUAZONE.',
  keywords: ['parques acuáticos', 'AQUAZONE', 'hinchables', 'flotantes', 'acuáticos urbanos', '2025', '2030', 'innovación', 'realidad inmersiva'],
  authors: [{ name: 'AQUAZONE' }],
  creator: 'AQUAZONE',
  metadataBase: new URL('https://aquazone-waterpark.com'),
  openGraph: {
    title: 'AQUAZONE Water Park',
    description: 'Vive el agua como nunca antes. Tecnología, innovación y adrenalina.',
    url: 'https://aquazone-waterpark.com',
    siteName: 'AQUAZONE Water Park',
    images: [
      {
        url: '/images/og.jpg',
        width: 1200,
        height: 630,
        alt: 'AQUAZONE',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/icons/favicon.ico" />
        <meta name="theme-color" content="#00bcd4" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
