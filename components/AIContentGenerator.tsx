"use client";
import { useState } from "react";
import AnimatedButton from "./AnimatedButton";

export default function AIContentGenerator() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");

  const handleGenerate = async () => {
    setResult(`Generando contenido IA para: "${topic}"...`);
    setTimeout(() => {
      setResult(`✅ Contenido generado automáticamente sobre "${topic}". Puedes editarlo o publicarlo.`);
    }, 1500);
  };

  return (
    <div className="bg-white/10 rounded-xl p-6 w-full shadow-xl">
      <h2 className="text-white text-xl font-semibold mb-4">🧠 Generador de Contenido IA</h2>
      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="w-full p-3 rounded-md text-black mb-3"
        placeholder="Introduce el tema o título..."
      />
      <AnimatedButton text="Generar Contenido" onClick={handleGenerate} />
      {result && (
        <p className="text-green-300 mt-4 bg-black/20 rounded-lg p-4">{result}</p>
      )}
    </div>
  );
}
