import React from 'react'
import { NavLink } from 'react-router-dom'

const EndCall = () => {
  return (
    <div className='p-60 bg-white flex flex-col justify-center items-center'>
      <p className='text-4xl text-blue-600'>Your call has ended.</p>
      <div className='flex mt-6'>
        <NavLink to = "/Home" className='border-2 border-purple-700 text-purple-700 bg-white p-2 rounded-2xl me-6'>Return home</NavLink>
        <a href='#' className='border-2 border-purple-700 text-purple-700 bg-white p-2 rounded-2xl'>Feedback</a>
      </div>
      <div className='mt-4'>
        <p>00:00:00</p>
      </div>
    </div>
  )
}

export default EndCall
