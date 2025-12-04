import { FiDownload } from 'react-icons/fi';

interface ImageCardProps {
    imageUrl: string;
    index: number;
}

const ImageCard = ({ imageUrl, index }: ImageCardProps) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = `generated-image-${index + 1}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleDownload();
        }
    };

    return (
        <div
            className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
            role="article"
            aria-label={`Generated image ${index + 1}`}
        >
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                    src={imageUrl}
                    alt={`AI generated image ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            <div className="p-4 flex items-center justify-between gap-3">
                <button
                    onClick={handleDownload}
                    onKeyDown={handleKeyDown}
                    aria-label={`Download image ${index + 1}`}
                    className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg text-sm font-medium transition-colors border border-gray-200"
                >
                    <FiDownload className="w-4 h-4" aria-hidden="true" />
                    <span>Download</span>
                </button>
            </div>
        </div>
    );
};

export default ImageCard;
