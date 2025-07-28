'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Trash2, User } from 'lucide-react'

const mockUsuarios = [
  { id: 1, nombre: 'Admin Sergio', rol: 'Administrador' },
  { id: 2, nombre: 'Editor Invitado', rol: 'Editor' },
]

export default function UsuariosPage() {
  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Gestión de Usuarios</h1>
        <Button variant="default" className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Nuevo Usuario
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockUsuarios.map((usuario) => (
          <motion.div
            key={usuario.id}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer"
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-blue-500/50 transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-center gap-4">
                  <User className="text-blue-600 w-10 h-10" />
                  <div>
                    <h2 className="text-xl font-semibold">{usuario.nombre}</h2>
                    <p className="text-gray-600">{usuario.rol}</p>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Button variant="destructive" size="sm">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Eliminar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
