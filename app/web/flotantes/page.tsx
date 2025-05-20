export default function FlotantesPage() {
  return (
    <main className="min-h-screen bg-blue-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Parques Acuáticos Flotantes</h1>
      <p className="mb-6">Atracciones modulares sobre piscinas, playas o entornos naturales.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/10 p-6 rounded-xl">Piscinas flotantes</div>
        <div className="bg-white/10 p-6 rounded-xl">Playas flotantes</div>
      </div>
    </main>
  );
}
