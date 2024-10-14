import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-gray-100 p-20 flex flex-col cursor-pointer'>
      <div className='text-4xl flex justify-center items-center'>
        <FaFacebook className='me-6 text-blue-700' />
        <FaInstagram className='me-6 text-pink-600' />
        <FaTwitter className='me-6 text-blue-500' />
        <FaGooglePlus className='me-6 text-yellow-400' />
        <FaYoutube className='text-red-600' />
      </div>
      <div className='flex justify-center items-center mt-6 font-semibold text-purple-700'>
        <p className='me-6'>News</p>
        <p className='me-6'>About Us</p>
        <p className='me-6'>Contact Us</p>
        <p>Our Teams</p>
      </div>
    </div>
  )
}

export default Footer
