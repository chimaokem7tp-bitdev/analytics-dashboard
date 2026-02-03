import React from 'react';
import Dashboard from './pages/Dashboard';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">Analytics Dashboard</h1>
          <p className="app-subtitle">Real-time data insights and analytics</p>
        </div>
      </header>
      <main className="app-main">
        <Dashboard />
      </main>
    </div>
  );
};

export default App;
