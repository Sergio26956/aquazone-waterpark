'use client'

import Link from 'next/link'
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo y Nombre */}
        <div>
          <motion.img 
            src="/imagenes/logo.jpg"
            alt="Logo Aquazone"
            className="w-24 h-24 object-contain mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          />
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Aquazone Waterpark. Todos los derechos reservados.</p>
        </div>

        {/* Navegación rápida */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navegación</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/terrestres">Parques Terrestres</Link></li>
            <li><Link href="/flotantes">Parques Flotantes</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Síguenos</h3>
          <div className="flex space-x-6 text-2xl">
            <motion.a 
              href="https://www.instagram.com"
              target="_blank"
              whileHover={{ scale: 1.3 }}
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram />
            </motion.a>
            <motion.a 
              href="https://www.facebook.com"
              target="_blank"
              whileHover={{ scale: 1.3 }}
              className="hover:text-blue-500 transition-colors"
            >
              <FaFacebook />
            </motion.a>
            <motion.a 
              href="https://www.tiktok.com"
              target="_blank"
              whileHover={{ scale: 1.3 }}
              className="hover:text-white transition-colors"
            >
              <FaTiktok />
            </motion.a>
          </div>
        </div>

      </div>
    </footer>
  )
}
