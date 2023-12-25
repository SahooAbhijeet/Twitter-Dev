import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

const Home = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 '>
      <div >
        <LeftSidebar />
      </div>
      <div className='px-6 col-span-2 border-x-2'>
        <p>main tweert</p>
      </div>
      
      <div className='grid grid-cols-1 px-6'>
      <RightSidebar />
      </div>
        
      
    </div>
  )
}

export default Home