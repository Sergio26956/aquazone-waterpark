'use client';
import { useState, useEffect } from 'react';

export default function CookiesNotice() {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('cookiesAccepted');
    if (!stored) setAccepted(false);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 text-center z-50">
      Este sitio utiliza cookies para mejorar la experiencia.{' '}
      <button onClick={acceptCookies} className="ml-4 bg-blue-500 px-4 py-1 rounded">Aceptar</button>
    </div>
  );
}
