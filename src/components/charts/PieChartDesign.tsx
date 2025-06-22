import { Cell, Pie, PieChart, type PieLabelRenderProps, ResponsiveContainer } from 'recharts';

import type { UsageDataProps } from '../../types';

const PieChartDesign = ({ chartData }: { chartData: UsageDataProps[] }) => {
    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }: PieLabelRenderProps) => {
        const radius = Number(innerRadius) + (Number(outerRadius) - Number(innerRadius)) * 0.5;
        const x = Number(cx) + radius * Math.cos(-midAngle * RADIAN);
        const y = Number(cy) + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > Number(cx) ? 'start' : 'end'}
                dominantBaseline="central"
            >
                {`${(Number(percent) * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={'80%'}
                    dataKey="usage"
                    // label={(entry) => entry.category}
                >
                    {chartData?.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color ?? '#8884d8'} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default PieChartDesign;
