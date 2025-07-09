import Card from '@/components/Card';

export default function FlotantesPage() {
  return (
    <section className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Parques Acuáticos Flotantes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="Playa Modular"
          image="/images/flotante-playa.jpg"
          href="#"
        />
        <Card
          title="Piscina Hinchable"
          image="/images/flotante-piscina.jpg"
          href="#"
        />
      </div>
    </section>
  );
}
