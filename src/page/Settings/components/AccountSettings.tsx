import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { authAPI } from '../../../Services/auth_api/auth_api';
import { useAuth } from '../../../context/AuthContext';

const AccountSettings = () => {
    const { user, checkAuth } = useAuth();
    const [formData, setFormData] = useState({
        fullName: '',
        email: user?.email || '',
        username: user?.username || ''
    });
    const [passwords, setPasswords] = useState({
        current: '',
        new: '',
        confirm: ''
    });
    const [twoFactor, setTwoFactor] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSaveChanges = async () => {
        setLoading(true);
        try {
            // Update username if changed
            if (formData.username !== user?.username) {
                await authAPI.updateProfile(formData.username);
            }

            // Update password if provided
            if (passwords.new) {
                if (passwords.new !== passwords.confirm) {
                    toast.error('Passwords do not match');
                    setLoading(false);
                    return;
                }
                await authAPI.updatePassword(passwords.new);
                setPasswords({ current: '', new: '', confirm: '' });
            }

            await checkAuth();
            toast.success('Settings updated successfully');
        } catch (error: any) {
            toast.error(error.message || 'Failed to update settings');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            {/* User Information */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">User Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="ahmed@example.com"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent outline-none"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            placeholder="ahmed_hassan"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent outline-none"
                        />
                    </div>
                </div>
            </div>

            {/* Security Information */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Information</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Current Password
                        </label>
                        <input
                            type="password"
                            value={passwords.current}
                            onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            New Password
                        </label>
                        <input
                            type="password"
                            value={passwords.new}
                            onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm New Password
                        </label>
                        <input
                            type="password"
                            value={passwords.confirm}
                            onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent outline-none"
                        />
                    </div>

                    {/* Two-Factor Authentication */}
                    <div className="flex items-center justify-between py-4 border-t border-gray-200">
                        <div>
                            <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
                            <p className="text-xs text-gray-500">Add an extra layer of security to your account</p>
                        </div>
                        <button
                            onClick={() => setTwoFactor(!twoFactor)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${twoFactor ? 'bg-[#7c3aed]' : 'bg-gray-300'
                                }`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${twoFactor ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Save Button */}
            <button
                onClick={handleSaveChanges}
                disabled={loading}
                className="w-full py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
            >
                {loading ? 'Saving...' : 'Save Changes'}
            </button>
        </div>
    );
};

export default AccountSettings;
