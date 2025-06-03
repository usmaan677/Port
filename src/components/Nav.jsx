import React from 'react';
import {AcademicCapIcon} from '@heroicons/react/24/solid';
import {SunIcon} from '@heroicons/react/24/solid';



const Nav = () => {
    return (
        <div className = "bg-gray-800 shadow-md w-full">
            <div className = ' flex justify-between md:px-10 py-4 px-7'>
                <div className = "flex text-2xl cursor-pointer gap-5 items-center">
                    <AcademicCapIcon className = "h-8 w-8 text-white" />
                    <span className = "text-white font-bold">Usmaan</span>
                </div>
                <div className = "">
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

            </div>
        </div>
    );
};

export default Nav;