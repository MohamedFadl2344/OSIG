interface FeatureItemProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    bgColor: string;
}

const FeatureItem = ({ icon, title, subtitle, bgColor }: FeatureItemProps) => {
    return (
        <div className="flex flex-col items-center text-center group">
            <div className={`w-14 h-14 md:w-16 md:h-16 ${bgColor} rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg ${bgColor}/30 group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>
            <h4 className="text-base md:text-lg font-bold text-white mb-2">{title}</h4>
            <p className="text-xs md:text-sm text-gray-400">{subtitle}</p>
        </div>
    );
};

export default FeatureItem;
