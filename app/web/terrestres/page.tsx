export default function TerrestresPage() {
  return (
    <main className="min-h-screen bg-blue-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Parques Acuáticos Terrestres</h1>
      <p className="mb-6">Atracciones en seco, inflables móviles y estructuras urbanas.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/10 p-6 rounded-xl">Kamikaze Jump</div>
        <div className="bg-white/10 p-6 rounded-xl">Splash Urban</div>
        <div className="bg-white/10 p-6 rounded-xl">Toboganes</div>
        <div className="bg-white/10 p-6 rounded-xl">Piscinas móviles</div>
        <div className="bg-white/10 p-6 rounded-xl">Circuito urbano</div>
      </div>
    </main>
  );
}
