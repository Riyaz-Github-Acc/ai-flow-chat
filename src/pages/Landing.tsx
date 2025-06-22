import { Brain, MessageSquare, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router';

import FeatureCard from '../components/cards/FeatureCard';

const Landing = () => {
    return (
        <div className="gradient-bg py-5 md:py-10">
            <div className="min-h-screen flex items-center justify-center px-5">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="gradient-logo gradient-bg-secondary mb-8 w-20 h-20 rounded-2xl shadow-2xl">
                        <Brain size={60} />
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Intelligence
                        <span className="gradient-bg-secondary bg-clip-text text-transparent">
                            {' '}
                            Amplified
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Experience the future of AI-powered analytics and conversation. Unlock
                        insights, automate workflows, and amplify your potential.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <Link
                            to={'/dashboard'}
                            className="group px-8 py-4 gradient-bg-secondary text-white font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                        >
                            <span>Get Started</span>
                            <Zap className="w-5 h-5 group-hover:animate-pulse" />
                        </Link>

                        <Link
                            to={'/chat'}
                            className="group px-8 py-4 glass-card text-white font-semibold rounded-2xl transition-all duration-300 flex items-center space-x-2"
                        >
                            <MessageSquare className="w-5 h-5 group-hover:animate-bounce" />
                            <span>Try Chat</span>
                        </Link>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
                        <FeatureCard
                            icon={<TrendingUp className="w-8 h-8 text-blue-400" />}
                            cardTitle="Advanced Analytics"
                            cardDesc="Real-time insights and predictive modeling"
                        />

                        <FeatureCard
                            icon={<MessageSquare className="w-8 h-8 text-purple-400" />}
                            cardTitle="Intelligent Chat"
                            cardDesc="Natural language processing and conversation"
                        />

                        <FeatureCard
                            icon={<Zap className="w-8 h-8 text-orange-400" />}
                            cardTitle="Lightning Fast"
                            cardDesc="Optimized performance and instant responses"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
