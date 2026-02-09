import { useAuth } from "../context/AuthContext"
import { useForm } from "react-hook-form";

function Auth() {
  
  const { signup, login, mode, setMode } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const handleOnSubmit = (data) => {
    if(mode === "signup") {
      signup(data)
    } else {
      login(data)
    }
  }

  return (
    <div className="w-3/4 mx-auto min-h-screen flex justify-center items-center flex-col">
      <form onSubmit={handleSubmit(handleOnSubmit)} className='border md:w-1/2 border-gray-400 backdrop-blur-2xl p-6 shadow-2xl  rounded bg-white/10'>
      <h3 className="text-center font-bold text-3xl mb-4 text-gray-200 drop-shadow-lg">{mode === "signup" ? "Create Account" : "Welcome Back"}</h3>
        {
          mode === "signup" &&
          <div className="w-full flex flex-col gap-1">
            {/* <label htmlFor="fullname" className='block'>Full Name</label> */}
            <input
              {...register("fullname", { required: "Full Name is required", minLength: {value: 3, message: "Atleast 3 characters required"} })}
              type="text"
              placeholder="Enter your full name"
              id='fullname'
              name="fullname"
              className='border-b border-gray-400 px-2 py-1 w-full rounded outline-none  placeholder:text-sm'
            />
            {errors.fullname && <p className="text-red-600 text-sm" role="alert">{errors.fullname.message}</p>}
          </div>
        }
        <div className="w-full flex flex-col gap-1">
          {/* <label htmlFor="email" className='block'>Email</label> */}
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="Enter your email"
            id='email'
            name="email"
            className='border-b my-1 border-gray-400 px-2 py-1 w-full rounded outline-none  placeholder:text-sm'
          />
          {errors.email && <p className="text-red-600 text-sm" role="alert">{errors.email.message}</p>}
        </div>
        <div className="w-full flex flex-col gap-1">
          {/* <label htmlFor="password" className='block'>Password</label> */}
          <input
            {...register("password", { required: "password is required", minLength: {value: 3, message: "Must be 3 characters or long"} })}
            type="password"
            placeholder="Enter your password"
            id='password'
            name="password"
            className='border-b border-gray-400 px-2 py-1 w-full rounded outline-none  placeholder:text-sm'
          />
          {errors.password && <p className="text-red-600 text-sm" role="alert">{errors.password.message}</p>}
        </div>
        {
          mode === "signup" ?
            <p className="text-sm my-2">Already have an account? <button className="text-blue-500 underline cursor-pointer" type="button" onClick={() => setMode("login")}>Login</button></p> :
            <p className="text-sm my-2">Don't have an account? <button className="text-blue-500 underline cursor-pointer" type="button" onClick={() => setMode("signup")}>Signup</button></p>
        }
        <button type="submit" className="bg-blue-600 px-3 py-1 rounded active:scale-95 hover:bg-blue-700 text-white cursor-pointer">{mode === "signup" ? "Sign Up" : "Login"}</button>
      </form>
    </div>
  )
}

export default Auth