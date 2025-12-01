import ImageCard from './ImageCard';


interface ImageGalleryProps {
    generatedImages: string[];
}

const ImageGallery = ({ generatedImages }: ImageGalleryProps) => {
    if (generatedImages.length === 0) {
        return (
            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Generated Images</h3>
                <div className="text-center py-12 text-gray-500">
                    No images generated yet. Enter a prompt and click Generate to create your first image!
                </div>
            </div>
        );
    }

    return (
        <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Generated Images</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {generatedImages.map((imageUrl, index) => (
                    <ImageCard key={index} imageUrl={imageUrl} index={index} />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
