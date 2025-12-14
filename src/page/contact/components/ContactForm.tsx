import { useState } from 'react';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiShield, FiClock, FiGlobe } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { emailService } from '../../../Services/EmailJS/EmailJS';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
            toast.error('Please fill in all fields');
            return;
        }

        setLoading(true);

        try {
            const result = await emailService.sendEmail({
                from_name: formData.fullName,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message
            });

            if (result.success) {
                toast.success(result.message);
                setFormData({
                    fullName: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            toast.error('An unexpected error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        We're here to support you anytime.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your name..."
                                        aria-required="true"
                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email..."
                                        aria-required="true"
                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <div className="relative">
                                    <FiMessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What's this about..."
                                        aria-required="true"
                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Write your message..."
                                    aria-required="true"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg shadow-[#7c3aed]/30 hover:shadow-xl hover:shadow-[#7c3aed]/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        <FiSend className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Support Info */}
                    <div className="space-y-6">
                        {/* Email Support */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                        <FiMail className="w-6 h-6 text-blue-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email Support</h3>
                                    <p className="text-gray-600 mb-2">support@yourapp.com</p>
                                    <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                                        <FiClock className="w-6 h-6 text-cyan-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Business Hours</h3>
                                    <p className="text-gray-600 mb-2">24/7 Support Available</p>
                                    <p className="text-sm text-gray-500">Round-the-clock assistance for all users</p>
                                </div>
                            </div>
                        </div>

                        {/* Global Team */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                        <FiGlobe className="w-6 h-6 text-purple-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Global Team</h3>
                                    <p className="text-gray-600 mb-2">Remote-first Company</p>
                                    <p className="text-sm text-gray-500">Serving customers worldwide</p>
                                </div>
                            </div>
                        </div>

                        {/* Privacy Notice */}
                        <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                            <div className="flex items-start gap-3">
                                <FiShield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-gray-700">
                                    Your message is encrypted and handled with full privacy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
