'use client'
import { FaWater, FaSwimmer, FaMobileAlt } from 'react-icons/fa'
import FeatureCard from './FeatureCard'

export default function FeaturesGrid() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-10">
        ¿Por qué elegir AQUAZONE?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <FeatureCard
          icon={<FaWater />}
          title="Parques Flotantes"
          description="Disfruta de estructuras acuáticas sobre lagos y piscinas naturales."
        />
        <FeatureCard
          icon={<FaSwimmer />}
          title="Atracciones Terrestres"
          description="Actividades emocionantes como toboganes gigantes, saltos Kamikaze y mucho más."
        />
        <FeatureCard
          icon={<FaMobileAlt />}
          title="Diseño Móvil"
          description="Parques portátiles y eventos acuáticos en cualquier parte del país."
        />
      </div>
    </section>
  )
}
