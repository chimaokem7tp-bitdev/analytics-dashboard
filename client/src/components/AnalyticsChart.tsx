import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from 'recharts';
import './AnalyticsChart.css';

type DataPoint = {
  timestamp: string;
  value: number;
};

const AnalyticsChart: React.FC<{ data: DataPoint[] }> = ({ data }) => {
  const formatted = data.map(d => ({
    ...d,
    label: new Date(d.timestamp).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }));

  return (
    <div className="chart-wrapper">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={formatted} margin={{ top: 5, right: 30, left: 0, bottom: 80 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="label"
            angle={-45}
            textAnchor="end"
            height={100}
            interval={Math.max(0, Math.floor(formatted.length / 6))}
            tick={{ fontSize: 12, fill: '#6b7280' }}
          />
          <YAxis
            stroke="#6b7280"
            tick={{ fontSize: 12, fill: '#6b7280' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
            labelStyle={{ color: '#1f2937' }}
            formatter={(value: any) => [`${value}`, 'Value']}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={2.5}
            dot={{ fill: '#3b82f6', r: 4 }}
            activeDot={{ r: 6 }}
            isAnimationActive={true}
            name="Analytics Value"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
