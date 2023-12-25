import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
const Navbar = () => {
  return (
    <div className='md:grid grid-cols-4 my-5 justify-center'>
      <div className='mx-auto md:mx-0'>
        <FaSquareXTwitter className='text-4xl ml-3'/>
      </div>

      <div className='col-span-2 md:grid grid-cols-2 md:border-x-2 md:border-slate-400 md:px-6'>
        <div className='flex justify-between items-center'>
          <h2 className='font-bold text-2xl'>For you</h2>
        </div>
        <div className='flex justify-between items-center '>
          <h2 className='font-bold text-2xl '>Following</h2>
          <MdOutlineSettings  className='text-2xl'/>
        </div>
      </div>

      <div className='px-0 md:px-6 mx-auto'>
        <IoIosSearch className='absolute m-3 text-xl'/>
        <input
        type='text'
        className='bg-blue-100 rounded-full py-2 px-8'
        />
      </div>
    </div>
  )
}

export default Navbar