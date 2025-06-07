'use client';

import React, { useState } from 'react';

const BuilderEditor = () => {
  const [components, setComponents] = useState<string[]>([]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newComponent = e.dataTransfer.getData('component');
    setComponents((prev) => [...prev, newComponent]);
  };

  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="p-4 bg-gray-50 rounded-xl border border-gray-300">
      <h3 className="text-xl font-bold mb-2">Editor Visual</h3>
      <div
        onDrop={handleDrop}
        onDragOver={allowDrop}
        className="min-h-[300px] border border-dashed border-gray-500 p-4 bg-white"
      >
        {components.map((comp, index) => (
          <div key={index} className="p-2 bg-blue-100 rounded my-2">
            {comp}
          </div>
        ))}
        {components.length === 0 && (
          <p className="text-gray-400">Arrastra y suelta componentes aquí...</p>
        )}
      </div>
    </div>
  );
};

export default BuilderEditor;
