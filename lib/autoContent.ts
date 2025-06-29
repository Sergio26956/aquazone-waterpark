export function generarTextoRedes(titulo: string, tipo: 'flotante' | 'urbano') {
  const base = tipo === 'flotante'
    ? '💧 Vive una experiencia única sobre el agua. Descubre nuestros parques flotantes en playas y piscinas. 🌊'
    : '🏙️ Llevamos la diversión a tu ciudad. Parques acuáticos móviles ideales para plazas y eventos. 🎉'

  return `${base}\n\n🔹 ${titulo}\n\n#AQUAZONE #Diversión #Verano2025`
}
