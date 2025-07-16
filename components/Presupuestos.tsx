'use client';
import { useState } from 'react';
import jsPDF from 'jspdf';

export default function BudgetManager() {
  const [client, setClient] = useState('');
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState('');

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Presupuesto AQUAZONE', 20, 20);
    doc.setFontSize(12);
    doc.text(`Cliente: ${client}`, 20, 40);
    doc.text(`Descripción: ${details}`, 20, 50);
    doc.text(`Precio: ${price} €`, 20, 60);
    doc.save(`Presupuesto-${client}.pdf`);
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Generador de Presupuestos</h3>
      <input
        className="w-full p-2 border rounded mb-2"
        placeholder="Nombre del cliente"
        value={client}
        onChange={(e) => setClient(e.target.value)}
      />
      <textarea
        className="w-full p-2 border rounded mb-2"
        placeholder="Descripción del servicio"
        rows={4}
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded mb-4"
        placeholder="Precio (€)"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={generatePDF} className="bg-purple-600 text-white px-4 py-2 rounded">
        Generar PDF
      </button>
    </div>
  );
}
