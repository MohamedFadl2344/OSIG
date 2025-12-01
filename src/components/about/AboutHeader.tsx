const AboutHeader = () => {
    return (
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7c3aed]/10 rounded-full mb-6">
                <svg className="w-5 h-5 text-[#7c3aed]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-[#7c3aed]">Privacy-First Platform</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About OSIG
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                OSIG is a privacy-focused AI image generation platform built with a simple mission: to give users powerful creative tools without compromising their security or data ownership.
            </p>
        </div>
    );
};

export default AboutHeader;
