import FeatureItem from './FeatureItem';

const KeyFeatures = () => {
    const features = [
        {
            icon: (
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Privacy-First",
            subtitle: "Architecture",
            bgColor: "bg-[#8b5cf6]"
        },
        {
            icon: (
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            ),
            title: "No Image",
            subtitle: "Storage",
            bgColor: "bg-[#38bdf8]"
        },
        {
            icon: (
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
            ),
            title: "Encrypted",
            subtitle: "API Keys",
            bgColor: "bg-[#0ea5e9]"
        },
        {
            icon: (
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Fast & Secure",
            subtitle: "Proxy-Based",
            bgColor: "bg-[#6366f1]"
        }
    ];

    return (
        <div className="bg-[#1e2030] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
            {/* Background Gradients */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    background: 'radial-gradient(circle at 20% 50%, rgba(76, 29, 149, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(30, 58, 138, 0.4) 0%, transparent 50%)'
                }}
            ></div>

            <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 md:mb-16 text-center">
                    Key Features
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {features.map((feature, index) => (
                        <FeatureItem
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            subtitle={feature.subtitle}
                            bgColor={feature.bgColor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KeyFeatures;
