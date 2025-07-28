"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 text-white pt-16 pb-6 px-6 md:px-16 shadow-inner">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 border-b border-blue-700 pb-10">
        {/* Logo & Descripción */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">AQUAZONE</h3>
          <p className="text-sm text-blue-200">
            Parques acuáticos modulares y urbanos móviles. Diversión y tecnología con visión al 2030.
          </p>
        </motion.div>

        {/* Enlaces rápidos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h4 className="text-lg font-semibold mb-3">Explorar</h4>
          <ul className="space-y-2 text-blue-200 text-sm">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/#categorias">Parques</Link></li>
            <li><Link href="/#galerias">Galerías</Link></li>
            <li><Link href="/#contacto">Contacto</Link></li>
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h4 className="text-lg font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-blue-200 text-sm">
            <li><Link href="/aviso-legal">Aviso Legal</Link></li>
            <li><Link href="/politica-privacidad">Política de Privacidad</Link></li>
            <li><Link href="/cookies">Política de Cookies</Link></li>
          </ul>
        </motion.div>

        {/* Redes sociales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h4 className="text-lg font-semibold mb-3">Síguenos</h4>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition"><FaInstagram /></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaTiktok /></a>
            <a href="mailto:info@aquazonewaterpark.com" className="hover:text-yellow-400 transition"><FaEnvelope /></a>
          </div>
        </motion.div>
      </div>

      <div className="text-center text-xs text-blue-300 pt-6">
        © {new Date().getFullYear()} AQUAZONE WaterPark. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
