interface CarouselDotsProps {
    total: number;
    selectedIndex: number;
    onDotClick: (index: number) => void;
}

const CarouselDots = ({ total, selectedIndex, onDotClick }: CarouselDotsProps) => {
    return (
        <div className="flex justify-center gap-2 mt-8">
            {[...Array(total)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => onDotClick(index)}
                    className={`h-2 rounded-full transition-all ${index === selectedIndex ? 'bg-[#8b5cf6] w-8' : 'bg-gray-300 w-2'
                        }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default CarouselDots;
