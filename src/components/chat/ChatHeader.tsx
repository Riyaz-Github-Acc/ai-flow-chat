const ChatHeader = () => {
    return (
        <div className="flex-shrink-0 glass-card px-5 py-2 mb-4">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold text-white">AIFlow</h1>
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-sm text-gray-300">Online</span>
                </div>
            </div>
        </div>
    );
};

export default ChatHeader;
