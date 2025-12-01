import { useState } from 'react';
import { toast } from 'react-hot-toast';
import PromptInput from './components/PromptInput';
import AdvancedOptions from './components/AdvancedOptions';
import GenerateButton from './components/GenerateButton';
import GenerationInfo from './components/GenerationInfo';
import ImageGallery from './components/ImageGallery';
import { imggenAPI } from '../../Services/imggen_api/imggen_api';

const Imggen = () => {
    const [prompt, setPrompt] = useState('');
    const [selectedModel, setSelectedModel] = useState('google/gemini-3-pro-image-preview');
    const [numberOfImages, setNumberOfImages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [generatedImages, setGeneratedImages] = useState<string[]>([]);

    const handleGenerate = async () => {
        if (!prompt.trim()) {
            toast.error('Please enter a prompt');
            return;
        }

        setLoading(true);
        try {
            const result = await imggenAPI.generateImage(prompt, selectedModel, numberOfImages);

            if (result.success && result.data) {
                const message = result.data.choices?.[0]?.message;

                // Extract all images from the images array
                const images = message?.images?.map(img => img.image_url.url) || [];

                if (images.length > 0) {
                    setGeneratedImages(images);
                    toast.success(`${images.length} image(s) generated successfully!`);
                } else {
                    console.error('No images found in response:', message);
                    toast.error('No images found in API response');
                }
            } else {
                console.error('API Error:', result.message);
                toast.error(result.message || 'Failed to generate image');
            }
        } catch (error) {
            console.error('Generation error:', error);
            toast.error('An error occurred during generation');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        AI Image <span className="text-[#7c3aed]">Generator</span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        Create stunning AI-generated images with complete privacy and security
                    </p>
                </div>

                {/* Controls Section */}
                <div className="mb-12">
                    <PromptInput prompt={prompt} setPrompt={setPrompt} />
                    <AdvancedOptions
                        selectedModel={selectedModel}
                        setSelectedModel={setSelectedModel}
                        numberOfImages={numberOfImages}
                        setNumberOfImages={setNumberOfImages}
                    />
                    <GenerateButton onClick={handleGenerate} loading={loading} />
                    <GenerationInfo />
                </div>

                {/* Gallery Section */}
                <ImageGallery generatedImages={generatedImages} />
            </div>
        </div>
    );
};

export default Imggen;
