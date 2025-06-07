import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SEOHead from '@/components/seo/SEOHead';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AQUAZONE Water Park',
  description: 'Los parques acuáticos más espectaculares del mundo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <SEOHead />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
