import { useState } from 'react'


export default function Login() {

     const [formData] = useState({
        email: '',
        password: '',
    })
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 lg:mx-0 mx-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" type="email" id="email" value={formData.email} onChange={(e) => setEmail(e.target.value)} required />          
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" type="password" value={formData.password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <span className="ml-2 text-sm text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-slate-500 text-white font-bold py-4 px-4 rounded-lg hover:bg-slate-600 hover:-translate-y-0.5 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-700">
          Do not have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

