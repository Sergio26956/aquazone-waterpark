"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const menuItems = [
  { name: "Inicio", href: "/" },
  { name: "Parques Flotantes", href: "/flotantes" },
  { name: "Parques Terrestres", href: "/terrestres" },
  { name: "Zona Exclusiva", href: "/admin" },
  { name: "Contacto", href: "/contacto" },
];

export default function MainMenu() {
  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md rounded-full shadow-md px-6 py-2 flex gap-4 text-sm font-semibold"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="hover:text-cyan-600 transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </motion.nav>
  );
}
