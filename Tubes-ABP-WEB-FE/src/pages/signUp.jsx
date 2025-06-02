import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signupLogo from '../assets/signup.png';

export default function SignUp() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: fullname,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Signup successful!');
        navigate('/login');
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      alert('Error connecting to server');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-sans">
      <div className="w-full max-w-6xl flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-center px-8 py-12">
          <img src={signupLogo} alt="Signup Illustration" className="w-3/5 mb-10" />
          <p className="text-center text-[#073E81] italic text-lg font-medium leading-relaxed">
            "Sign up and stay ahead. With Instannews, customize<br />
            your news experience and stay informed on your<br />
            terms."
          </p>
        </div>


        <div className="flex-1 flex flex-col justify-center px-8 py-12">
          <div className="max-w-md w-full mx-auto">
            <h1 className="text-3xl font-bold text-[#00569C] mb-2 text-center">
              Get Started with Instannews!
            </h1>
            <p className="text-sm text-gray-600 mb-6 text-center">
              Already have an account?{' '}
              <a href="/login" className="text-[#00569C] font-semibold">
                Log in now
              </a>
            </p>

            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label htmlFor="fullname" className="block font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:border-[#0047AB]"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:border-[#0047AB]"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:border-[#0047AB]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#003380] hover:bg-[#002266] text-white py-3 rounded-lg font-semibold shadow-md"
              >
                Buat akun
              </button>

              <p className="text-xs text-center text-gray-500 mt-6">
                By continuing, you agree to our{' '}
                <a href="#" className="text-[#0047AB] underline">
                  Terms of Use
                </a>{' '}
                and{' '}
                <a href="#" className="text-[#0047AB] underline">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
