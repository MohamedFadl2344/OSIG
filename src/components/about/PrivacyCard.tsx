const PrivacyCard = () => {
    return (
        <div className="bg-gray-100 rounded-[2.5rem] p-10 h-full">
            <div className="w-14 h-14 bg-[#5b50e6] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#5b50e6]/20">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Privacy & Security
            </h3>
            <p className="text-gray-600 leading-relaxed">
                We do not store images, logs, or prompts. All API keys are encrypted with industry-grade AES-256 and decrypted only in memory during generation. Our system acts as a secure proxy between you and advanced AI models — ensuring speed, privacy, and complete transparency.
            </p>
        </div>
    );
};

export default PrivacyCard;
