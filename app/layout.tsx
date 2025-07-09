import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

export const metadata = {
  title: 'AQUAZONE WaterPark',
  description: 'Parques acuáticos flotantes y urbanos de nueva generación.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-black text-white">
        <NavBar />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
