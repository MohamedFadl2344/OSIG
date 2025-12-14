import ServicesHeader from './services/ServicesHeader';
import ServicesGrid from './services/ServicesGrid';
import WhyChoose from './services/WhyChoose';
import ServicesCTA from './services/ServicesCTA';

const Services = () => {
    return (
        <section className="py-20 bg-gray-50" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ServicesHeader />
                <ServicesGrid />
                <WhyChoose />
                <ServicesCTA />
            </div>
        </section>
    );
};

export default Services;
