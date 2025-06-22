import type { KeyboardEvent, ReactNode, RefObject } from 'react';

export interface FeatureCardProps {
    icon: ReactNode;
    cardTitle: string;
    cardDesc: string;
}

export interface MetricCardProps {
    icon: ReactNode;
    growth: string;
    cardTitle: string;
    stat: string;
}

export interface UsageDataProps {
    category: string;
    usage: number;
    color?: string;
}

export interface MessageProps {
    id: number;
    type: string;
    content: string;
}

export interface ChatInputProps {
    inputRef: RefObject<HTMLTextAreaElement | null>;
    inputValue: string;
    setInputValue: (value: string) => void;
    handleKeyPress: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
    handleSend: () => void;
    isTyping: boolean;
}
