import LoginHeader from './components/LoginHeader';
import LoginForm from './components/LoginForm';
import SocialLogin from './components/SocialLogin';
import LoginFooter from './components/LoginFooter';

const Login = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                {/* Card Container */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <LoginHeader />
                    <LoginForm />
                    <SocialLogin />
                    <LoginFooter />
                </div>
            </div>
        </div>
    );
};

export default Login;
