import React from 'react'
import StoryImg from '../assets/img/Profile-Pic.png'

// Styles
import '../index.css'
function Story() {
  return (
    <div>
        <ul className='flex text-center my-5 sm:ml-[0px] md:ml-[35px] lg:ml-[35px] justify-start sm:justify-start md:justify-start lg:justify-start overflow-x-auto scrollbar'>
            <li className='mx-[10px] p-[10px] cursor-pointer'>
                <img className='w-16 md:w-16 lg:w-20 border-4 rounded-full border-slate-100' src={StoryImg} alt="" />
                <p className='font-semibold'>Story #1</p>
            </li>
            <li className='mx-[10px] p-[10px] cursor-pointer'>
                <img className='w-16 md:w-16 lg:w-20 border-4 rounded-full border-slate-100' src={StoryImg} alt="" />
                <p className='font-semibold'>Story #2</p>
            </li>
            <li className='mx-[10px] p-[10px] cursor-pointer'>
                <img className='w-16 md:w-16 lg:w-20 border-4 rounded-full border-slate-100' src={StoryImg} alt="" />
                <p className='font-semibold'>Story #3</p>
            </li>
            <li className='mx-[10px] p-[10px] cursor-pointer'>
                <img className='w-16 md:w-16 lg:w-20 border-4 rounded-full border-slate-100' src={StoryImg} alt="" />
                <p className='font-semibold'>Story #4</p>
            </li>
            <li className='mx-[10px] p-[10px] cursor-pointer'>
                <img className='w-16 md:w-16 lg:w-20 border-4 rounded-full border-slate-100' src={StoryImg} alt="" />
                <p className='font-semibold'>Story #5</p>
            </li>
            <li className='mx-[10px] p-[10px] cursor-pointer'>
                <img className='w-16 md:w-16 lg:w-20 border-4 rounded-full border-slate-100' src={StoryImg} alt="" />
                <p className='font-semibold'>Story #6</p>
            </li>
            <li className='mx-[10px] p-[10px] cursor-pointer'>
                <img className='w-16 md:w-16 lg:w-20 border-4 rounded-full border-slate-100' src={StoryImg} alt="" />
                <p className='font-semibold'>Story #7</p>
            </li>
            <li className='mx-[10px] p-[10px] cursor-pointer'>
                <img className='w-16 md:w-16 lg:w-20 border-4 rounded-full border-slate-100' src={StoryImg} alt="" />
                <p className='font-semibold'>Story #8</p>
            </li>
        </ul>
    </div>
  )
}

export default Story