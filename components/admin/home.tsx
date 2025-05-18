export function AdminHome() {
  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold mb-4">Panel de Administración</h1>
      <p className="mb-6 text-neutral-600">Bienvenido. Desde aquí puedes gestionar tus actividades.</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="border p-4 rounded shadow hover:shadow-lg transition">
          <h2 className="font-semibold mb-2">Calendario de reservas</h2>
          <p>Visualiza y organiza las fechas contratadas.</p>
        </div>
        <div className="border p-4 rounded shadow hover:shadow-lg transition">
          <h2 className="font-semibold mb-2">Gestión de usuarios</h2>
          <p>Accede al registro de usuarios registrados.</p>
        </div>
      </div>
    </section>
  )
}
