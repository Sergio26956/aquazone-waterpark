'use client'

import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-bold text-cyan-400">AQUAZONE</h3>
          <p className="text-sm text-gray-300">
            Parques acuáticos hinchables flotantes y urbanos móviles. Innovación, diversión y calidad garantizadas.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h4 className="text-md font-semibold text-cyan-300">Enlaces</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-cyan-400">Inicio</a></li>
            <li><a href="/terrestres/urbano" className="hover:text-cyan-400">Parques Urbanos</a></li>
            <li><a href="/flotantes" className="hover:text-cyan-400">Parques Flotantes</a></li>
            <li><a href="/contacto" className="hover:text-cyan-400">Contacto</a></li>
          </ul>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <h4 className="text-md font-semibold text-cyan-300">Síguenos</h4>
          <div className="flex space-x-4 text-lg text-white">
            <a href="#" className="hover:text-cyan-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-cyan-400"><FaInstagram /></a>
            <a href="#" className="hover:text-cyan-400"><FaTiktok /></a>
            <a href="#" className="hover:text-cyan-400"><FaWhatsapp /></a>
          </div>
        </motion.div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} AQUAZONE WATER PARK. Todos los derechos reservados.
      </div>
    </footer>
  )
}
