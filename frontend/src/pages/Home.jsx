import React from 'react';
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import bannerhome from '../assets/images/bannerhome.jpg';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container bg-white flex justify-center items-center md:py-10 md:px-20 p-10">
        <div className='flex flex-col justify-center items-start bg-white'>
            <p className='text-blue-600 text-2xl md:text-3xl font-bold mb-6'>Try starting a call to connect with everyone</p>
            <p className='text-gray-600 text-xl mb-6'>Supports advanced audio and video calling functions</p>
            <div className='flex'>
                <NavLink to = "/Prepare" type='btn' className='text-md flex justify-center items-center text-white bg-purple-700 p-4 rounded-xl me-8 cursor-pointer'>Start a video call <span className='ms-2'><BsFillCameraVideoFill /></span></NavLink>
                <NavLink to = "/PrepareAudio" type='btn' className='text-md flex justify-center items-center text-white bg-purple-700 p-4 rounded-xl me-8'>Start an audio <span className='ms-2'><FaPhone /></span></NavLink>
            </div>
            <div className='flex mt-8'>
                <input type="text" className='border-2 ps-4 px-40 border-black rounded-xl' placeholder='Enter call code' />
                <NavLink to = "/Prepare" type='btn' className='text-md flex justify-center items-center text-purple-700 bg-white border-purple-700 border-2 p-4 rounded-xl ms-2'>Join</NavLink>
            </div>
        </div>
        <div className='ms-20 hidden xl:block'>
            <img src={bannerhome} alt="" className='w-[600px]' />
        </div>
    </div>
  )
}

export default Home
