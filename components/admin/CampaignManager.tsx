'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, PlusCircle } from 'lucide-react';

type Campaign = {
  id: number;
  title: string;
  description: string;
};

export default function CampaignManager() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('campaigns');
    if (stored) setCampaigns(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('campaigns', JSON.stringify(campaigns));
  }, [campaigns]);

  const addCampaign = () => {
    if (!title.trim() || !description.trim()) return;
    const newCampaign = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    };
    setCampaigns((prev) => [newCampaign, ...prev]);
    setTitle('');
    setDescription('');
  };

  const deleteCampaign = (id: number) => {
    setCampaigns((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Título campaña"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        <textarea
          placeholder="Descripción campaña"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-2 p-2 border rounded resize-none"
          rows={3}
        />
        <Button onClick={addCampaign} leftIcon={<PlusCircle size={16} />}>
          Añadir Campaña
        </Button>
      </div>
      {campaigns.length === 0 ? (
        <p className="text-muted-foreground">No hay campañas creadas.</p>
      ) : (
        campaigns.map((c) => (
          <Card key={c.id} className="relative group">
            <CardHeader className="text-lg font-semibold">{c.title}</CardHeader>
            <CardContent>{c.description}</CardContent>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="icon"
                variant="destructive"
                onClick={() => deleteCampaign(c.id)}
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
