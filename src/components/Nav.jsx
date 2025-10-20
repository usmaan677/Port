import React, { useState } from 'react';
import { AcademicCapIcon, Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import {Link, useNavigate} from 'react-router-dom';
import CircularText from '../reactbits/CircularText.jsx';

const Nav = ({ theme, setTheme, experienceRef }) =>{
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`${theme === "dark" 
      ? "bg-gray-900/95 backdrop-blur-md border-gray-800" 
      : "bg-white/95 backdrop-blur-md border-gray-200"} 
      shadow-lg w-full border-b sticky top-0 z-40 transition-all duration-300`}>
      <div className='flex justify-between items-center md:px-10 py-4 px-7'>
        <Link to="/">
          <div className="flex text-2xl cursor-pointer gap-3 items-center group">
            <div className="relative">
              <AcademicCapIcon className={`h-10 w-10 ${theme === "dark" ? "text-blue-400" : "text-blue-600"} group-hover:scale-110 transition-transform duration-300`} />
              <div className={`absolute -inset-1 rounded-full ${theme === "dark" ? "bg-blue-600" : "bg-blue-500"} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur`}></div>
            </div>
            <span className={`font-bold bg-gradient-to-r ${theme === "dark" ? "from-white to-gray-300" : "from-gray-800 to-gray-600"} bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300`}>
              Usmaan
            </span>
          </div>
        </Link>

        <div className="hidden md:block">
          <ul className={`flex gap-8 text-lg font-medium items-center ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            <li>
              <Link to="/" className={`relative cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r ${theme === "dark" ? "hover:from-blue-400 hover:to-purple-400" : "hover:from-blue-600 hover:to-purple-600"} hover:bg-clip-text group`}>
                Home
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${theme === "dark" ? "bg-gradient-to-r from-blue-400 to-purple-400" : "bg-gradient-to-r from-blue-600 to-purple-600"} group-hover:w-full transition-all duration-300`}></span>
              </Link>
            </li>
            <li>
              <Link
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/#experience');
                    setMenuOpen(false); 
                }}
                className={`relative cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r ${theme === "dark" ? "hover:from-blue-400 hover:to-purple-400" : "hover:from-blue-600 hover:to-purple-600"} hover:bg-clip-text group`}
              >
                Experience
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${theme === "dark" ? "bg-gradient-to-r from-blue-400 to-purple-400" : "bg-gradient-to-r from-blue-600 to-purple-600"} group-hover:w-full transition-all duration-300`}></span>
              </Link>
            </li>
            <li>
              <Link to="/resume" className={`relative cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r ${theme === "dark" ? "hover:from-blue-400 hover:to-purple-400" : "hover:from-blue-600 hover:to-purple-600"} hover:bg-clip-text group`}>
                Resume
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${theme === "dark" ? "bg-gradient-to-r from-blue-400 to-purple-400" : "bg-gradient-to-r from-blue-600 to-purple-600"} group-hover:w-full transition-all duration-300`}></span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`relative cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r ${theme === "dark" ? "hover:from-blue-400 hover:to-purple-400" : "hover:from-blue-600 hover:to-purple-600"} hover:bg-clip-text group`}>
                Contact Me
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${theme === "dark" ? "bg-gradient-to-r from-blue-400 to-purple-400" : "bg-gradient-to-r from-blue-600 to-purple-600"} group-hover:w-full transition-all duration-300`}></span>
              </Link>
            </li>
            
            {/* Theme Toggle Buttons */}
            <li className="flex gap-2 ml-4">
              <button 
                onClick={() => setTheme("")}
                className={`p-2 rounded-full transition-all duration-300 ${theme === "dark" 
                  ? "bg-gray-800 hover:bg-yellow-500/20 hover:text-yellow-400" 
                  : "bg-gray-100 hover:bg-yellow-500/20 hover:text-yellow-600"} 
                  ${theme !== "dark" ? "ring-2 ring-yellow-500" : ""}`}
              >
                <SunIcon className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setTheme("dark")}
                className={`p-2 rounded-full transition-all duration-300 ${theme === "dark" 
                  ? "bg-gray-700 hover:bg-blue-500/20 hover:text-blue-400" 
                  : "bg-gray-200 hover:bg-blue-500/20 hover:text-blue-600"} 
                  ${theme === "dark" ? "ring-2 ring-blue-500" : ""}`}
              >
                <MoonIcon className="h-5 w-5" />
              </button>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button 
            onClick={() => setTheme("")}
            className={`p-2 rounded-full transition-all duration-300 ${theme === "dark" 
              ? "bg-gray-800 hover:bg-yellow-500/20 hover:text-yellow-400" 
              : "bg-gray-100 hover:bg-yellow-500/20 hover:text-yellow-600"} 
              ${theme !== "dark" ? "ring-2 ring-yellow-500" : ""}`}
          >
            <SunIcon className="h-5 w-5" />
          </button>
          <button 
            onClick={() => setTheme("dark")}
            className={`p-2 rounded-full transition-all duration-300 ${theme === "dark" 
              ? "bg-gray-700 hover:bg-blue-500/20 hover:text-blue-400" 
              : "bg-gray-200 hover:bg-blue-500/20 hover:text-blue-600"} 
              ${theme === "dark" ? "ring-2 ring-blue-500" : ""}`}
          >
            <MoonIcon className="h-5 w-5" />
          </button>
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className={`p-2 rounded-full transition-all duration-300 ${theme === "dark" 
              ? "bg-gray-800 hover:bg-gray-700 text-white" 
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"}`}
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden ${theme === "dark" 
          ? "bg-gray-800/95 backdrop-blur-md border-gray-700" 
          : "bg-white/95 backdrop-blur-md border-gray-300"} 
          border-t transition-all duration-300 transform ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
          <ul className="py-4 px-7 space-y-4">
            <li>
              <Link 
                onClick={() => setMenuOpen(false)} 
                to="/" 
                className={`block py-2 text-lg font-medium transition-all duration-300 ${theme === "dark" 
                  ? "text-gray-300 hover:text-blue-400" 
                  : "text-gray-700 hover:text-blue-600"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate('/#experience');
                  setMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-lg font-medium transition-all duration-300 ${theme === "dark" 
                  ? "text-gray-300 hover:text-blue-400" 
                  : "text-gray-700 hover:text-blue-600"}`}
              >
                Experience
              </button>
            </li>
            <li>
              <Link 
                onClick={() => setMenuOpen(false)} 
                to="/resume" 
                className={`block py-2 text-lg font-medium transition-all duration-300 ${theme === "dark" 
                  ? "text-gray-300 hover:text-blue-400" 
                  : "text-gray-700 hover:text-blue-600"}`}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link 
                onClick={() => setMenuOpen(false)} 
                to="/contact"
                className={`block py-2 text-lg font-medium transition-all duration-300 ${theme === "dark" 
                  ? "text-gray-300 hover:text-blue-400" 
                  : "text-gray-700 hover:text-blue-600"}`}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
