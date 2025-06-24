"use client";
import { useState } from "react";
import AnimatedButton from "./AnimatedButton";

export default function CampaingManager() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    setSent(true);
    setTimeout(() => setSent(false), 2000);
  };

  return (
    <div className="bg-white/10 p-6 rounded-xl shadow-xl">
      <h2 className="text-white text-xl font-bold mb-4">📢 Campañas Promocionales</h2>
      <textarea
        placeholder="Escribe tu anuncio aquí..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-3 rounded-md text-black"
      />
      <div className="mt-4">
        <AnimatedButton text="Enviar a Suscriptores" onClick={handleSend} />
        {sent && <p className="text-green-400 mt-2">✅ Campaña enviada</p>}
      </div>
    </div>
  );
}
