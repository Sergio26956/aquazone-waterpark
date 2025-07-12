'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/34649002658?text=Hola%2C%20quiero%20más%20información%20sobre%20AQUAZONE%20WaterPark"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed z-50 bottom-6 right-6 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl animate-bounce">
        <FaWhatsapp size={28} />
      </div>
    </a>
  );
}
