"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Image, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Title } from "@/components/ui/admin/common/Title";

export default function AdminDashboardPage() {
  useEffect(() => {
    document.title = "Panel de Control | AQUAZONE 2030";
  }, []);

  const cards = [
    {
      title: "Gestor de medios",
      icon: <Image className="w-8 h-8 text-blue-500" />,
      href: "/admin/media",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Calendario de eventos",
      icon: <CalendarDays className="w-8 h-8 text-green-500" />,
      href: "/admin/calendar",
      color: "from-green-500 to-green-700",
    },
    {
      title: "Gestión de usuarios",
      icon: <Users className="w-8 h-8 text-purple-500" />,
      href: "/admin/users",
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Title text="Panel de Control General" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {cards.map((card, i) => (
          <motion.a
            key={i}
            href={card.href}
            className={`rounded-2xl p-6 text-white bg-gradient-to-br ${card.color} shadow-xl hover:scale-105 transition-transform`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="flex items-center gap-4">
              {card.icon}
              <div className="text-lg font-semibold">{card.title}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
