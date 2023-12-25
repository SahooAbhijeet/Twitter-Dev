import React from 'react'
import LeftSidebar from './LeftSidebar'
import ExploreTweet from './ExploreTweet'
import RightSidebar from './RightSidebar'

const Explore = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4'>
        <div className='px-6'>
            <LeftSidebar />
        </div>
        <div className=' col-span-2 px-6 border-x-2 border-t-slate-800'>
            <ExploreTweet />
        </div>
        <div className='px-6'>
            <RightSidebar />
        </div>
    </div>
  )
}

export default Explore