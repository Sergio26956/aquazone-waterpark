'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { UploadCloud, ImagePlus, Video } from 'lucide-react'

type Archivo = {
  nombre: string
  tipo: 'imagen' | 'video'
  url: string
}

const archivosMock: Archivo[] = [
  {
    nombre: 'Parque Urbano 1',
    tipo: 'imagen',
    url: '/media/parque_urbano_1.jpg',
  },
  {
    nombre: 'Montaje 2025',
    tipo: 'video',
    url: '/media/montaje_2025.mp4',
  },
]

export default function GaleriaPrivada() {
  const [archivos, setArchivos] = useState<Archivo[]>(archivosMock)

  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Galería Privada de Archivos</h1>

      <div className="mb-6 flex gap-4">
        <Button variant="outline" className="flex items-center gap-2">
          <UploadCloud size={18} /> Subir Archivo
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {archivos.map((archivo, idx) => (
          <Card
            key={idx}
            className="rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
          >
            <CardContent className="p-4">
              <div className="mb-2 font-medium text-blue-600">{archivo.nombre}</div>
              {archivo.tipo === 'imagen' ? (
                <img
                  src={archivo.url}
                  alt={archivo.nombre}
                  className="rounded-md w-full object-cover h-48"
                />
              ) : (
                <video controls className="rounded-md w-full h-48 object-cover">
                  <source src={archivo.url} type="video/mp4" />
                </video>
              )}
              <div className="mt-2 flex gap-2">
                {archivo.tipo === 'imagen' ? (
                  <ImagePlus size={16} />
                ) : (
                  <Video size={16} />
                )}
                <span className="text-sm text-muted-foreground">{archivo.tipo}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  )
}
