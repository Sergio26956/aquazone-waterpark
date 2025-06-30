"use client";

import React, { useState } from "react"; import { Button } from "@/components/ui/button"; import { Input } from "@/components/ui/input"; import { Textarea } from "@/components/ui/textarea"; import { Upload } from "@/components/Upload"; import { AIContentGenerator } from "@/components/AIContentGenerator"; import { Gallery } from "@/components/Gallery";

export default function EditorInteligente() { const [media, setMedia] = useState([]); const [textos, setTextos] = useState([]); const [descripcion, setDescripcion] = useState(""); const [generado, setGenerado] = useState("");

const handleTextChange = (e) => { setDescripcion(e.target.value); };

const handleAIContent = async () => { const content = await AIContentGenerator({ prompt: descripcion }); setGenerado(content); setTextos([...textos, content]); };

const handleUpload = (nuevo) => { setMedia([...media, ...nuevo]); };

return ( <div className="p-6 max-w-6xl mx-auto"> <h1 className="text-3xl font-bold mb-6">Editor Visual Inteligente 2030 🚀</h1>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h2 className="text-xl font-semibold mb-2">Sube Imágenes / Vídeos</h2>
      <Upload onUpload={handleUpload} />
      <Gallery items={media} className="mt-4" />
    </div>

    <div>
      <h2 className="text-xl font-semibold mb-2">Generador de Contenido IA</h2>
      <Textarea
        value={descripcion}
        onChange={handleTextChange}
        placeholder="Describe lo que quieres generar para redes, secciones web o promociones..."
        className="mb-3"
      />
      <Button onClick={handleAIContent} className="mb-4">
        Generar con IA 🤖
      </Button>
      {generado && (
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-semibold">Resultado:</h3>
          <p>{generado}</p>
        </div>
      )}
    </div>
  </div>
</div>

); }

