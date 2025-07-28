import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  const isAuthenticated = localStorage.getItem('adminAuth') === 'true';

  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/admin/login" />}
        />
        <Route path="*" element={<Navigate to="/admin/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
