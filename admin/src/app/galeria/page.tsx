"use client";

import { useEffect, useState } from "react"; import { Card, CardContent } from "@/components/ui/card"; import { motion } from "framer-motion"; import { Loader2 } from "lucide-react";

interface MediaItem { id: string; url: string; tipo: "imagen" | "video"; }

export default function GaleriaPage() { const [media, setMedia] = useState<MediaItem[]>([]); const [loading, setLoading] = useState(true);

useEffect(() => { fetch("/api/media") .then((res) => res.json()) .then((data) => { setMedia(data); setLoading(false); }); }, []);

return ( <div className="min-h-screen p-6 md:p-10 bg-gradient-to-br from-blue-950 to-indigo-900 text-white"> <motion.h1 className="text-3xl md:text-5xl font-bold mb-10 text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} > Galería de Medios </motion.h1>

<Card className="bg-slate-900/80 border border-indigo-400/20 rounded-2xl shadow-xl mb-8">
    <CardContent className="p-6 text-center text-sm text-indigo-300">
      Aquí puedes ver todos los medios subidos desde el área privada. Fotos y vídeos del parque acuático y actividades.
    </CardContent>
  </Card>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {loading ? (
      <div className="col-span-full flex justify-center py-10">
        <Loader2 className="animate-spin w-8 h-8 text-indigo-300" />
      </div>
    ) : media.length === 0 ? (
      <p className="text-gray-400 col-span-full">No hay medios disponibles aún.</p>
    ) : (
      media.map((item) => (
        <motion.div
          key={item.id}
          className="rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {item.tipo === "imagen" ? (
            <img src={item.url} alt="" className="w-full h-64 object-cover" />
          ) : (
            <video
              src={item.url}
              controls
              className="w-full h-64 object-cover bg-black"
            />
          )}
        </motion.div>
      ))
    )}
  </div>
</div>

); }

