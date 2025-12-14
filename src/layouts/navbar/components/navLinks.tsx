import { Link, useLocation } from 'react-router-dom';

const Navlinks = () => {
    const location = useLocation();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        if (location.pathname === '/') {
            e.preventDefault();
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
        }
    };

    const links = [
        { to: '/', label: 'Home', isRoute: true },
        { to: '#about', label: 'About', isRoute: false, targetId: 'about' },
        { to: '#services', label: 'Services', isRoute: false, targetId: 'services' },
        { to: '/contact', label: 'Contact', isRoute: true }
    ];

    return (
        <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
                link.isRoute ? (
                    <Link
                        key={link.to}
                        to={link.to}
                        className="text-gray-700 hover:text-[#7c3aed] transition-colors text-base font-medium"
                    >
                        {link.label}
                    </Link>
                ) : (
                    <a
                        key={link.to}
                        href={link.to}
                        onClick={(e) => handleScroll(e, link.targetId!)}
                        className="text-gray-700 hover:text-[#7c3aed] transition-colors text-base font-medium cursor-pointer"
                    >
                        {link.label}
                    </a>
                )
            ))}
        </div>
    );
};

export default Navlinks;
