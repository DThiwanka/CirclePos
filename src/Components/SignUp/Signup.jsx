import React, { useState, useEffect } from 'react';
import HeroImage from './learning-animate.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../LandingPage/Navbar/Navbar';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        retypePassword: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.retypePassword) newErrors.retypePassword = 'Passwords do not match';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Submit form
        }
    };

    return (
      <>
      <Navbar showSignInButton={false} showSignUpButton={false}  />
        <div className="relative flex flex-col md:flex-row overflow-hidden bg-gray-100 px-4 md:px-8 lg:px-16">
            <div className="flex-1 flex flex-col -mt-20 md:flex-row mx-4 md:mx-8 lg:mx-16 py-4 md:py-8">
                <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
                    <img
                        src={HeroImage}
                        alt="Learning Illustration"
                        className="w-full max-w-lg h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                        data-aos="fade-right"
                        style={{ maxWidth: '100%', height: '100%' }} // Adjust max-width or remove it
                    />
                </div>

                <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gray-100 p-6 md:p-12">
                    <div
                        className="w-full max-w-md p-8 rounded-lg space-y-8"
                        data-aos="fade-left"
                    >
                        <h2
                            className="text-2xl md:text-3xl font-bold text-center text-gray-800"
                            data-aos="fade-up"
                        >
                            Create Account
                        </h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div data-aos="fade-up" data-aos-delay="200">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className={`mt-1 block w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-purple-800 transition duration-200 ease-in-out ${errors.firstName ? 'border-red-500' : ''}`}
                                        placeholder="John"
                                        required
                                        aria-required="true"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    />
                                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300">
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className={`mt-1 block w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-purple-800 transition duration-200 ease-in-out ${errors.lastName ? 'border-red-500' : ''}`}
                                        placeholder="Doe"
                                        required
                                        aria-required="true"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    />
                                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="400">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className={`mt-1 block w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-purple-800 transition duration-200 ease-in-out ${errors.email ? 'border-red-500' : ''}`}
                                    placeholder="you@example.com"
                                    required
                                    aria-required="true"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div data-aos="fade-up" data-aos-delay="500">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className={`mt-1 block w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-purple-800 transition duration-200 ease-in-out ${errors.password ? 'border-red-500' : ''}`}
                                        placeholder="••••••••"
                                        required
                                        aria-required="true"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                                </div>
                                <div data-aos="fade-up" data-aos-delay="600">
                                    <label htmlFor="retypePassword" className="block text-sm font-medium text-gray-600">Retype Password</label>
                                    <input
                                        type="password"
                                        id="retypePassword"
                                        className={`mt-1 block w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-purple-800 transition duration-200 ease-in-out ${errors.retypePassword ? 'border-red-500' : ''}`}
                                        placeholder="••••••••"
                                        required
                                        aria-required="true"
                                        value={formData.retypePassword}
                                        onChange={(e) => setFormData({ ...formData, retypePassword: e.target.value })}
                                    />
                                    {errors.retypePassword && <p className="text-red-500 text-sm">{errors.retypePassword}</p>}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 text-white font-bold rounded-md bg-purple-800 hover:bg-purple-900 transition duration-300"
                                data-aos="fade-up"
                                data-aos-delay="700"
                            >
                                Sign Up
                            </button>
                        </form>
                        <div className="text-center mt-6">
                            <span className="text-sm text-gray-600">Already have an account?</span>
                            <a
                                href="/sign-in"
                                className="ml-1 text-sm text-purple-800 hover:text-blue-600 transition duration-150 ease-in-out"
                                data-aos="fade-up"
                                data-aos-delay="800"
                            >
                                Sign In
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="fixed bottom-4 right-4 w-12 h-12 bg-purple-800 text-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300"
                aria-label="Go Back"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M15 19l-7-7 7-7" />
                </svg>
            </button>
        </div>
        </>
    );
};

export default Signup;