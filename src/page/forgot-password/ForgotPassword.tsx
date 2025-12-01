import { useState } from 'react';
import { Link } from 'react-router-dom';
import { authAPI } from '../../Services/auth_api/auth_api';
import { toast } from 'react-hot-toast';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            toast.error('Please enter your email');
            return;
        }

        setLoading(true);
        try {
            await authAPI.requestPasswordReset(email);
            toast.success('Reset link sent to your email');
            setEmail('');
        } catch (error: any) {
            toast.error(error.message || 'Failed to send reset link');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
            {/* Logo */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-[#7c3aed]">OSIG</h1>
            </div>

            {/* Card */}
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Forgot Password</h2>
                    <p className="text-sm text-gray-600">
                        Enter your email to reset your password
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent outline-none transition-all"
                        />
                        <p className="text-xs text-gray-500 mt-2">
                            You will receive a secure link to reset your password.
                        </p>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Sending...' : 'Send Reset Link'}
                    </button>

                    {/* Back to Sign In */}
                    <div className="text-center">
                        <Link
                            to="/login"
                            className="text-sm text-gray-600 hover:text-[#7c3aed] transition-colors"
                        >
                            Back to Sign In
                        </Link>
                    </div>
                </form>
            </div>

            {/* Footer */}
            <p className="text-xs text-gray-500 mt-8 text-center">
                © 2025 OSIG. Secure password reset powered by advanced encryption.
            </p>
        </div>
    );
};

export default ForgotPassword;
