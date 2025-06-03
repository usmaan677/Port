import React from 'react';
import {AcademicCapIcon} from '@heroicons/react/24/solid';



const Nav = () => {
    return (
        <div className = "bg-gray-800 shadow-md w-full">
            <div className = 'md:px-10 py-4 px-7'>
                <div className = "flex text-2xl cursor-pointer gap-5 items-center">
                    <AcademicCapIcon className = "h-8 w-8 text-white" />
                    <span className = "text-white font-bold">Usmaan</span>
                </div>

            </div>
        </div>
    );
};

export default Nav;