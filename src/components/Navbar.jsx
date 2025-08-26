import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <nav className='flex items-center justify-between'>
       <div className='flex items-center'>
          <Link to="/">
          <div className='text-4xl m-4 flex items-center text-red-500 p-4'>Profile <span className='p-1 text-blue-500 font-semibold'> center</span>
          </div>
          </Link>
        </div>
        <div className='flex items-center justify-center px-4 mx-4'>
          <Link to="/">
          <div className='text-md m-2 flex items-center text-gray-500 p-2 hover:text-blue-400'>Home
          </div>
          </Link>
          <Link to="/jobs">
          <div className='text-md m-2 flex items-center text-gray-500 p-2 hover:text-blue-400'>Jobs
          </div>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar