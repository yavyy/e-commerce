import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../services/firebase.js'

const AuthContext = createContext(null)

export default function AuthProvider({ children }) {

  // const [users, setUsers] = useState(() => {
  //   return JSON.parse(localStorage.getItem('users')) || []
  // })
  const [currentUser, setCurrentUser] = useState(null)

  const [mode, setMode] = useState("signup")

  const navigate = useNavigate()

  // for localStorage
  // function signup(userData) {
  //   const { fullname, email, password } = userData

  //   try {
  //     if (!fullname || !email || !password) {
  //       throw new Error("All fields are required")
  //     }

  //     const existingUser = users.find(user => user.email === email)
  //     if (existingUser) {
  //       return alert("User already exists")
  //     }

  //     const updatedUsers = [...users, userData]
  //     setUsers(updatedUsers)
  //     localStorage.setItem("users", JSON.stringify(updatedUsers))

  //     navigate('/')

  //   } catch (error) {
  //     console.error(error.message)
  //   }
  // }

  //Using firebase
  async function signup(userData) {
    const { fullname, email, password } = userData
    // console.log(userData)
    try {
      if (!fullname || !email || !password) {
        throw new Error("All fields are required")
      }

      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      await updateProfile(user, {
        displayName: fullname
      })

      console.log("User created", user)

      navigate("/")

    } catch (error) {
      console.error(error.message)
    }
  }

  // localStorage login
  // function login(userData) {
  //   const { email, password } = userData
  //   try {
  //     if (!email || !password) {
  //       throw new Error("All fields are required")
  //     }
  //     const user = users.find((u) => u.email === email && u.password === password)
  //     if (!user) {
  //       return alert("Invalid user credentials")
  //     }

  //     setCurrentUser(user)
  //     localStorage.setItem("currentUser", JSON.stringify(user))
  //     navigate('/')
  //   } catch (error) {
  //     console.error(error.message)
  //   }
  // }

  // login using firebase
  async function login(userData) {
    const { email, password } = userData
    try {
      if (!email || !password) {
        throw new Error("All fields are required")
      }

      const { user } = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      if (!user) {
        return alert("Invalid user credentials")
      }

      navigate('/')
    } catch (error) {
      console.error(error.message)
    }
  }

  // localStorage
  // function logout() {
  //   localStorage.removeItem("currentUser")
  //   setCurrentUser(null)
  //   return alert("Logged out successfully")
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  // firebase
  async function logout() {
    try {
      await signOut(auth)
      return alert("Logout Successfull")
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <AuthContext.Provider value={{ signup, login, currentUser, logout, mode, setMode }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}