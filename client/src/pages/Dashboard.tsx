import React, { useEffect, useState } from 'react';
import Chart from '../components/Chart';

type DataPoint = { name: string; users: number };

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/data')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(json => {
        setData(json);
        setError(null);
      })
      .catch(err => {
        setError(`Failed to load analytics data: ${err.message}`);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading analytics data...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div>
      <h2>Overview</h2>
      <Chart data={data} />
    </div>
  );
};

export default Dashboard;
