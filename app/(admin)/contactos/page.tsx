import ContactosPanel from '@/components/admin/ContactosPanel';

export default function ContactosPage() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Contactos Recibidos</h1>
      <ContactosPanel />
    </main>
  );
}
