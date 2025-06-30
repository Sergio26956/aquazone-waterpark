"use client";

import { useState } from "react";
import { generarCampaña } from "@/lib/ai/campaignGenerator";

export default function CampaingManager() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const lanzarGenerador = async () => {
    const data = await generarCampaña(input);
    setOutput(data || "No se generó contenido.");
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">IA - Generador de Campañas</h2>
      <textarea
        className="w-full p-2 border rounded mb-3"
        placeholder="Escribe una idea base..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
      />
      <button
        onClick={lanzarGenerador}
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Generar campaña
      </button>
      {output && (
        <div className="mt-4 p-3 bg-gray-50 border rounded text-sm whitespace-pre-wrap">
          {output}
        </div>
      )}
    </div>
  );
}
