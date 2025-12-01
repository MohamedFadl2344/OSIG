import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface CarouselControlsProps {
    onPrev: () => void;
    onNext: () => void;
}

const CarouselControls = ({ onPrev, onNext }: CarouselControlsProps) => {
    return (
        <>
            {/* Previous Button */}
            <button
                onClick={onPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-110"
                aria-label="Previous testimonial"
            >
                <IoChevronBack className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
            </button>

            {/* Next Button */}
            <button
                onClick={onNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-110"
                aria-label="Next testimonial"
            >
                <IoChevronForward className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
            </button>
        </>
    );
};

export default CarouselControls;
