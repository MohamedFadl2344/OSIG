import { FiZap, FiShield, FiRepeat, FiCode } from 'react-icons/fi';

const WhyChoose = () => {
    const features = [
        {
            icon: <FiZap className="w-6 h-6 text-purple-600" />,
            title: 'Lightning Fast',
            description: 'Generate high-quality images in seconds with optimized processing'
        },
        {
            icon: <FiShield className="w-6 h-6 text-purple-600" />,
            title: 'Enterprise Security',
            description: 'Bank-level security with encrypted data and privacy protection'
        },
        {
            icon: <FiRepeat className="w-6 h-6 text-purple-600" />,
            title: 'Unlimited Usage',
            description: 'No restrictions on generation count with flexible pricing plans'
        },
        {
            icon: <FiCode className="w-6 h-6 text-purple-600" />,
            title: 'API Integration',
            description: 'Seamless integration with your applications via REST API'
        }
    ];

    return (
        <div className="mt-20">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Why Choose OSIG Platform?
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Experience the power of multiple AI models in one unified platform with professional-grade features
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-4">
                            {feature.icon}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChoose;
