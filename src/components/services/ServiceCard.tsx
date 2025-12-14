import { FiArrowRight } from 'react-icons/fi';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    bgColor: string;
}

const ServiceCard = ({ icon, title, description, bgColor }: ServiceCardProps) => {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className={`inline-flex items-center justify-center w-14 h-14 ${bgColor} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
            <button className="flex items-center gap-2 text-[#7c3aed] font-semibold hover:gap-3 transition-all">
                Learn More
                <FiArrowRight className="w-4 h-4" />
            </button>
        </div>
    );
};

export default ServiceCard;
