import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import logoSvg from '../../assets/logo.svg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-3">
                            <img
                                src={logoSvg}
                                alt="OSIG Logo"
                                className="w-10 h-10"
                            />
                            <span className="text-2xl font-bold text-gray-900">OSIG</span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            About
                        </Link>
                        <Link to="/services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Services
                        </Link>
                        <Link to="/contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Contact
                        </Link>
                        <Link to="/privacy" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Terms
                        </Link>
                    </nav>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-[#5b50e6] hover:bg-[#4a41ba] rounded-full flex items-center justify-center text-white transition-colors"
                            aria-label="Twitter"
                        >
                            <FaTwitter className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full flex items-center justify-center text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn className="w-5 h-5" />
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-[#9333ea] hover:bg-[#7e22ce] rounded-full flex items-center justify-center text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub className="w-5 h-5" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-[#06b6d4] hover:bg-[#0891b2] rounded-full flex items-center justify-center text-white transition-colors"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Divider & Copyright */}
                <div className="pt-8 border-t border-gray-200 text-center">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} OSIG. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
