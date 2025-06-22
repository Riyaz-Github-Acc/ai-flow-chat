import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import type { UsageDataProps } from '../../types';

const BarChartDesign = ({ chartData }: { chartData: UsageDataProps[] }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis
                    dataKey="category"
                    stroke="white"
                    fontSize={12}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                />
                <YAxis stroke="white" fontSize={12} />
                <Bar dataKey="usage" radius={[4, 4, 0, 0]}>
                    {chartData?.map((entry, index) => (
                        <Cell key={`bar-cell-${index}`} fill={entry.color} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartDesign;
