'use client';
import { useEffect, useState } from 'react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return visible ? (
    <a
      href="/contacto"
      className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 z-50"
    >
      ¡Reserva ahora!
    </a>
  ) : null;
}
