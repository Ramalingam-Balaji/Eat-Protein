import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebookF } from "react-icons/fa";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login/signup logic here
    console.log(isLogin ? "Logging in..." : "Signing up...");
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full grid lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        
        {/* Left Side - Branding / Image (Hidden on mobile) */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-green-600 to-green-800 p-12 text-white">
          <h2 className="text-4xl font-extrabold mb-4">
            {isLogin ? "Welcome Back!" : "Join Us Today!"}
          </h2>
          <p className="text-green-100 text-lg mb-8">
            {isLogin 
              ? "Log in to access your personalized diet plans, fitness routines, and exclusive shop discounts." 
              : "Sign up to start your fitness journey, track your progress, and get expert advice tailored just for you."}
          </p>
          <ul className="space-y-4 text-green-50">
            <li className="flex items-center gap-3">
              <span className="bg-white/20 p-2 rounded-full">✓</span> Custom Diet Plans
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-white/20 p-2 rounded-full">✓</span> Expert Fitness Coaching
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-white/20 p-2 rounded-full">✓</span> Premium Supplements
            </li>
          </ul>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              {isLogin ? "Sign in to your account" : "Create a new account"}
            </h2>
            <p className="text-gray-500 mt-2">
              {isLogin ? "Enter your credentials below" : "Fill in your details to get started"}
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="flex items-center justify-center gap-3 w-full border border-gray-300 rounded-xl py-3 hover:bg-gray-50 transition font-medium text-gray-700">
              <FaGoogle className="text-red-500" /> Google
            </button>
            <button className="flex items-center justify-center gap-3 w-full border border-gray-300 rounded-xl py-3 hover:bg-gray-50 transition font-medium text-gray-700">
              <FaFacebookF className="text-blue-600" /> Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="w-full h-px bg-gray-200"></div>
            <span className="px-4 text-gray-400 text-sm">OR</span>
            <div className="w-full h-px bg-gray-200"></div>
          </div>

          {/* Actual Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Name Field (Only for Signup) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Forgot Password (Only for Login) */}
            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                  Remember me
                </label>
                <a href="#" className="text-sm text-green-600 hover:text-green-700 font-medium">
                  Forgot password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition duration-300 shadow-lg shadow-green-600/30"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          {/* Toggle Login / Signup */}
          <p className="text-center text-gray-600 mt-8">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={toggleForm}
              className="text-green-600 hover:text-green-700 font-bold transition"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
          
          <div className="text-center mt-6">
            <Link to="/" className="text-sm text-gray-400 hover:text-gray-600 transition">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;