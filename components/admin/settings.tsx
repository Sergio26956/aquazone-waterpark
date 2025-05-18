"use client"

export function AdminSettings() {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-4">Configuración General</h2>
      <form className="grid gap-4 max-w-lg">
        <div>
          <label className="block text-sm mb-1">Nombre del Sitio</label>
          <input type="text" defaultValue="AQUAZONE Water Park" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email de contacto</label>
          <input type="email" defaultValue="info@aquazone.com" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm mb-1">Teléfono</label>
          <input type="text" defaultValue="+34 123 456 789" className="w-full border p-2 rounded" />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Guardar Cambios
        </button>
      </form>
    </div>
  )
}
