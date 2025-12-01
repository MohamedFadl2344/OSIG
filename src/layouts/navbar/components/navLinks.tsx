import { Link } from 'react-router-dom';

const Navlinks = () => {
    const links = [
        { to: '#home', label: 'Home' },
        { to: '#about', label: 'About' },
        { to: '#services', label: 'Services' },
        { to: '#contact', label: 'Contact' }
    ];

    return (
        <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
                <Link
                    key={link.to}
                    to={link.to}
                    className="text-gray-700 hover:text-[#7c3aed] transition-colors text-base font-medium"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
};

export default Navlinks;
