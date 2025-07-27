'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, PlusCircle } from 'lucide-react';

type Budget = {
  id: number;
  clientName: string;
  details: string;
  amount: number;
};

export default function BudgetManager() {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [clientName, setClientName] = useState('');
  const [details, setDetails] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('budgets');
    if (stored) setBudgets(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('budgets', JSON.stringify(budgets));
  }, [budgets]);

  const addBudget = () => {
    if (!clientName.trim() || !details.trim() || !amount.trim()) return;
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount)) return;
    const newBudget = {
      id: Date.now(),
      clientName: clientName.trim(),
      details: details.trim(),
      amount: parsedAmount,
    };
    setBudgets((prev) => [newBudget, ...prev]);
    setClientName('');
    setDetails('');
    setAmount('');
  };

  const deleteBudget = (id: number) => {
    setBudgets((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Nombre cliente"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        <textarea
          placeholder="Detalles presupuesto"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full mb-2 p-2 border rounded resize-none"
          rows={3}
        />
        <input
          type="number"
          placeholder="Importe"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
          min="0"
          step="0.01"
        />
        <Button onClick={addBudget} leftIcon={<PlusCircle size={16} />}>
          Añadir Presupuesto
        </Button>
      </div>
      {budgets.length === 0 ? (
        <p className="text-muted-foreground">No hay presupuestos creados.</p>
      ) : (
        budgets.map((b) => (
          <Card key={b.id} className="relative group">
            <CardHeader className="text-lg font-semibold">{b.clientName}</CardHeader>
            <CardContent>
              <p>{b.details}</p>
              <p><strong>Importe:</strong> €{b.amount.toFixed(2)}</p>
            </CardContent>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="icon"
                variant="destructive"
                onClick={() => deleteBudget(b.id)}
              >
                <Trash2 size={16} />
              </Button>
            </div>
          </Card>
        ))
      )}
    </div>
  );
}
