const atracciones = [
  "Toboganes gigantes",
  "Rampas acuáticas",
  "Circuitos modulares",
  "Zonas para saltos",
  "Kamikaze Jump",
  "Piscinas inflables",
]

const Atracciones = () => {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-6">Atracciones Disponibles</h1>
      <ul className="list-disc list-inside space-y-2">
        {atracciones.map((nombre, i) => (
          <li key={i}>{nombre}</li>
        ))}
      </ul>
    </div>
  )
}

export default Atracciones
