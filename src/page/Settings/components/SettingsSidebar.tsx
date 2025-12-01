import { FiUser, FiKey, FiTrash2 } from 'react-icons/fi';

interface SettingsSidebarProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const SettingsSidebar = ({ activeTab, onTabChange }: SettingsSidebarProps) => {
    const tabs = [
        { id: 'account', label: 'Account Settings', icon: FiUser },
        { id: 'api', label: 'API Key Management', icon: FiKey },
        { id: 'delete', label: 'Delete Account', icon: FiTrash2 }
    ];

    return (
        <div className="w-full lg:w-64 flex-shrink-0">
            {/* Header */}
            <h2 className="text-xl font-bold text-gray-900 mb-6 px-1">Settings</h2>

            {/* Navigation Tabs */}
            <div className="space-y-3">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200 font-medium ${isActive
                                    ? 'bg-[#5b54e6] text-white shadow-lg shadow-indigo-200'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600'
                                }`}
                        >
                            <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                            <span className="text-sm">{tab.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SettingsSidebar;
