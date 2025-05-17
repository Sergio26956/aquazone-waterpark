import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="h-screen flex flex-col items-center justify-center text-center p-4 bg-[url('/images/main-bg.jpg')] bg-cover bg-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h1 className="text-5xl font-bold text-white drop-shadow" whileHover={{ scale: 1.05 }}>
        AQUAZONE Water Park
      </motion.h1>
      <p className="text-white mt-4 text-lg max-w-xl">
        Diversión acuática flotante y terrestre. Atracciones móviles, modulares e inolvidables.
      </p>
      <Button className="mt-6 text-lg">Explorar Atracciones</Button>
    </motion.section>
  );
}
