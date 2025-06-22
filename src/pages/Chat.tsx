import { type KeyboardEvent, useRef, useState } from 'react';

import ChatContainer from '../components/chat/ChatContainer';
import ChatHeader from '../components/chat/ChatHeader';
import ChatInput from '../components/chat/ChatInput';
import { chatData } from '../constants/chatData';

const Chat = () => {
    const [messages, setMessages] = useState(chatData);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    const handleSend = () => {
        if (!inputValue.trim()) return;
        if (isTyping) return;

        const userMessage = {
            id: Date.now(),
            type: 'user',
            content: inputValue,
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            const assistantMessage = {
                id: Date.now() + 1,
                type: 'assistant',
                content: `I understand you're asking about "${inputValue}". This is a demo interface, so I'm providing a simulated response. In a real AIFlow interface, I would provide a helpful and detailed answer based on my training data. The interface you're seeing mimics the actual AIFlow experience with scrollable chat history and a fixed input area.`,
            };
            setMessages((prev) => [...prev, assistantMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <ChatHeader />

            <ChatContainer messages={messages} isTyping={isTyping} />

            <ChatInput
                inputRef={inputRef}
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleKeyPress={handleKeyPress}
                handleSend={handleSend}
                isTyping={isTyping}
            />
        </div>
    );
};

export default Chat;
