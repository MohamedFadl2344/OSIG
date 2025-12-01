import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../../context/AuthContext';

interface GenerateButtonProps {
    onClick?: () => void;
    loading?: boolean;
}

const GenerateButton = ({ onClick, loading }: GenerateButtonProps) => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleClick = () => {
        if (!user) {
            toast.error('Please login to generate images');
            navigate('/login');
            return;
        }

        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] hover:from-[#6d28d9] hover:to-[#9333ea] text-white font-semibold rounded-xl shadow-lg shadow-[#7c3aed]/30 hover:shadow-xl hover:shadow-[#7c3aed]/40 transition-all mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {loading ? 'Generating...' : 'Generate Image'}
        </button>
    );
};

export default GenerateButton;
