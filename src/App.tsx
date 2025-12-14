import { Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';
import { queryClient } from './config/queryClient';
import Layout from './layouts/layout';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import Register from './page/Register/Register';
import Imggen from './page/imggen/Imggen';
import Settings from './page/Settings/Settings';
import ForgotPassword from './page/forgot-password/ForgotPassword';
import Contact from './page/contact/contact';
import StructuredData from './components/StructuredData';

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <StructuredData />
                <Routes>
                    {/* Routes with Layout (Navbar + Footer) */}
                    <Route path="/" element={<Layout><Home /></Layout>} />
                    <Route path="/generate" element={<Layout><Imggen /></Layout>} />
                    <Route path="/settings" element={<Layout><Settings /></Layout>} />
                    <Route path="/contact" element={<Layout><Contact /></Layout>} />

                    {/* Routes without Layout (Auth Pages) */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                </Routes>
            </AuthProvider>
        </QueryClientProvider>
    );
}

export default App;
