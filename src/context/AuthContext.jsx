import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

export default function AuthProvider({children}) {

  const [user, setUser] = useState({})

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}