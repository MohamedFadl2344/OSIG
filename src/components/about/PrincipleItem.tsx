interface PrincipleItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    bgColor: string;
}

const PrincipleItem = ({ icon, title, description, bgColor }: PrincipleItemProps) => {
    return (
        <div className="flex items-start gap-5 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className={`flex-shrink-0 w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center`}>
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default PrincipleItem;
