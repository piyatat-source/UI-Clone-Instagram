import React from 'react'
import { FaRegListAlt, FaBookOpen, FaVideo, FaRegPlayCircle, FaHashtag } from "react-icons/fa";

function Toggle() {
  return (
    <div className=''>
        {/* <div className=" border-t relative top-[20px]"></div> */}

        <ul className='flex border-t overflow-x-auto sm:justify-center md:justify-center lg:justify-center my-[20px] sm:mr-2 md:mr-0 lg:mr-0'>
            <li className='mx-[35px] font-semibold border-t-2 border-black pt-[10px] pb-[15px]'>
                <a href="#" className='flex items-center'>
                    <FaRegListAlt className='mr-[5px]' /> POSTS
                </a>
            </li>
            <li className='mx-[35px] font-semibold pt-[10px] pb-[15px]'>
                <a href="#" className='flex items-center'>
                    <FaBookOpen className='mr-[5px]' /> GUIDES
                </a>
            </li>
            <li className='mx-[35px] font-semibold pt-[10px] pb-[15px]'>
                <a href="#" className='flex items-center'>
                    <FaRegPlayCircle className='mr-[5px]' /> REELS
                </a>
            </li>
            <li className='mx-[35px] font-semibold pt-[10px] pb-[15px]'>
                <a href="#" className='flex items-center'>
                    <FaVideo className='mr-[5px]' /> VIDEOS
                </a>
            </li>
            <li className='mx-[35px] font-semibold pt-[10px] pb-[15px]'>
                <a href="#" className='flex items-center'>
                    <FaHashtag className='mr-[5px]' /> TAGGED
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Toggle