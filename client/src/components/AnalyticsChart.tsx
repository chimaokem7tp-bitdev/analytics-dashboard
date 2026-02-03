import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

type DataPoint = {
  timestamp: string;
  value: number;
};

const AnalyticsChart: React.FC<{ data: DataPoint[] }> = ({ data }) => {
  // Convert timestamp to a shorter label for the X axis
  const formatted = data.map(d => ({
    ...d,
    label: new Date(d.timestamp).toLocaleString()
  }));

  return (
    <div style={{ width: '100%', height: 360 }}>
      <ResponsiveContainer>
        <LineChart data={formatted}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" angle={-30} textAnchor="end" height={70} interval={Math.max(0, Math.floor(formatted.length / 8))} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
