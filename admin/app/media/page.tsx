"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { UploadCloud, FolderImage } from "lucide-react";
import { Title } from "@/components/ui/admin/common/Title";
import { Button } from "@/components/ui/button";

export default function MediaManagerPage() {
  useEffect(() => {
    document.title = "Gestor de Medios | AQUAZONE 2030";
  }, []);

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Title text="Gestor de Medios" />
      <div className="mt-6 flex flex-col md:flex-row items-center gap-6">
        <motion.div
          className="flex-1 bg-gradient-to-br from-sky-500 to-sky-700 p-6 rounded-2xl text-white shadow-xl"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <UploadCloud className="w-10 h-10" />
            <h3 className="text-xl font-semibold">Subir nuevo archivo</h3>
          </div>
          <Button variant="secondary" className="bg-white text-sky-700 hover:bg-sky-200 transition-all">
            Seleccionar archivo
          </Button>
        </motion.div>

        <motion.div
          className="flex-1 bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 rounded-2xl text-white shadow-xl"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <FolderImage className="w-10 h-10" />
            <h3 className="text-xl font-semibold">Ver todos los medios</h3>
          </div>
          <Button variant="secondary" className="bg-white text-indigo-700 hover:bg-indigo-200 transition-all">
            Ir a galería
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
