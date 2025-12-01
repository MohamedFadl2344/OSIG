import React from 'react';
import FeatureBadge from './FeatureBadge';

const HeroFeatures = () => {
    const features = [
        {
            icon: (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            text: "End-to-End Encrypted",
            bgColor: "bg-[#7c3aed]/10",
            iconColor: "text-[#7c3aed]"
        },
        {
            icon: (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            text: "No Image Storage",
            bgColor: "bg-[#06b6d4]/10",
            iconColor: "text-[#06b6d4]"
        },
        {
            icon: (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
            ),
            text: "Privacy-First",
            bgColor: "bg-[#7c3aed]/10",
            iconColor: "text-[#7c3aed]"
        }
    ];

    return (
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4">
            {features.map((feature, index) => (
                <React.Fragment key={index}>
                    <FeatureBadge
                        icon={feature.icon}
                        text={feature.text}
                        bgColor={feature.bgColor}
                        iconColor={feature.iconColor}
                    />
                    {index < features.length - 1 && (
                        <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default HeroFeatures;
