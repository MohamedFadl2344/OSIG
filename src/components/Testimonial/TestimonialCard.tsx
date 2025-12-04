import type { IconType } from 'react-icons';
import { BsStarFill } from 'react-icons/bs';

interface TestimonialCardProps {
    role: string;
    icon: IconType;
    iconBg: string;
    rating: number;
    text: string;
    company: string;
}

const TestimonialCard = ({ role, icon: IconComponent, iconBg, rating, text, company }: TestimonialCardProps) => {
    return (
        <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-shadow h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: iconBg }}
                >
                    <IconComponent className="w-6 h-6" />
                </div>
                <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900">{role}</h4>
                    <div className="flex gap-1 mt-1">
                        {[...Array(rating)].map((_, i) => (
                            <BsStarFill key={i} className="w-4 h-4 text-[#067589]" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                "{text}"
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#067589]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#8b5cf6]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#067589]"></div>
                </div>
                <span className="text-sm font-semibold text-[#067589]">{company}</span>
            </div>
        </div>
    );
};

export default TestimonialCard;
