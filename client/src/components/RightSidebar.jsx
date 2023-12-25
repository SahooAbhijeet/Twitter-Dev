import React from 'react'
import { Link } from 'react-router-dom'

const RightSidebar = () => {
  return (
    <div className='items-center justify-center'>
        <div className='flex flex-col shadow-2xl bg-slate-200 rounded-xl p-3'>
            <h1 className='text-xl font-bold'>
                Subscribe to Premium
            </h1>
            <p className='font-semibold'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
            <button className='p-2 m-3 bg-black text-white rounded-full text-2xl'>Subscribe</button>
            
             
        </div>
          <div className='bg-slate-200 rounded-xl py-2  my-6'>
            <div className='font-bold text-xl px-4 '>What's happening</div>
            <div className='m-2 ml-0 hover:bg-slate-300 rounded-full'>
            <Link>
            <div className='m-4'>
              <h1 className='p'> Trending in India</h1>
              <h1 className='font-semibold text-lg'> Merry Christmas</h1>
              <h1>1.33M posts</h1>
            </div>
            </Link>
            </div>
            <Link>
            <div className='m-4'>
              <h1 className='p'> Trending in India</h1>
              <h1 className='font-semibold text-lg'> #XmasWithDunki</h1>
              <h1>2.33M posts</h1>
            </div>
            </Link>
            <Link>
            <div className='m-4'>
              <h1 className='p'> Trending in India</h1>
              <h1 className='font-semibold text-lg'> Kabir Is SupremeGod</h1>
              <h1> 2,393 posts</h1>
            </div>
            </Link>
            <Link>
            <div className='m-4'>
              <h1 className='p'> Sports.Trending</h1>
              <h1 className='font-semibold text-lg'> #FBvsGS</h1>
              <h1>45.2K posts</h1>
            </div>
            </Link>
            <Link>
            <div className='m-4'>
              <h1 className='text-blue-400 text-lg'> Show More</h1>
            </div>
            </Link>
          </div>
        </div>


  )
}

export default RightSidebar