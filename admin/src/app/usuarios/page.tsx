"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface Usuario {
  id: number;
  nombre: string;
  rol: string;
  email: string;
}

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/usuarios")
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen p-6 md:p-10 bg-gradient-to-bl from-slate-950 to-blue-900 text-white">
      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Usuarios Administrativos
      </motion.h1>

      {loading ? (
        <div className="flex items-center justify-center h-60">
          <Loader2 className="w-10 h-10 text-blue-200 animate-spin" />
        </div>
      ) : usuarios.length === 0 ? (
        <p className="text-center text-blue-300 text-xl">No hay usuarios registrados.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usuarios.map((usuario) => (
            <motion.div
              key={usuario.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: usuario.id * 0.02 }}
            >
              <Card className="bg-slate-800 border border-blue-400/30 rounded-2xl shadow-xl">
                <CardContent className="p-6 text-white">
                  <p><strong>Nombre:</strong> {usuario.nombre}</p>
                  <p><strong>Email:</strong> {usuario.email}</p>
                  <p><strong>Rol:</strong> {usuario.rol}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
