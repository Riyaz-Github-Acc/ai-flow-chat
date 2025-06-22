import type { UsageDataProps } from '../../types';

export const ChartIndicator = ({ usageData }: { usageData: UsageDataProps[] }) => (
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 w-full">
        {usageData?.map((item, index) => (
            <div
                key={index}
                className="glass-card flex items-center gap-1 md:gap-3 rounded-full py-2 px-3 md:px-4"
            >
                <div
                    className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-white flex-shrink-0"
                    style={{ backgroundColor: item?.color }}
                />
                <span className="text-gray-300 text-xs md:text-sm text-nowrap">
                    {item?.category}
                </span>
            </div>
        ))}
    </div>
);
