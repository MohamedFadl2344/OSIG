const ServicesHeader = () => {
    return (
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                <svg className="w-5 h-5 text-[#7c3aed]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 7H7v6h6V7z" />
                    <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-[#7c3aed]">AI-Powered Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Advanced AI Models for Image Generation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                OSIG platform supports multiple cutting-edge AI models to bring your creative vision to life with professional quality results
            </p>
        </div>
    );
};

export default ServicesHeader;
