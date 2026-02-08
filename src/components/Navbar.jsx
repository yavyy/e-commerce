import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { currentUser, logout } = useAuth()
  return (
    <header className='sticky top-0 w-full'>
      <nav className='p-4 w-full bg-gray-200/5 backdrop-blur-md z-10 shadow flex justify-between items-center'>
        <h1 className='text-xl font-bold'>BuyVy</h1>
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
              <button className='bg-gray-500 hover:bg-gray-600 cursor-pointer active:scale-95 transition text-white px-4 py-1 rounded'>
                <Link to={'/auth'}>Login</Link>
              </button>
              <button className='bg-blue-600 hover:bg-blue-700 cursor-pointer active:scale-95 transition text-white px-4 py-1 rounded'>
                <Link to={'/auth'}>SignUp</Link>
              </button>
            </div>
        }
      </nav>
    </header>
  )
}

export default Navbar