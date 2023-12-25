import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <form className='bg-gray-200 py-12 px-16 rounded-lg  flex items-center w-9/12 md:w-6/12 mx-auto '>
        <div className='flex flex-col sm:flex-col items-center'>
        <FaSquareXTwitter className='text-7xl  items-start my-2 '/>
        <span className='font-bold text-center text-3xl px-20 whitespace-nowrap mr-2 mb-2 sm:mb-0
        '> Sign in to X </span>
        
        <input 
        type='text'
        placeholder='Phone, email, username'
        className='px-20 py-4 m-4'
        />
        
        <button className='rounded-full text-white bg-black px-36 py-2 items-center m-4'>Next</button>

        <button className='rounded-full text-black bg-white px-28 py-2 items-center m-4 whitespace-nowrap hover:bg-gray-100'>Forgot password</button>
        
        <p> Don't have an account ? <Link to='/signin' className='text-blue-700'>Sign up</Link></p>
        
       </div>
    </form>
  )
}

export default Signin