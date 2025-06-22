import { Bot } from 'lucide-react';

import TypingAnimation from '../TypingAnimation';

const TypingIndicator = () => {
    return (
        <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
            </div>
            <TypingAnimation />
        </div>
    );
};

export default TypingIndicator;
