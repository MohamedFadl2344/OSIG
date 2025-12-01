import { FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className="mt-6">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">or continue with email</span>
                </div>
            </div>

            {/* Social Buttons */}
            <div className="mt-6 grid grid-cols-3 gap-4">
                <button
                    type="button"
                    className="flex justify-center items-center w-full h-16 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl transition-all"
                >
                    <FaGoogle className="h-7 w-7 text-[#EA4335]" />
                </button>
                <button
                    type="button"
                    className="flex justify-center items-center w-full h-16 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl transition-all"
                >
                    <FaGithub className="h-7 w-7 text-[#24292e]" />
                </button>
                <button
                    type="button"
                    className="flex justify-center items-center w-full h-16 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl transition-all"
                >
                    <FaTwitter className="h-7 w-7 text-[#1DA1F2]" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
