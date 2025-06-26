'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaWater, FaShip, FaSwimmer } from 'react-icons/fa'

const buttons = [
  {
    label: 'Parques Flotantes',
    href: '/parques/flotantes',
    icon: <FaShip className="text-xl mr-2" />,
  },
  {
    label: 'Parques Urbanos',
    href: '/parques/urbanos',
    icon: <FaSwimmer className="text-xl mr-2" />,
  },
  {
    label: 'Atracciones',
    href: '/atracciones',
    icon: <FaWater className="text-xl mr-2" />,
  },
]

export default function MainButtons() {
  return (
    <motion.div
      className="flex flex-wrap justify-center items-center gap-4 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {buttons.map((btn, index) => (
        <Link
          key={index}
          href={btn.href}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full shadow-lg transition-all transform hover:scale-105"
        >
          {btn.icon}
          {btn.label}
        </Link>
      ))}
    </motion.div>
  )
}
