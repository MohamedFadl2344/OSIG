import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* Navbar */}
            <nav className=" fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded-xl flex items-center justify-center shadow-lg shadow-[#7c3aed]/30">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold text-gray-900">OSIG</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-10">
                            <Link
                                to="#features"
                                className="text-gray-700 hover:text-[#7c3aed] transition-colors text-base font-medium"
                            >
                                Features
                            </Link>
                            <Link
                                to="#security"
                                className="text-gray-700 hover:text-[#7c3aed] transition-colors text-base font-medium"
                            >
                                Security
                            </Link>
                            <Link
                                to="#models"
                                className="text-gray-700 hover:text-[#7c3aed] transition-colors text-base font-medium"
                            >
                                Models
                            </Link>
                            <Link
                                to="#contact"
                                className="text-gray-700 hover:text-[#7c3aed] transition-colors text-base font-medium"
                            >
                                Contact
                            </Link>
                        </div>

                        {/* Desktop Auth Buttons */}
                        <div className="hidden lg:flex items-center gap-4">
                            <button  
                            className="px-6 py-2.5 text-[#7c3aed] hover:text-[#6d28d9] transition-colors text-base font-medium border-2 border-[#7c3aed] rounded-xl hover:bg-[#7c3aed]/5">
                                Login
                            </button>
                            <button 
                            className="px-6 py-2.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white transition-all text-base font-medium rounded-xl shadow-lg shadow-[#7c3aed]/30 hover:shadow-xl hover:shadow-[#7c3aed]/40">
                                Get Started
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-7 h-7 text-gray-700"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Offcanvas Mobile Menu - Sidebar */}
            <div
                className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Backdrop/Overlay */}
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Sidebar */}
                <div
                    className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded-xl flex items-center justify-center shadow-lg shadow-[#7c3aed]/30">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold text-gray-900">OSIG</span>
                        </div>

                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
                            aria-label="Close menu"
                        >
                            <svg
                                className="w-7 h-7 text-gray-700"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Sidebar Navigation */}
                    <div className="flex flex-col p-6 space-y-2">
                        <Link
                            to="#features"
                            className="text-gray-700 hover:text-[#7c3aed] hover:bg-[#7c3aed]/5 transition-all text-lg font-medium py-4 px-4 rounded-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            to="#security"
                            className="text-gray-700 hover:text-[#7c3aed] hover:bg-[#7c3aed]/5 transition-all text-lg font-medium py-4 px-4 rounded-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Security
                        </Link>
                        <Link
                            to="#models"
                            className="text-gray-700 hover:text-[#7c3aed] hover:bg-[#7c3aed]/5 transition-all text-lg font-medium py-4 px-4 rounded-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Models
                        </Link>
                        <Link
                            to="#contact"
                            className="text-gray-700 hover:text-[#7c3aed] hover:bg-[#7c3aed]/5 transition-all text-lg font-medium py-4 px-4 rounded-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </  Link>
                    </div>

                    {/* Sidebar Auth Buttons */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50 space-y-3">
                        <button
                            className="w-full px-6 py-3.5 text-[#7c3aed] hover:text-[#6d28d9] transition-colors text-lg font-medium border-2 border-[#7c3aed] rounded-xl hover:bg-[#7c3aed]/5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Login
                        </button>
                        <button
                            className="w-full px-6 py-3.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white transition-all text-lg font-medium rounded-xl shadow-lg shadow-[#7c3aed]/30"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
