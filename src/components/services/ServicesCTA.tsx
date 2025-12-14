import { Link } from 'react-router-dom';

const ServicesCTA = () => {
    return (
        <div className="mt-20 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] rounded-3xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Create Amazing Images?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of creators using OSIG platform to bring their ideas to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    to="/register"
                    className="px-8 py-4 bg-white text-[#7c3aed] rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg"
                >
                    Start Free Trial
                </Link>
                <Link
                    to="/contact"
                    className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#7c3aed] transition-all"
                >
                    View Pricing
                </Link>
            </div>
        </div>
    );
};

export default ServicesCTA;
