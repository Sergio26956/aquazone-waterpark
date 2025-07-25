import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
