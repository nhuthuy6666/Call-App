import React, { useState } from 'react';
import banner from '../assets/images/banner.jpg';
import { NavLink } from 'react-router-dom';
const login = () => {
  const [state, setState] = useState("Login");
  const Login = () => {
    setState("Login");
  }
  const SignUp = () => {
    setState("SignUp")
  }
  return (
    <div className='p-10 py-20 sm:p-20 bg-gray-100'>
      <div className="container bg-white flex md:py-20 md:px-20 py-20 px-10 rounded-3xl">
        <div className="loginform flex flex-col">
            <p className='text-blue-600 text-3xl font-bold mb-14'>Call App</p>
            <p className='text-blue-600 text-xl md:text-3xl font-bold mb-6'>Connect your beautiful life with the outside world!</p>
            {state === "Login"?(<p className='text-gray-600 mb-4'>Welcome  back! Please login to your account</p>):("")}
            <form action="" className='flex flex-col'>
                <label htmlFor="email" className='text-purple-700 font-semibold'>Phone number:</label>
                <input type="text" name='email' className='border-2 border-gray-600 ps-2 flex justify-center items-center p-3 mt-2 rounded-xl' />
                <label htmlFor="password" className='text-purple-700 font-semibold mt-2'>Password:</label>
                <input type="text" name='password' className='border-2 border-gray-600 ps-2 flex justify-center items-center p-3 mt-2 rounded-xl' />
                {state === "SignUp"?(
                  <div className='flex flex-col'>
                    <label htmlFor="confirm" className='text-purple-700 font-semibold mt-2'>Confirm your password:</label>
                    <input type="text" name='confirm' className='border-2 border-gray-600 ps-2 flex justify-center items-center p-3 mt-2 rounded-xl' />
                  </div>
                ):("")}
                {state === "Login"?(
                  <div className='flex mt-2'>
                  <div className='flex'>
                      <input type="checkbox" name='check' className='me-2' />
                      <label htmlFor="check" className='text-gray-600 text-md'>Remember me</label>
                  </div>
                  <a href="#" className='ml-auto text-gray-600 text-md'>Forgot password?</a>
              </div>
                ):(
                  <div className='flex mt-2'>
                    <div className='flex'>
                      <input type="checkbox" name='check' className='me-2' />
                      <label htmlFor="check" className='text-gray-600 text-md'>Accept terms and conditions</label>
                  </div>
                    <a href="#" className='ml-auto text-gray-600 text-md cursor-default' >Have an accound? <span className='text-blue-600 font-bold cursor-pointer'onClick={Login}>Login</span></a>
                </div>
                )}
            </form>
            {state === "Login"?(
              <div className='flex mt-7'>
              <NavLink to = "/Home" type='btn' className='bg-blue-600 w-20 h-10 rounded-md text-white flex justify-center items-center cursor-pointer'>Login</NavLink>
              <a href='#' type='btn' className='bg-white border-blue-600 border-2 w-20 h-10 rounded-md text-blue-600 flex justify-center items-center cursor-pointer ml-auto' onClick={SignUp}>Sign up</a>
              </div>
            ):(<div className='flex mt-7'>
              <NavLink to = "/Home" type='btn' className='bg-blue-600 w-20 h-10 rounded-md text-white flex justify-center items-center cursor-pointer'>Sign Up</NavLink>
              </div>)}
        </div>
        <div className="banner ms-20 pt-20 hidden xl:block">
            <img src={banner} alt="" className='rounded-xl'/>
        </div>
      </div>
    </div>
  )
}

export default login
