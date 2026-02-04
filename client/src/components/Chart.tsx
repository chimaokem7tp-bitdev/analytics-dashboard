import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

type DataPoint = { name: string; users: number };

const Chart: React.FC<{ data: DataPoint[] }> = ({ data }) => (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="users" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
);

export default Chart;
