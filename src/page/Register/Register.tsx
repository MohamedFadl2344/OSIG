import RegisterHeader from './components/RegisterHeader';
import RegisterForm from './components/RegisterForm';
import RegisterFooter from './components/RegisterFooter';

const Register = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                {/* Card Container */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <RegisterHeader />
                    <RegisterForm />
                    <RegisterFooter />
                </div>
            </div>
        </div>
    );
};

export default Register;
