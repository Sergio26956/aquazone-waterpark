'use client'
import { motion } from 'framer-motion'

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-10"
      >
        Sobre Nosotros
      </motion.h1>

      <section className="max-w-5xl mx-auto text-gray-700 text-lg space-y-6">
        <p>
          En <strong>AQUAZONE</strong>, somos líderes en la creación de experiencias acuáticas únicas en Europa. Desde parques flotantes en lagos hasta instalaciones urbanas móviles, nuestra pasión es el entretenimiento seguro, innovador y adaptado a todas las edades.
        </p>
        <p>
          Trabajamos con los mejores materiales, garantizando la calidad y seguridad de cada atracción. Nuestro equipo cuenta con años de experiencia en organización de eventos, producción y parques acuáticos hinchables.
        </p>
        <p>
          Queremos que cada visitante viva momentos inolvidables, por eso apostamos por el diseño espectacular, la tecnología visual más impactante y la máxima accesibilidad.
        </p>
      </section>
    </main>
  )
}
