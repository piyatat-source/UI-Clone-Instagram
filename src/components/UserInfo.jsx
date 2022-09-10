import React from 'react'
import Profilepic from '../assets/img/Profile-Pic.png'
import { FaEllipsisH } from "react-icons/fa";


function UserInfo() {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row md:h-40 lg:h-40 mt-10'>
        <div className="profile-pic w-full md:w-96 lg:w-96 mb-5 lg:m-0 flex justify-center">
            <img src={Profilepic} alt="My Profile Pic" />
        </div>
        <div className="profile-info w-full">
            <div className="info-top flex items-center justify-center md:justify-start lg:justify-start">
                <h2 className='text-2xl mr-[20px] font-semibold'>PiyatatDev</h2>
                <button className='bg-[#0095F6] py-2 px-6 rounded-md text-white mr-[20px]'>Follow</button>
                <a href="#"><FaEllipsisH /></a>
            </div>
            <div className="info-middle flex my-5 justify-center md:justify-start lg:justify-start">
                <p className='mr-[20px] font-semibold'>1.324 posts</p>
                <p className='mr-[20px] font-semibold'>4M followers</p>
                <p className='mr-[20px] font-semibold'>0 following</p>
            </div>
            <div className="info-bottom flex justify-center md:justify-start lg:justify-start">
                <p className='font-semibold'>PiyatatDev</p>
            </div>
        </div>
    </div>
  )
}

export default UserInfo