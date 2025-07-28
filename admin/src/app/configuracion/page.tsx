"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Loader2, Save } from "lucide-react";

interface Configuracion {
  tituloSitio: string;
  emailContacto: string;
  telefonoContacto: string;
  colorPrimario: string;
}

export default function ConfiguracionPage() {
  const [config, setConfig] = useState<Configuracion>({
    tituloSitio: "",
    emailContacto: "",
    telefonoContacto: "",
    colorPrimario: "#1e40af",
  });

  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);

  useEffect(() => {
    fetch("/api/configuracion")
      .then((res) => res.json())
      .then((data) => {
        setConfig(data);
        setLoading(false);
      });
  }, []);

  const handleGuardar = async () => {
    setGuardando(true);
    await fetch("/api/configuracion", {
      method: "POST",
      body: JSON.stringify(config),
      headers: { "Content-Type": "application/json" },
    });
    setTimeout(() => setGuardando(false), 1200); // Simulación
  };

  return (
    <div className="min-h-screen p-6 md:p-10 bg-gradient-to-bl from-slate-950 to-indigo-900 text-white">
      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Configuración Global
      </motion.h1>

      {loading ? (
        <div className="flex items-center justify-center h-60">
          <Loader2 className="w-10 h-10 text-blue-200 animate-spin" />
        </div>
      ) : (
        <Card className="bg-slate-800 border border-indigo-400/30 rounded-2xl shadow-xl max-w-2xl">
          <CardContent className="p-6 text-white space-y-6">
            <div>
              <label className="block mb-1">Título del sitio</label>
              <Input
                value={config.tituloSitio}
                onChange={(e) => setConfig({ ...config, tituloSitio: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-1">Email de contacto</label>
              <Input
                type="email"
                value={config.emailContacto}
                onChange={(e) => setConfig({ ...config, emailContacto: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-1">Teléfono de contacto</label>
              <Input
                value={config.telefonoContacto}
                onChange={(e) => setConfig({ ...config, telefonoContacto: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-1">Color primario</label>
              <Input
                type="color"
                value={config.colorPrimario}
                onChange={(e) => setConfig({ ...config, colorPrimario: e.target.value })}
                className="w-20 h-10 p-1"
              />
            </div>
            <Button onClick={handleGuardar} className="mt-4 gap-2" disabled={guardando}>
              {guardando ? (
                <>
                  <Loader2 className="animate-spin h-4 w-4" /> Guardando...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" /> Guardar cambios
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
