import { MessageSquare, TrendingUp, Users, Zap } from 'lucide-react';

import MetricCard from '../components/cards/MetricCard';
import BarChartDesign from '../components/charts/BarChartDesign';
import { ChartIndicator } from '../components/charts/ChartIndicator';
import PieChartDesign from '../components/charts/PieChartDesign';
import { usageData } from '../constants/chartData';

const Dashboard = () => {
    return (
        <div className="py-5 px-3 sm:px-5 sm:py-10 space-y-8">
            <div>
                <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
                <p className="text-gray-300 text-sm sm:text-base">
                    Monitor your AI system performance and usage metrics
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                <MetricCard
                    icon={<Users className="w-6 h-6 text-blue-400" />}
                    growth="+12%"
                    stat="24,532"
                    cardTitle="Users"
                />

                <MetricCard
                    icon={<MessageSquare className="w-6 h-6 text-purple-400" />}
                    growth="+8%"
                    stat="1.2M"
                    cardTitle="Messages Processed"
                />

                <MetricCard
                    icon={<TrendingUp className="w-6 h-6 text-green-400" />}
                    growth="+15%"
                    stat="98.5%"
                    cardTitle="Success Rate"
                />

                <MetricCard
                    icon={<Zap className="w-6 h-6 text-orange-400" />}
                    growth="+5%"
                    stat="1.2s"
                    cardTitle="Avg Response Time"
                />
            </div>

            <div className="mt-14 space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">System Usage Insights</h2>
                    <p className="text-gray-300 text-sm sm:text-base">
                        Visual breakdown of your platform's real-time usage and performance trends
                    </p>
                </div>

                <div className="glass-card rounded-2xl p-3 md:p-8 flex flex-col gap-10">
                    <ChartIndicator usageData={usageData} />

                    <div className="flex flex-col md:flex-row gap-5 items-center w-full h-[500px] sm:h-[600px] md:h-96">
                        <div className="w-full lg:w-2/4 h-full">
                            <BarChartDesign chartData={usageData} />
                        </div>

                        <div className="w-full lg:w-2/4 h-full">
                            <PieChartDesign chartData={usageData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
