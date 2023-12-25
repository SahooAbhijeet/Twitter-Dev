import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";

const Signup = () => {
  return (
    <div className='grid grid-cols-4'>
        
        <div className=''> <FaSquareXTwitter className=' text-9xl my-64'/>
        </div>
            <div className='col-span-2 px-6'>
                <p className='text-7xl whitespace-nowrap font-bold'> Happening now</p>
                <p className='my-20 font-bold text-5xl'>Join today.</p>
                <div className='flex flex-col gap-6'>
                <button className='py-3 px-12 bg-blue-700 rounded-full'> Sign Up with Google</ button>
                <button className='py-3 px-12 bg-blue-700 rounded-full'> Sign Up with Apple </button>
                <button className='py-3 px-12 bg-blue-700 rounded-full '> Create Account</button>
                </div>
                
                <div>
                    <span>By signing up, you agree to the</span>
                    <span className='text-blue-600'> terms of Service </span>
                    <span> Privacy Policy, including </span>
                    <span className='text-blue-600'> Cookie Use </span>
                </div>
                <p className='font-bold text-3xl py-16'>Already have an account ?</p>
                
            
        </div>
    </div>
  )
}

export default Signup