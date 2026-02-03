import React, { useEffect, useState } from 'react';
import AnalyticsChart from '../components/AnalyticsChart';

type DataPoint = {
  timestamp: string;
  value: number;
};

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DataPoint[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: DataPoint[] = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch data');
      }
    };
    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading data...</div>;

  return (
    <div>
      <h2>Overview</h2>
      <AnalyticsChart data={data} />
    </div>
  );
};

export default Dashboard;
