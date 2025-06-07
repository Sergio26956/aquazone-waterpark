'use client';
import { useState } from 'react';

export default function BuilderEditor() {
  const [blocks, setBlocks] = useState<string[]>([]);
  const [newBlock, setNewBlock] = useState('');

  const addBlock = () => {
    if (newBlock) {
      setBlocks([...blocks, newBlock]);
      setNewBlock('');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Editor Visual</h2>
      <div className="mb-4 flex gap-2">
        <input
          value={newBlock}
          onChange={(e) => setNewBlock(e.target.value)}
          placeholder="Nuevo bloque"
          className="p-2 border rounded w-full"
        />
        <button onClick={addBlock} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Añadir
        </button>
      </div>
      <ul className="space-y-2">
        {blocks.map((block, i) => (
          <li key={i} className="p-2 border rounded bg-gray-100">{block}</li>
        ))}
      </ul>
    </div>
  );
}
