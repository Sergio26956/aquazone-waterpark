'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

const reservasMock = {
  '2025-08-03': 'Evento Privado - Sevilla',
  '2025-08-10': 'Montaje Alqueva Producciones',
  '2025-08-15': 'Parque Acuático Urbano - Badajoz',
}

export default function CalendarioPage() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState<Date | undefined>()

  const infoReserva = fechaSeleccionada
    ? reservasMock[format(fechaSeleccionada, 'yyyy-MM-dd')]
    : null

  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Calendario de Contrataciones</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <Calendar
              mode="single"
              selected={fechaSeleccionada}
              onSelect={setFechaSeleccionada}
              locale={es}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6">
            {fechaSeleccionada ? (
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  {format(fechaSeleccionada, 'PPP', { locale: es })}
                </h2>
                {infoReserva ? (
                  <Badge variant="default" className="text-sm">
                    {infoReserva}
                  </Badge>
                ) : (
                  <p className="text-gray-500">Sin eventos registrados</p>
                )}
              </div>
            ) : (
              <p className="text-gray-500">Selecciona una fecha en el calendario</p>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
