import React, { useState } from 'react';
import { IoMdSettings } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { GoCodeOfConduct } from "react-icons/go";
import { SlEarphonesAlt } from "react-icons/sl";
import { CiEdit } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { FaSignOutAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [state, setState] = useState(false);
  const open = () => {
    setState(!state);
  }
  return (
    <div className='relative flex py-6 px-10 md:px-20 bg-gray-100'> 
      <div className='text-blue-600 text-xl font-bold'>
        <p>Call App</p>
      </div>
      <div className='ms-auto flex justify-center items-center text-md md:text-lg'>
        <NavLink to = "/Home" className='me-6 text-purple-700 font-semibold flex justify-center items-center'><FiHome className='me-2' />Home</NavLink>
        <a href="#" className='me-6 text-purple-700 font-semibold flex justify-center items-center'><GoCodeOfConduct className='me-2' />Conduct</a>
        <a href="#" className='text-purple-700 font-semibold flex justify-center items-center'><SlEarphonesAlt className='me-2' />Support</a>
      </div>
      <div className='ms-auto text-2xl text-blue-600'>
        <a href="#" type='btn' onClick={open}><IoMdSettings /></a>
      </div>
      <div className={state?'absolute bg-white flex flex-col right-10 md:right-20 top-20 border-2 border-gray-500 rounded-xl':'hidden'}>
        <NavLink to = "/Profile" type='btn' className='flex justify-center items-center p-4 border-b-2 border-gray-500 text-blue-600 font-semibold'onClick={open}>Edit information<CiEdit className='ms-2 text-xl' /></NavLink>
        <NavLink to = "/History" type='btn' className='flex justify-center items-center p-4 border-b-2 border-gray-500 text-blue-600 font-semibold'onClick={open}>Call history<CiBoxList className='ms-2 text-xl' /></NavLink>
        <NavLink to = "/" className='flex justify-center items-center p-4 text-red-600 font-semibold'onClick={open}>Log Out<FaSignOutAlt className='ms-2 text-xl' /></NavLink>
      </div>
    </div>
  )
}

export default Header
