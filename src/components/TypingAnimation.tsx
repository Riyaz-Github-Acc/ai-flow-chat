const TypingAnimation = () => {
    const delays = ['0s', '0.2s', '0.4s'];

    return (
        <div className="glass-card flex gap-1 px-4 py-3 rounded-2xl">
            {delays.map((delay, index) => (
                <div
                    key={index}
                    className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                    style={{ animationDelay: delay }}
                />
            ))}
        </div>
    );
};

export default TypingAnimation;
