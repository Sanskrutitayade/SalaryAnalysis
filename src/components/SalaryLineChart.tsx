import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface SalaryLineChartProps {
    data: any[];
}

const SalaryLineChart: React.FC<SalaryLineChartProps> = ({ data }) => {
    if (!data || data.length === 0) {
        return <div>No data available for the chart.</div>;
    }

    return (
        <LineChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="averageSalary" stroke="#8884d8" />
        </LineChart>
    );
};

export default SalaryLineChart;
