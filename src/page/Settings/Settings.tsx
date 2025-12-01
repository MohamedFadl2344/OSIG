import { useState } from 'react';
import SettingsSidebar from './components/SettingsSidebar';
import AccountSettings from './components/AccountSettings';
import APIKeyManagement from './components/APIKeyManagement';
import DeleteAccount from './components/DeleteAccount';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('account');

    const renderContent = () => {
        switch (activeTab) {
            case 'account':
                return <AccountSettings />;
            case 'api':
                return <APIKeyManagement />;
            case 'delete':
                return <DeleteAccount />;
            default:
                return <AccountSettings />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <SettingsSidebar activeTab={activeTab} onTabChange={setActiveTab} />

                    {/* Main Content */}
                    <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 lg:p-8">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
