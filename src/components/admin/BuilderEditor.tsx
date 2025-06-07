'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Builder = dynamic(() => import('react-email-editor'), { ssr: false });

const BuilderEditor = () => {
  const exportHtml = () => {
    alert('Exportación de HTML simulada');
  };

  return (
    <div className="p-6">
      <Builder />
      <button onClick={exportHtml} className="mt-4 px-4 py-2 bg-blue-600 text-white">
        Exportar HTML
      </button>
    </div>
  );
};

export default BuilderEditor;
