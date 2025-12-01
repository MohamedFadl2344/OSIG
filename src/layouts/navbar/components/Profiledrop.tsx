import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSettings, FiLogOut, FiChevronDown } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../../context/AuthContext';
import { authAPI } from '../../../Services/auth_api/auth_api';

interface ProfileDropProps {
    userEmail: string;
}

const ProfileDrop = ({ userEmail }: ProfileDropProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const { logout } = useAuth();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSignOut = async () => {
        try {
            await authAPI.signOut();
            logout();
            toast.success('Logged out successfully');
            navigate('/');
        } catch (error: any) {
            toast.error(error.message || 'Failed to logout');
        }
    };

    // Get initials from email
    const getInitials = (email: string) => {
        return email ? email.charAt(0).toUpperCase() : 'U';
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Profile Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
                <div className="w-8 h-8 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] rounded-full flex items-center justify-center text-white font-semibold">
                    {getInitials(userEmail)}
                </div>
                <FiChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="fixed lg:absolute left-4 right-4 bottom-20 lg:left-auto lg:right-0 lg:bottom-auto lg:top-full lg:mt-2 w-auto lg:w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
                    {/* User Email */}
                    <div className="px-4 py-3 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] rounded-full flex items-center justify-center text-white font-semibold text-lg">
                                {getInitials(userEmail)}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    {userEmail}
                                </p>
                                <p className="text-xs text-gray-500">Free Plan</p>
                            </div>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                        {/* Settings */}
                        <Link
                            to="/settings"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                        >
                            <FiSettings className="w-4 h-4 text-gray-600" />
                            <span className="text-sm text-gray-700">Settings</span>
                        </Link>
                    </div>

                    {/* Sign Out */}
                    <div className="border-t border-gray-100 pt-2">
                        <button
                            onClick={handleSignOut}
                            className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 transition-colors text-red-600"
                        >
                            <FiLogOut className="w-4 h-4" />
                            <span className="text-sm font-medium">Sign Out</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileDrop;
