import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">TutorConnect</h1>
        <div>
          <nav className='flex gap-2 flex-row'>
              <a href="login"
                className="bg-slate-100 text-slate-500 border border-slate-400 font-thin text-xs py-3 shadow-sm px-4 rounded-lg hover:bg-slate-200 hover:-translate-y-0.5 transition duration-500">
                Log In
              </a>
              <a href="register"
                className="bg-slate-500 text-white font-thin text-xs py-3 shadow-sm px-4 rounded-lg hover:bg-slate-600 hover:-translate-y-0.5 transition duration-200">
                Sign Up
              </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;