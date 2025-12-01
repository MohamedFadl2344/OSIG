import { Link } from 'react-router-dom';

const HeroCTA = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
                to="/generate"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white transition-all text-base font-medium rounded-xl shadow-lg shadow-[#7c3aed]/30 hover:shadow-xl hover:shadow-[#7c3aed]/40 flex items-center justify-center gap-2"
            >
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                </svg>
                Generate Images
            </Link>

            <button className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-50 text-gray-900 transition-all text-base font-medium rounded-xl border border-gray-300 hover:border-gray-400 flex items-center justify-center gap-2">
                <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
                Learn More
            </button>
        </div>
    );
};

export default HeroCTA;
