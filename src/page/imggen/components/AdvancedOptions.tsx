import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

interface AdvancedOptionsProps {
    selectedModel: string;
    setSelectedModel: (value: string) => void;
    numberOfImages: number;
    setNumberOfImages: (value: number) => void;
}

const AdvancedOptions = ({ selectedModel, setSelectedModel, numberOfImages, setNumberOfImages }: AdvancedOptionsProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-6 py-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
            >
                <span className="font-semibold text-gray-900">Advanced Options</span>
                <IoChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>

            {isOpen && (
                <div className="mt-4 p-6 bg-white rounded-xl border border-gray-200 space-y-4">
                    {/* Model Selection */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Model
                        </label>
                        <select
                            value={selectedModel}
                            onChange={(e) => setSelectedModel(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent outline-none"
                        >
                            <option value="google/gemini-3-pro-image-preview">Nano Banana Pro (Gemini 3 Pro Image)</option>
                            <option value="google/gemini-2.5-flash-image">Nano Banana (Gemini 2.5 Flash Image)</option>
                        </select>
                    </div>

                    {/* Number of Images */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Number of Images
                        </label>
                        <select
                            value={numberOfImages}
                            onChange={(e) => setNumberOfImages(Number(e.target.value))}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent outline-none"
                        >
                            <option value={1}>1 Image</option>
                            <option value={2}>2 Images</option>
                            <option value={3}>3 Images</option>
                            <option value={4}>4 Images</option>
                        </select>
                    </div>

                    {/* Image Size */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Image Size
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent outline-none">
                            <option>1024x1024 (Square)</option>
                            <option>1024x1792 (Portrait)</option>
                            <option>1792x1024 (Landscape)</option>
                        </select>
                    </div>

                    {/* Quality */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Quality
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent outline-none">
                            <option>Standard</option>
                            <option>HD</option>
                        </select>
                    </div>

                    {/* Style */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Style
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent outline-none">
                            <option>Natural</option>
                            <option>Vivid</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdvancedOptions;
