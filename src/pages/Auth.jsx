import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [mode, setMode] = useState("signup")
  const { setUser } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const handleOnSubmit = (data) => {
    setUser(data)
    navigate('/')
  }

  return (
    <div className="w-3/4 mx-auto min-h-screen flex justify-center items-center flex-col">
      <form onSubmit={handleSubmit(handleOnSubmit)} className='border md:w-1/2 border-gray-200 p-6 shadow-md rounded'>
        {
          mode === "signup" &&
          <div className="w-full flex flex-col">
            <label htmlFor="fullname" className='block mb-1'>Full Name</label>
            <input
              {...register("fullname", { required: "Full Name is required", minLength: 3 })}
              type="text"
              id='fullname'
              name="fullname"
              className='border border-gray-300 px-2 py-1 w-full rounded outline-none focus:ring ring-blue-400'
            />
            {errors.fullname && <p className="text-red-600 text-sm" role="alert">Full Name is required</p>}
          </div>
        }
        <div className="w-full flex flex-col">
          <label htmlFor="email" className='block mb-1'>Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            id='email'
            name="email"
            className='border border-gray-300 px-2 py-1 w-full rounded outline-none ring-blue-400 focus:ring'
          />
          {errors.email && <p className="text-red-600 text-sm" role="alert">Email is required</p>}
        </div>
        <div className="w-full my-2 flex flex-col">
          <label htmlFor="password" className='block mb-1'>Password</label>
          <input
            {...register("password", { required: "password is required", minLength: 3 })}
            type="password"
            id='password'
            name="password"
            className='border border-gray-300 px-2 py-1 w-full rounded outline-none ring-blue-400 focus:ring'
          />
          {errors.password && <p className="text-red-600 text-sm" role="alert">password is required</p>}
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