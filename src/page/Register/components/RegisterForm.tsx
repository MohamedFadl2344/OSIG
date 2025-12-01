import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../../context/AuthContext';
import { authAPI } from '../../../Services/auth_api/auth_api';

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
            toast.error('Please fill in all fields');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        if (formData.password.length < 8) {
            toast.error('Password must be at least 8 characters');
            return;
        }

        if (!agreedToTerms) {
            toast.error('Please agree to the Terms of Service and Privacy Policy');
            return;
        }

        setLoading(true);
        try {
            const response = await authAPI.signUp({
                username: formData.username,
                email: formData.email,
                password: formData.password
            });

            if (response.success) {
                login(response.token, response.user);
                toast.success('Account created successfully!');
                navigate('/');
            } else {
                toast.error(response.message || 'Registration failed');
            }
        } catch (error: any) {
            console.error('Registration error:', error);
            toast.error(error.response?.data?.message || 'An error occurred during registration');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username Input */}
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                    Username
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        id="username"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        placeholder="Enter your username"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent outline-none transition-all"
                        disabled={loading}
                    />
                </div>
            </div>

            {/* Email Input */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent outline-none transition-all"
                        disabled={loading}
                    />
                </div>
            </div>

            {/* Password Input */}
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiLock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="Enter your password"
                        className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent outline-none transition-all"
                        disabled={loading}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                        {showPassword ? (
                            <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        ) : (
                            <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        )}
                    </button>
                </div>
            </div>

            {/* Confirm Password Input */}
            <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiLock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        placeholder="Confirm your password"
                        className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent outline-none transition-all"
                        disabled={loading}
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                        {showConfirmPassword ? (
                            <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        ) : (
                            <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        )}
                    </button>
                </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start">
                <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="h-4 w-4 mt-1 text-[#7c3aed] focus:ring-[#7c3aed] border-gray-300 rounded"
                    disabled={loading}
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="#" className="text-[#7c3aed] hover:text-[#6d28d9] font-medium">
                        Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-[#7c3aed] hover:text-[#6d28d9] font-medium">
                        Privacy Policy
                    </a>
                </label>
            </div>

            {/* Create Account Button */}
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-lg shadow-[#7c3aed]/30 hover:shadow-xl hover:shadow-[#7c3aed]/40 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? 'Creating Account...' : 'Create Account'}
            </button>
        </form>
    );
};

export default RegisterForm;
