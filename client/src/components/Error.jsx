import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='text-center my-8 space-y-5'>
      <div className='font-semibold text-4xl'>  error, page not found.</div>
        <p className='pb-4'>Please go back to login <br /></p>
      <Link
      to='/signin'
      className='bg-blue-600 py-2 px-4 rounded-full'> Login </Link>
    </div>
  )
}

export default Error