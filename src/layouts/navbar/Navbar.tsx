import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './components/Logo';
import Navlinks from './components/navLinks';
import AuthButtons from './components/AuthButtons';
import MobileMenuButton from './components/MobileMenuButton';
import MobileSidebar from './components/MobileSidebar';
import ProfileDrop from './components/Profiledrop';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { user, loading } = useAuth();

    // Check if we are on the home page
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage
                    ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4'
                    : 'bg-transparent py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <Logo />
                        <Navlinks />

                        <div className="hidden md:block">
                            {!loading && (
                                user ? (
                                    <ProfileDrop userEmail={user.email} />
                                ) : (
                                    <AuthButtons />
                                )
                            )}
                        </div>

                        <MobileMenuButton
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </div>
                </div>
            </nav>

            <MobileSidebar
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    );
};

export default Navbar;
