"use client"

import { useState } from "react"

const SubidaMultimedia = () => {
  const [archivos, setArchivos] = useState<FileList | null>(null)
  const [mensaje, setMensaje] = useState("")

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault()
    if (!archivos) {
      setMensaje("Selecciona un archivo para subir.")
      return
    }

    // Aquí se subiría a servidor o Firebase
    setMensaje(`${archivos.length} archivo(s) preparados para subir.`)
  }

  return (
    <div className="min-h-screen p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-6">Subida de Imágenes y Vídeos</h1>
      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="file"
          accept="image/*,video/*"
          multiple
          onChange={(e) => setArchivos(e.target.files)}
          className="block"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Subir Archivos
        </button>
        {mensaje && <p className="text-green-600">{mensaje}</p>}
      </form>
    </div>
  )
}

export default SubidaMultimedia
