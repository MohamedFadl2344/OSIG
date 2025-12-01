interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

const FaqItem = ({ question, answer, isOpen, onToggle }: FaqItemProps) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <button
                onClick={onToggle}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                    {question}
                </span>
                <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen
                            ? 'bg-[#7c3aed] text-white'
                            : 'bg-[#06b6d4] text-white'
                        }`}
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M6 12h12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M12 6v12m6-6H6"
                            />
                        )}
                    </svg>
                </div>
            </button>

            {/* Answer */}
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
            >
                <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-600 leading-relaxed">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FaqItem;
