import Link from 'next/link';
import Image from 'next/image';

export default function ParquesTerrestres() {
  return (
    <main className="min-h-screen bg-white text-black p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Parques Acuáticos Terrestres</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Urbano Móvil 5 Actividades */}
        <Link href="/terrestres/urbano" className="group block relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
          <Image
            src="/images/urbano_categoria.jpg"
            alt="Parque Urbano Móvil"
            width={800}
            height={600}
            className="w-full h-64 object-cover group-hover:opacity-80"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xl font-semibold p-4 text-center">
            Parque Acuático Urbano Móvil<br />
            (5 Actividades)
          </div>
        </Link>

        {/* Kamikaze Jump */}
        <Link href="/terrestres/kamikaze" className="group block relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
          <Image
            src="/images/kamikaze_categoria.jpg"
            alt="Kamikaze Jump"
            width={800}
            height={600}
            className="w-full h-64 object-cover group-hover:opacity-80"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xl font-semibold p-4 text-center">
            Kamikaze Jump
          </div>
        </Link>
      </div>
    </main>
  );
}
