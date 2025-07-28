"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Calendar, LogOut } from "lucide-react";

const navItems = [
  { label: "Panel", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Calendario", href: "/admin/calendar", icon: Calendar },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.aside
      initial={{ width: expanded ? 240 : 80 }}
      animate={{ width: expanded ? 240 : 80 }}
      transition={{ duration: 0.3 }}
      className="h-screen bg-black/90 text-white flex flex-col border-r border-white/10 shadow-xl relative"
    >
      <div className="flex justify-end p-3">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-white hover:text-cyan-400 transition"
        >
          {expanded ? "<<" : ">>"}
        </button>
      </div>

      <nav className="flex-1 space-y-2 px-3 mt-4">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link key={href} href={href}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className={`flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-all ${
                  isActive
                    ? "bg-cyan-600 text-white shadow-md"
                    : "hover:bg-white/10"
                }`}
              >
                <Icon size={20} />
                {expanded && <span className="text-sm">{label}</span>}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      <div className="p-3 border-t border-white/10 mt-auto">
        <button className="flex items-center gap-2 w-full text-sm hover:text-cyan-400 transition">
          <LogOut size={18} />
          {expanded && <span>Cerrar sesión</span>}
        </button>
      </div>
    </motion.aside>
  );
}
