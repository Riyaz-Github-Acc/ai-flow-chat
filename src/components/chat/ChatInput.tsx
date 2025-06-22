import { Send } from 'lucide-react';
import { useEffect } from 'react';

import type { ChatInputProps } from '../../types';

const ChatInput = ({
    inputRef,
    inputValue,
    setInputValue,
    handleKeyPress,
    handleSend,
    isTyping,
}: ChatInputProps) => {
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.height = 'auto';
            inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
        }
    }, [inputValue, inputRef]);

    return (
        <div className="flex-shrink-0 bg-white/5 border-t border-white/10 px-3 py-2 sm:px-5 sm:py-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-end space-x-3">
                    <div className="flex-1 relative">
                        <textarea
                            ref={inputRef}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Message AIFlow..."
                            className="w-full h-[150px] p-3 sm:p-4 text-base rounded-xl border-0 resize-y bg-white/20 text-white focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600 max-h-52 overflow-y-auto placeholder-gray-300"
                            rows={1}
                        />
                        <button
                            onClick={handleSend}
                            disabled={!inputValue.trim() || isTyping}
                            className={`absolute right-2 bottom-3.5 md:bottom-5 p-2 rounded-lg transition-colors 
                                ${
                                    inputValue.trim() && !isTyping
                                        ? 'bg-purple-600/50 border border-purple-600 text-white hover:bg-purple-600 backdrop-blur-sm cursor-pointer'
                                        : 'glass-card text-gray-300 cursor-not-allowed'
                                }`}
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <div className="text-[10px] sm:text-xs text-gray-300 text-center">
                    AIFlow can make mistakes. Consider checking important information.
                </div>
            </div>
        </div>
    );
};

export default ChatInput;
