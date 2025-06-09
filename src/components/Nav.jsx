import React, { useState } from 'react';
import {AcademicCapIcon, Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import {SunIcon} from '@heroicons/react/24/solid';



const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className = "bg-gray-800 shadow-md w-full">
            <div className = ' flex justify-between md:px-10 py-4 px-7'>
                <div className = "flex text-2xl cursor-pointer gap-5 items-center">
                    <AcademicCapIcon className = "h-8 w-8 text-white" />
                    <span className = "text-white font-bold">Usmaan</span>
                </div>
                <div className = "hidden md:block">
                    <ul className = "flex gap-8 text-white text-lg font-semibold items-center">
                        <li className = " cursor-pointer hover:text-yellow-400 transition-colors duration-800">Home</li>
                        <li className = " cursor-pointer hover:text-yellow-400 transition-colors duration-800">Experience</li>
                        <li className = " cursor-pointer hover:text-yellow-400 transition-colors duration-800">Resume</li>
                        <li className = " cursor-pointer hover:text-yellow-400 transition-colors duration-800">Contact Me</li>
                        <li className = " cursor-pointer hover:text-yellow-400 transition-colors duration-800">
                            <SunIcon className = "h-6 w-6" />
                        </li>
                    </ul>
                </div>
                {/*Mobile menu Buttons */}
                <div className = "flex items-center gap-3 md:hidden">
                    <SunIcon className = "cursor-pointer h-7 w-7 text-white" />
                    <button onClick = {()  => setMenuOpen(!menuOpen)} className = "cursor-pointer">
                        {menuOpen ? (
                            <XMarkIcon className = "h-8 w-8 text-white" />
                        ) : (
                            <Bars3Icon className = "h-8 w-8 text-white" />
                        )}
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className = "block md:hidden bg-gray-300 text-center py-4 pb-3">
                    <ul className = "text-white space-y-3">
                        <li className = "block text-gray-600 text-lg">Home</li>
                        <li className = "block text-gray-600 text-lg ">Experience</li>
                        <li className = " block text-gray-600 text-lg">Resume</li>
                        <li className = "block text-gray-600 text-lg ">Contact Me</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Nav;