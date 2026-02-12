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

  function handleOutsideClick() {
    setViewMenu(false)
  }

  return (
    <>
      <nav className='sticky top-0 select-auto p-4 w-full bg-gray-200/5 backdrop-blur-md shadow flex justify-between items-center not-sm:hidden z-10'>
        <h1 className='text-3xl font-extrabold cursor-pointer text-white shadow-lg active:scale-95 bg-blue-500 px-2 pb-2 select-none  -skew-6 hover:-translate-y-1 transition duration-75'>
          <Link to={'/'}>BuyVy</Link>
        </h1>
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
      <nav className='sticky top-0 select-auto p-4 w-full bg-gray-200/5 backdrop-blur-md shadow flex justify-between items-center sm:hidden z-20'>
        <h1 className='text-3xl font-extrabold cursor-pointer text-white shadow-lg active:scale-95 bg-blue-500 px-2 pb-2 select-none  -skew-6 hover:-translate-y-1 transition duration-75'>
          <Link to={'/'}>BuyVy</Link>
        </h1>
        {
          viewMenu ?
            <IoClose size={24} onClick={() => setViewMenu(false)} className='cursor-pointer' /> :
            <RxHamburgerMenu size={24} onClick={() => setViewMenu(true)} className='cursor-pointer' />
        }
      </nav>
      {viewMenu && <div className='w-full fixed bg-black/20 backdrop-blur-lg inset-0 z-10' onClick={handleOutsideClick} />}
      <div className={`w-3/4 bg-white/60 backdrop-blur-lg min-h-screen fixed right-0 sm:hidden select-none transition-all duration-300 ease-in-out ${viewMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} flex items-center justify-center z-20`}>
        <div className={`flex flex-col w-full h-screen items-center gap-4 mt-5`}>
          <button onClick={() => closeAndNavigate('/')} className='text-xl cursor-pointer'>Home</button>
          <button onClick={() => closeAndNavigate('/cart')} className='text-xl cursor-pointer'>Cart</button>
          <button onClick={() => closeAndNavigate('/')} className='text-xl cursor-pointer'>About Us</button>
          <button onClick={() => closeAndNavigate('/')} className='text-xl cursor-pointer'>Contact</button>
          <button onClick={() => closeAndNavigate('/')} className='text-xl cursor-pointer'>Help</button>
          {
            !currentUser ?
              <div className='flex flex-col gap-2'>
                <button onClick={() => {
                  setMode("login")
                  closeAndNavigate("/auth")
                }} className='bg-gray-600 hover:bg-gray-700 cursor-pointer active:scale-95 transition text-white px-5 py-1 rounded'>
                  Login
                </button>
                <button onClick={() => {
                  setMode("signup")
                  closeAndNavigate("/auth")
                }} className='bg-blue-600 hover:bg-blue-700 cursor-pointer active:scale-95 transition text-white px-4 py-1 rounded'>
                  SignUp
                </button>
              </div> :
              <div>
                <button onClick={() => {
                  logout()
                  setViewMenu(false)
                }} className='bg-gray-600 hover:bg-gray-700 cursor-pointer active:scale-95 transition text-white px-5 py-1 rounded'>Logout</button>
              </div>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar