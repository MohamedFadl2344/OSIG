import { Link } from 'react-router-dom';

const AuthButtons = () => {
    return (
        <div className="hidden lg:flex items-center gap-4">
            <Link
                to="/login"
                className="px-6 py-2.5 text-[#7c3aed] hover:text-[#6d28d9] transition-colors text-base font-medium border-2 border-[#7c3aed] rounded-xl hover:bg-[#7c3aed]/5"
            >
                Login
            </Link>
            <Link
                to="/register"
                className="px-6 py-2.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white transition-all text-base font-medium rounded-xl shadow-lg shadow-[#7c3aed]/30 hover:shadow-xl hover:shadow-[#7c3aed]/40"
            >
                Get Started
            </Link>
        </div>
    );
};

export default AuthButtons;
