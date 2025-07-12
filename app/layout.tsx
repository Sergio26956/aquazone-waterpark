import './globals.css';
import { Inter } from 'next/font/google';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AQUAZONE Water Park',
  description: 'Parques acuáticos innovadores y espectaculares',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
