'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const BuilderEditor = () => {
  const [title, setTitle] = useState('');
  const [html, setHtml] = useState('');

  const handleGenerate = () => {
    alert('Componente generado (simulado)');
  };

  return (
    <div className="p-4 border rounded-xl bg-white shadow-md">
      <h3 className="text-xl font-semibold mb-2">Constructor Visual Web</h3>
      <Input
        placeholder="Título del componente"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-2"
      />
      <Textarea
        placeholder="Contenido HTML"
        value={html}
        onChange={(e) => setHtml(e.target.value)}
        className="mb-2"
      />
      <Button onClick={handleGenerate}>Generar Componente</Button>
    </div>
  );
};

export default BuilderEditor;
