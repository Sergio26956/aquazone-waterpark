'use client';

import React from 'react';
import BuilderEditor from '../editor/BuilderEditor';
import CampaignManager from '../campaign/CampaignManager';
import ContentEditor from '../editor/ContentEditor';
import AIContentGenerator from '../ai/AIContentGenerator';

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
      <div className="space-y-6">
        <BuilderEditor />
        <ContentEditor />
      </div>
      <div className="space-y-6">
        <AIContentGenerator />
        <CampaignManager />
      </div>
    </div>
  );
};

export default AdminDashboard;
