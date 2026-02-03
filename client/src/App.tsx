import React from 'react';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>Analytics Dashboard</h1>
      <Dashboard />
    </div>
  );
};

export default App;
