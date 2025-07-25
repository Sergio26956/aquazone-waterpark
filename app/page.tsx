'use client';

import SoraVideoGenerator from '@/components/SoraVideoGenerator';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-100 to-blue-300 p-6">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-800 drop-shadow-lg">AQUAZONE WaterPark</h1>
        <p className="text-lg text-gray-700 mt-2">Generador de Videos AI – Tecnología Sora</p>
      </header>

      <section className="max-w-4xl mx-auto">
        <SoraVideoGenerator />
      </section>

      <footer className="text-center text-gray-600 mt-12 text-sm">
        &copy; {new Date().getFullYear()} AQUAZONE WaterPark. Todos los derechos reservados.
      </footer>
    </main>
  );
}
