

interface PromptInputProps {
    prompt: string;
    setPrompt: (value: string) => void;
}

const PromptInput = ({ prompt, setPrompt }: PromptInputProps) => {
    const maxChars = 500;

    return (
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 mb-6">
            <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the image you want to create..."
                className="w-full h-32 resize-none outline-none text-gray-700 placeholder-gray-400"
                maxLength={maxChars}
            />
            <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500">{prompt.length} characters</span>
                <button className="px-6 py-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-lg text-sm font-medium transition-all">
                    Enhance Prompt (AI)
                </button>
            </div>
        </div>
    );
};

export default PromptInput;
