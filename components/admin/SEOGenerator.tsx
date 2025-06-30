"use client";

import { useState } from "react";
import { generarSEOTexto } from "@/lib/ai/seoAndSocial";

export default function SEOGenerator() {
  const [input, setInput] = useState("");
  const [resultado, setResultado] = useState("");

  const generar = async () => {
    const textoGenerado = await generarSEOTexto(input);
    setResultado(textoGenerado || "No se generó contenido.");
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-xl">
      <h2 className="text-xl font-bold mb-2">SEO + Social IA Generator</h2>
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows={4}
        placeholder="Describe el contenido..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={generar}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Generar
      </button>
      {resultado && (
        <div className="mt-4 whitespace-pre-wrap text-sm text-gray-700 border-t pt-2">
          {resultado}
        </div>
      )}
    </div>
  );
}y
