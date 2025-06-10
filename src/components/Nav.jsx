import React, { useState } from 'react';
import { AcademicCapIcon, Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import {Link} from 'react-router-dom';
import CircularText from '../reactbits/CircularText.jsx';
  

const Nav = ({ theme, setTheme }) =>{
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-300 text-gray-800"} shadow-md w-full`}>
      <div className='flex justify-between md:px-10 py-4 px-7'>
        <Link to  = "/">
            <div className="flex text-2xl cursor-pointer gap-10 items-center">
            <CircularText
                text="OOOOO"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
                />
              {/* <AcademicCapIcon className="h-8 w-8" /> */}
              <span className="font-bold">Usmaan</span>
            </div>
        </Link>

        <div className="hidden md:block">
          <ul className={`flex gap-8 text-lg font-semibold items-center ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
            <Link to="/" className="cursor-pointer hover:text-yellow-400">Home</Link>
            <li className="cursor-pointer hover:text-yellow-400">Experience</li>
            <Link to="/resume" className="cursor-pointer hover:text-yellow-400">Resume</Link>
            <li className="cursor-pointer hover:text-yellow-400">Contact Me</li>
            <li>
              <SunIcon onClick={() => setTheme("")} className="cursor-pointer h-6 w-6 hover:text-yellow-400" />
            </li>
            <li>
              <MoonIcon onClick={() => setTheme("dark")} className="cursor-pointer h-6 w-6 hover:text-yellow-400" />
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <SunIcon onClick={() => setTheme("")} className="cursor-pointer h-6 w-6 hover:text-yellow-400" />
          <MoonIcon onClick={() => setTheme("dark")} className="cursor-pointer h-6 w-6 hover:text-yellow-400" />
          <button onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer">
            {menuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-600"} text-center py-4 pb-3`}>
          <ul className="space-y-3 text-lg">
            <li>
                <Link to ="/" >Home</Link>
            </li>
            <li>
                <Link>Experience</Link>
            </li>
            <li>
                <Link to= "/resume" >Resume</Link>
            </li>
            <li>
                <Link>Contact Me</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
