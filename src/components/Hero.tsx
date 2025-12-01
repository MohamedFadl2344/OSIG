import HeroHeading from './hero/HeroHeading';
import HeroSubtitle from './hero/HeroSubtitle';
import HeroCTA from './hero/HeroCTA';
import HeroFeatures from './hero/HeroFeatures';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <HeroHeading />
                    <HeroSubtitle />
                    <HeroCTA />
                    <HeroFeatures />
                </div>
            </div>
        </section>
    );
};

export default Hero;
