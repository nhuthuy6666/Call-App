import React from 'react';
import { FaSearch } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";
import { NavLink } from 'react-router-dom';

const PrepareAudio = () => {
  return (
    <div className='bg-white flex flex-col justify-center items-center lg:flex-row md:py-10 md:px-20 p-10'>
      <div className='flex flex-col justify-center lg:mt-0 p-20'>
        <label htmlFor="invite" className='text-2xl text-blue-600 font-semibold mb-6'>Invite your friend: </label>
        <div className='flex'>
          <input type="text" placeholder='Phone number' className='px-20 py-3 ps-2 rounded-xl border-2 border-black' />
          <a className='ms-2 bg-blue-600 text-white p-4 rounded-xl flex justify-center items-center cursor-pointer'><FaSearch /></a>
        </div>
        <div className='flex'>
        <NavLink to = "/AudioCall" className='py-3 px-10 lg:px-20 flex justify-center items-center bg-blue-600 text-white rounded-xl mt-10 text-lg cursor-pointer'>Start<VscDebugStart className='ms-2' /></NavLink>
        </div>
     </div>
    </div>
  )
}

export default PrepareAudio
