import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import TestimonialHeader from './Testimonial/TestimonialHeader';
import TestimonialCard from './Testimonial/TestimonialCard';
import CarouselControls from './Testimonial/CarouselControls';
import CarouselDots from './Testimonial/CarouselDots';
import { testimonialsData } from './Testimonial/testimonialsData';

const Testimonial = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
        skipSnaps: false,
        dragFree: false
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <TestimonialHeader />

                {/* Carousel Container */}
                <div className="relative max-w-6xl mx-auto">
                    <CarouselControls onPrev={scrollPrev} onNext={scrollNext} />

                    {/* Embla Carousel */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {testimonialsData.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="pl-4 relative min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                                >
                                    <TestimonialCard
                                        role={testimonial.role}
                                        icon={testimonial.icon}
                                        iconBg={testimonial.iconBg}
                                        rating={testimonial.rating}
                                        text={testimonial.text}
                                        company={testimonial.company}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <CarouselDots
                        total={testimonialsData.length}
                        selectedIndex={selectedIndex}
                        onDotClick={scrollTo}
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
