import { FiDownload } from 'react-icons/fi';

interface ImageCardProps {
    imageUrl: string;
    index: number;
}

const ImageCard = ({ imageUrl, index }: ImageCardProps) => {
    const handleDownload = () => {
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = `generated-image-${index + 1}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            {/* Image */}
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                    src={imageUrl}
                    alt={`Generated image ${index + 1}`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Actions */}
            <div className="p-4 flex items-center justify-between gap-3">
                <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg text-sm font-medium transition-colors border border-gray-200"
                >
                    <FiDownload className="w-4 h-4" />
                    <span>Download</span>
                </button>

            </div>
        </div>
    );
};

export default ImageCard;
