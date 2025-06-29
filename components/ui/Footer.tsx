'use client'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h3 className="font-bold text-xl mb-2">AQUAZONE</h3>
          <p>Experiencias inolvidables donde el agua cobra vida.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li><a href="/legal" className="hover:underline">Aviso legal</a></li>
            <li><a href="/cookies" className="hover:underline">Cookies</a></li>
            <li><a href="/privacidad" className="hover:underline">Política de privacidad</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Síguenos</h4>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <FaFacebookF className="hover:text-cyan-400 cursor-pointer" />
            <FaInstagram className="hover:text-cyan-400 cursor-pointer" />
            <FaYoutube className="hover:text-cyan-400 cursor-pointer" />
          </div>
        </div>
      </div>
      <motion.div
        className="text-center mt-8 text-sm text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        © {new Date().getFullYear()} AQUAZONE. Todos los derechos reservados.
      </motion.div>
    </footer>
  )
}
