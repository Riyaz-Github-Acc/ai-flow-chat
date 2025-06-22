import { Bot, User } from 'lucide-react';
import { useEffect, useRef } from 'react';

import type { MessageProps } from '../../types';
import TypingIndicator from './TypingIndicator';

const ChatContainer = ({ messages, isTyping }: { messages: MessageProps[]; isTyping: boolean }) => {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    return (
        <div className="flex-1 overflow-y-auto px-3 sm:px-5 space-y-8">
            <div className="flex flex-col gap-3 sm:gap-5 max-w-4xl mx-auto">
                {messages.map((message) => {
                    const isUser = message.type === 'user';

                    return (
                        <div
                            key={message.id}
                            className={`flex items-start gap-3 ${
                                isUser ? 'justify-end' : 'justify-start'
                            }`}
                        >
                            {!isUser && (
                                <div className="hidden flex-shrink-0 w-8 h-8 bg-white/10 rounded-full sm:flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                            )}

                            <div
                                className={`max-w-3xl px-4 py-3 rounded-2xl text-sm sm:text-base leading-relaxed whitespace-pre-wrap
                                    ${
                                        isUser
                                            ? 'bg-purple-600/10 border border-purple-600/20 text-white backdrop-blur-sm rounded-br-none'
                                            : 'bg-white/10 text-gray-100 border border-white/20 backdrop-blur-md rounded-bl-none'
                                    }`}
                            >
                                {message.content}
                            </div>

                            {isUser && (
                                <div className="hidden flex-shrink-0 w-8 h-8 bg-purple-600/50 border border-purple-600 rounded-full sm:flex items-center justify-center backdrop-blur-sm">
                                    <User className="w-5 h-5 text-white" />
                                </div>
                            )}
                        </div>
                    );
                })}

                {isTyping && <TypingIndicator />}

                <div ref={messagesEndRef} />
            </div>
        </div>
    );
};

export default ChatContainer;
