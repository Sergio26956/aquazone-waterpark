"use client";
import { useState, useEffect } from "react";

export default function CookiesBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 text-center z-50">
      Usamos cookies para mejorar la experiencia.{" "}
      <button onClick={acceptCookies} className="ml-4 bg-blue-600 px-4 py-2 rounded text-white">
        Aceptar
      </button>
    </div>
  );
}
