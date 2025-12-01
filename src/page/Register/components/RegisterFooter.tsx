import { Link } from 'react-router-dom';

const RegisterFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="mt-8">
            {/* Sign In Link */}
            <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-[#7c3aed] hover:text-[#6d28d9]">
                    Sign in
                </Link>
            </p>

            {/* Security Notice */}
            <div className="mt-8 flex items-center justify-center text-xs text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Your data stays secure and private
            </div>

            {/* Footer Links */}
            <div className="mt-6 flex items-center justify-center space-x-4 text-xs text-gray-500">
                <a href="#" className="hover:text-gray-700">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-gray-700">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-gray-700">Support</a>
            </div>

            {/* Copyright */}
            <p className="mt-4 text-center text-xs text-gray-400">
                © {currentYear} OSIG. All rights reserved.
            </p>
        </div>
    );
};

export default RegisterFooter;
