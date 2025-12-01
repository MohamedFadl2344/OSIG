import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../../context/AuthContext';
import { deleteUserAccount } from './api/delete_api';
import { FiAlertTriangle } from 'react-icons/fi';

const DeleteAccount = () => {
    const [confirmText, setConfirmText] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleDeleteAccount = async () => {
        if (confirmText !== 'DELETE') {
            toast.error('Please type DELETE to confirm');
            return;
        }

        setLoading(true);
        try {
            await deleteUserAccount();
            logout(); // Clear local state
            toast.success('Account deleted successfully');
            navigate('/');
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Failed to delete account');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete Account</h3>
                <p className="text-sm text-gray-600">
                    Permanently delete your account and all associated data
                </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
                <FiAlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                    <h4 className="text-sm font-semibold text-red-900 mb-1">Warning</h4>
                    <p className="text-sm text-red-800">
                        This action cannot be undone. All your data, including API keys and generated images history, will be permanently deleted.
                    </p>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type <span className="font-bold">DELETE</span> to confirm
                </label>
                <input
                    type="text"
                    value={confirmText}
                    onChange={(e) => setConfirmText(e.target.value)}
                    placeholder="DELETE"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                />
            </div>

            <button
                onClick={handleDeleteAccount}
                disabled={loading || confirmText !== 'DELETE'}
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? 'Deleting...' : 'Delete Account'}
            </button>
        </div>
    );
};

export default DeleteAccount;
