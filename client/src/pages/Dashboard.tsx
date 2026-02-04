import React, { useEffect, useState } from 'react';
import Chart from '../components/Chart';

type DataPoint = { name: string; users: number };

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(setData)
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data.length) return <div>Loading data...</div>;

  return (
    <div>
      <h2>Overview</h2>
      <Chart data={data} />
    </div>
  );
};

export default Dashboard;
