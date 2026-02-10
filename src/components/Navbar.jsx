import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

function Navbar() {
  const { currentUser, logout, setMode } = useAuth()
  const [viewMenu, setViewMenu] = useState(false)
  const navigate = useNavigate()

  function closeAndNavigate(route) {
    setViewMenu(false)
    navigate(route)
  }
  return (
    <header className='sticky top-0 w-full z-10 select-auto'>
      <nav className='p-4 w-full bg-gray-200/5 backdrop-blur-md shadow flex justify-between items-center not-sm:hidden'>
        <h1 className='text-3xl font-extrabold cursor-pointer text-white shadow-lg active:scale-95 bg-blue-500 px-2 pb-2 select-none  -skew-6 hover:-translate-y-1 transition duration-75'>BuyVy</h1>
        <div className='flex gap-4'>
          <Link to={'/'}>Home</Link>
          <Link to={'/cart'}>Cart</Link>
        </div>
        {
          currentUser ?
            <div className='flex gap-4 items-center'>
              <p className=''>Hey, {currentUser.fullname}</p>
              <button onClick={logout} className='bg-gray-500 text-white px-4 py-1 cursor-pointer transition rounded hover:bg-gray-600 active:scale-95'>Logout</button>
            </div> :
            <div className='flex gap-2'>
              <button onClick={() => setMode("login")} className='bg-gray-600 hover:bg-gray-700 cursor-pointer active:scale-95 transition text-white px-4 py-1 rounded'>
                <Link to={'/auth'}>Login</Link>
              </button>
              <button onClick={() => setMode("signup")} className='bg-blue-600 hover:bg-blue-700 cursor-pointer active:scale-95 transition text-white px-4 py-1 rounded'>
                <Link to={'/auth'}>SignUp</Link>
              </button>
            </div>
        }
      </nav>
      <nav className='p-4 w-full bg-gray-200/5 backdrop-blur-md shadow flex justify-between items-center sm:hidden'>
        <h1 className='text-3xl font-extrabold cursor-pointer text-white shadow-lg active:scale-95 bg-blue-500 px-2 pb-2 select-none  -skew-6 hover:-translate-y-1 transition duration-75'>BuyVy</h1>
        {
          viewMenu ?
            <IoClose size={24} onClick={() => setViewMenu(false)} className='cursor-pointer z-20' /> :
            <RxHamburgerMenu size={24} onClick={() => setViewMenu(true)} className='cursor-pointer z-20' />
        }
      </nav>

      <div className={`w-3/4 bg-white/50 backdrop-blur-lg min-h-screen fixed right-0 sm:hidden select-none transition-all duration-300 ease-in-out ${viewMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} flex items-center justify-center`}>
        <div className={`flex flex-col w-full h-screen items-center gap-4 mt-5`}>
          <button onClick={() => closeAndNavigate('/')} className='text-xl'>Home</button>
          <button onClick={() => closeAndNavigate('/cart')} className='text-xl'>Cart</button>
          <button onClick={() => closeAndNavigate('/')} className='text-xl'>About Us</button>
          <button onClick={() => closeAndNavigate('/')} className='text-xl'>Contact</button>
          <button onClick={() => closeAndNavigate('/')} className='text-xl'>Help</button>
          <button onClick={() => {
            setViewMenu(false)
            setMode("login")
          }} className='bg-gray-600 hover:bg-gray-700 cursor-pointer active:scale-95 transition text-white px-5 py-1 rounded'>
            <Link to={'/auth'}>Login</Link>
          </button>
          <button onClick={() => {
            setViewMenu(false)
            setMode("signup")
          }} className='bg-blue-600 hover:bg-blue-700 cursor-pointer active:scale-95 transition text-white px-4 py-1 rounded'>
            <Link to={'/auth'}>SignUp</Link>
          </button>
        </div>
      </div>

    </header>
  )
}

export default Navbar