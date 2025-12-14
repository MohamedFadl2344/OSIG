import { FiMessageCircle } from 'react-icons/fi';

const ContactHero = () => {
    return (
        <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-32 pb-20 overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full opacity-10 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded-2xl mb-6 shadow-lg shadow-purple-500/30">
                        <FiMessageCircle className="w-10 h-10 text-white" />
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#a855f7]">Touch</span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                        Have questions about OSIG? Need help with image generation?
                        <br className="hidden md:block" />
                        We're here to assist you every step of the way.
                    </p>

                    {/* Stats or Features */}
                    <div className="flex flex-wrap justify-center gap-8 mt-12">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[#7c3aed] mb-2">24/7</div>
                            <div className="text-gray-600 font-medium">Support Available</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[#7c3aed] mb-2">&lt;24h</div>
                            <div className="text-gray-600 font-medium">Response Time</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[#7c3aed] mb-2">100%</div>
                            <div className="text-gray-600 font-medium">Privacy Guaranteed</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
