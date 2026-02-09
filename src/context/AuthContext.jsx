import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null)

export default function AuthProvider({ children }) {

  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('users')) || []
  })
  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem('currentUser')) || null
  })

  const [mode, setMode] = useState("signup")

  const navigate = useNavigate()

  function signup(userData) {
    const { fullname, email, password } = userData

    try {
      if (!fullname || !email || !password) {
        throw new Error("All fields are required")
      }

      const existingUser = users.find(user => user.email === email)
      if (existingUser) {
        return alert("User already exists")
      }

      const updatedUsers = [...users, userData]
      setUsers(updatedUsers)
      localStorage.setItem("users", JSON.stringify(updatedUsers))

      navigate('/')

    } catch (error) {
      console.error(error.message)
    }
  }

  function login(userData) {
    const { email, password } = userData
    try {
      if (!email || !password) {
        throw new Error("All fields are required")
      }
      const user = users.find((u) => u.email === email && u.password === password)
      if (!user) {
        return alert("Invalid user credentials")
      }

      setCurrentUser(user)
      localStorage.setItem("currentUser", JSON.stringify(user))
      navigate('/')
    } catch (error) {
      console.error(error.message)
    }
  }

  function logout() {
    localStorage.removeItem("currentUser")
    setCurrentUser(null)
    return alert("Logged out successfully")
  }

  return (
    <AuthContext.Provider value={{ users, signup, login, currentUser, logout, mode, setMode }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}