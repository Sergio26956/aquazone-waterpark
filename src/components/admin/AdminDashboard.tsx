import React from 'react';
import AIContentGenerator from './AIContentGenerator';
import SocialFeed from './SocialFeed';
import ContentEditor from './ContentEditor';
import CampaingManager from './CampaingManager';
import BuilderEditor from './BuilderEditor';

const AdminDashboard = () => {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Panel de Administración</h1>
      <AIContentGenerator />
      <SocialFeed />
      <ContentEditor />
      <CampaingManager />
      <BuilderEditor />
    </div>
  );
};

export default AdminDashboard;
