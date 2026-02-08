import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import ReverseProtectedRoute from './components/ReverseProtectedRoute'
import Cart from './pages/Cart'

function App() {
  return (
    <>
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
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App