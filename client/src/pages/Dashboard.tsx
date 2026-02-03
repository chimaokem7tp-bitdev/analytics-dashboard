import React, { useEffect, useState } from 'react';
import AnalyticsChart from '../components/AnalyticsChart';
import './Dashboard.css';

type DataPoint = {
  timestamp: string;
  value: number;
};

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DataPoint[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/data');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: DataPoint[] = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading analytics data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="error-state">
          <p className="error-icon">⚠️</p>
          <p className="error-message">Error: {error}</p>
          <button className="retry-btn" onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  const stats = data
    ? {
        min: Math.min(...data.map(d => d.value)),
        max: Math.max(...data.map(d => d.value)),
        avg: Math.round(data.reduce((sum, d) => sum + d.value, 0) / data.length)
      }
    : { min: 0, max: 0, avg: 0 };

  return (
    <div className="dashboard-container">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Average</div>
          <div className="stat-value">{stats.avg}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Minimum</div>
          <div className="stat-value">{stats.min}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Maximum</div>
          <div className="stat-value">{stats.max}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Data Points</div>
          <div className="stat-value">{data?.length}</div>
        </div>
      </div>

      <div className="chart-card">
        <div className="chart-header">
          <h2 className="chart-title">Analytics Overview</h2>
          <p className="chart-subtitle">Last 12 hours of data</p>
        </div>
        <div className="chart-content">
          {data && <AnalyticsChart data={data} />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
