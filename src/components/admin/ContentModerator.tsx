'use client';
import { useState } from 'react';

export default function ContentModerator() {
  const [reports, setReports] = useState([
    { id: 1, user: 'usuario1', content: 'Mensaje ofensivo' },
    { id: 2, user: 'usuario2', content: 'Spam detectado' },
  ]);

  const removeReport = (id: number) => {
    setReports(reports.filter((r) => r.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Moderación de Contenidos</h2>
      {reports.map((report) => (
        <div key={report.id} className="bg-red-100 p-3 mb-3 rounded">
          <p><strong>Usuario:</strong> {report.user}</p>
          <p><strong>Contenido:</strong> {report.content}</p>
          <button
            onClick={() => removeReport(report.id)}
            className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
          >
            Eliminar reporte
          </button>
        </div>
      ))}
    </div>
  );
}
