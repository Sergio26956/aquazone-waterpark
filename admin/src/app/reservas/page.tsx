"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface Reserva {
  id: number;
  nombre: string;
  email: string;
  fecha: string;
  mensaje: string;
}

export default function ReservasPage() {
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reservas")
      .then((res) => res.json())
      .then((data) => {
        setReservas(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen p-6 md:p-10 bg-gradient-to-br from-sky-950 to-blue-900 text-white">
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Reservas Recibidas
      </motion.h1>

      {loading ? (
        <div className="flex items-center justify-center h-60">
          <Loader2 className="animate-spin w-10 h-10 text-blue-300" />
        </div>
      ) : reservas.length === 0 ? (
        <p className="text-center text-xl text-blue-200">No hay reservas.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reservas.map((reserva) => (
            <motion.div
              key={reserva.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: reserva.id * 0.02 }}
            >
              <Card className="bg-blue-800 text-white border border-blue-400/30 shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <p><strong>Nombre:</strong> {reserva.nombre}</p>
                  <p><strong>Email:</strong> {reserva.email}</p>
                  <p><strong>Fecha:</strong> {reserva.fecha}</p>
                  <p><strong>Mensaje:</strong> {reserva.mensaje}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
