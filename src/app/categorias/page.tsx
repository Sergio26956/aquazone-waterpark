'use client'
import UrbanoModuleCard from '@/components/cards/UrbanoModuleCard'
import FlotanteModuleCard from '@/components/cards/FlotanteModuleCard'

export default function CategoriasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-900 mb-10 text-center">
        Categorías de Parques Acuáticos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        <UrbanoModuleCard />
        <FlotanteModuleCard />
      </div>
    </div>
  )
}
