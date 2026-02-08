import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


function ReverseProtectedRoute({ children }) {
  const { currentUser } = useAuth()
  return !currentUser ? children : <Navigate to={'/'} />
}

export default ReverseProtectedRoute