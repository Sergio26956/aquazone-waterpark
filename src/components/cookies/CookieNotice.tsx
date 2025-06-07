'use client';
import { useState, useEffect } from 'react';

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white p-4 text-center z-50">
      <p className="mb-2">Usamos cookies para mejorar tu experiencia. Al continuar, aceptas nuestro uso de cookies.</p>
      <button onClick={acceptCookies} className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">
        Aceptar
      </button>
    </div>
  );
}
