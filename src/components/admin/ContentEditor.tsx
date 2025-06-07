'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const ContentEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    alert('Contenido guardado (simulado)');
  };

  return (
    <div className="p-6 space-y-4">
      <Input
        placeholder="Título del contenido"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Contenido principal"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="h-60"
      />
      <Button onClick={handleSave}>Guardar</Button>
    </div>
  );
};

export default ContentEditor;
