import logoSvg from '../../../assets/logo.svg';

const Logo = () => {
    return (
        <div className="flex items-center gap-3">
            <img
                src={logoSvg}
                alt="OSIG Logo"
                className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-gray-900">OSIG</span>
        </div>
    );
};

export default Logo;
