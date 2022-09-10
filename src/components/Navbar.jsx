import React from 'react'
import Logo from '../assets/img/Logo.png'
import { FaHome, FaFacebookMessenger, FaPlusSquare, FaRegCompass, FaRegHeart } from "react-icons/fa";
import ProfilePic from '../assets/img/Profile-Pic-S.png'

function Navbar() {
  return (
    <div>
        <nav className='border-b'>
            <div className='sm:w-full md:w-[60rem] lg:w-[60rem] mx-auto'>
                <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row  justify-between h-40 md:h-16 lg:h-16 py-4 md:mx-10 items-center'>
                    <div className="logo">
                        <img src={Logo} alt="Instagram Logo" />
                    </div>
                    <div className="search">
                        <input className='border p-1 px-3 rounded text-center focus:outline-none' type="text" placeholder='Search' />
                    </div>
                    <ul className="menus flex">
                        <li className='ml-5 text-2xl'><a href="#"><FaHome /></a></li>
                        <li className='ml-5 text-2xl'><a href="#"><FaFacebookMessenger /></a></li>
                        <li className='ml-5 text-2xl'><a href="#"><FaPlusSquare /></a></li>
                        <li className='ml-5 text-2xl'><a href="#"><FaRegCompass /></a></li>
                        <li className='ml-5 text-2xl'><a href="#"><FaRegHeart /></a></li>
                        <li className='ml-5 text-2xl'><a href="#"><img src={ProfilePic} alt="Profile Pic" /></a></li>
                    </ul>
                </div>
            </div>

            
        </nav>
    </div>
  )
}

export default Navbar