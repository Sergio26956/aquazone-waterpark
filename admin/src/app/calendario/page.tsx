'use client';

import { useEffect, useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface Evento {
  fecha: Date;
  nombre: string;
}

const eventosFicticios: Evento[] = [
  { fecha: new Date(2025, 7, 15), nombre: 'Evento Playa Valencia' },
  { fecha: new Date(2025, 7, 20), nombre: 'AQUAZONE Sevilla Centro' },
  { fecha: new Date(2025, 7, 27), nombre: 'Fiesta Hinchables Badajoz' },
];

export default function CalendarioPage() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState<Date | undefined>(undefined);

  useEffect(() => {
    setEventos(eventosFicticios); // futuro: conectar a API backend
  }, []);

  const eventoDelDía = eventos.find((evento) =>
    fechaSeleccionada &&
    evento.fecha.toDateString() === fechaSeleccionada.toDateString()
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col md:flex-row items-center justify-center p-6 gap-6 min-h-[80vh] bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-inner"
    >
      <Card className="max-w-md w-full shadow-xl border border-blue-200 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-blue-700">Calendario de Reservas</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={fechaSeleccionada}
            onSelect={setFechaSeleccionada}
            className="rounded-xl border border-blue-100"
          />
        </CardContent>
      </Card>

      {fechaSeleccionada && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center mt-6 md:mt-0"
        >
          {eventoDelDía ? (
            <div className="bg-green-100 p-4 rounded-xl shadow-lg border border-green-300">
              <p className="text-lg font-semibold text-green-700">📆 {eventoDelDía.nombre}</p>
              <p className="text-sm text-gray-700">{eventoDelDía.fecha.toDateString()}</p>
            </div>
          ) : (
            <div className="bg-yellow-100 p-4 rounded-xl border border-yellow-300 shadow-sm">
              <p className="text-base text-yellow-800">No hay eventos programados este día.</p>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
