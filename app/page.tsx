"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

const Home = () => {
  const router = useRouter()

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-300 to-cyan-400 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center space-y-6 max-w-xl"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          AQUAZONE WATER PARK
        </motion.h1>
        <p className="text-lg">
          Parques acuáticos móviles y flotantes. Diversión asegurada para playas, ciudades y eventos.
        </p>
        <Button
          className="text-lg px-6 py-4 bg-white text-blue-500 hover:bg-blue-100 font-bold"
          onClick={() => router.push("/parques")}
        >
          Ver Parques Acuáticos
        </Button>
      </motion.div>
    </main>
  )
}

export default Home
