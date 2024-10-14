import React from 'react';
import avatar from '../assets/images/avatar.jpg'
import { CiEdit } from "react-icons/ci";

const Profile = () => {
  return (
    <div className='p-10 md:p-20 flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center p-10 rounded-3xl bg-blue-400'>
           <img src={avatar} alt="" className='rounded-full' width={200} />
           <a href="#" type='btn' className='p-2 bg-purple-700 text-white rounded-xl mt-2 text-xs'>Upload avatar</a>
           <p className='mt-2 font-semibold text-xl flex justify-center items-center'>User 1234<span className='cursor-pointer font-semibold ms-1'><CiEdit /></span></p>
           <div className='flex justify-center items-center mt-10'>
              <label htmlFor="phone">Phone number: </label>
              <input type="text" name='phone' value="0905123456" className='text-md ps-4 px-20 py-2 rounded-xl border-2 border-black ms-2'/>
           </div>
           <div className='flex justify-center items-center mt-10'>
              <label htmlFor="password">Password: </label>
              <input type="password" name='password' value="hehehe123456" className='text-md ps-4 px-20 py-2 rounded-xl border-2 border-black ms-2'/>
           </div>
           <button className='bg-red-600 text-white p-3 rounded-xl mt-10'>Save</button>
        </div>
    </div>
  )
}

export default Profile
