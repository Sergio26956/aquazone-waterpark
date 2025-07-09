import Card from '@/components/Card';

export default function UrbanosPage() {
  return (
    <section className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Parques Acuáticos Urbanos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="Kamikaze Jump"
          image="/images/urbano-kamikaze.jpg"
          href="#"
        />
        <Card
          title="Deslizador Extremo"
          image="/images/urbano-deslizador.jpg"
          href="#"
        />
      </div>
    </section>
  );
}
