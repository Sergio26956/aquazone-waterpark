'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CalendarCheck, ImageIcon, Users2 } from 'lucide-react';

const cards = [
  {
    title: 'Gestión de Imágenes',
    icon: <ImageIcon className="h-12 w-12 text-blue-500" />,
    href: '/admin/galerias',
  },
  {
    title: 'Calendario Personal',
    icon: <CalendarCheck className="h-12 w-12 text-green-500" />,
    href: '/admin/calendario',
  },
  {
    title: 'Usuarios Registrados',
    icon: <Users2 className="h-12 w-12 text-yellow-500" />,
    href: '/admin/usuarios',
  },
];

export default function DashboardPage() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {cards.map((card) => (
        <motion.div
          key={card.title}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card
            onClick={() => router.push(card.href)}
            className="cursor-pointer rounded-2xl shadow-xl hover:shadow-blue-300 transition-all border border-muted bg-gradient-to-br from-white to-slate-100 dark:from-zinc-900 dark:to-zinc-800"
          >
            <CardContent className="flex flex-col items-center p-6">
              {card.icon}
              <h2 className="mt-4 text-xl font-semibold text-center">
                {card.title}
              </h2>
              <Button variant="outline" className="mt-4">
                Acceder
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
