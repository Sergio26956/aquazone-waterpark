"use client"

import { useRouter } from "next/navigation"

export default function FiltroCategorias() {
  const router = useRouter()

  const handleClick = (ruta: string) => {
    router.push(ruta)
  }

  return (
    <div className="flex justify-center gap-4 my-8">
      <button onClick={() => handleClick("/categorias/flotantes")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Parques Flotantes
      </button>
      <button onClick={() => handleClick("/categorias/urbanos")} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
        Parques Urbanos
      </button>
    </div>
  )
}
