const MissionCard = () => {
    return (
        <div className="bg-gray-50 rounded-[2.5rem] p-10 h-full">
            <div className="w-14 h-14 bg-[#0ea5e9] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#0ea5e9]/20">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
                To empower everyone with AI-driven creativity while upholding the highest standards of privacy and data security. We believe powerful tools should never require sacrificing your personal information.
            </p>
        </div>
    );
};

export default MissionCard;
