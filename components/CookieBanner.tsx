"use client";

import { useState, useEffect } from "react";

export default function CookiesBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  function acceptCookies() {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white border shadow-md p-4 rounded-xl flex items-center justify-between z-50">
      <span className="text-sm text-gray-700">
        Usamos cookies para mejorar tu experiencia. Al continuar aceptas nuestra política.
      </span>
      <button
        onClick={acceptCookies}
        className="ml-4 px-4 py-1 bg-blue-600 text-white rounded-lg"
      >
        Aceptar
      </button>
    </div>
  );
}
