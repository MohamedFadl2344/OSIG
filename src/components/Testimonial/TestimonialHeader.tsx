const TestimonialHeader = () => {
    return (
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8b5cf6] rounded-2xl mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Trusted by Creative <span className="text-[#8b5cf6]">Professionals</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See what industry leaders say about OSIG's privacy-first AI platform
            </p>
        </div>
    );
};

export default TestimonialHeader;
