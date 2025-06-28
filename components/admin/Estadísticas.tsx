// Ruta: components/admin/Estadisticas.tsx
export default function Estadisticas() {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Estadísticas generales</h2>
      <ul className="space-y-2">
        <li>Visitas esta semana: 1.250</li>
        <li>Reservas confirmadas: 320</li>
        <li>Usuarios registrados: 540</li>
      </ul>
    </div>
  )
}
