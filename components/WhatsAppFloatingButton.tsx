'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '+34666111222'; // Cambia por tu número real
const DEFAULT_MESSAGE = 'Hola, estoy interesado en sus parques acuáticos.';

export default function WhatsAppFloatingButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg z-50"
          aria-label="Chat WhatsApp"
          title="Contacta por WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M20.52 3.48A11.92 11.92 0 0012.01 0C5.37 0 .05 5.32.05 11.95a11.82 11.82 0 001.63 6.05L0 24l6.3-1.62a11.94 11.94 0 005.71 1.47c6.64 0 12.01-5.32 12.01-11.95a11.9 11.9 0 00-3.5-8.42zM12 21.45a9.4 9.4 0 01-4.85-1.38l-.35-.21-3.74.97.99-3.64-.23-.37a9.35 9.35 0 1111.57 5.63 9.24 9.24 0 01-3.39.99zm5.07-6.56c-.27-.14-1.6-.79-1.85-.88s-.43-.14-.61.14-.7.88-.86 1.06-.32.21-.6.07a7.92 7.92 0 01-2.33-1.43 8.62 8.62 0 01-1.59-1.97c-.17-.29 0-.44.12-.58s.27-.32.41-.48a.56.56 0 00.19-.31.64.64 0 00-.09-.45c-.27-.67-.78-1.15-1.13-1.56a1.14 1.14 0 01-.1-1.06c.07-.21.61-1.48.84-2.03a.7.7 0 00-.01-.65c-.04-.11-.61-1.48-.85-2.04s-.43-.48-.61-.48-.43-.01-.66-.01a1 1 0 00-.73.34 2.94 2.94 0 00-1 2.23 7.69 7.69 0 001.5 3.68 10.43 10.43 0 005.16 4.42c.72.31 1.28.25 1.76.15a2.56 2.56 0 001.54-1.12 2.79 2.79 0 00.2-1.13c-.02-.19-.08-.31-.27-.44z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
