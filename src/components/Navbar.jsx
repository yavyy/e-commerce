import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='p-4 fixed w-full bg-gray-200/5 backdrop-blur-md z-10 shadow flex justify-between items-center'>
      <h1 className='text-xl font-bold'>BuyVy</h1>
      <div className='flex gap-4'>
        <Link to={'/'}>Home</Link>
        <Link>Cart</Link>
      </div>
      <div className='flex gap-2'>
        <button className='bg-gray-500 hover:bg-gray-600 cursor-pointer transition text-white px-4 py-1 rounded'>
          <Link to={'/auth'}>Login</Link>
        </button>
        <button className='bg-blue-600 hover:bg-blue-700 cursor-pointer transition text-white px-4 py-1 rounded'>
          <Link to={'/auth'}>SignUp</Link>
        </button>
      </div>
    </nav>
  )
}

export default Navbar