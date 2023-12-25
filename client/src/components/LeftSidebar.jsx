import React from 'react'
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { IoSearch, IoNotifications  } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CiBookmark, CiUser, CiCircleMore  } from "react-icons/ci";
import { BsPeopleFill } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

const LeftSidebar = () => {
  return (
    <div className='flex flex-col md:h-[90vh] h-full justify-between mr-6'>
        <div className='flex flex-col space-y-4 mt-6 mr-2'>
            <Link to="/">
            <div className='flex items-center space-x-6 p-2 hover:bg-slate-200 rounded-full'>
            <MdHome className='text-3xl'/>
                <p className='text-2xl'>Home</p>
            </div>
            </Link>

            <Link to="/explore">
            <div className='flex items-center space-x-6 p-2 hover:bg-slate-200 rounded-full'>
            <IoSearch className='text-3xl'/>
                <p className='text-2xl'>Explore</p>
            </div>
            </Link>

            <Link to="/notifications">
            <div className='flex items-center space-x-6 p-2 hover:bg-slate-200 rounded-full'>
            <IoNotifications className='text-3xl'/>
                <p className='text-2xl'>Notifications</p>
            </div>
            </Link>

            <Link to="/messages">
            <div className='flex items-center space-x-6 p-2 hover:bg-slate-200 rounded-full'>
            <FaRegEnvelope className='text-3xl'/>
                <p className='text-2xl'>Messages</p>
            </div>
            </Link>

            <Link to="/lists">
            <div className='flex items-center space-x-6 p-2 hover:bg-slate-200 rounded-full'>
            <BiMessageSquareDetail className='text-3xl'/>
                <p className='text-2xl'>Lists</p>
            </div>
            </Link>

            <Link to="/bookmarks">
            <div className='flex items-center space-x-6 p-2 hover:bg-slate-200 rounded-full'>
            <CiBookmark className='text-3xl'/>
                <p className='text-2xl'>Bookmarks</p>
            </div>
            </Link>

            <Link to="/communities">
            <div className='flex items-center space-x-6 p-2 hover:bg-slate-200 rounded-full'>
            <BsPeopleFill className='text-3xl'/>
                <p className='text-2xl'>Communities</p>
            </div>
            </Link>

            <Link to="/premium">
            <div className='flex items-center space-x-6 p-2 hover:bg-slate-200 rounded-full'>
            <FaSquareXTwitter className='text-3xl'/>
                <p className='text-2xl'>Premium</p>
            </div>
            </Link>

            <Link to="/profile">
            <div className='flex items-center space-x-6 p-2 hover:bg-slate-200 rounded-full'>
            <CiUser className='text-3xl'/>
                <p className='text-2xl'>Profile</p>
            </div>
            </Link>

            <Link to="/more">
            <div className='flex items-center space-x-6 p-2 hover:bg-slate-200 rounded-full'>
            <CiCircleMore className='text-3xl'/>
                <p className='text-2xl'>More</p>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default LeftSidebar