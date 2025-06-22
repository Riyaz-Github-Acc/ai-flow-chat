import type { FeatureCardProps } from '../../types';

const FeatureCard = ({ icon, cardTitle, cardDesc }: FeatureCardProps) => {
    return (
        <div className="glass-card rounded-2xl p-5">
            {icon}
            <h3 className="text-lg text-white font-semibold mb-2 mt-4">{cardTitle}</h3>
            <p className="text-gray-300 text-sm">{cardDesc}</p>
        </div>
    );
};

export default FeatureCard;
