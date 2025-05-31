import React from "react";
import megaphoneLogo from '../assets/foto2.png'

export default function Login() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white font-sans">
            <div className="flex flex-col md:flex-row max-w-6xl w-full h-auto md:h-[600px]">
                {/* Left Section */}
                <div className="hidden md:flex flex-1 flex-col justify-center items-center px-8 py-12">
                    <img
                        src={megaphoneLogo}
                        alt="Megaphone Illustration"
                        className="w-[260px] h-auto mb-8"
                    />
                    <p className="text-[#073E81] italic font-semibold text-center text-lg">
                        "Stay informed, stay ahead. With Instannews,<br />
                        get the news you need, the way you want."
                    </p>
                </div>

                {/* Right Section */}
                <div className="flex-1 flex flex-col justify-center px-8 py-12">
                    <div className="w-full max-w-md mx-auto">
                        <h1 className="text-2xl md:text-3xl font-bold text-[#00569C] mb-1 text-center">
                            Hello, welcome back!
                        </h1>
                        <p className="text-sm text-gray-600 mb-6 text-center">
                            Do you already have an account?{" "}
                            <a href="/signup" className="text-[#00569C] font-semibold hover:underline">
                                Sign Up Now
                            </a>
                        </p>

                        <form>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-800 placeholder-gray-500 text-sm"
                                />
                            </div>

                            <div className="mb-10">
                                <label htmlFor="password" className="block text-sm font-medium mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:border-blue-800 text-sm"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-900 hover:bg-blue-950 text-white py-3 rounded-lg font-semibold shadow-md text-sm"
                            >
                                Masuk ke akun
                            </button>

                            <p className="text-xs text-center text-gray-500 mt-6">
                                By continuing, you agree to our{" "}
                                <a href="#" className="text-blue-800 underline">
                                    Terms of Use
                                </a>{" "}
                                and{" "}
                                <a href="#" className="text-blue-800 underline">
                                    Privacy Policy
                                </a>.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
