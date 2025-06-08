'use client';
import { useEffect, useState } from 'react';

export default function CookieConsent() {
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
      <p>Este sitio utiliza cookies para mejorar la experiencia.</p>
      <button onClick={acceptCookies} className="mt-2 bg-blue-500 px-4 py-2 rounded">
        Aceptar
      </button>
    </div>
  );
}
