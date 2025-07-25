'use client';

import { useState, useEffect } from 'react';

export default function WhatsAppFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = '34649002658'; // Cambia por tu número real con código país sin +
  const message = encodeURIComponent('Hola, quiero información sobre AQUAZONE WaterPark');

  if (!isVisible) return null;

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110"
      style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.52 3.48a11.944 11.944 0 0 0-17 0c-4.63 4.63-4.63 12.13 0 16.76a11.89 11.89 0 0 0 7.1 3.48v-4.12a1.37 1.37 0 0 0-1.02-1.36 5.98 5.98 0 0 1-2.76-2.15 1.37 1.37 0 0 1 0-1.38l.76-1.16a1.37 1.37 0 0 1 1.15-.59h.12a4.68 4.68 0 0 1 2.62 1.14c.2.17.46.26.73.26.48 0 .94-.24 1.19-.66l.82-1.28a1.37 1.37 0 0 0-.24-1.88z" />
      </svg>
    </a>
  );
}
