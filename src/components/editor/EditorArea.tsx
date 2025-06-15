import React from 'react';

type Props = {
  content: string;
  onChange: (val: string) => void;
};

export default function EditorArea({ content, onChange }: Props) {
  return (
    <textarea
      className="w-full h-60 p-4 border border-gray-300 rounded resize-none"
      value={content}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Escribe aquí tu contenido..."
    />
  );
}
