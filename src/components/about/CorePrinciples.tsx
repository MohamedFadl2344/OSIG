import PrincipleItem from './PrincipleItem';

const CorePrinciples = () => {
    const principles = [
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
            ),
            title: "Privacy First",
            description: "No storage, no tracking, no data logging. Your creations remain yours alone.",
            bgColor: "bg-[#7c3aed]"
        },
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Security by Design",
            description: "Fully encrypted keys and protected requests. Built secure from the ground up.",
            bgColor: "bg-[#0ea5e9]"
        },
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "User Control",
            description: "You own your content — always. Complete control over your creative output.",
            bgColor: "bg-[#3b82f6]"
        },
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Modern Experience",
            description: "A fast, minimal, and intuitive interface designed for creators.",
            bgColor: "bg-[#6366f1]"
        }
    ];

    return (
        <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Our Core Principles
            </h3>
            <div className="flex flex-col gap-6">
                {principles.map((principle, index) => (
                    <PrincipleItem
                        key={index}
                        icon={principle.icon}
                        title={principle.title}
                        description={principle.description}
                        bgColor={principle.bgColor}
                    />
                ))}
            </div>
        </div>
    );
};

export default CorePrinciples;
