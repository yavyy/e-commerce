import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import ReverseProtectedRoute from './components/ReverseProtectedRoute'
import Cart from './pages/Cart'
import ViewDetails from './pages/ViewDetails'

function App() {
  return (
    <div className='bg-linear-to-r from-slate-300 to-slate-500 min-h-screen'>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={
            <ReverseProtectedRoute>
              <Auth />
            </ReverseProtectedRoute>
          } />
          <Route path='/checkout' element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          } />
          <Route path='/cart' element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } />
          <Route path='/product'>
            <Route path=':id' element={<ViewDetails />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App