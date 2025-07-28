"use client";

import { usePathname } from "next/navigation";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();

  const titleMap: { [key: string]: string } = {
    "/admin": "Panel de Control",
    "/admin/galeria": "Gestión de Galería",
    "/admin/eventos": "Gestión de Eventos",
  };

  const currentTitle = titleMap[pathname] || "Zona Administrativa";
  const currentDate = format(new Date(), "EEEE dd 'de' MMMM yyyy", { locale: es });

  return (
    <header className="w-full h-20 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-6">
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-white"
      >
        <h2 className="text-xl font-semibold">{currentTitle}</h2>
        <p className="text-sm text-zinc-400">{currentDate}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="hidden md:block text-sm text-cyan-400 font-mono"
      >
        Modo Avanzado 2030 ⚙️
      </motion.div>
    </header>
  );
}
