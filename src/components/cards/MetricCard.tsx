import type { MetricCardProps } from '../../types';

const MetricCard = ({ icon, growth, cardTitle, stat }: MetricCardProps) => {
    return (
        <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
                <div
                    className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center`}
                >
                    {icon}
                </div>
                <span className="text-sm font-medium text-green-400 bg-green-900/30 px-2 py-1 rounded-full">
                    {growth}
                </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stat}</h3>
            <p className="text-gray-300 text-sm">{cardTitle}</p>
        </div>
    );
};

export default MetricCard;
