'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const CampaignManager = () => {
  const [campaignName, setCampaignName] = useState('');

  const handleCreate = () => {
    alert(`Campaña "${campaignName}" creada (simulado)`);
  };

  return (
    <div className="p-6 space-y-4">
      <Input
        placeholder="Nombre de la campaña"
        value={campaignName}
        onChange={(e) => setCampaignName(e.target.value)}
      />
      <Button onClick={handleCreate}>Crear Campaña</Button>
    </div>
  );
};

export default CampaignManager;
