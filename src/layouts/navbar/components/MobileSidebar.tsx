import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import Logo from './Logo';
import Profiledrop from './Profiledrop';

interface MobileSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        if (location.pathname === '/') {
            e.preventDefault();
            onClose();
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        } else {
            onClose();
        }
    };

    const links = [
        { to: '/', label: 'Home', isRoute: true },
        { to: '#about', label: 'About', isRoute: false, targetId: 'about' },
        { to: '#services', label: 'Services', isRoute: false, targetId: 'services' },
        { to: '/contact', label: 'Contact', isRoute: true }
    ];

    return (
        <div
            className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
        >
            {/* Backdrop/Overlay */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Sidebar */}
            <div
                className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <Logo />
                    <button
                        onClick={onClose}
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
                    {links.map((link) => (
                        link.isRoute ? (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="text-gray-700 hover:text-[#7c3aed] hover:bg-[#7c3aed]/5 transition-all text-lg font-medium py-4 px-4 rounded-xl"
                                onClick={onClose}
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <a
                                key={link.to}
                                href={link.to}
                                className="text-gray-700 hover:text-[#7c3aed] hover:bg-[#7c3aed]/5 transition-all text-lg font-medium py-4 px-4 rounded-xl cursor-pointer"
                                onClick={(e) => handleScroll(e, link.targetId!)}
                            >
                                {link.label}
                            </a>
                        )
                    ))}
                </div>

                {/* Sidebar Auth Buttons or Profile */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
                    {loading ? (
                        <div className="text-center py-4 text-gray-500">Loading...</div>
                    ) : user ? (
                        // Show Profile Dropdown for logged-in users
                        <div className="flex items-center justify-center">
                            <Profiledrop userEmail={user.email} />
                        </div>
                    ) : (
                        // Show Login/Get Started for guests
                        <div className="space-y-3">
                            <Link
                                to="/login"
                                className="block w-full px-6 py-3.5 text-[#7c3aed] hover:text-[#6d28d9] transition-colors text-lg font-medium border-2 border-[#7c3aed] rounded-xl hover:bg-[#7c3aed]/5 text-center"
                                onClick={onClose}
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="block w-full px-6 py-3.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white transition-all text-lg font-medium rounded-xl shadow-lg shadow-[#7c3aed]/30 text-center"
                                onClick={onClose}
                            >
                                Get Started
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MobileSidebar;
