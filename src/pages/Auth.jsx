import { useState } from "react"

function Auth() {
  const [mode, setMode] = useState("signup")

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="w-3/4 mx-auto min-h-screen flex justify-center items-center flex-col">
      <form onSubmit={handleSubmit} className='border md:w-1/2 border-gray-200 p-6 shadow-md rounded'>
        {
          mode === "signup" &&
          <div className="w-full">
            <label htmlFor="name" className='block mb-1'>Full Name</label>
            <input type="text" id='name' className='border border-gray-300 px-3 py-1 w-full rounded' />
          </div>
        }
        <div className="w-full">
          <label htmlFor="email" className='block mb-1'>Email</label>
          <input type="email" id='email' className='border border-gray-300 px-3 py-1 w-full rounded' />
        </div>
        <div className="w-full my-2">
          <label htmlFor="password" className='block mb-1'>Password</label>
          <input type="password" id='password' className='border border-gray-300 px-3 py-1 w-full rounded' />
        </div>
        {
          mode === "signup" ?
            <p className="text-sm mb-2">Already have an account? <button className="text-blue-500 underline cursor-pointer" onClick={() => setMode("login")}>Login</button></p> :
            <p className="text-sm mb-2">Don't have an account? <button className="text-blue-500 underline cursor-pointer" onClick={() => setMode("signup")}>Signup</button></p>
        }
        <button type="submit" className="bg-blue-600 px-3 py-1 rounded active:scale-95 hover:bg-blue-700 text-white cursor-pointer">{mode === "signup" ? "Sign Up" : "Login"}</button>
      </form>
    </div>
  )
}

export default Auth