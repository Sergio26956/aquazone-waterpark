'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold tracking-wide">
          AQUAZONE
        </Link>
        <div className="flex gap-6">
          <Link href="/flotantes" className="text-white hover:text-cyan-300 transition">
            Flotantes
          </Link>
          <Link href="/urbanos" className="text-white hover:text-cyan-300 transition">
            Urbanos
          </Link>
          <Link href="/admin" className="text-white hover:text-red-400 transition">
            Admin
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
