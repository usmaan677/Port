import React from 'react';
import { DocumentArrowDownIcon, EyeIcon } from '@heroicons/react/24/outline';

const Resume = ({theme}) => {
  return (
    <div className={`${theme === "dark" 
      ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" 
      : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800"} 
      min-h-screen relative overflow-hidden`}>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 right-20 w-96 h-96 ${theme === "dark" ? "bg-blue-600" : "bg-blue-400"} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse`}></div>
        <div className={`absolute bottom-20 left-20 w-80 h-80 ${theme === "dark" ? "bg-purple-600" : "bg-purple-400"} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 ${theme === "dark" ? "bg-pink-600" : "bg-pink-400"} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500`}></div>
      </div>

      <div className="relative p-6 md:p-10 lg:p-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r ${theme === "dark" ? "from-white via-blue-200 to-purple-200" : "from-gray-800 via-blue-600 to-purple-600"} bg-clip-text text-transparent`}>
            My Resume
          </h1>
          <div className={`w-32 h-1 mx-auto rounded-full bg-gradient-to-r ${theme === "dark" ? "from-blue-500 to-purple-500" : "from-blue-600 to-purple-600"} mb-6`}></div>
          <p className={`text-lg md:text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto leading-relaxed`}>
            Feel free to reach out and let's discuss how we can work together!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a 
            href='https://drive.google.com/file/d/14pdmVeCkJucrdUdb-EiVE0h1mvYcRGvZ/view?usp=sharing' 
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${theme === "dark" 
              ? "bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:bg-blue-600/20 hover:border-blue-500 text-white" 
              : "bg-white/70 backdrop-blur-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-400 text-gray-800"} 
              shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20`}
          >
            <EyeIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span>View Full Resume</span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a 
            href="/Usmaan_Resume-4.pdf" 
            download="Usmaan_Sayed_Resume.pdf" 
            className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${theme === "dark" 
              ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white" 
              : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"} 
              shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 relative overflow-hidden`}
          >
            <DocumentArrowDownIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span>Download Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Resume Viewer */}
        <div className={`w-full max-w-6xl mx-auto ${theme === "dark" 
          ? "bg-gray-800/30 backdrop-blur-xl border-gray-700/50" 
          : "bg-white/50 backdrop-blur-xl border-gray-200/50"} 
          rounded-3xl shadow-2xl p-6 md:p-8 border overflow-hidden`}>
          
          <div className="relative">
            {/* Decorative elements around iframe */}
            <div className={`absolute -top-2 -left-2 w-8 h-8 ${theme === "dark" ? "bg-blue-500" : "bg-blue-400"} rounded-full opacity-60 animate-ping`}></div>
            <div className={`absolute -top-2 -right-2 w-6 h-6 ${theme === "dark" ? "bg-purple-500" : "bg-purple-400"} rounded-full opacity-60 animate-ping delay-300`}></div>
            <div className={`absolute -bottom-2 -left-2 w-6 h-6 ${theme === "dark" ? "bg-pink-500" : "bg-pink-400"} rounded-full opacity-60 animate-ping delay-700`}></div>
            <div className={`absolute -bottom-2 -right-2 w-8 h-8 ${theme === "dark" ? "bg-indigo-500" : "bg-indigo-400"} rounded-full opacity-60 animate-ping delay-1000`}></div>
            
            <div className={`relative rounded-2xl overflow-hidden shadow-inner ${theme === "dark" ? "bg-gray-900/50" : "bg-gray-50/50"} p-2`}>
              <iframe
                src="/Usmaan_Resume-4.pdf#view=Fit"
                title="Usmaan's Resume"
                width="100%"
                height="800px"
                className={`w-full rounded-xl border-2 ${theme === "dark" ? "border-gray-600" : "border-gray-300"} transition-all duration-300 hover:border-blue-400`}
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className={`inline-flex items-center px-6 py-3 rounded-full ${theme === "dark" ? "bg-gray-800/50 border border-gray-700" : "bg-white/50 border border-gray-200"} backdrop-blur-sm`}>
            <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              Interested in working together? 
              <a 
                href="/contact" 
                className={`ml-2 font-semibold ${theme === "dark" ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-500"} transition-colors duration-300`}
              >
                Let's connect!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Resume;
