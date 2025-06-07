import React from 'react';
import MediaUploader from './MediaUploader';
import ContractCalendar from './ContractCalendar';
import UserManager from './UserManager';

const AdminToolsPanel = () => {
  return (
    <div className="space-y-6">
      <MediaUploader />
      <ContractCalendar />
      <UserManager />
    </div>
  );
};

export default AdminToolsPanel;
