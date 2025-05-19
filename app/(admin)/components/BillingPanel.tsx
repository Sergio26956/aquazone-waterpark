'use client';

const invoices = [
  { id: '001', date: '2025-04-01', amount: 450.00, status: 'Pagado' },
  { id: '002', date: '2025-04-10', amount: 1200.00, status: 'Pendiente' },
];

export default function BillingPanel() {
  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Facturación</h2>
      <table className="w-full border text-left">
        <thead>
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Fecha</th>
            <th className="p-2 border">Importe</th>
            <th className="p-2 border">Estado</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.id} className="border-t">
              <td className="p-2">{invoice.id}</td>
              <td className="p-2">{invoice.date}</td>
              <td className="p-2">€{invoice.amount.toFixed(2)}</td>
              <td className="p-2">{invoice.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
