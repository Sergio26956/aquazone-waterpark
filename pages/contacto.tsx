import ContactoForm from '@/components/ContactoForm';

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-700 p-8 flex flex-col items-center">
      <h1 className="text-white text-4xl font-bold mb-8">Contacto AQUAZONE WaterPark</h1>
      <ContactoForm />
    </main>
  );
}
