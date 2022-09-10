import React from 'react'
import postImg from '../assets/img/Small-Post.png'
import { FaClone, FaPlayCircle } from "react-icons/fa";

function UserPosts() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
        <div className="posts-item relative">
            <FaClone className='absolute right-4 top-4 text-lg text-white' />
            <img src={postImg} className="w-full" alt="User Post" />
        </div>
        <div className="posts-item relative">
            <FaPlayCircle className='absolute right-4 top-4 text-2xl text-white' />
            <img src={postImg} className="w-full" alt="User Post" />
        </div>
        <div className="posts-item">
            <img src={postImg} className="w-full" alt="User Post" />
        </div>
        <div className="posts-item">
            <img src={postImg} className="w-full" alt="User Post" />
        </div>
        <div className="posts-item">
            <img src={postImg} className="w-full" alt="User Post" />
        </div>
        <div className="posts-item relative">
            <FaClone className='absolute right-4 top-4 text-lg text-white' />
            <img src={postImg} className="w-full" alt="User Post" />
        </div>
    </div>
  )
}

export default UserPosts