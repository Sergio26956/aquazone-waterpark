'use client';

import React from 'react';
import BuilderEditor from '../editor/BuilderEditor';
import ContentEditor from '../editor/ContentEditor';
import AIContentGenerator from '../ai/AIContentGenerator';
import CampaingManager from '../marketing/CampaingManager';

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Panel Administrativo</h2>

      <section className="grid md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <AIContentGenerator />
          <CampaingManager />
        </div>

        <div className="space-y-4">
          <BuilderEditor />
          <ContentEditor />
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
