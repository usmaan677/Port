import React from 'react'
import {Link} from 'react-router-dom'
import { } from '@heroicons/react/24/solid';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FaInstagram, FaLinkedin } from 'react-icons/fa6';

const Footer = ({theme}) => {
  return (
    <footer className = {`${theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-gray-300 text-gray-800"} px-4 md:px-20 lg:px-28 shadow-md w-full border-t`}>
        <div className = 'grid grid-cols-1 md:grid-cols-3 gap-8 pt-5 pb-4'>
            <div className = ''>
                <h2 className = 'text-center md:text-left text-lg font-bold mb-4'>
                    About Me
                </h2>
                <p className ='text-sm text-center md:text-left'>
                    An eager student with a strong passion for software development and a strong drive to learn new technologies.
                </p>
            </div>
            <div className = 'text-center md:text-left'>
                <h2 className = 'text-center font-bold text-lg mb-2'>
                    Quick Links
                </h2>
                <ul className = 'text-center text-md space-y-2'>
                    <li className = 'hover:underline '>
                    <Link to ="/" >Home</Link>
                    </li>
                    <li className = 'hover:underline '>
                        <Link>Experience</Link>
                    </li>
                    <li className = 'hover:underline '> 
                        <Link to= "/resume" >Resume</Link>
                    </li>
                    <li className = 'hover:underline '>
                        <Link to="/contact" >Contact Me</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className = 'text-center md:text-left text-lg font-bold mb-0'>
                    Conect With Me
                </h2>
                <ul className = 'justify-center md:justify-normal flex gap-10 md:gap-5 '>
                    <li className = 'hover:text-red-500'>
                        
                        <a href = "https://www.instagram.com/usmaan.sa/" className = ' text-md ml-2'>
                        <FaInstagram className = 'mb-1 text-2xl cursor-pointer hover:text-red-500'/>
                        <span>Instagram</span></a>
                    </li>
                    <li className = 'hover:text-blue-700'>
                        
                        <a href = "www.linkedin.com/in/sayedusmaan" className = 'text-md ml-2'>
                            <FaLinkedin className = 'mb-1 text-2xl cursor-pointer hover:text-blue-700'/>
                            <span>LinkedIn</span></a>
                    </li>
                    <li className = 'hover:text-purple-800'>
                        
                        <a href = "https://github.com/usmaan677" className = ' text-md ml-2'>
                            <FaGithub className = ' mb-1 text-2xl cursor-pointer hover:text-purple-800'/>
                            <span>GitHub</span></a>
                    </li>
                </ul>
            </div>
        </div>
        <div className = ' border-t text-center text-sm mt-5 pb-5 pt-2'>
            <p>© 2025 Usmaan Sayed. Made with React and TailWindCSS</p>
        </div>
    </footer>
  )
}

export default Footer
