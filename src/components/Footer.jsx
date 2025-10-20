import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { } from '@heroicons/react/24/solid';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FaInstagram, FaLinkedin } from 'react-icons/fa6';


const Footer = ({theme}) => {
  const navigate = useNavigate();
  return (
    <footer className={`relative ${theme === "dark" 
      ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 border-gray-700" 
      : "bg-gradient-to-br from-gray-100 via-white to-gray-50 text-gray-800 border-gray-200"} 
      px-4 md:px-20 lg:px-28 shadow-2xl w-full border-t backdrop-blur-md overflow-hidden`}>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-10 right-10 w-40 h-40 ${theme === "dark" ? "bg-blue-600" : "bg-blue-400"} rounded-full mix-blend-multiply filter blur-2xl opacity-10`}></div>
        <div className={`absolute bottom-0 left-10 w-32 h-32 ${theme === "dark" ? "bg-purple-600" : "bg-purple-400"} rounded-full mix-blend-multiply filter blur-2xl opacity-10`}></div>
      </div>

      <div className='relative grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 pb-8'>
        {/* About Me Section */}
        <div className='space-y-4'>
          <h2 className={`text-center md:text-left text-xl font-bold mb-6 bg-gradient-to-r ${theme === "dark" ? "from-white to-gray-300" : "from-gray-800 to-gray-600"} bg-clip-text text-transparent`}>
            About Me
          </h2>
          <p className={`text-sm text-center md:text-left leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            An eager student with a strong passion for software development and a strong drive to learn new technologies.
          </p>
          <div className={`w-16 h-0.5 mx-auto md:mx-0 rounded-full bg-gradient-to-r ${theme === "dark" ? "from-blue-500 to-purple-500" : "from-blue-600 to-purple-600"}`}></div>
        </div>

        {/* Quick Links Section */}
        <div className='text-center md:text-left space-y-4'>
          <h2 className={`text-xl font-bold mb-6 bg-gradient-to-r ${theme === "dark" ? "from-white to-gray-300" : "from-gray-800 to-gray-600"} bg-clip-text text-transparent`}>
            Quick Links
          </h2>
          <ul className='space-y-3'>
            <li>
              <Link 
                to="/" 
                className={`inline-block text-sm transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r ${theme === "dark" ? "hover:from-blue-400 hover:to-purple-400" : "hover:from-blue-600 hover:to-purple-600"} hover:bg-clip-text transform hover:scale-105`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/#experience'); 
                }}
                className={`inline-block text-sm cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r ${theme === "dark" ? "hover:from-blue-400 hover:to-purple-400" : "hover:from-blue-600 hover:to-purple-600"} hover:bg-clip-text transform hover:scale-105`}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link 
                to="/resume" 
                className={`inline-block text-sm transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r ${theme === "dark" ? "hover:from-blue-400 hover:to-purple-400" : "hover:from-blue-600 hover:to-purple-600"} hover:bg-clip-text transform hover:scale-105`}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`inline-block text-sm transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r ${theme === "dark" ? "hover:from-blue-400 hover:to-purple-400" : "hover:from-blue-600 hover:to-purple-600"} hover:bg-clip-text transform hover:scale-105`}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect With Me Section */}
        <div className='space-y-4'>
          <h2 className={`text-center md:text-left text-xl font-bold mb-6 bg-gradient-to-r ${theme === "dark" ? "from-white to-gray-300" : "from-gray-800 to-gray-600"} bg-clip-text text-transparent`}>
            Connect With Me
          </h2>
          <div className='flex justify-center md:justify-start gap-6'>
            <a 
              href="https://www.instagram.com/usmaan.sa/" 
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center space-y-2 p-3 rounded-xl transition-all duration-300 ${theme === "dark" ? "hover:bg-gray-700/50" : "hover:bg-gray-100/50"} hover:scale-110 transform`}
            >
              <div className={`p-2 rounded-full ${theme === "dark" ? "bg-gray-700 group-hover:bg-pink-600" : "bg-gray-100 group-hover:bg-pink-500"} transition-all duration-300`}>
                <FaInstagram className='text-xl text-pink-500 group-hover:text-white transition-colors duration-300'/>
              </div>
              <span className='text-xs font-medium'>Instagram</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/sayedusmaan/" 
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center space-y-2 p-3 rounded-xl transition-all duration-300 ${theme === "dark" ? "hover:bg-gray-700/50" : "hover:bg-gray-100/50"} hover:scale-110 transform`}
            >
              <div className={`p-2 rounded-full ${theme === "dark" ? "bg-gray-700 group-hover:bg-blue-600" : "bg-gray-100 group-hover:bg-blue-500"} transition-all duration-300`}>
                <FaLinkedin className='text-xl text-blue-600 group-hover:text-white transition-colors duration-300'/>
              </div>
              <span className='text-xs font-medium'>LinkedIn</span>
            </a>

            <a 
              href="https://github.com/usmaan677" 
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center space-y-2 p-3 rounded-xl transition-all duration-300 ${theme === "dark" ? "hover:bg-gray-700/50" : "hover:bg-gray-100/50"} hover:scale-110 transform`}
            >
              <div className={`p-2 rounded-full ${theme === "dark" ? "bg-gray-700 group-hover:bg-gray-800" : "bg-gray-100 group-hover:bg-gray-700"} transition-all duration-300`}>
                <FaGithub className={`text-xl ${theme === "dark" ? "text-gray-400 group-hover:text-white" : "text-gray-600 group-hover:text-white"} transition-colors duration-300`}/>
              </div>
              <span className='text-xs font-medium'>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className={`relative border-t ${theme === "dark" ? "border-gray-700" : "border-gray-200"} text-center py-6`}>
        <div className={`inline-flex items-center px-6 py-2 rounded-full ${theme === "dark" ? "bg-gray-800/50" : "bg-white/50"} backdrop-blur-sm border ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}>
          <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            © 2025 Usmaan Sayed • Made with 
            <span className={`mx-1 font-semibold ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>React</span>
            and 
            <span className={`ml-1 font-semibold ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}>Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
