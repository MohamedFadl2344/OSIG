interface FeatureBadgeProps {
    icon: React.ReactNode;
    text: string;
    bgColor: string;
    iconColor: string;
}

const FeatureBadge = ({ icon, text, bgColor, iconColor }: FeatureBadgeProps) => {
    return (
        <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
            <div className={`w-5 h-5 ${bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                <div className={iconColor}>
                    {icon}
                </div>
            </div>
            <span className="font-medium">{text}</span>
        </div>
    );
};

export default FeatureBadge;
