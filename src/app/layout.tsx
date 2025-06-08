import './globals.css';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'AQUAZONE Water Park',
  description: 'Parques acuáticos móviles y flotantes – diversión sin límites',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
