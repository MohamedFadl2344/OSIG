import ServiceCard from './ServiceCard';
import { FiCpu, FiImage, FiLayers, FiPenTool, FiZap, FiSettings } from 'react-icons/fi';

const ServicesGrid = () => {
    const services = [
        {
            icon: <FiCpu className="w-7 h-7 text-blue-600" />,
            title: 'DALL-E 3',
            description: "UX Pilot AI's most advanced text-to-image model with exceptional understanding of complex prompts and photorealistic output quality.",
            bgColor: 'bg-blue-100'
        },
        {
            icon: <FiImage className="w-7 h-7 text-purple-600" />,
            title: 'Midjourney',
            description: 'Industry-leading artistic AI model known for creating stunning, highly detailed artwork with unique aesthetic styles and creative interpretations.',
            bgColor: 'bg-purple-100'
        },
        {
            icon: <FiLayers className="w-7 h-7 text-indigo-600" />,
            title: 'Stable Diffusion',
            description: 'Open-source powerhouse offering incredible flexibility, customization options, and lightning-fast generation speeds for diverse creative needs.',
            bgColor: 'bg-indigo-100'
        },
        {
            icon: <FiPenTool className="w-7 h-7 text-pink-600" />,
            title: 'Leonardo AI',
            description: 'Specialized in creating production-ready assets with consistent quality, perfect for commercial projects and professional workflows.',
            bgColor: 'bg-pink-100'
        },
        {
            icon: <FiZap className="w-7 h-7 text-orange-600" />,
            title: 'Adobe Firefly',
            description: 'Commercial-safe AI model integrated with Adobe ecosystem, offering seamless workflow integration and enterprise-grade reliability.',
            bgColor: 'bg-orange-100'
        },
        {
            icon: <FiSettings className="w-7 h-7 text-cyan-600" />,
            title: 'Custom Models',
            description: 'Fine-tuned specialized models for specific use cases, trained on curated datasets to deliver targeted results for unique requirements.',
            bgColor: 'bg-cyan-100'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    bgColor={service.bgColor}
                />
            ))}
        </div>
    );
};

export default ServicesGrid;
