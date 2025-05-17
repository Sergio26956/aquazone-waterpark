"use client";

import { useState, useEffect } from "react";

export default function CookiesBanner() {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("cookiesAccepted");
    if (!saved) setAccepted(false);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white p-4 text-sm flex justify-between items-center">
      <span>Este sitio usa cookies para mejorar la experiencia.</span>
      <button onClick={handleAccept} className="bg-blue-600 px-3 py-1 rounded">Aceptar</button>
    </div>
  );
}
